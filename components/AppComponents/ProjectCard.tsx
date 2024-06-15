"use client";
import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

interface ProjectCardProps {
  ProjectImage: StaticImageData | string;
  ProjectTitle: string;
  ProjectDescription: string;
  ProjectId: number;
}

const ProjectCard = ({
  ProjectImage,
  ProjectTitle,
  ProjectDescription,
  ProjectId,
}: ProjectCardProps) => {
  const [lineClamp, setLineClamp] = useState(true);
  const router = useRouter();

  const toggleLineClamp = () => {
    setLineClamp(!lineClamp);
  };

  const handleClick = () => {
    // Replace spaces with hyphens and convert to lowercase
    const formattedTitle = ProjectTitle.replace(/\s+/g, "-").toLowerCase();
    router.push(`/project/${formattedTitle}`);
  };

  return (
    <section
      className="border-border border-2 max-w-96 size-full max-h-96 cursor-pointer"
      onClick={handleClick}
    >
      <div className="flex justify-center w-full p-4">
        <Image
          src={ProjectImage}
          height={200}
          width={200}
          className="aspect-video rounded-md size-full"
          alt="logo"
        />
      </div>
      <div className="prose-sm prose-headings:m-0.5 px-4">
        <h3 className="font-bold capitalize truncate">{ProjectTitle}</h3>
        <p
          className={cn(lineClamp ? "line-clamp-2" : "")}
          onClick={(e) => {
            e.preventDefault(); // Prevent link navigation on toggle
            toggleLineClamp();
          }}
        >
          {ProjectDescription}
        </p>
      </div>
    </section>
  );
};

export default ProjectCard;
