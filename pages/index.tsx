import Head from "next/head";
import dynamic from "next/dynamic";
import useSWR from "swr";
import moment from "moment";
import { useState, useEffect } from "react";
import { Button } from "react-daisyui";
import { useRouter } from "next/router";

import FilterThoughts from "@components/FilterThoughts";
import Thought from "@components/Thought";
import Loading from "@components/Loading";
import IThought from "@interfaces/IThought";
import axios from "@lib/axios";

const fetcher = async (url: string) => {
  const response = await axios.get(url);
  const data = response.data;

  if (data.success) return data.thoughts;

  throw new Error(data.message);
};

const Thoughts404 = dynamic(() => import("@components/Thoughts404"));
const Filter404 = dynamic(() => import("@components/Filter404"));

export default function Home() {
  const [filterValue, setFilterValue] = useState("All");
  const [thoughts, setThoughts] = useState<JSX.Element[]>([]);
  const { data, error, isLoading } = useSWR("/api/getThoughts", fetcher, {
    refreshInterval: 1000,
  });

  const router = useRouter();

  const handleOnSubmitThought = () => {
    router.push("/submit");
  };

  const handleOnFilter = (value: string) => {
    if (filterValue === value) return;

    setFilterValue(value);
  };

  useEffect(() => {
    if (data) {
      setThoughts(
        data
          .filter((thought: IThought) => {
            if (filterValue === "All") return true;

            if (filterValue === thought.tag) return true;
            return false;
          })
          .map((thought: IThought) => (
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
  }, [data, filterValue]);

  return (
    <>
      <section>
        <Head>
          <title>Thoughts Board</title>
          <link rel="icon" href="/brain.ico" />
          <meta name="title" content="Thoughts Board" />
          <meta
            name="description"
            content="Web app where you can free your mind by posting anything you want."
          />
          <meta
            name="keywords"
            content="Thoughts Board, Confess Board, Post Anonymous, Anonymous Confess"
          />
          <meta name="robots" content="index, follow" />
          <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
          <meta name="language" content="English" />
          <meta name="author" content="Jiseeeh" />
        </Head>
        <section className="flex justify-end mr-3">
          <Button
            color="secondary"
            className="btn-md"
            onClick={handleOnSubmitThought}
          >
            Submit a Thought
          </Button>
          <FilterThoughts onFilter={handleOnFilter} />
        </section>
        {error ? (
          <Thoughts404 title="Couldn't find thoughts" />
        ) : data && thoughts.length === 0 ? (
          <Filter404 />
        ) : (
          <section className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {thoughts}
          </section>
        )}
        {isLoading && <Loading size={70} />}
      </section>
    </>
  );
}
