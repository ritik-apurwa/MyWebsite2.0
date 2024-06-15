"use client";

import { navigationLinks } from "@/constants/data/Index";
import Link from "next/link";
import { Input } from "../ui/input";
import MobileNav from "./MobileNav";
import { ModeToggle } from "../ui/themeToggle";
import { useScroll } from "framer-motion";
import { useEffect, useState } from "react";

const Nav = () => {
  const { scrollY } = useScroll();
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("up");

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const direction = currentScrollY > lastScrollY ? "down" : "up";
      setScrollDirection(direction);
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isScrolledDown = scrollDirection === "up";
  return (
    <section>
     {isScrolledDown && (
         <header className="grid grid-cols-12 bg-white max-w-7xl border w-full gap-2  py-4  h-20 items-center md:py-3 lg:py-6">
         <div className="md:col-span-2 border px-2 col-span-4 size-full flex-center">
           <Link className="font-bold text-xl antialiased" href="/">
             HopeWeb
           </Link>
         </div>
         <nav className="md:col-span-4 col-span-6 hidden md:flex ">
           <ul className="flex-center">
             {navigationLinks.map((link) => (
               <li key={link.id}>
                 <Link href={link.route}>
                   <span className="text-gray-800 hover:text-gray-600">
                     {link.lable}
                   </span>
                 </Link>
               </li>
             ))}
           </ul>
         </nav>
         <div className="md:col-span-3 border px-2 col-span-5 ">
           <Input className="mr-4" />
         </div>
         <div className="flex col-span-3 border gap-x-2 items-center">
           <ModeToggle />
           <MobileNav />
         </div>
       </header>
     )}
    </section>
  );
};

export default Nav;
