"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import AllMyComponents from "@/app/Projects";
import VisibleAnimation from "@/app/Projects/MotionComponents/VisibleMotion";
import ProjectCard from "@/components/AppComponents/ProjectCard";
import { Logo } from "@/constants/media/LocalImages";
import Dropdown from "@/app/Projects/ShadcnCustom/Dropdown";
import { categories } from "@/app/types";
import { ProjectSearchInput } from "@/app/Projects/Inputs/Input";

const ProjectPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState<string>("All");

  const handleCategoryChange = (value: string) => {
    setCategory(value);
  };

  const filteredComponents = AllMyComponents.filter(
    ({ title, description, file, category: compCategory }) =>
      (title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        title.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (category === "All" || category === "" || compCategory === category)
  );

  return (
    <section className="container mx-auto p-1 md:p-2 lg:p-4 flex flex-col lg:gap-y-3">
      <section
        id="search_and_filter"
        className="grid grid-cols-12 h-14 items-center gap-4 mb-4"
      >
        <div className="col-span-9">
          <ProjectSearchInput
            lable="projects"
            placeholder="Find Projects"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="col-span-3">
          <Dropdown
            ItemArray={categories}
            onValueChange={handleCategoryChange}
            defaultValue="All"
            name="filter"
          />
        </div>
      </section>

      <div
        className="prose-base prose-headings:my-4"
        id="filter_and_search_div"
      >
        <h2>
          {searchTerm
            ? `Searching for "${searchTerm}" in ${category || "All"} Category`
            : category
            ? `Category: ${category}`
            : "All Components"}
        </h2>
        <div>
          {filteredComponents.length === 0 ? (
            <>
              <VisibleAnimation id="no-results">
                <div className="size-full relative flex-center">
                  <Image
                    src="https://cdn.dribbble.com/users/453325/screenshots/5573953/empty_state.png"
                    height={800}
                    width={600}
                    alt="No results"
                    className="aspect-auto rounded-md size-full"
                  />
                  <p className="absolute bottom-0  pb-4 text-black">
                    No results found for {searchTerm}
                  </p>
                </div>
              </VisibleAnimation>
            </>
          ) : (
            <>
              <div className="grid  md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredComponents.map((item) => (
                  <VisibleAnimation key={item.id} id={item.id.toString()}>
                    <div>
                      <ProjectCard
                        ProjectId={item.id}
                        ProjectImage={item.projectImg}
                        ProjectTitle={item.title}
                        ProjectDescription={item.description}
                      />
                    </div>
                  </VisibleAnimation>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectPage;
