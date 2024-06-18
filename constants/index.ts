import { StaticImageData } from "next/image";
export interface CodeStringInterface {
  filename: string;
  code: string;
  language: "css" | "python" | "typescript" | "React" | "node-repl" | "scss";
}

export interface IComponent {
  id: number;
  file?: CodeStringInterface;
  projectImg: StaticImageData | string;
  title: string;
  description: string;
  category: "CSS" | "HTML" | "JS" | "React" | "Next.js" | "Backend";
  component?: JSX.Element; // This is the correct type for a React component
  code: string;
}
