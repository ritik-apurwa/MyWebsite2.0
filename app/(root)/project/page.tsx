"use client";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import AllMyComponents from "@/app/Projects";
import VisibleAnimation from "@/app/Projects/MotionComponents/VisibleMotion";
import ProjectCard from "@/components/AppComponents/ProjectCard";
import { Logo } from "@/constants/media/LocalImages";
import Dropdown from "@/app/Projects/ShadcnCustom/Dropdown";
import { categories } from "@/app/types";
import { SearchInput } from "@/app/Projects/ShadcnCustom/SearchInput";
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
    <section className="lg:p-8 sm:p-4 py-2">
      <div id="filter_and_search_div" className="flex flex-col gap-4">
        <div className="flex items-center  h-16 w-full gap-x-4">
          <ProjectSearchInput
            lable="projects"
            placeholder="Find Projects"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <Dropdown
            ItemArray={categories}
            onValueChange={handleCategoryChange}
            defaultValue="All"
            name="filter"
          />
        </div>

        <div id="result_div">
          <h1 className="text-xl font-bold text-foreground">
            {searchTerm
              ? `Searching for "${searchTerm}" in ${category || "All"} Category`
              : category
              ? `Category: ${category}`
              : "All Components"}
          </h1>

          <div className="add-grid w-full items-center justify-center gap-4 py-4">
            {/* No Results Found */}
            {searchTerm && filteredComponents.length === 0 ? (
              <VisibleAnimation id="image-1">
                <div className="relative w-full">
                  <h1 className="text-center absolute bottom-0 w-full text-gray-500">
                    No results found for "{searchTerm}"
                  </h1>
                  <div className="flex-center w-full h-96">
                    <Image src={Logo} height={200} width={200} alt="noufound" />
                  </div>
                </div>
              </VisibleAnimation>
            ) : (
              // Render Components

              filteredComponents.map(
                ({
                  id,
                  title,
                  description,
                  projectImg,
                  category: compCategory,
                }) =>
                  (category === "All" || category === compCategory) && (
                    <VisibleAnimation id="Project_cards">
                      <ProjectCard
                        ProjectId={id}
                        ProjectImage={projectImg}
                        ProjectTitle={title}
                        ProjectDescription={description}
                      />
                    </VisibleAnimation>
                  )
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectPage;
