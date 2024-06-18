"use client";
import React, { useEffect, useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
import { useTheme } from "next-themes";
import {
  atomOneDark,
  atomOneLight,
} from "react-syntax-highlighter/dist/esm/styles/hljs";

import { CodeStringInterface } from "@/app/types";
import { FileDropdown } from "./FileDropDown";
import { CopyToClipboard } from "./CopyButton";

interface CodeViewProps {
  files: CodeStringInterface[];
  controls?: boolean;
}

export const CodeView = ({ files, controls }: CodeViewProps) => {
  const { resolvedTheme } = useTheme();
  const [theme, setTheme] = useState<string>();
  const [codeHeight, setcodeHeight] = useState(0);
  const [selectedFile, setSelectedFile] = useState<CodeStringInterface>(
    files[0]
  );
  useEffect(() => {
    if (resolvedTheme) {
      setTheme(resolvedTheme);
    }
  }, [resolvedTheme]);

  const customtheme = theme === "dark" ? atomOneDark : atomOneLight;
  const CustomBG = theme === "dark" ? "#09090B" : "white";
  const CustomText = theme === "dark" ? "white" : "black";

  useEffect(() => {
    const codeLines = selectedFile.code.split("\n");
    const lineHeight = 22;
    const Height = codeLines.length * lineHeight;
    setcodeHeight(Height);
  }, [selectedFile.code]);

  const handleFileChange = (file: CodeStringInterface) => {
    setSelectedFile(file);
  };

  return (
    <section
      style={{ height: `${codeHeight}px` }}
      className="relative min-h-20 border-2 my-2 max-h-[90vh]"
    >
      {controls === true && (
        <div className="flexr-between absolute top-0 h-12 z-10 p-2 w-full">
          <FileDropdown files={files} onFileChange={handleFileChange} />
          <CopyToClipboard text={selectedFile.code} />
        </div>
      )}
      <div
        id="code_preview"
        className="absolute w-full no-scrollbar  overflow-auto h-full top-0 "
      >
        <SyntaxHighlighter
          customStyle={{
            lineHeight: "20px",
            fontFamily: "serif",
            margin: "0px",
            backgroundColor: `${CustomBG}`,
            color: `${CustomText}`,
            fontSize: "14px",
            listStyle: "inside",
            paddingTop: "50px",
          }}
          children={selectedFile.code}
          showInlineLineNumbers
          showLineNumbers
          wrapLines
          style={customtheme}
          language={selectedFile.language}
        />
      </div>
    </section>
  );
};

;

export const CodeViewCodeString = `
"use client";
import React, { useEffect, useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
import { useTheme } from "next-themes";
import {
  atomOneDark,
  atomOneLight,
} from "react-syntax-highlighter/dist/esm/styles/hljs";
import { CodeStringInterface } from "../CodeString";
import FileDropdown from "./FileDropDown";
import CopyToClipboard from "./CopyButton";

interface CodeViewProps {
  files: CodeStringInterface[];
  controls?: boolean;
}

const CodeView = ({ files, controls }: CodeViewProps) => {
  const { resolvedTheme } = useTheme();
  const [theme, setTheme] = useState<string>();
  const [codeHeight, setcodeHeight] = useState(0);
  const [selectedFile, setSelectedFile] = useState<CodeStringInterface>(
    files[0]
  );
  useEffect(() => {
    if (resolvedTheme) {
      setTheme(resolvedTheme);
    }
  }, [resolvedTheme]);

  const customtheme = theme === "dark" ? atomOneDark : atomOneLight;
  const CustomBG = theme === "dark" ? "#09090B" : "white";
  const CustomText = theme === "dark" ? "white" : "black";

  useEffect(() => {
    const codeLines = selectedFile.code.split("\n");
    const lineHeight = 22;
    const Height = codeLines.length * lineHeight;
    setcodeHeight(Height);
  }, [selectedFile.code]);

  const handleFileChange = (file: CodeStringInterface) => {
    setSelectedFile(file);
  };

  return (
    <section
      style={{ height: \`\${codeHeight}px\` }}
      className="relative min-h-20 border-2 my-2 max-h-[90vh]"
    >
      {controls === true && (
        <div className="flexr-between absolute top-0 h-12 z-10 p-2 w-full">
          <FileDropdown files={files} onFileChange={handleFileChange} />
          <CopyToClipboard text={selectedFile.code} />
        </div>
      )}
      <div
        id="code_preview"
        className="absolute w-full no-scrollbar  overflow-auto h-full top-0 "
      >
        <SyntaxHighlighter
          customStyle={{
            lineHeight: "20px",
            fontFamily: "serif",
            margin: "0px",
            backgroundColor:\`\${CustomBG}\`,
            color: \`\${CustomText}\`,
            fontSize: "14px",
            listStyle: "inside",
            paddingTop: "50px",
          }}
          children={selectedFile.code}
          showInlineLineNumbers
          showLineNumbers
          wrapLines
          style={customtheme}
          language={selectedFile.language}
        />
      </div>
    </section>
  );
};

export default CodeView;
`;
