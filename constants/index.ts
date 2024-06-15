import { StaticImageData } from "next/image";

export interface IComponent {
  id: number;
  projectImg: StaticImageData | string;
  title: string;
  description: string;
  category: "CSS" | "HTML" | "JS" | "React" | "Next.js" | "Backend";
  component?: JSX.Element; // This is the correct type for a React component
  code: string;
}