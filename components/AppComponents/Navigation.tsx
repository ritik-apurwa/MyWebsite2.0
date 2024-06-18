import { navigationLinks } from "@/constants/data/Index";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const pathname = usePathname();
  const router = useRouter();

  const handleRouter = (route:string) => {
    router.push(route);
  };

  return (
    <section className="p-4 bg-background text-foreground">
      <div className="flex items-center gap-x-2">
        {navigationLinks.map((links) => {
          const isActive = pathname === links.route;
          return (
            <section key={links.route}>
              <Button
                onClick={() => handleRouter(links.route)}
                disabled={isActive}
                className={cn(
                  "relative inline-flex items-center px-4 py-2 border text-sm font-medium rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2",
                  isActive
                    ? "bg-muted-foreground text-muted cursor-not-allowed"
                    : "bg-card text-card-foreground hover:bg-popover hover:ring-ring"
                )}
              >
                <span>{links.lable}</span>
              </Button>
            </section>
          );
        })}
      </div>
    </section>
  );
};

export default Navigation;
