// components/ProjectLinks.tsx
"use client";
import Link from "next/link";
import AllMyComponents from "@/app/Projects";

const ProjectLinks = () => {
  return (
    <div className="flex py-3">
      <ul className="flex flex-col gap-2">
        {AllMyComponents.map((project) => {
          const goto = project.title.replace(/ /g, "-").toLowerCase()
          return (
            <li key={project.title}>
              <Link href={`${goto}`}>{project.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ProjectLinks;
