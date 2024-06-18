"use client";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Filter } from "lucide-react";
import Image from "next/image";
import AllMyComponents from "@/app/Projects";
import VisibleAnimation from "@/app/Projects/MotionComponents/VisibleMotion";
import ProjectCard from "@/components/AppComponents/ProjectCard";
import { Logo } from "@/constants/media/LocalImages";

const ProjectPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState<string>("All");

  const categories = [
    "All",
    "CSS",
    "HTML",
    "JS",
    "React",
    "Next.js",
    "Backend",
  ];

  const filteredComponents = AllMyComponents.filter(
    ({ title, description, code, category: compCategory }) =>
      (title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        code.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (category === "All" || category === "" || compCategory === category)
  );

  return (
    <section className="lg:p-8 sm:p-4 py-2">
      <div id="filter_and_search_div" className="flex flex-col gap-4">
        <div className="flex flexr-between gap-x-4">
          {/* Search Input */}
          <div id="search_input" className="relative flex-grow">
            <Input
              type="text"
              className="pl-10 py-2 rounded-md border border-gray-300 shadow-sm"
              placeholder="Search for Component"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div
              id="search_icon"
              className="absolute left-0 h-full w-10 top-0 flex items-center justify-center"
            >
              <FaSearch size={16} className="text-gray-500" />
            </div>
          </div>

          {/* Filter Category */}
          <div id="filter_category" className="relative">
            <DropdownMenu>
              <DropdownMenuTrigger className="flexr-center gap-x-2" asChild>
                <Button variant="outline">
                  <Filter size={14} /> {category || "Category"}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-40 bg-primary-foreground">
                <DropdownMenuLabel>Categories</DropdownMenuLabel>
                <DropdownMenuSeparator />

                {categories.map((cat) => (
                  <DropdownMenuCheckboxItem
                    key={cat}
                    checked={category === cat}
                    onCheckedChange={() => setCategory(cat)}
                  >
                    {cat}
                  </DropdownMenuCheckboxItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        <div id="result_div">
          {/* Header */}
          <h1 className="text-xl font-semibold text-gray-700">
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
                    <Image
                      src={Logo}
                      height={200}
                      width={200}
                      alt="noufound"
                    />
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
