import React from "react";
import useSWR from "swr";
import Head from "next/head";
import { useRouter } from "next/router";

import axios from "@lib/axios";

const fetcher = async (url: string, body: string) => {
  const response = await axios.get(url, {
    data: body,
  });
  const data = response.data;

  if (data.success) return data.thought;
  return new Error(data.error);
};

const SingleThought: React.FC = (props) => {
  const router = useRouter();
  const { data, error, isLoading } = useSWR(
    ["/api/getThought", String(router.query.thoughtId)],
    ([url, body]) => fetcher(url, body)
  );

  console.log(data);
  return (
    <>
      <Head>
        <title>Thought</title>
      </Head>
      <section>HEY</section>
    </>
  );
};

export default SingleThought;
