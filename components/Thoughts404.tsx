import React from "react";
import Image from "next/image";

interface Thoughts404Props {
  title: string;
}

const Thoughts404: React.FC<Thoughts404Props> = ({ title }) => {
  return (
    <section className="h-96 relative md:h-screen">
      <h1 className="pt-5 text-center font-bold text-2xl md:text-4xl">
        {title}
      </h1>
      <Image
        className="object-cover"
        src={"/404.svg"}
        alt="Illustration of a man Looking for something"
        fill
        draggable={false}
      />
    </section>
  );
};

export default Thoughts404;
