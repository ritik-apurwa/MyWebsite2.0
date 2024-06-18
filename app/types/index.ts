import { StaticImageData } from "next/image";

export interface CodeStringInterface {
  filename: string;
  code: string;
  language: "css" | "python" | "typescript" | "React" | "node-repl" | "scss";
}

export interface IComponent {
  id: number;
  file: CodeStringInterface[]; // Corrected to 'files' instead of 'file'
  projectImg: StaticImageData | string;
  title: string;
  description: string;
  category: "CSS" | "HTML" | "JS" | "React" | "Next.js" | "Backend";
  component?: JSX.Element;
}
