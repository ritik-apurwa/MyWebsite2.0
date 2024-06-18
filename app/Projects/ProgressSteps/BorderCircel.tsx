import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";

interface DynamicBorderDivProps {
  progress: number;
  circleRadius: number;
  strokeWidth: number;
  circleColor: string;
  progressColor: string;
  showText?: boolean;
  content?: React.ReactNode;
  contentBg?: string;
  active?: boolean;
}

export default function DynamicBorderDiv({
  progress,
  circleColor,
  strokeWidth,
  circleRadius,
  progressColor,
  showText,
  content,
  contentBg,
  active,
}: DynamicBorderDivProps) {
  const circumference = 2 * Math.PI * circleRadius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;
  const aspectRatio = 1; // Square aspect ratio
  return (
    <section>
      <div
        className={cn("relative w-full", {
          " text-white rounded-full": active,
        })}
        style={{ paddingBottom: `${aspectRatio * 100}%` }}
      >
        <div className="absolute -z-10 top-0 left-0 w-full h-full flex items-center justify-center">
          <svg
            className="transform rotate-[-90deg] w-full h-full"
            viewBox={`0 0 ${100 * aspectRatio} 100`}
            preserveAspectRatio="xMidYMid meet"
          >
            <circle
              className={`${circleColor}`}
              strokeWidth={strokeWidth}
              stroke="currentColor"
              fill="transparent"
              r={circleRadius}
              cx="50%"
              cy="50%"
            />
            <motion.circle
              className={`${progressColor}`}
              strokeWidth={strokeWidth}
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              stroke="currentColor"
              fill="transparent"
              r={circleRadius}
              cx="50%"
              cy="50%"
              initial={{ strokeDashoffset: circumference }}
              animate={{ strokeDashoffset }}
              transition={{ duration: 0.5 }}
            />
          </svg>

          <div
            className={`absolute size-[90%] text-xs rounded-full  flex-center ${contentBg}`}
          >
            {content}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Random() {
  return (
    <section>
      <DynamicBorderDiv
        progress={60}
        circleRadius={45}
        strokeWidth={10}
        contentBg="bg-blue-500"
        circleColor="text-gray-200"
        progressColor="text-red-400"
        showText={false}
        content="d"
      />
    </section>
  );
}
export const DynamicBorderDivCodeString = `
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";

interface DynamicBorderDivProps {
  progress: number;
  circleRadius: number;
  strokeWidth: number;
  circleColor: string;
  progressColor: string;
  showText?: boolean;
  content?: React.ReactNode;
  contentBg?: string;
  active?: boolean;
}

export default function DynamicBorderDiv({
  progress,
  circleColor,
  strokeWidth,
  circleRadius,
  progressColor,
  showText,
  content,
  contentBg,
  active,
}: DynamicBorderDivProps) {
  const circumference = 2 * Math.PI * circleRadius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;
  const aspectRatio = 1; // Square aspect ratio
  return (
    <section>
      <div
        className={cn("relative w-full", {
          "bg-blue-500 text-white rounded-full": active,
        })}
        style={{ paddingBottom: \`\${aspectRatio * 100}%\` }}
      >
        <div className="absolute -z-10 top-0 left-0 w-full h-full flex items-center justify-center">
          <svg
            className="transform rotate-[-90deg] w-full h-full"
            viewBox={\`0 0 \${100 * aspectRatio} 100\`}
            preserveAspectRatio="xMidYMid meet"
          >
            <circle
              className={\`\${circleColor}\`}
              strokeWidth={strokeWidth}
              stroke="currentColor"
              fill="transparent"
              r={circleRadius}
              cx="50%"
              cy="50%"
            />
            <motion.circle
              className={\`\${progressColor}\`}
              strokeWidth={strokeWidth}
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              stroke="currentColor"
              fill="transparent"
              r={circleRadius}
              cx="50%"
              cy="50%"
              initial={{ strokeDashoffset: circumference }}
              animate={{ strokeDashoffset }}
              transition={{ duration: 0.5 }}
            />
          </svg>

          <div
            className={\`absolute size-[90%] rounded-full flex-center \${contentBg}\`}
          >
            {content}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Random() {
  return (
    <section>
      <DynamicBorderDiv
        progress={60}
        circleRadius={45}
        strokeWidth={10}
        contentBg="bg-blue-500"
        circleColor="text-gray-200"
        progressColor="text-red-400"
        showText={false}
        content="d"
      />
    </section>
  );
}
`;
