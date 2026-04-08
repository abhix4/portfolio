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
              className="leading-relaxed flex gap-2 items-center tracking-normal text-neutral-800 font-mono"
            >
              Myself Abhishek
              <svg
                viewBox="0 0 256 256"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g transform="translate(1.4066 1.4066) scale(2.81 2.81)">
                  <path
                    d="M 30.091 10.131 L 30.091 10.131 c 5.28 -13.046 23.695 -13.207 29.202 -0.255 l 0 0 l 0 0 c 12.959 -5.491 26.093 7.416 20.829 20.469 l 0 0 l 0 0 c 13.046 5.28 13.207 23.695 0.255 29.202 l 0 0 l 0 0 c 5.491 12.959 -7.416 26.093 -20.469 20.829 l 0 0 l 0 0 c -5.28 13.046 -23.695 13.207 -29.202 0.255 l 0 0 l 0 0 C 17.748 86.122 4.613 73.215 9.878 60.162 l 0 0 l 0 0 C -3.169 54.881 -3.33 36.467 9.623 30.96 l 0 0 l 0 0 C 4.131 18.001 17.038 4.866 30.091 10.131 z"
                    fill="#0096F1"
                  />
                  <polygon
                    points="39.66,63.79 23.36,47.76 28.97,42.05 39.3,52.21 59.6,29.58 65.56,34.93"
                    fill="#FFFFFF"
                  />
                </g>
              </svg>
              <br />
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
          <a href="/opensource" className="">
            OSS Contributions <span className="text-xs">[More]</span>
          </a>
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

      <motion.div
        variants={fadeUpVariants}
        initial="hidden"
        animate="visible"
        custom={7}
      >
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
      </motion.div>
    </motion.div>
  );
}
