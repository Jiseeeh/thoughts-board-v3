import React from "react";
import Head from "next/head";
import { Input, Select, Textarea, Button } from "react-daisyui";
import { useForm, SubmitHandler } from "react-hook-form";

import Label from "../../components/Label";
import Thought from "../../interfaces/Thought";

const SubmitThought: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Thought>();

  const onSubmit: SubmitHandler<Thought> = (data) => console.log(data);

  return (
    <form
      className="flex flex-col gap-3 mx-3 md:mx-40"
      aria-label="Thought form"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Head>
        <title>Submit a Thought</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="font-bold text-xl md:text-4xl">Submit a Thought</h1>
      <Label>Tag</Label>
      <Select
        className="max-w-xs"
        aria-label="Thought tag"
        {...register("tag")}
      >
        <Select.Option value={"default"} disabled>
          Select Tag
        </Select.Option>
        <Select.Option value={"Life"}>Life</Select.Option>
        <Select.Option value={"Tech"}>Tech</Select.Option>
        <Select.Option value={"Random"}>Random</Select.Option>
        <Select.Option value={"Rant"}>Rant</Select.Option>
        <Select.Option value={"Truth"}>Truth</Select.Option>
      </Select>
      <Label>
        Name <span className="font-bold">(Optional)</span>
      </Label>
      <Input
        className="max-w-xs"
        type="text"
        title="Sender name"
        placeholder="Anonymous"
        autoComplete="off"
        autoCorrect="off"
        aria-label="Thought sender name"
        defaultValue="Anonymous"
        {...register("ownerName")}
      />
      <Label>Content</Label>
      <Textarea
        className="max-w-2xl"
        rows={5}
        title="Thought content"
        placeholder="Thought content"
        {...register("content", { required: true })}
      />
      {errors.content && (
        <span className="text-warning">Content is required!</span>
      )}
      <Button className="max-w-xs" color="primary">
        Submit
      </Button>
      {/* Related Thoughts */}
      <section>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio minima
          officia, esse ut aspernatur voluptatem suscipit architecto commodi at.
          Necessitatibus nulla eveniet distinctio nam dignissimos blanditiis,
          incidunt molestias laboriosam. Unde voluptates nulla esse nam,
          repellendus beatae cupiditate ab recusandae. Laboriosam beatae,
          blanditiis facere porro expedita illum? Laboriosam iure cum in.
        </p>
      </section>
    </form>
  );
};

export default SubmitThought;
