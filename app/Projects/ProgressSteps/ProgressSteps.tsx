import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

import DynamicBorderDiv from "./BorderCircel";
import { PSVarients, contentData } from "@/constants/data/Index";

const ProgressStep = () => {
  const [currentActive, setCurrentActive] = useState<number>(1);
  const [currentContentIndex, setCurrentContentIndex] = useState<number>(0); // State to track current content index
  const circles = [1, 2, 3, 4, 5];
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    setProgress((currentActive / circles.length) * 100);
    setCurrentContentIndex(currentActive - 1); // Update current content index based on current active step
  }, [currentActive, circles.length]);

  const next = () => {
    setCurrentActive((prev) => (prev < circles.length ? prev + 1 : prev));
  };

  const prev = () => {
    setCurrentActive((prev) => (prev > 1 ? prev - 1 : prev));
  };

  const isFirstIndex = currentActive === 1;
  const isLastIndex = currentActive === circles.length;

  const fir = isFirstIndex ? true : false;
  const las = isLastIndex ? true : false;

  return (
    <section className="flexc-center py-10 px-2">
      <div className="px-10 w-full border-2 ">
        <div className="relative flex-center w-full h-20 ">
          <div className="absolute w-full h-0.5  bg-gray-300 rounded-full top-1/2 transform -translate-y-1/2">
            <motion.div
              initial={{ width: 0 }}
              animate={{
                width: `${((currentActive - 1) / (circles.length - 1)) * 100}%`,
              }}
              transition={{ duration: 0.5 }}
              className="h-1 bg-blue-500 rounded-full"
            />
          </div>
          <div
            id="check_circles"
            className="relative z-10  flex justify-between w-full"
          >
            {circles.map((circle, index) => (
              <div key={circle} className="size-10">
                <DynamicBorderDiv
                  circleColor="text-gray-300"
                  circleRadius={45}
                  strokeWidth={10}
                  contentBg={index < currentActive ? "bg-blue-300" : "bg-white"}
                  progress={index < currentActive ? 100 : 0}
                  progressColor="text-green-600"
                  content={circle}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={contentData[currentContentIndex].heading}
          variants={PSVarients}
          initial="initial"
          animate="animate"
          exit="exit"
          className="px-10 prose prose-headings:my-5 prose-lg py-10"
        >
          <h1>{contentData[currentContentIndex].heading}</h1>
          <h2>{contentData[currentContentIndex].subheading}</h2>
          <p className="text-lg text-gray-700 mb-6">
            {contentData[currentContentIndex].para}
          </p>
          <div className="flex justify-center">
            <Image
              src={contentData[currentContentIndex].photo}
              height={400}
              width={500}
              alt="Step"
              className="rounded-lg shadow-lg"
            />
          </div>
        </motion.div>
      </AnimatePresence>
      <div className="flex justify-center gap-4 mt-4">
        <button onClick={prev} id="PSPrevBtn" disabled={fir}>
          <FaArrowLeft />
        </button>
        <button onClick={next} id="PSNextBtn" disabled={las}>
          <FaArrowRight />
        </button>
      </div>
    </section>
  );
};

export default ProgressStep;

export const ProgressStepCodeString = ` 

import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import DynamicBorderDiv from "./BorderCircle";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { PSVarients, contentData } from "@/constants";

const ProgressStep = () => {
  const [currentActive, setCurrentActive] = useState<number>(1);
  const [currentContentIndex, setCurrentContentIndex] = useState<number>(0); // State to track current content index
  const circles = [1, 2, 3, 4, 5];
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    setProgress((currentActive / circles.length) * 100);
    setCurrentContentIndex(currentActive - 1); // Update current content index based on current active step
  }, [currentActive, circles.length]);

  const next = () => {
    setCurrentActive((prev) => (prev < circles.length ? prev + 1 : prev));
  };

  const prev = () => {
    setCurrentActive((prev) => (prev > 1 ? prev - 1 : prev));
  };

  const isFirstIndex = currentActive === 1;
  const isLastIndex = currentActive === circles.length;

  const fir = isFirstIndex ? true : false;
  const las = isLastIndex ? true : false;

  return (
    <section className="flexc-center py-10 px-2">
      <div className="px-10 w-full border-2 ">
        <div className="relative flex-center w-full h-20 ">
          <div className="absolute w-full h-0.5  bg-gray-300 rounded-full top-1/2 transform -translate-y-1/2">
            <motion.div
              initial={{ width: 0 }}
              animate={{
                width: \`\${((currentActive - 1) / (circles.length - 1)) * 100}%\`,
              }}
              transition={{ duration: 0.5 }}
              className="h-1 bg-blue-500 rounded-full"
            />
          </div>
          <div
            id="check_circles"
            className="relative z-10  flex justify-between w-full"
          >
            {circles.map((circle, index) => (
              <div key={circle} className="size-10">
                <DynamicBorderDiv
                  circleColor="text-gray-300"
                  circleRadius={45}
                  strokeWidth={10}
                  contentBg={index < currentActive ? "bg-blue-300" : "bg-white"}
                  progress={index < currentActive ? 100 : 0}
                  progressColor="text-green-600"
                  content={circle}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={contentData[currentContentIndex].heading}
          variants={PSVarients}
          initial="initial"
          animate="animate"
          exit="exit"
          className="px-10 prose prose-headings:my-5 prose-lg py-10"
        >
          <h1>{contentData[currentContentIndex].heading}</h1>
          <h2>{contentData[currentContentIndex].subheading}</h2>
          <p className="text-lg text-gray-700 mb-6">
            {contentData[currentContentIndex].para}
          </p>
          <div className="flex justify-center">
            <Image
              src={contentData[currentContentIndex].photo}
              height={400}
              width={500}
              alt="Step"
              className="rounded-lg shadow-lg"
            />
          </div>
        </motion.div>
      </AnimatePresence>
      <div className="flex justify-center gap-4 mt-4">
        <button onClick={prev} id="PSPrevBtn" disabled={fir}>
          <FaArrowLeft />
        </button>
        <button onClick={next} id="PSNextBtn" disabled={las}>
          <FaArrowRight />
        </button>
      </div>
    </section>
  );
};

export default ProgressStep;



`;
