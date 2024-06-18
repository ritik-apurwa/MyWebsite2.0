import React, { useEffect, useState } from "react";
import { Search, X } from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { FaSearch } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import AllMyComponents from "@/app/Projects";
import { IComponent } from "@/constants";
import Image from "next/image";
import { Nothingfound } from "@/constants/media/LocalImages";
import Link from "next/link";

interface Project {
  id: string;
  title: string;
  description: string;
  code: string;
}

const Searchbar = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 500);
    };

    handleResize(); // Check the initial screen size

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleSearch = (value: string) => {
    setSearchTerm(value);
  };

  const clearSearchTerm = () => {
    setSearchTerm("");
  };

  return (
    <div className="flex w-full justify-end">
      <Sheet>
        <SheetTrigger className="w-full flex justify-end" asChild>
          <section>
            <div id="search_icon" className="flex w-full md:hidden justify-end">
              <Button variant="outline" size="icon">
                <Search size={16} />
              </Button>
            </div>

            <div id="search_input" className="w-10/12 hidden pr-5   md:flex">
              <div className="relative flex w-full">
                <Input type="text" className="pl-8 hid" />
                <div className="h-full absolute flex-center w-8">
                  <Search size={16} />
                </div>
              </div>
            </div>
          </section>
        </SheetTrigger>

        <SheetContent
          side="top"
          className="h-auto flex w-full bg-transparent mx-auto min-h-screen justify-center"
        >
          <div className="max-w-5xl w-full flex flex-col">
            <SearchInput
              onSearch={handleSearch}
              clearSearchTerm={clearSearchTerm}
            />
            {searchTerm.length === 0 ? (
              <>
                <SeeResults />
              </>
            ) : (
              <>
                <div className="bg-background text-foreground mb-2 rounded-xl p-3">
                  Results for "{searchTerm}"
                </div>

                <SearchResult searchTerm={searchTerm} />
              </>
            )}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Searchbar;

interface SearchInputProps {
  onSearch: (value: string) => void;
  clearSearchTerm: () => void;
}

const SearchInput = ({ onSearch, clearSearchTerm }: SearchInputProps) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  return (
    <section className="flexr-center h-16 gap-x-2 w-full">
      <div className="flex-grow ">
        <div id="search_input" className="relative flex-grow">
          <Input
            type="text"
            className="pl-10 py-2 rounded-md border border-gray-300 shadow-sm"
            placeholder="Search for Component"
            value={searchTerm}
            onChange={handleSearch}
          />
          <Button
            className="absolute top-0 flex-center left-0 size-10"
            variant="ghost"
            size="icon"
          >
            <FaSearch size={16} className="text-gray-500" />
          </Button>
          <Button
            className="absolute top-0 right-0 flex-center size-10"
            variant="ghost"
            size="icon"
            onClick={clearSearchTerm}
          >
            <FiX size={16} className="text-gray-500" />
          </Button>
        </div>
      </div>
      <div className="flex-center h-12">
        <Button
          asChild
          variant="outline"
          size="default"
          onClick={clearSearchTerm}
        >
          <SheetTrigger>Clear</SheetTrigger>
        </Button>
      </div>
    </section>
  );
};

interface SearchResultsProps {
  searchTerm: string;
}

const SearchResult = ({ searchTerm }: SearchResultsProps) => {
  const SD: IComponent[] = AllMyComponents;

  const filteredSD = SD.filter(
    ({ title, description, code }) =>
      title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      code.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="rounded-xl ">
      {filteredSD.length > 0 ? (
        <>
          <section className="grid sm:grid-cols-2 overflow-y-auto max-h-[600px] gap-4">
            {filteredSD.map((component) => {
              const projectUrl = `/project/${component.title
                .replace(/ /g, "-")
                .toLowerCase()}`;
              return (
                <SheetTrigger className="flex flex-col gap-y-2" asChild>
                  <Link
                    href={projectUrl}
                    className="border-2 bg-background text-foreground flex flex-col rounded-xl p-2"
                    key={component.id}
                  >
                    <div className="flex-center h-52 p-2  rounded-xl overflow-hidden w-full">
                      <Image
                        src={component.projectImg}
                        height={500}
                        width={500}
                        className=" rounded-xl"
                        alt={component.title}
                      />
                    </div>
                    <div className="">
                      <h3 className="font-bold ">{component.title}</h3>
                      <p className="text-gray-500 text-xs">
                        {component.description}
                      </p>
                    </div>
                  </Link>
                </SheetTrigger>
              );
            })}
          </section>
        </>
      ) : (
        <>
          <NothingFound />
        </>
      )}
    </section>
  );
};

const NothingFound = () => {
  return (
    <section className="rounded-xl p-10 flex-center relative bg-white">
      <div className="size-60 max-w-full">
        <Image src={Nothingfound} alt="ico" height={400} width={500} />
      </div>
      <div className="absolute bottom-0 capitalize font-bold py-4">
        <h1>Try Something Else </h1>
      </div>
    </section>
  );
};

const SeeResults = () => {
  return (
    <section className="rounded-3xl p-10 flex-center relative bg-background">
      <div className="size-40 max-w-full">
        <Image
          src="https://as2.ftcdn.net/v2/jpg/02/36/26/39/1000_F_236263910_En4FiJTbTRK8HoRSpT4W9LzLP2CM2pi7.jpg"
          alt="ico"
          height={400}
          width={500}
        />
      </div>
      <div className="absolute bottom-0 capitalize font-bold py-4">
        <h1>search for components </h1>
      </div>
    </section>
  );
};
