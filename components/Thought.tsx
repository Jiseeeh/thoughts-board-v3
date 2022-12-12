import React from "react";
import {
  IconEye,
  IconTrees,
  IconRobot,
  IconBrain,
  IconSpeakerphone,
  IconScale,
} from "@tabler/icons";

import Thought from "../interfaces/Thought";
import Tags from "../interfaces/Tags";
import Tag from "./Tag";

const generateTag = (tag: Tags) => {
  switch (tag) {
    case Tags.LIFE:
      return <Tag icon={<IconTrees />} color="secondary" content={tag} />;
    case Tags.TECH:
      return <Tag icon={<IconRobot />} color="accent" content={tag} />;
    case Tags.RANDOM:
      return <Tag icon={<IconBrain />} color="info" content={tag} />;
    case Tags.RANT:
      return <Tag icon={<IconSpeakerphone />} color="error" content={tag} />;
    case Tags.TRUTH:
      return <Tag icon={<IconScale />} color="success" content={tag} />;
  }
};

const Thought: React.FC<Thought> = ({
  id,
  createdAt,
  views,
  ownerName,
  tag,
  content,
}) => {
  return (
    <article className="p-3 m-3 flex flex-col bg-primary rounded max-w-sm">
      <section className="flex ">
        <span className="italic">{createdAt}</span>
        <span className="ml-auto font-bold">{ownerName}</span>
      </section>
      <section>
        <p className="line-clamp-5">{content}</p>
      </section>
      <section className="mt-auto flex">
        {generateTag(tag)}
        <section className="ml-auto flex">
          <IconEye />
          <span>{views}</span>
        </section>
      </section>
    </article>
  );
};

export default Thought;
