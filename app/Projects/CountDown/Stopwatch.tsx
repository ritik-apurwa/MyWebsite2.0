import { FaPlus, FaPlay, FaPause, FaStopwatch } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";
import { AnimatePresence , motion  } from "framer-motion";
import { Input } from "../../../components/ui/input";

export const NotificationOnStopWatch: React.FC = () => {
    const [time, setTime] = useState<number>(10);
    const [countdown, setCountdown] = useState<number>(10);
    const [isStarted, setIsStarted] = useState<boolean>(false);
    const [notification, setNotification] = useState<string>(
      "Set the desired time and start the countdown"
    );
    const [lapTimes, setLapTimes] = useState<number[]>([]);
    const intervalRef = useRef<number | null>(null);
    const startTimeRef = useRef<number | null>(null);
  
    const handleStart = () => {
      setIsStarted(true);
      startTimeRef.current = Date.now();
      intervalRef.current = window.setInterval(() => {
        setCountdown((prevCountdown) => {
          const elapsed = Math.floor((Date.now() - startTimeRef.current!) / 1000);
          const newCountdown = Math.max(time - elapsed, 0);
          if (newCountdown === 0) {
            clearInterval(intervalRef.current!);
            setNotification("Time's up!");
            setIsStarted(false);
          }
          return newCountdown;
        });
      }, 1000); // Update every second
    };
  
    const handleRestart = () => {
      clearInterval(intervalRef.current!);
      setCountdown(time);
      setIsStarted(false);
      setLapTimes([]);
      setNotification('Set the desired time and start the countdown');
    };
  
    const handleStop = () => {
      setIsStarted(false);
      clearInterval(intervalRef.current!);
    };
  
    const handleLapTime = () => {
      if (isStarted) {
        const elapsed = Date.now() - startTimeRef.current!;
        setLapTimes((prevLapTimes) => [...prevLapTimes, elapsed]);
      }
    };
  
    useEffect(() => {
      setCountdown(time);
    }, [time]);
  
    useEffect(() => {
      return () => clearInterval(intervalRef.current!); // Cleanup on unmount
    }, []);
    return (
      <section className="flex flex-col items-center justify-center space-y-8">
        <h2 className="text-2xl font-bold flex items-center justify-center gap-2">
          <FaStopwatch />
          Stop Watch
        </h2>
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="relative overflow-hidden h-20 w-full font-bold text-4xl text-center">
           
          </div>
          <div className="w-full grid grid-cols-4 gap-4">
            <Input
              type="number"
              min="1"
              max="3600"
              value={time}
              onChange={(e) =>
                setTime(e.target.value === "" ? 0 : parseInt(e.target.value))
              }
              className="bg-gray-200 appearance-none border-2 h-full  border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            />
  
            {isStarted ? (
              <button
                className="flexr-center gap-x-2 p-4  bg-red-500"
                onClick={handleStop}
                disabled={!isStarted}
              >
                <FaPause /> Stop
              </button>
            ) : (
              <button
                className="flexr-center gap-x-2 p-4  bg-green-400"
                onClick={handleStart}
                disabled={isStarted}
              >
                <FaPlay /> Start
              </button>
            )}
  
            <button
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
              onClick={handleRestart}
            >
              Restart
            </button>
          </div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center"
            onClick={handleLapTime}
            disabled={!isStarted}
          >
            <FaPlus className="mr-2" />
            Add Lap
          </button>
          <div className="">
            <p className="text-lg font-bold">{notification}</p>
            <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 lg:grid-cols-6 xl:grid-cols-10">
            <AnimatePresence initial={false}>
              {lapTimes.map((lapTime, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-gray-200 rounded-md p-2 flex items-center justify-between"
                >
                 <div className="flexr-center gap-x-2  ">
                 <span className="text-green-600">Lap {index + 1}</span>
                  <span className="font-bold">
                    {(lapTime / 1000).toFixed(2).toLocaleString()}s
                  </span>
                 </div>
                </motion.div>
              ))}
            </AnimatePresence>
            </div>
          </div>
        </div>
      </section>
    );
  };