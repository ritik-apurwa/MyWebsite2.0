"use client";

import Link from "next/link";
import MobileNav from "./MobileNav";
import { ModeToggle } from "../ui/themeToggle";
import Searchbar from "./Searchbar";

import Navigation from "./Navigation";

const Nav = () => {
  return (
    <section className="w-screen flex border-b-2  bg-background  justify-center mx-auto">
      <header className="grid grid-cols-12  max-w-7xl w-full gap-2 py-2 h-auto  items-center md:py-3 px-1 lg:py-3">
        <div className="md:col-span-2  px-2 col-span-4 size-full flex justify-start items-center">
          <Link className="font-bold text-xl antialiased" href="/">
            HopeWeb
          </Link>
        </div>
        <div className=" hidden lg:flex md:col-span-5">
          <Navigation />
        </div>
        <div className="flex flex-row w-full  relative lg:col-span-5  col-span-8  gap-x-1">
          <Searchbar />
          <ModeToggle />
          <MobileNav />
        </div>
      </header>
    </section>
  );
};

export default Nav;
