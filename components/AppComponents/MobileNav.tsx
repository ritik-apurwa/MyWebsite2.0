"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiMenu } from "react-icons/fi";
import { ModeToggle } from "../ui/themeToggle";
import { Button } from "../ui/button";
import { X } from "lucide-react";
import { LogoIcon } from "@/constants/media/LocalImages";
import { navigationLinks } from "@/constants/data/Index";
import AllMyComponents from "@/app/Projects";
import ProjectLinks from "./ProjectLinks";

const MobileNav = () => {
  const pathname = usePathname();

  return (
    <section>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon">
            <FiMenu />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="border-none Z-50 ">
          <div className="sticky top-0 Z-50  bg-white flex flex-col ">
            <div className="flexr-between w-full">
              <Link
                href="/"
                className="flexr-center gap-x-2 py-4 cursor-pointer"
              >
                <Image
                  src={LogoIcon}
                  className="size-auto"
                  alt="logo"
                  width={23}
                  height={27}
                />
                <h1 className="text-24 font-extrabold  text-white-1 ml-2">
                  Team Hope
                </h1>
              </Link>
              <div className="flexr-center gap-x-2 py-4">
                <ModeToggle />
                <SheetClose asChild>
                  <Button variant="outline" size="icon">
                    <X />
                  </Button>
                </SheetClose>
              </div>
            </div>

            <nav className="flexc-center gap-1 py-3 w-full">
              {navigationLinks.map(({ route, lable, id, icon }) => {
                const isActive =
                  pathname === route || pathname.startsWith(`${route}/`);
                const Icon = icon;
                return (
                  <SheetClose asChild key={route}>
                    <Link
                      href={route}
                      key={lable}
                      className={cn(
                        "w-full p-3 items-center flex flex-row gap-x-3",
                        {
                          "bg-third border-r-4 border-indigo-600": isActive,
                        }
                      )}
                    >
                      <Icon
                        className={cn(" ", {
                          "": isActive,
                        })}
                      />
                      <p>{lable}</p>
                    </Link>
                  </SheetClose>
                );
              })}
            </nav>
          </div>

          <div className="flex h-[calc(100vh-100px)]  overflow-y-auto">
            <ProjectLinks/>
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;
