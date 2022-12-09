import React from "react";

interface LabelProps {
  children: React.ReactNode;
}

const Label: React.FC<LabelProps> = ({ children }) => {
  return (
    <label className="label">
      <span className="label-text">{children}</span>
    </label>
  );
};

export default Label;
