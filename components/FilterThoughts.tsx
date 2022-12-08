import React from "react";

import { Dropdown } from "react-daisyui";
import { IconFilter } from "@tabler/icons";

interface FilterThoughtsProps {
  onFilter: (value: string) => void;
}

const FilterThoughts: React.FC<FilterThoughtsProps> = ({ onFilter }) => {
  const dropDownItems = [
    {
      key: 0,
      content: "All",
    },
    {
      key: 1,
      content: "Life",
    },
    {
      key: 2,
      content: "Tech",
    },
    {
      key: 3,
      content: "Random",
    },
    {
      key: 4,
      content: "Rant",
    },
    {
      key: 5,
      content: "Truth",
    },
  ];

  return (
    <>
      <Dropdown horizontal="center" vertical="end">
        <Dropdown.Toggle color="ghost">
          <IconFilter />
        </Dropdown.Toggle>
        <Dropdown.Menu className="w-52">
          {dropDownItems.map((item) => (
            <Dropdown.Item
              key={item.key}
              onClick={() => onFilter(item.content)}
            >
              {item.content}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};

export default FilterThoughts;
