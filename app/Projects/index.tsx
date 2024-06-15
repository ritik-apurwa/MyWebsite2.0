import { IComponent } from "@/constants";
import CodeView, { CodeViewString } from "./CodeView/CodeView";

import ExpandingCards, {
  ExpandingCardsCodeString,
} from "./ExpandingCards/ExpandingCards";
import ProgressStep from "./ProgressSteps/ProgressSteps";
import {
  CodeViewImg,
  ExpandingCardImg,
  ProgressStepsImg,
} from "@/constants/ServerImages";

const AllMyComponents: IComponent[] = [
  {
    id: 1,
    projectImg: ExpandingCardImg,
    title: "Expanding-Cards",
    description: "Expanding cards project click and expand the card ",
    category: "HTML",
    component: <ExpandingCards />,
    code: ExpandingCardsCodeString,
  },
  {
    id: 2,
    projectImg: ProgressStepsImg,
    title: "Progress-Steps",
    description:
      "In this project we will discuss about progress steps with will be increasing one by one with awesome animation ",
    category: "HTML",
    component: <ProgressStep />,
    code: CodeViewString,
  },
  {
    id: 3,
    projectImg: CodeViewImg,
    title: "Code-View",
    description:
      "In this project we will discuss about progress steps with will be increasing one by one with awesome animation ",
    category: "HTML",
    component: <CodeView code=" see the code " language="javascript" />,
    code: CodeViewString,
  },
];

export default AllMyComponents;
