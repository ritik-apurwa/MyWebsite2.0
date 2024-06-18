import React, { useState, useEffect } from "react";
import DynamicBorderDiv from "./BorderCircel";

interface TimeProgressProps {
  duration: number;
}

const TimeProgress: React.FC<TimeProgressProps> = ({ duration }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = 100; // Update every 100ms
    const increment = 100 / (duration / interval);

    const timerId = setInterval(() => {
      setProgress((prev) => {
        if (prev + increment >= 100) {
          clearInterval(timerId);
          return 100;
        }
        return prev + increment;
      });
    }, interval);

    return () => {
      clearInterval(timerId);
    };
  }, [duration]);

  return (
    <section className="size-full">
      <DynamicBorderDiv
        circleColor="text-gray-300"
        circleRadius={45}
        strokeWidth={10}
        contentBg={"bg-gray-100"}
        progress={progress}
        progressColor="text-green-600"
        content={progress.toFixed(0)} // Ensure content is rounded to an integer string
      />
    </section>
  );
};

export default TimeProgress;

export const TimeProgressCodeSrting = `
import React, { useState, useEffect } from "react";
import DynamicBorderDiv from "./BorderCircel";

interface TimeProgressProps {
  duration: number;
}

const TimeProgress: React.FC<TimeProgressProps> = ({ duration }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = 100; // Update every 100ms
    const increment = 100 / (duration / interval);

    const timerId = setInterval(() => {
      setProgress(prev => {
        if (prev + increment >= 100) {
          clearInterval(timerId);
          return 100;
        }
        return prev + increment;
      });
    }, interval);

    return () => {
      clearInterval(timerId);
    };
  }, [duration]);

  return (
    <section className="size-full">
      <DynamicBorderDiv
        circleColor="text-gray-300"
        circleRadius={45}
        strokeWidth={10}
        contentBg={"bg-gray-100"}
        progress={progress}
        progressColor="text-green-600"
        content={progress.toFixed(0)} // Ensure content is rounded to an integer string
      />
    </section>
  );
};

export default TimeProgress;

`;
