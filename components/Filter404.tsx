import React from "react";
import Image from "next/image";

const Filter404: React.FC = () => {
  return (
    <section className="relative h-96 md:h-screen">
      <h1 className="pt-5 text-center font-bold text-xl md:text-4xl">
        There&apos;s always more to see.
      </h1>
      <Image
        src="/filter404.svg"
        alt="Illustration of a woman looking for something with a telescope while riding a bird."
        fill
      />
    </section>
  );
};

export default Filter404;
