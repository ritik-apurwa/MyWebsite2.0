// "use client";
// import VisibleAnimation from "@/app/Projects/MotionComponents/VisibleMotion";
// import { navigationLinks } from "@/constants/data/Index";
// import { LogoIcon } from "@/constants/media/LocalImages";
// import { cn } from "@/lib/utils";
// import { AnimatePresence, motion } from "framer-motion";
// import Image from "next/image";
// import { usePathname, useRouter } from "next/navigation";
// import React, { useState } from "react";


// const LeftSidebar = () => {
//   const [isHovered, setisHovered] = useState(true);
//   const pathname = usePathname();
//   const router = useRouter();
//   const handleRoute = (routes: string) => {
//     router.push(routes);
//   };

//   return (
//     <AnimatePresence>
//       <motion.div
//         key="main-div"
//         onHoverStart={(e) => setisHovered(true)}
//         onHoverEnd={(e) => setisHovered(false)}
//         initial={{ width: "80px" }}
//         animate={{ width: isHovered ? "240px" : "80px" }}
//         transition={{ duration: 0.3, ease: "easeInOut" }}
//       >
//         <section
//           className={cn(
//             "min-h-dvh sticky top-0 left-0 h-auto grid grid-rows-12  bg-zinc-500 w-full"
//           )}
//         >
//           <div className=" flex-center gap-x-4 row-span-2">
//             <Image src={LogoIcon} className="size-auto" height={40} width={40} alt="Logo" />
//             {isHovered && (
//               <VisibleAnimation id="logo text">
//                 <h1>Team Hope</h1>
//               </VisibleAnimation>
//             )}
//           </div>

//           <div className=" flex flex-col gap-4 items-center w-full row-span-4">
//             {navigationLinks.map((links) => {
//               const Icon = links.icon;
//               const isActive =
//                 pathname === links.route ||
//                 pathname.startsWith(`${links.route}/`);
//               return (
//                 <div
//                   key={links.lable}
//                   onClick={() => handleRoute(links.route)}
//                   className={cn(
//                     "flex flex-row cursor-pointer gap-x-2 w-full items-center  justify-center",
//                     { "justify-start pl-12": isHovered }
//                   )}
//                 >
//                   <Icon fill="black" className="text-3xl" />
//                   {isHovered && (
//                     <VisibleAnimation id="Logo Text">
//                       <h1>{links.lable}</h1>
//                     </VisibleAnimation>
//                   )}
//                 </div>
//               );
//             })}
//           </div>
//           <div className=" flex-center row-span-6 overflow-y-auto no-scrollbar">
//             hello
//           </div>
//         </section>
//       </motion.div>
//     </AnimatePresence>
//   );
// };

// export default LeftSidebar;
