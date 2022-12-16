import React from "react";
import useSWR from "swr";
import { useRouter } from "next/router";
import axios from "../../../lib/axios";

const fetcher = async (url: string) => {
  const response = await axios.get(url);
  const data = response.data;

  if (data.success) return data.thought;
  return new Error(data.error);
};

const SingleThought: React.FC = (props) => {
  const router = useRouter();
  const { data, error, isLoading } = useSWR(
    `/api/getThought/${router.query.thoughtId}`,
    fetcher
  );

  console.log(data);
  return <section>HEY</section>;
};

export default SingleThought;
