import React from "react";
import useSWR from "swr";
import Head from "next/head";
import moment from "moment";
import { IconClock } from "@tabler/icons";
import { useRouter } from "next/router";

import axios from "@lib/axios";
import IThought from "@interfaces/IThought";
import generateTag from "@helper/generateTag";

const fetcher = async (url: string, thoughtId: string) => {
  const response = await axios.get(url, {
    params: {
      thoughtId,
    },
  });

  const data = response.data;

  if (data.success) return data.thought;
  return new Error(data.error);
};

const SingleThought: React.FC = () => {
  const router = useRouter();
  const {
    data,
    error,
    isLoading,
  }: { data: IThought; error: any; isLoading: boolean } = useSWR(
    ["/api/getThought", String(router.query.thoughtId)],
    ([url, body]) => fetcher(url, body)
  );

  return (
    <>
      <Head>
        <title>Thought</title>
      </Head>
      {data && (
        <article className="p-10 flex flex-col items-center">
          <section className="mb-3 flex flex-col">
            {/* tag */}
            <span className="self-center">{generateTag(data.tag)}</span>
            {/* name & created at */}
            <section className="flex">
              <span>By {data.ownerName}&nbsp;</span>
              <span className="flex">
                <IconClock /> {moment(data.createdAt).fromNow()}
              </span>
            </section>
          </section>
          {/* content */}
          <section className="max-w-3xl leading-7">
            <p>{data.content}</p>
          </section>
        </article>
      )}
    </>
  );
};

export default SingleThought;
