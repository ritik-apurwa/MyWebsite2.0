import ProgressStep from "./ProgressSteps/ProgressSteps";
import {
  CodeViewImg,
  ExpandingCardImg,
  ProgressStepsImg,
} from "@/constants/ServerImages";
import {
  CodeViewFile,
  ExpandingCardsFiles,
  ProgressStepsFile,
} from "./CodeString";
import { IComponent } from "../types";

import ExpandingCards from "./ExpandingCards/ExpandingCards";
import { CodeView } from "./CodeView/CodeView";

const AllMyComponents: IComponent[] = [
  {
    id: 1,
    projectImg: ExpandingCardImg,
    title: "Expanding-Cards",
    description: "Expanding cards project click and expand the card ",
    category: "HTML",
    file: ExpandingCardsFiles,
    component: <ExpandingCards />,
  },
  {
    id: 2,
    projectImg: ProgressStepsImg,
    title: "Progress-Steps",
    file: ProgressStepsFile,
    description:
      "In this project we will discuss about progress steps with will be increasing one by one with awesome animation ",
    category: "HTML",
    component: <ProgressStep />,
  },
  {
    id: 3,
    projectImg: CodeViewImg,
    title: "Code-View",
    file: CodeViewFile,
    description:
      "In this project we will discuss about progress steps with will be increasing one by one with awesome animation ",
    category: "HTML",
    component: <CodeView files={CodeViewFile} controls={true} />,
  },
];

export default AllMyComponents;
