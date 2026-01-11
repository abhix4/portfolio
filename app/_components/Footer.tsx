'use client';
import { FaXTwitter } from 'react-icons/fa6';
import { FaGithub } from 'react-icons/fa6';
import { IoMail } from 'react-icons/io5';
import { motion } from 'framer-motion';

import Image from 'next/image';

export default function Footer() {
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
      className="flex flex-col justify-center items-start sm:gap-4 mt-12"
      variants={fadeUpVariants}
      initial="hidden"
      animate="visible"
      custom={1}
    >
      <Image
        src="/greeting.gif"
        width={400}
        height={30}
        className="cursor-pointer pointer-events-none bg-cover  mx-auto"
        alt="abhi-logo"
        loading="eager"
        draggable={false}
      />
      <div className="flex flex-col lg:flex-row justify-between gap-8 text-sm w-full">
        <div className=" flex gap-4 ">
          <a href="https://x.com/abhiix4" className="flex gap-1 items-center">
            <FaXTwitter className="cursor-pointer text-neutral-600" />{' '}
            <p className="text-xs text-neutral-500  font-mono">[Twitter]</p>
          </a>

          <a
            href="https://github.com/abhix4"
            className="flex gap-1 items-center"
          >
            <FaGithub className="cursor-pointer text-neutral-600" />{' '}
            <p className="text-xs text-neutral-500 font-mono">[Github]</p>
          </a>

          <a
            href="mailto:abhiifour@gmail.com"
            className="flex gap-1 items-center"
          >
            <IoMail className="cursor-pointer text-neutral-600" />{' '}
            <p className="text-xs  text-neutral-500 font-mono">[Email]</p>
          </a>
        </div>

        <p className="text-xs  text-neutral-400 font-mono ">
          Last updated on 1/1/2026
        </p>
      </div>
    </motion.div>
  );
}
