import React from "react";
import Head from "next/head";
import { Input, Select, Textarea, Button } from "react-daisyui";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import Label from "../../components/Label";
import Thought from "../../interfaces/Thought";

const schema = z.object({
  ownerName: z
    .string()
    .min(1, { message: "Name must be at least 1 character" })
    .max(12, { message: "Name must not be greater than 12 characters" })
    .default("Anonymous"),
  content: z
    .string()
    .min(20, { message: "Content must have at least 20 character" }),
});

const SubmitThought: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Thought>({ resolver: zodResolver(schema) });

  const onSubmit: SubmitHandler<Thought> = (data) => console.log(data);

  return (
    <form
      className="flex flex-col gap-3 mx-3 mb-3 md:mx-40"
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
      <select className="select w-full max-w-xs" {...register("tag")}>
        <option disabled>Select Tag</option>
        <option value={"Life"}>Life</option>
        <option value={"Tech"}>Tech</option>
        <option value={"Random"}>Random</option>
        <option value={"Rant"}>Rant</option>
        <option value={"Truth"}>Truth</option>
      </select>
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
      {errors.ownerName && (
        <span className="text-warning">{errors.ownerName.message}</span>
      )}
      <Label>Content</Label>
      <Textarea
        className="max-w-2xl"
        rows={5}
        title="Thought content"
        placeholder="Thought content"
        {...register("content", { required: true })}
      />
      {errors.content && (
        <span className="text-warning">{errors.content.message}</span>
      )}
      <Button className="max-w-xs" color="primary">
        Submit
      </Button>
    </form>
  );
};

export default SubmitThought;
