import React from "react";
import useSWR from "swr";
import Head from "next/head";
import moment from "moment";
import dynamic from "next/dynamic";
import { IconClock } from "@tabler/icons";
import { useRouter } from "next/router";

import IThought from "@interfaces/IThought";
import generateTag from "@helper/generateTag";
import Loading from "@components/Loading";
import fetcher from "@helper/fetcher";

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
    ([url, thoughtId]) => fetcher(url, thoughtId)
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
                <time className="flex italic" dateTime={data.createdAt}>
                  <IconClock /> {moment(data.createdAt).fromNow()}
                </time>
              </section>
            </section>
            {/* content */}
            <section className="max-w-3xl text-justify leading-7">
              <p>{data.content}</p>
            </section>
          </article>
        )
      )}
      {isLoading && <Loading size={100} />}
    </>
  );
};

export default SingleThought;
