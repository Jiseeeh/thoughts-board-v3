import Tags from "./Tags";

export default interface Thought {
  id?: string;
  createdAt?: string;
  views: 0 | number;
  ownerName: "Anonymous" | string;
  tag: Tags;
  content: string;
}
