"use client";

import React, { useEffect, useRef, useState } from "react";
import { Button } from "../ui/button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
// This is with use ref
export const AnimationX: React.FC = () => {
  const [animation, setAnimation] = useState(false);

  const mainBox = useRef<HTMLDivElement | null>(null);
  const blueBoxRef = useRef<HTMLDivElement | null>(null);
  const orangeBoxRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (animation) {
      const mainBoxAnim = gsap.timeline({ yoyo: true });

      if (mainBox.current && blueBoxRef.current && orangeBoxRef.current) {
        mainBoxAnim
          .to(mainBox.current, {
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            duration: 2,
          })
          .to(
            [blueBoxRef.current, orangeBoxRef.current],
            {
              scale: 2,
              rotation: 360,
              backgroundColor: "#FF5733",
              duration: 2,
            },
            "<" // Start this animation at the same time as the previous one ends
          )
          .to(mainBox.current, {
            display: "flex",
            justifyContent: "center",
            duration: 2,
            width: "100%",
          })
          .to(
            [blueBoxRef.current, orangeBoxRef.current],
            {
              scale: 1,
              rotation: 0,
              backgroundColor: "",
              duration: 2,
            },
            "<"
          );
      }
    }
  }, [animation]);

  const startAnimation = () => {
    setAnimation((prev) => !prev);
  };

  return (
    <section className="border flex-col gap-y-2 py-2">
      <div ref={mainBox} className="flex flex-row justify-between px-4">
        <div
          ref={blueBoxRef}
          className="size-20 bg-blue-600 flex items-center justify-center"
        >
          To
        </div>
        <div
          ref={orangeBoxRef}
          className="size-20 flex-center bg-orange-500 flex items-center justify-center"
        >
          From to
        </div>
      </div>
      <div className="w-full flex-center">
        <Button onClick={startAnimation} variant="outline" size="default">
          Start Animation
        </Button>
      </div>
    </section>
  );
};
export const AnimationY = () => {
  const [animation, setAnimation] = useState(false);

  useEffect(() => {
    if (animation && typeof window !== "undefined") {
      const leftAnimation = gsap.to("#redBox", {
        x: 200,
        duration: 2,
        rotate: 360,
        repeat: -1,
        yoyo: true,
        yoyoEase: "",

        onComplete: () => {
          gsap.to("#redBox", {
            x: 0,
            duration: 2,
            rotate: 360,
          });
        },
      });
    }
  }, [animation]);

  const startAnimation = () => {
    setAnimation((prev) => !prev);
  };

  return (
    <section className="border flex-center py-2 flex-col">
      <div className="flex flex-col w-full p-2 gap-y-2">
        <div className="flex flex-col w-full py-10 px-4 gap-y-2 border">
          <div id="redBox" className="size-20 flex-center bg-red-600">
            TO
          </div>
          <div id="blueBox" className="size-20 flex-center bg-blue-600">
            From
          </div>
          <div id="greenBox" className="size-20 flex-center bg-green-600">
            From to
          </div>
        </div>
        <Button onClick={startAnimation} variant="outline" size="default">
          Start
        </Button>
      </div>
    </section>
  );
};

export const AnimationT = () => {
  const [animation, setAnimation] = useState(false);
  const heading = ["I am heading 1 ", "I am heading 2", "I am Heading 3 "];
  const name = "ritik-Apurwa";

  useEffect(() => {
    if (animation && typeof window !== "undefined") {
      const tl = gsap.timeline();
      tl.to("#char", {
        x: 100,
        duration: 0.3,
        stagger: 0.3,
        onComplete: () => {
          tl.to("#char", {
            x: 0,
            duration: 0.3,
            stagger: 0.3,
          });
        },
      });

      const leftAnimation = gsap.from("#header", {
        y: 30,
        duration: 2,
        stagger: 0.5,
        ease: "back.inOut",
        opacity: 0,
      });
    }
  }, [animation]);

  const startAnimation = () => {
    setAnimation((prev) => !prev);
  };

  return (
    <section className="border flex-center py-2 flex-col">
      <div className="flex flex-col w-full p-2 gap-y-2">
        <div className="flex flex-col w-full py-10 px-2 gap-y-2 border">
          {heading.map((index, head) => (
            <div key={index} id="header" className=" border p-3 capitalize ">
              <h1 className="header">{head}</h1>
            </div>
          ))}
          <div>
            {name.split("").map((char) => (
              <div key={char} id="char">
                {char}
              </div>
            ))}
          </div>
        </div>
        <Button onClick={startAnimation} variant="outline" size="default">
          Start
        </Button>
      </div>
    </section>
  );
};

gsap.registerPlugin(ScrollTrigger);

export const AnimationS = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const head1 = document.getElementById("head1");
      const head2 = document.getElementById("head2");
      const head3 = document.getElementById("head3");
      const box1 = document.getElementById("redBox");
      const box2 = document.getElementById("orangeBox");
      const box3 = document.getElementById("greenBox");

      // Heading 1 animation
      gsap.fromTo(
        head1,
        { y: -100, autoAlpha: 0, rotation: -360 },
        {
          y: 0,
          autoAlpha: 1,
          rotation: 0,
          duration: 1.5,
          ease: "power4.out",
          scrollTrigger: {
            trigger: head1,
            start: "top 80%",
          },
        }
      );

      // Heading 2 animation
      gsap.fromTo(
        head2,
        { x: -200, autoAlpha: 0, scale: 0 },
        {
          x: 0,
          autoAlpha: 1,
          scale: 1,
          duration: 1.5,
          ease: "elastic.out(1, 0.3)",
          scrollTrigger: {
            trigger: head2,
            start: "top 80%",
          },
        }
      );

      // Heading 3 animation
      gsap.fromTo(
        head3,
        { y: 100, autoAlpha: 0, rotation: 360 },
        {
          y: 0,
          autoAlpha: 1,
          rotation: 0,
          duration: 1.5,
          ease: "expo.out",
          scrollTrigger: {
            trigger: head3,
            start: "top 80%",
          },
        }
      );

      // Box 1 animation
      gsap.fromTo(
        box1,
        { scale: 0, rotation: 360 },
        {
          scale: 1,
          x: -100,
          rotation: 0,
          rotate: 360,
          repeat: -1,
          yoyo: true,
          duration: 1,

          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: box1,
            start: "top 80%",
          },
        }
      );

      // Box 2 animation
      gsap.fromTo(
        box2,
        { x: -200, autoAlpha: 0 },
        {
          x: 0,
          autoAlpha: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: box2,
            start: "top 80%",
          },
        }
      );

      // Box 3 animation
      gsap.fromTo(
        box3,
        { y: 100, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 1,
          ease: "circ.out",
          scrollTrigger: {
            trigger: box3,
            start: "top 80%",
          },
        }
      );
    }
  }, []);

  return (
    <section className="flex p-2 w-full flex-col">
      <div className="h-screen prose-lg p-2 border">
        <h1 id="head1">Page One</h1>
        <div id="redBox" className="size-28 bg-red-600">
          I am the red box
        </div>
      </div>
      <div className="h-screen p-2 prose-lg border">
        <h1 id="head2">Page Two</h1>
        <div id="greenBox" className="bg-green-500 size-28"></div>
      </div>
      <div className="h-screen p-3 border">
        <h1 id="head3">Page Three</h1>
        <div id="orangeBox" className="size-28 bg-orange-600">
          Orange One
        </div>
      </div>
      <div className="h-screen"></div>
    </section>
  );
};
