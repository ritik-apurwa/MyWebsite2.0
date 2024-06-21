"use client";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AllMyComponents from "@/app/Projects";
import { CodeView } from "@/app/Projects/CodeView/CodeView";
import Link from "next/link";

interface Props {
  params: {
    title: string;
  };
}

export default function ProjectPage({ params }: Props) {
  const { title } = params;
  const formattedTitle = title.replace(/ /g, "-").toLowerCase();
  const routeProject = AllMyComponents.find(
    (c) => c.title.toLowerCase() === formattedTitle
  );

  if (!routeProject) {
    notFound();
  }

  const MacIcon = () => {
    return (
      <div className="flexr-center px-4 gap-x-1">
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
          <h1 className="font-bold text-center text-3xl ">
            {routeProject.title}
          </h1>
        </div>
        <div className="w-full h-full flex-center p-2 ">
          <Image
            src={routeProject.projectImg}
            height={900}
            width={800}
            className="aspect-video w-full h-full max-w-sm sm:max-w-none rounded-lg"
            alt={routeProject.title}
          />
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center w-full gap-x-3">
          <div className="bg-indigo-500/30 rounded-xl px-3 py-1 sm:py-0">
            #day{routeProject.id}
          </div>
          <div className="bg-teal-400/20 rounded-lg px-3 py-1 sm:py-0">
            {routeProject.category}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col  h-full w-full border overflow-hidden">
      <div className="relative w-full">
        <Tabs defaultValue="demo" className="w-full">
          <TabsList className="w-full">
            <div className="grid grid-cols-12 items-center gap-2 w-full px-1">
              <Link
                className="col-span-6 flex justify-start w-full"
                href="/project"
              >
                <MacIcon />
              </Link>
            </div>
            <div className="col-span-6 max-w-xs w-full flex flex-row justify-between ">
              <TabsTrigger className="w-full" key="demo" value="demo">
                Demo
              </TabsTrigger>
              <TabsTrigger className="w-full" key="code" value="code">
                Code
              </TabsTrigger>
              <TabsTrigger className="w-full" key="cover" value="cover">
                Cover
              </TabsTrigger>
            </div>
          </TabsList>

          <TabsContent
            key="demo-content"
            className="min-h-40 h-screen w-full"
            value="demo"
          >
            {routeProject.component}
          </TabsContent>
          <TabsContent key="code-content" className="" value="code">
            <CodeView files={routeProject.file} controls={true} />
          </TabsContent>
          <TabsContent key="cover-content" value="cover">
            <Cover />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
