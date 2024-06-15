import { FaPlay, FaPause, FaTextHeight } from "react-icons/fa";
import { MdOutlineRestartAlt, MdNumbers } from "react-icons/md";
import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { EyeIcon } from "lucide-react";
import { DropdownMenu } from "@radix-ui/react-dropdown-menu";
import { customSizes, gridColSizes } from "@/constants/data/Index";
import { Button } from "@/components/ui/button";
import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const StateChangeControls = () => {
  const [countdown, setCountdown] = useState<number>(121);
  const [isStarted, setIsStarted] = useState<boolean>(false);
  const [gridNumber, setGridNumber] = useState<number>(1);
  const [customHeight, setcustomHeight] = useState("");
  const [CustomeSize, setCustomSize] = useState("");
  const [dynamicCountdown, setDynamicCountdown] = useState<number>(121);

  const handleDynamicCountdownChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDynamicCountdown(parseInt(event.target.value));
  };

  const startCountdownWithDynamicValue = () => {
    setIsStarted(true);
    setCountdown(dynamicCountdown); // Set the countdown value from the dynamic input
  };
  const handleView = (value: string) => {
    setCustomSize(value);
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isStarted && countdown > 0) {
      interval = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isStarted, countdown]);

  useEffect(() => {
    const digits = countdown.toString().length;
    setGridNumber(Math.min(digits, 12));
  }, [countdown]);

  const startCountdown = () => {
    setIsStarted(true);
    setCountdown(countdown);
  };

  const stopCountdown = () => {
    setIsStarted(false);
  };

  const restartCountdown = () => {
    setCountdown(20);
  };

  const gridColsSize = gridColSizes[gridNumber - 1] || "grid-cols-12";
  return (
    <section className="flex flex-col">
      <div className="grid grid-cols-12 w-full items-center gap-x-4 border-black border-[1px] p-2">
        <div className="size-full col-span-5 items-center gap-x-2 flex-center">
          <div>
            {isStarted ? (
              <Button
                asChild
                variant="outline"
                size="default"
                onClick={startCountdown}
                className="flex-center gap-x-2 capitalize"
              >
                <FaPlay />
                <span>Pause</span>
              </Button>
            ) : (
              <div
                onClick={stopCountdown}
                className="flex-center gap-x-2 capitalize"
              >
                <FaPause />
                <span className="hidden md:flex">Start</span>
              </div>
            )}
          </div>
          <Button onClick={restartCountdown} variant="outline" size="default">
            <div className="flex-center gap-x-2 capitalize">
              <MdOutlineRestartAlt />
              <span className="hidden md:flex">Restart</span>
            </div>
          </Button>
        </div>

        <div className="grid grid-cols-3 px-4 w-full border gap-x-2 h-full col-span-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild className="w-full h-full flex-center">
              <Button variant="outline" size="default">
                <EyeIcon />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {customSizes.map((item) => (
                <DropdownMenuItem
                  key={item.id}
                  onClick={() => handleView(item.height && item.textSize)}
                >
                  {item.label}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <div className={`w-full h-auto ${gridColsSize} grid gap-4`}>
        {countdown
          .toString()
          .split("")
          .map((digit, index) => (
            <motion.div
              key={`${digit}`}
              className={`relative overflow-hidden w-full border-2 flex justify-center items-center border-black ${CustomeSize}`}
            >
              <AnimatePresence>
                <motion.span
                  key={digit}
                  initial={{ opacity: 0, y: -30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 30 }}
                  className={`absolute size-full flex-center ${customSizes[3].textSize}`}
                >
                  {digit}
                </motion.span>
              </AnimatePresence>
            </motion.div>
          ))}
      </div>
    </section>
  );
};

const StateChange: React.FC = () => {
  return (
    <section>
      <StateChangeControls />
    </section>
  );
};

export default StateChange;
