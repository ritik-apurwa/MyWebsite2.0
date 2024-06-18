import {
  AnimationS,
  AnimationT,
  AnimationX,
  AnimationY,
} from "@/components/gsap/AnimationBasic";
import React from "react";
import CodeView from "../Projects/CodeView/CodeView";
import CodeView2 from "../Projects/CodeView/CodeView2";

const page = () => {
  return (
    <div className="flex flex-col gap-y-2">
      <CodeView2 code={codeStringt} fileName="App.tsx" language="typescript" />
      <div id="normal_div">
        hlo Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore
        ipsum dolor sit minima
      </div>
    </div>
  );
};

export default page;

const codeStringt = ` 
import {
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
};
`;
