import React, { useEffect, useState } from "react";
import { MdOutlineRestartAlt } from "react-icons/md";
import { Button } from "../../../components/ui/button";

import { EyeIcon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../../components/ui/dropdown-menu";

import { FaPause, FaPlay } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import { Input } from "../../../components/ui/input";
import { gridColSizes } from "@/constants/data/Index";

const StateChange = () => {
  const [countdown, setCountdown] = useState<number>(23434340);
  const [isStarted, setIsStarted] = useState<boolean>(false);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [isFinished, setIsFinished] = useState<boolean>(false);
  const [customHeight, setCustomHeight] = useState<string>("");
  const [customTextSize, setCustomTextSize] = useState<string>("");
  const [customWidth, setcustomWidth] = useState<string>("");

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isStarted && !isPaused && countdown > 0) {
      interval = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
    } else if (countdown === 0) {
      setIsFinished(true);
      clearInterval(interval!);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isStarted, isPaused, countdown]);

  const startCountdown = () => {
    setIsStarted(true);
    setIsPaused(false);
    setIsFinished(false);
  };

  const pauseCountdown = () => {
    setIsPaused((prev) => !prev);
  };

  const resumeCountdown = () => {
    setIsPaused(false);
  };

  interface customsizes {
    id: number;
    label: string;
    height: string;
    textSize: string;
    width: string;
  }
  interface CustomSize {
    id: number;
    label: string;
    height: string;
    textSize: string;
    width: string;
  }

  const customSizes: CustomSize[] = [
    {
      id: 1,
      label: "small",
      height: "h-[110%]", // 10% of the parent container's height
      textSize: "text-[2vw]", // 2% of the viewport width
      width: "w-[8%]", // 8% of the parent container's width
    },
    {
      id: 2,
      label: "Medium",
      height: "h-[120%]",
      textSize: "text-[4vw]",
      width: "w-[12%]",
    },
    {
      id: 3,
      label: "Large",
      height: "h-[140%]",
      textSize: "text-[6vw]",
      width: "w-[16%]",
    },
    {
      id: 5,
      label: "Xl",
      height: "h-[150%]",
      textSize: "text-[8vw]",
      width: "w-[20%]",
    },
    {
      id: 6,
      label: "XXl",
      height: "h-[170%]",
      textSize: "text-[10vw]",
      width: "w-[24%]",
    },
    {
      id: 7,
      label: "3Xl",
      height: "h-[180%]",
      textSize: "text-[12vw]",
      width: "w-[28%]",
    },
    {
      id: 8,
      label: "4Xl",
      height: "h-[190%]",
      textSize: "text-[14vw]",
      width: "w-[32%]",
    },
  ];

  const handleView = (selectedLabel: string) => {
    const selectedItem = customSizes.find(
      (item) => item.label === selectedLabel
    );
    if (selectedItem) {
      setCustomHeight(selectedItem.height);
      setCustomTextSize(selectedItem.textSize);
      setcustomWidth(selectedItem.width);
    }
  };
  const handleCountdownChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = parseInt(event.target.value);
    if (!isNaN(value) && value >= 0) {
      setCountdown(value);
    }
  };

  const restartCountdown = () => {
    setIsStarted(false);
    setIsPaused(false);
    setIsFinished(false);
    setCountdown(100);
  };

  const valueCount = countdown.toString().length;
  const gridColsSize = gridColSizes[valueCount - 1] || "grid-cols-12";

  return (
    <section className="py-20 h-full flex flex-col w-full">
      <section className="grid grid-cols-12 py-4 w-full items-center gap-x-4 border-black border-[1px] p-2">
        <div className="col-span-4  h-full py-2 items-center flex-center gap-x-2">
          {!isStarted || isPaused ? (
            <Button
              variant="outline"
              size="default"
              onClick={startCountdown}
              className="flex-center gap-x-2 capitalize"
            >
              <FaPlay />
              <span className="hidden lg:flex">Start</span>
            </Button>
          ) : (
            <Button
              variant="outline"
              size="default"
              onClick={pauseCountdown}
              className="flex-center gap-x-2 capitalize"
            >
              <FaPause />
              <span className="hidden lg:flex">Pause</span>
            </Button>
          )}

          <Button onClick={restartCountdown} variant="outline" size="default">
            <div className="flex-center gap-x-2 capitalize">
              <MdOutlineRestartAlt />
              <span className="hidden md:flex">Restart</span>
            </div>
          </Button>
        </div>

        <div className="col-span-4 flex-center size-full">
          {/* // make this input which automatically takes number for countdown */}
          <Input
            className=""
            type="number"
            placeholder="Enter number"
            value={countdown.toString()}
            onChange={handleCountdownChange}
          />
        </div>
        <div className="col-span-4 size-full flex-center">
          <DropdownMenu>
            <DropdownMenuTrigger asChild className=" flex-center">
              <Button asChild variant="outline" size="icon">
                <EyeIcon size={8} />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {customSizes.map((item) => (
                <DropdownMenuItem
                  key={item.id}
                  onClick={() => handleView(item.label)}
                >
                  {item.label}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </section>
      <section className={` h-auto ${gridColsSize}   grid gap-4 mt-4`}>
        {countdown
          .toString()
          .split("")
          .map((digit, index) => (
            <motion.div
              key={`${digit}-${index}`}
              className={`relative overflow-hidden w-full flex-center  min-h-8 ${customHeight}`}
            >
              <AnimatePresence>
                <motion.span
                  key={digit}
                  initial={{ opacity: 0, y: -60 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 60 }}
                  transition={{ duration: 0.4 }}
                  className={`absolute size-full  ${customTextSize} ${customHeight} ${customWidth} text-sm flex-center `}
                >
                  {digit}
                </motion.span>
              </AnimatePresence>
            </motion.div>
          ))}
      </section>
    </section>
  );
};

export default StateChange;
