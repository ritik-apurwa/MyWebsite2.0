"use client";

import Link from "next/link";
import MobileNav from "./MobileNav";
import { ModeToggle } from "../ui/themeToggle";
import Searchbar from "./Searchbar";

import Navigation from "./Navigation";

const Nav = () => {
  return (
    <header className="container h-full mx-auto flex-center  grid grid-cols-12">
      <div className="md:col-span-2 flexj-start rp-p   col-span-6 size-full ">
        <Link className="font-bold text-xl antialiased" href="/">
          HopeWeb
        </Link>
      </div>

      <div className=" hidden flexj-end  h-full lg:flex md:col-span-5">
        <Navigation />
      </div>
      <div className="flex  flexj-end  flex-row w-full  relative lg:col-span-5  col-span-6  gap-x-1">
        <Searchbar />
        <ModeToggle />
        <MobileNav />
      </div>
    </header>
  );
};

export default Nav;
