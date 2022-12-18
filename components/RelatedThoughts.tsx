import React, { useState, useEffect } from "react";
import useSWR from "swr";
import moment from "moment";

import fetcher from "@helper/fetcher";
import Thought from "./Thought";
import IThought from "@interfaces/IThought";
import Tags from "@interfaces/ITags";

interface RelatedThoughtsProps {
  excludedThoughtId: string;
  relatedThoughtsToTake: number;
  thoughtTag: Tags;
}

const RelatedThoughts: React.FC<RelatedThoughtsProps> = ({
  excludedThoughtId,
  relatedThoughtsToTake,
  thoughtTag,
}) => {
  const [relatedThoughts, setRelatedThoughts] = useState<JSX.Element[]>();
  const { data, error }: { data: IThought[]; error: any } = useSWR(
    ["/api/getRelatedThoughts", excludedThoughtId],
    ([url, excludedThoughtId]) => fetcher(url, excludedThoughtId)
  );

  // TODO: extract to a custom hook
  useEffect(() => {
    if (data) {
      setRelatedThoughts(
        data
          .filter((thought) => thought.tag === thoughtTag)
          .slice(0, relatedThoughtsToTake)
          .map((thought) => (
            <Thought
              key={thought.id}
              id={thought.id}
              createdAt={moment(thought.createdAt).fromNow()}
              views={thought.views}
              ownerName={thought.ownerName}
              tag={thought.tag}
              content={thought.content}
            />
          ))
      );
    }
  }, [data]);

  return (
    <>
      {relatedThoughts?.length === 0 ? (
        <h1 className="relatedThoughtsHeading">No related thoughts to show.</h1>
      ) : (
        <>
          <h1 className="relatedThoughtsHeading">Related Thoughts</h1>
          <section className="grid grid-cols-1 md:grid-cols-2">
            {relatedThoughts}
          </section>
        </>
      )}
    </>
  );
};

export default RelatedThoughts;
