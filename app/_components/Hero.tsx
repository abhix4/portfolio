'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

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
      filter: 'blur(10px)',
    },
    visible: (i: any) => ({
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.8,
        delay: i * 0.15,
        ease: [0.25, 0.4, 0.3, 1],
      },
    }),
  };

  return (
    <motion.div
      ref={containerRef}
      className="flex justify-start font-Poppins sm:mt-[20px]"
      style={{
        filter: isLoaded ? 'none' : 'blur(10px)',
        transition: 'filter 0.5s ease-out',
      }}
    >
      <div className="flex flex-col items-center justify-center gap-4 text-neutral-100  sm:items-start sm:gap-2">
        <motion.div
          style={{ filter: blur }}
          className="flex flex-col gap-4 sm:gap-2"
        >
          {/* Name */}
          <motion.h1
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            custom={0}
            className="text-xl text-neutral-100 text-start "
          >
            Abhishek Singh
          </motion.h1>

          {/* Bio sections */}
          <div className="text-start text-sm    sm:text-start  space-y-4 text-neutral-400 sm:mt-2">
            <motion.p
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              custom={1}
            >
              A 21-year-old <strong>Programmer</strong> from India, crafting
              immersive web experiences. Passionate about clean code, sleek
              design, and contributing to <strong>opensource</strong> projects.{' '}
              <br></br>
              <span>
                {' '}
                Besides, I also investigate in artificial intelligence
                technologies.
              </span>
              <br></br>
              <span>Let's create something extraordinary !</span>
            </motion.p>
          </div>

          {/* good projects */}
        </motion.div>
      </div>
    </motion.div>
  );
}
