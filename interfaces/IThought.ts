import Tags from "./ITags";

export default interface IThought {
  id?: string;
  createdAt?: string;
  views: 0 | number;
  ownerName: "Anonymous" | string;
  tag: Tags;
  content: string;
}
