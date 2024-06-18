"use client"
import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { FaCheck, FaCopy } from "react-icons/fa";
import { a11yLight } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from "next-themes";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useToast } from "@/components/ui/use-toast";

interface CodeBlockProps {
  language: string;
  code: string;
  showCopyButton?: boolean;
}

const CodeView: React.FC<CodeBlockProps> = ({
  language,
  code,
  showCopyButton = true,
}) => {
  const { toast } = useToast();
  const [copied, setCopied] = useState<boolean>(false);
  const { theme } = useTheme();

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      toast({
        title: "Copied!",
        description: `The ${language} code has been copied to your clipboard`,
      });
      setTimeout(() => {
        setCopied(false);
      }, 1000);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to copy the code to clipboard",
      });
    }
  };

  // Determine the style based on the current theme
  const syntaxStyle = theme === "dark" ? vscDarkPlus : vscDarkPlus;

  return (
    <section className="relative h-auto w-full">
      <div className="absolute w-full h-auto max-h-[99%] overflow-y-auto top-0 right-0">
        <SyntaxHighlighter
          customStyle={{
            boxSizing: "border-box",
            lineHeight: "1.6",
            fontSize: "1rem",
            padding: "16px",
            borderRadius: "2px",
            border: "2px solid #283245",

            width: "100%",
            height: "100%",
            overflow: "auto",
          }}
          language={language}
          showLineNumbers
          wrapLines
          PreTag={"div"}
          style={syntaxStyle}
        >
          {code}
        </SyntaxHighlighter>
      </div>
      {showCopyButton && (
        <div className="relative z-10 h-12 flex justify-end items-center mx-2 sm:mx-6">
          <AnimatePresence>
            {!copied ? (
              <motion.button
                key="copy"
                className="sticky"
                onClick={handleCopy}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
              >
                Copy
              </motion.button>
            ) : (
              <motion.div
                key="copied"
                className="flex items-center justify-center p-2 bg-green-500 rounded-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <FaCheck className="text-white" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
    </section>
  );
};

export default CodeView;

export const CodeViewString = "";
