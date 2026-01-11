'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import CareerCard from './CareerCard';
import Image from 'next/image';
import { ScrollArea } from '@/components/ui/scroll-area';
import Opensource from './OpenSource';

import { images, contributions, projects } from '@/constants';
import ProjectCard from './ProjectCard';

export default function Hero() {
  const containerRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const { scrollY } = useScroll();
  const blur = useTransform(scrollY, [0, 200], [0, 10]);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const fadeUpVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      filter: 'blur(6px)',
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
      className="flex flex-col space-y-8 sm:mt-[20px]"
      style={{
        filter: isLoaded ? 'none' : 'blur(10px)',
        transition: 'filter 0.5s ease-out',
      }}
    >
      <div className="flex flex-col ">
        <motion.div
          style={{ filter: blur }}
          className="flex flex-col gap-4 sm:gap-2"
        >
          <div className="text-start text-sm sm:text-start space-y-4 sm:mt-2">
            <motion.p
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              custom={1}
              className="leading-relaxed tracking-normal text-neutral-800  font-mono"
            >
              Hey<span>,</span>
            </motion.p>
            <motion.p
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              custom={2}
              className="leading-relaxed tracking-normal text-neutral-800 font-mono"
            >
              Myself Abhishek <br />
            </motion.p>
            <motion.p
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              custom={3}
              className="leading-relaxed tracking-normal text-neutral-800 font-mono"
            >
              I’m a full-stack developer who loves building products that feel
              thoughtful and human.
            </motion.p>
            <motion.p
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              custom={4}
              className="leading-relaxed tracking-normal text-neutral-800 font-mono"
            >
              I work with deep care and intention.
            </motion.p>
          </div>
        </motion.div>
      </div>

      <motion.div
      variants={fadeUpVariants}
      initial="hidden"
      animate="visible"
      custom={6}
      >
        <h2 className="text-lg mb-6 uppercase tracking-tight font-mono text-neutral-800">
          Worked at
        </h2>
        <CareerCard />
        <h1 className="text-lg py-6 uppercase tracking-tight font-mono text-neutral-800">
          <a href="/opensource" className=''>OSS Contributions <span className="text-xs">[More]</span></a>
        </h1>

        <div className="flex flex-wrap justify-start items-center gap-2 mb-6 ">
          {images.map((img, index) => (
            <a href={img.link} key={index}>
              <Image
                src={img.url}
                width={30}
                height={30}
                priority
                className="cursor-pointer rounded-lg overflow-hidden grayscale opacity-80 hover:opacity-100 hover:grayscale-0 transition-all"
                alt="oss-repositories-logo"
                loading="eager"
                draggable={false}
              />
            </a>
          ))}
        </div>

        <ScrollArea className="max-h-[300px] mt-12 flex flex-col w-full">
          <div className=" flex flex-col">
            {contributions.map((contribution, index) => (
              <Opensource
                key={index}
                title={contribution.title}
                company={contribution.company}
                url={contribution.url}
              />
            ))}
          </div>
        </ScrollArea>
      </motion.div>

      <div>
        <a
          className="text-lg uppercase font-mono text-neutral-800"
          href="/projects"
        >
          Projects <span className="text-xs">[more]</span>
        </a>

        <div>
          <div className="flex flex-col gap-3 mt-[30px] ">
            {projects.slice(0, 4).map((x: any, i: number) => (
              <ProjectCard
                key={i}
                git={x.git}
                link={x.link}
                title={x.title}
                url={x.url}
                desc={x.desc}
                tech={x.tech}
                index={i}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
