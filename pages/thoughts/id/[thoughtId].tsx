import React from "react";
import useSWR from "swr";
import Head from "next/head";
import moment from "moment";
import dynamic from "next/dynamic";
import { IconClock } from "@tabler/icons";
import { useRouter } from "next/router";

import axios from "@lib/axios";
import IThought from "@interfaces/IThought";
import generateTag from "@helper/generateTag";
import Loading from "@components/Loading";

const fetcher = async (url: string, thoughtId: string) => {
  const response = await axios.get(url, {
    params: {
      thoughtId,
    },
  });

  const data = response.data;

  if (data.success) return data.thought;
  throw new Error(data.error);
};

// asynchronously import 404 component
const Thoughts404 = dynamic(() => import("@components/Thoughts404"));

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
      {error ? (
        <Thoughts404 title="Unable to fetch thought." />
      ) : (
        data && (
          <article className="p-10 flex flex-col items-center">
            <section className="mb-3 flex flex-col">
              {/* tag */}
              <span className="self-center">{generateTag(data.tag)}</span>
              {/* name & created at */}
              <section className="flex">
                By
                <span className="font-bold">&nbsp;{data.ownerName}&nbsp;</span>
                <span className="flex italic">
                  <IconClock /> {moment(data.createdAt).fromNow()}
                </span>
              </section>
            </section>
            {/* content */}
            <section className="max-w-3xl leading-7">
              <p>{data.content}</p>
            </section>
            {isLoading && <Loading size={100} />}
          </article>
        )
      )}
    </>
  );
};

export default SingleThought;
