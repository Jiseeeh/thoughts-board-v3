import Tag from "../components/Tag";
import Tags from "../interfaces/Tags";
import {
  IconTrees,
  IconRobot,
  IconBrain,
  IconSpeakerphone,
  IconScale,
} from "@tabler/icons";

export default function generateTag(tag: Tags) {
  switch (tag) {
    case Tags.LIFE:
      return <Tag icon={<IconTrees />} color="secondary" content={tag} />;
    case Tags.TECH:
      return <Tag icon={<IconRobot />} color="accent" content={tag} />;
    case Tags.RANDOM:
      return <Tag icon={<IconBrain />} color="info" content={tag} />;
    case Tags.RANT:
      return <Tag icon={<IconSpeakerphone />} color="error" content={tag} />;
    case Tags.TRUTH:
      return <Tag icon={<IconScale />} color="success" content={tag} />;
  }
}
