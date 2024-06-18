import { useScroll } from "framer-motion";
import React, { useEffect, useState } from "react";

const UseScroll = () => {
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
        <div>
            i will show here use scrolls demos 
        </div>
    </section>
  );
};

export default UseScroll;
