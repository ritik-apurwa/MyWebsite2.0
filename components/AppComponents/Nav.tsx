"use client";

import Link from "next/link";
import MobileNav from "./MobileNav";
import { ModeToggle } from "../ui/themeToggle";
import Searchbar from "./Searchbar";

import Navigation from "./Navigation";

const Nav = () => {
  return (
    <header className="grid grid-cols-12 items-center w-full border-2 border-teal-600  ">

      <div className="md:col-span-2 flexj-start border-red-400 border  col-span-6 size-full ">
        <Link className="font-bold text-xl antialiased" href="/">
          HopeWeb
        </Link>
      </div>

      <div className=" hidden border-purple-600 border-2 lg:flex md:col-span-5">
        <Navigation />
      </div>
      <div className="flex border-indigo-600 border-2 flex-row w-full  relative lg:col-span-5  col-span-6  gap-x-1">
        <Searchbar />
        <ModeToggle />
        <MobileNav />
      </div>
    </header>
  );
};

export default Nav;
