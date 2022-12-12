import React from "react";
import { Badge, BadgeProps } from "react-daisyui";

interface TagProps extends BadgeProps {
  content: string;
  icon: React.ReactNode;
}

const Tag: React.FC<TagProps> = (props) => {
  return (
    <section>
      <Badge className="p-3" {...props}>
        {props.icon}&nbsp;{props.content}
      </Badge>
    </section>
  );
};

export default Tag;
