"use client"
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";

export default function Hero() {
  const containerRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  // Scroll based blur effect
  const { scrollY } = useScroll();
  const blur = useTransform(scrollY, [0, 200], [0, 10]);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const fadeUpVariants = {
    hidden: { 
      opacity: 0,
      y: 20,
      filter: "blur(10px)"
    },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        delay: i * 0.15,
        ease: [0.25, 0.4, 0.3, 1]
      }
    })
  };

  return (
    <motion.div 
      ref={containerRef}
      className="flex justify-center h-[320px] font-Poppins sm:w-full sm:justify-start sm:h-[250px] sm:mt-[20px]"
      style={{ 
        filter: isLoaded ? "none" : "blur(10px)",
        transition: "filter 0.5s ease-out"
      }}
    >
      <div className="flex flex-col items-center justify-center gap-8 text-white max-w-[1000px] sm:max-w-full sm:items-start sm:gap-2">
        <motion.div
          style={{ filter: blur }}
          className="flex flex-col gap-8 sm:gap-2"
        >
          {/* Name */}
          <motion.h1
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            custom={0}
            className="text-[36px] font-medium bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 sm:text-[24px] text-center sm:text-start "
          >
            Abhishek Singh
          </motion.h1>

          {/* Bio sections */}
          <div className="text-center text-[22px] max-w-[900px] leading-relaxed sm:text-[15px] sm:text-start sm:w-[96%] space-y-4 text-gray-300">
            <motion.p
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              custom={1}
            >
              A 21-year-old Programmer/Developer from India, crafting immersive web experiences.
              Currently building <a 
                href="https://github.com/Abhiifour/panchayat"
                className="text-white font-medium hover:opacity-80 transition-opacity"
              >
                Panchayat
              </a>, a chat app that's all about connection.Passionate about clean code, sleek design, and contributing to <span className="text-white font-medium">open-source</span> projects. <br></br>
              Let's create something extraordinary.
            </motion.p>

            
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}