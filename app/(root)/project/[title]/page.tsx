"use client";
import { notFound } from "next/navigation";
import Image from "next/image";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AllMyComponents from "@/app/Projects";
import CodeView from "@/app/Projects/CodeView/CodeView";

interface Props {
  params: {
    title: string;
  };
}

export default function ProjectPage({ params }: Props) {
  const { title } = params;
  const formattedTitle = title.replace(/ /g, "-").toLowerCase();
  const component = AllMyComponents.find(
    (c) => c.title.toLowerCase() === formattedTitle
  )

  if (!component) {
    notFound();
  }

  const [showPreview, setShowPreview] = useState(true);

  const toggleView = () => {
    setShowPreview(!showPreview);
  };

  function getLanguageName(category: string): string {
    switch (category) {
      case "HTML":
        return "html";
      case "CSS":
        return "css";
      case "JS":
      case "React":
      case "Next.js":
      case "Backend":
        return "javascript";
      default:
        return "";
    }
  }
  const MacIcon = () => {
    return (
      <div className="flexr-center gap-x-1">
        <div className="bg-orange-500 size-3 rounded-full"></div>
        <div className="bg-yellow-500 size-3 rounded-full"></div>
        <div className="bg-green-500 size-3 rounded-full"></div>
      </div>
    );
  };
  const Cover = () => {
    return (
      <div className="bg-third flex flex-col  py-3">
        <div>
          <h1 className="font-bold text-center text-3xl ">{component.title}</h1>
        </div>
        <div className="w-full h-full flex-center p-2 ">
          <Image
            src={component.projectImg}
            height={900}
            width={800}
            className="aspect-video w-full h-full max-w-sm sm:max-w-none rounded-lg"
            alt={component.title}
          />
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center w-full gap-x-3">
          <div className="bg-indigo-500/30 rounded-xl px-3 py-1 sm:py-0">
            #day{component.id}
          </div>
          <div className="bg-teal-400/20 rounded-lg px-3 py-1 sm:py-0">
            {component.category}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="flex w-full flex-col h-full items-center py-2">
      <div className="relative w-full">
        <Tabs defaultValue="demo">
          <TabsList className="grid bg-blue-200/20 grid-cols-4">
            <TabsTrigger key="mac" value="#">
              <MacIcon />
            </TabsTrigger>
            <TabsTrigger key="demo" value="demo">
              Demo
            </TabsTrigger>
            <TabsTrigger key="code" value="code">
              Code
            </TabsTrigger>
            <TabsTrigger key="cover" value="cover">
              Cover
            </TabsTrigger>
          </TabsList>
          <TabsContent
            key="demo-content"
            className="min-h-40 h-screen w-full"
            value="demo"
          >
            {component.component}
          </TabsContent>
          <TabsContent key="code-content" className="" value="code">
            <CodeView
              showCopyButton={true}
              language={getLanguageName(component.category)}
              code={component.code}
            />
          </TabsContent>
          <TabsContent key="cover-content" value="cover">
            <Cover />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
