import { CodeStringInterface } from "@/app/types";
import { CodeViewCodeString } from "../CodeView/CodeView";
import { CopyButtonCodeString } from "../CodeView/CopyButton";
import { FileDropDownCodeString } from "../CodeView/FileDropDown";
import { ExpandingCardsCodeString } from "../ExpandingCards/ExpandingCards";
import { DynamicBorderDivCodeString } from "../ProgressSteps/BorderCircel";
import { ProgressStepCodeString } from "../ProgressSteps/ProgressSteps";
import { TimeProgressCodeSrting } from "../ProgressSteps/TimeProgess";


export const App: CodeStringInterface[] = [
  {
    filename: "App.tsx",
    code: `import {
  AnimationS,
  AnimationT,
  AnimationX,
  AnimationY,
} from "@/components/gsap/AnimationBasic";
import React from "react";
import CodeView from "../Projects/CodeView/CodeView";

const page = () => {
  return (
    <div className="flex flex-col gap-y-2">
      <CodeView2 code={codeStringt} language="javascript" />
      <div id="normal_div">
        hlo Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore
        ipsum dolor sit minima
      </div>
    </div> ritik 
  );
};`,
    language: "typescript",
  },
  {
    filename: "app.css",
    code: `
    background-color:"red";
`,
    language: "css",
  },
  // Add more files as needed
];
export const CodeView2Code: CodeStringInterface[] = [
  {
    filename: "App.tsx",
    code: `   return (
    <div className="size-full w-20 rounded-md flex-center border">
      {copied ? (
        <button
          disabled={copied}
          className="flexr-center text-xs bg-gray-300 disabled:cursor-not-allowed  font-semibold p-2  gap-x-1"
        >
          <span>
            <Check size={14} />
          </span>
          <span>Copied </span>
        </button>
      ) : (
        <button
          onClick={handleCopy}
          className="flexr-center rounded-md text-xs hover:ring-1 hover:ring-indigo-600 add-effect font-semibold p-2 gap-x-1"
        >
          <span>
            <LucideCopy size={14} />
          </span>
          <span>Copy</span>
        </button>
      )}
    </div>
  );
};
    `,
    language: "typescript",
  },
  {
    filename: "app.css",
    code: `  i am css file `,
    language: "typescript",
  },
  // Add more files as needed
];

export const NormalText: CodeStringInterface[] = [
  {
    filename: "dfd",
    code: `
    <div className="flex flex-col gap-y-2">
      <CodeView2 code={codeStringt} language="javascript" />
      <div id="normal_div">
        hlo Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore
        ipsum dolor sit minima
      </div>
    </div>
    `,
    language: "typescript",
  },
];
export const ExpandingCardsFiles: CodeStringInterface[] = [
  {
    filename: "ExapndingCard.tsx",
    code: ExpandingCardsCodeString,
    language: "typescript",
  },
];
export const ProgressStepsFile: CodeStringInterface[] = [
  {
    filename: "ProgessSetup.tsx",
    code: ProgressStepCodeString,
    language: "typescript",
  },
  {
    filename: "BorderCircel.tsx",
    code: DynamicBorderDivCodeString,
    language: "typescript",
  },
  {
    filename: "TimeProgess.tsx",
    code: TimeProgressCodeSrting,
    language: "typescript",
  },
];
export const CodeViewFile: CodeStringInterface[] = [
  {
    filename: "CodeView.tsx",
    code: CodeViewCodeString,
    language: "typescript",
  },
  {
    filename: "CopyButton.tsx",
    code: CopyButtonCodeString,
    language: "typescript",
  },
  {
    filename: "FileDropdown.tsx",
    code: FileDropDownCodeString,
    language: "typescript",
  },
];
