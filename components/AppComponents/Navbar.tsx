// "use client";
// import React, { useEffect, useState } from "react";
// import { useScroll } from "framer-motion";
// import { AnimatePresence, motion } from "framer-motion";
// import Nav from "./Nav";

// const Navbar = () => {
//   return (
//     <AnimatePresence>
//       {isScrolledDown && (
//         <motion.header
//           initial={{ y: 0, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           exit={{ y: -50, opacity: 0 }}
//           transition={{
//             type: "spring",
//             stiffness: 50,
//             damping: 20,
//             duration: 0.3,
//           }}
//         >
//           <Nav />
//         </motion.header>
//       )}
//     </AnimatePresence>
//   );
// };

// export default Navbar;
