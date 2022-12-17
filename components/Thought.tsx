import React from "react";
import { IconEye } from "@tabler/icons";
import { useRouter } from "next/router";

import IThought from "../interfaces/IThought";
import generateTag from "../helper/generateTag";
import axios from "../lib/axios";

const Thought: React.FC<IThought> = ({
  id,
  createdAt,
  views,
  ownerName,
  tag,
  content,
}) => {
  const router = useRouter();

  const handleOnThoughtClick = async () => {
    router.push(`/thoughts/id/${id}`);

    // increment thought views
    await axios.patch(`/api/${id}`);
  };

  return (
    <article className="p-3 m-3 flex flex-col bg-primary rounded max-w-sm">
      <section className="flex ">
        <span className="italic">{createdAt}</span>
        <span className="ml-auto font-bold">{ownerName}</span>
      </section>
      <section className="cursor-pointer" onClick={handleOnThoughtClick}>
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
