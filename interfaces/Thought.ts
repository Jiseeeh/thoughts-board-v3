enum Tags {
  LIFE = "Life",
  TECH = "Tech",
  RANDOM = "Random",
  RANT = "Rant",
  TRUTH = "Truth",
}

export default interface Thought {
  id?: string;
  createdAt?: string;
  views: 0 | number;
  ownerName: "Anonymous" | string;
  tag: Tags;
  content: string;
}
