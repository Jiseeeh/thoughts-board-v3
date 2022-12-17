import Tag from "../components/Tag";
import ITags from "../interfaces/ITags";
import {
  IconTrees,
  IconRobot,
  IconBrain,
  IconSpeakerphone,
  IconScale,
} from "@tabler/icons";

export default function generateTag(tag: ITags) {
  switch (tag) {
    case ITags.LIFE:
      return <Tag icon={<IconTrees />} color="secondary" content={tag} />;
    case ITags.TECH:
      return <Tag icon={<IconRobot />} color="accent" content={tag} />;
    case ITags.RANDOM:
      return <Tag icon={<IconBrain />} color="info" content={tag} />;
    case ITags.RANT:
      return <Tag icon={<IconSpeakerphone />} color="error" content={tag} />;
    case ITags.TRUTH:
      return <Tag icon={<IconScale />} color="success" content={tag} />;
  }
}
