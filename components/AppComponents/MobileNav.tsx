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
        <SheetContent side="left" className="border-none z-50 bg-background text-foreground">
          <div className="sticky top-0 z-50 bg-background text-foreground flex flex-col">
            <div className="flex items-center justify-between w-full py-4">
              <Link href="/" className="flex items-center gap-x-2 cursor-pointer">
                <Image src={LogoIcon} className="size-auto" alt="logo" width={23} height={27} />
                <h1 className="text-24 font-extrabold text-foreground ml-2">
                  Hope Web
                </h1>
              </Link>
              <div className="flex items-center gap-x-2">
                <ModeToggle />
                <SheetClose asChild>
                  <Button variant="outline" size="icon">
                    <X />
                  </Button>
                </SheetClose>
              </div>
            </div>

            <nav className="flex flex-col items-center gap-1 py-3 w-full">
              {navigationLinks.map(({ route, lable, icon }) => {
                const isActive = pathname === route || pathname.startsWith(`${route}/`);
                const Icon = icon;
                return (
                  <SheetClose asChild key={route}>
                    <Link
                      href={route}
                      className={cn(
                        "w-full p-3 flex items-center gap-x-3 text-foreground",
                        {
                          "bg-secondary border-r-4 border-indigo-600": isActive,
                        }
                      )}
                    >
                      <Icon
                        className={cn("text-foreground", {
                          "text-indigo-600": isActive,
                        })}
                      />
                      <p>{lable}</p>
                    </Link>
                  </SheetClose>
                );
              })}
            </nav>
          </div>

          <div className="flex h-[calc(100vh-100px)] overflow-y-auto">
            <ProjectLinks />
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;
