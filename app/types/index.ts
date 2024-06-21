import { StaticImageData } from "next/image";
import { IconType } from "react-icons";
import { FiHome } from "react-icons/fi";

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

export interface DropdownArrayInterface {
  id?: string | number;
  arrayItem: string | number;
  icon?: IconType;
  label: string | number;
}

export interface DropdownInterface {
  variant?: "outline" | "default" | "default" | "link" | "destructive";
  size?: "default" | "sm" | "lg" | "icon";
  name?: string;
  icon?: IconType;
  ItemArray?: DropdownArrayInterface[];
  defaultValue?: string;
  onValueChange?: (value: string) => void;
}
export interface DropdownArrayInterface {
  id?: string | number;
  arrayItem: string | number;
  icon?: IconType;
  label: string | number;
}

export const categories: DropdownArrayInterface[] = [
  {
    id: 1,
    arrayItem: "All",
    label: "HTML",
    icon: FiHome,
  },
  {
    id: 2,
    arrayItem: "All",
    label: "CSS",
    icon: FiHome,
  },
  {
    id: 3,
    arrayItem: "All",
    label: "React",
    icon: FiHome,
  },
  {
    id: 4,
    arrayItem: "All",
    label: "NextJS",
    icon: FiHome,
  },
  {
    id: 5,
    arrayItem: "All",
    label: "JS",
    icon: FiHome,
  },
  {
    id: 6,
    arrayItem: "All",
    label: "Backend",
    icon: FiHome,
  },
  {
    id: 6,
    arrayItem: "All",
    label: "All",
    icon: FiHome,
  },
];
