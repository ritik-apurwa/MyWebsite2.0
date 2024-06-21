"use client";

import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { CodeView2Code, NormalText } from "../Projects/CodeString";
import { CodeView } from "../Projects/CodeView/CodeView";


const Page = () => {
  const { resolvedTheme } = useTheme();
  const [theme, setTheme] = useState<string>();

  useEffect(() => {
    if (resolvedTheme) {
      setTheme(resolvedTheme);
    }
  }, [resolvedTheme]);

  return (
    <section className="flex flex-col h-full gap-x-4">
      {theme}

      <CodeView controls={true} files={CodeView2Code} />
      <CodeView controls={true} files={NormalText} />
      <CodeView controls={true} files={CodeView2Code} />
      <CodeView controls={true} files={NormalText} />
      <CodeView controls={true} files={CodeView2Code} />
      <CodeView controls={true} files={NormalText} />
      <CodeView controls={true} files={CodeView2Code} />
      <CodeView controls={true} files={NormalText} />
      <CodeView controls={true} files={CodeView2Code} />
      <CodeView controls={true} files={NormalText} />
      <CodeView controls={true} files={CodeView2Code} />
      <CodeView controls={true} files={NormalText} />
    </section>
  );
};

export default Page;
