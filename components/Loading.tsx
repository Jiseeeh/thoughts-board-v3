import React from "react";
import { HashLoader } from "react-spinners";

interface LoadingProps {
  size: number;
}

const Loading: React.FC<LoadingProps> = ({ size }) => {
  return (
    <section className="mb-3 flex justify-center">
      <HashLoader color="#36d7b7" size={size} />
    </section>
  );
};

export default Loading;
