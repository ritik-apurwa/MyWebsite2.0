"use client";
import React, { useEffect, useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import copy from "copy-to-clipboard";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FaCheck, FaClipboard } from "react-icons/fa";
import { Check, ChevronDown, LucideCopy } from "lucide-react";
import { useTheme } from "next-themes";
import {
  atomOneDark,
  atomOneLight,
} from "react-syntax-highlighter/dist/esm/styles/hljs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface CodeViewProps {
  code: string;
  fileName: string;
  language?: "css" | "python" | "typescript" | "React" | "node-repl" | "scss";
}

const CodeView2 = ({ code, fileName, language }: CodeViewProps) => {
  const [codeHeight, setcodeHeight] = useState(0);
  const { theme } = useTheme();
  const customtheme = theme === "dark" ? atomOneDark : atomOneLight;
  const customBG = theme === "dark" ? "black" : "white";

  useEffect(() => {
    const codeLines = code.split("\n");
    const lineHeight = 22;
    const Height = codeLines.length * lineHeight;
    setcodeHeight(Height);
  }, [code]);

  return (
    <section className="flex flex-col">
      <div className="flexr-between p-2 w-full">
        <FileDropdown />
        <CopyToClipboard text={code} />
      </div>
      <div
        style={{ height: `${codeHeight}px` }}
        className="relative border-2   max-h-96  "
      >
        <div
          id="code_preview"
          className="absolute w-full no-scrollbar overflow-auto max-h-96 top-0 "
        >
          <SyntaxHighlighter
            customStyle={{
              lineHeight: "20px",
              backgroundColor: `${customBG}`,
              fontFamily: "serif",
              margin: "0px",
              fontSize: "14px",
            }}
            children={code}
            wrapLines
            wrapLongLines
            style={customtheme}
            language={language}
          />
        </div>
      </div>
    </section>
  );
};

export default CodeView2;

const FileDropdown = ({}) => {
  return (
    <section className="flex-center">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            className="text-xs flexr-between gap-x-2   truncate"
            size="sm"
          >
            {fileName}
            <ChevronDown size={14} />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem></DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </section>
  );
};

interface CopyToClipboardProps {
  text: string;
}

interface CopyToClipboardProps {
  text: string;
}

const CopyToClipboard: React.FC<CopyToClipboardProps> = ({ text }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    copy(text);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div className="size-full w-20 rounded-md flex-center border">
      {copied ? (
        <button
          disabled={copied}
          className="flexr-center text-xs bg-gray-300 disabled:cursor-not-allowed  font-semibold p-2  gap-x-1"
        >
          <span>
            <Check size={14} />
          </span>
          <span>Copied </span>
        </button>
      ) : (
        <button
          onClick={handleCopy}
          className="flexr-center rounded-md text-xs hover:ring-1 hover:ring-indigo-600 add-effect font-semibold p-2 gap-x-1"
        >
          <span>
            <LucideCopy size={14} />
          </span>
          <span>Copy</span>
        </button>
      )}
    </div>
  );
};
