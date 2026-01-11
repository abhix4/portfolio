'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowUpRightIcon } from './svgs/next';

export default function ProjectCard({
  url,
  git,
  link,
  title,
  desc,
  tech,
  index,
}: {
  url: string;
  git: string;
  link: string;
  title: string;
  desc: string;
  tech: string;
  index: number;
}) {
  return (
    <motion.div
      className=" py-2  "
      initial={{ opacity: 0, y: 20 }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.2,
        ease: [0.33, 1, 0.68, 1],
      }}
    >
      <motion.div
        className=""
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{
          duration: index * 0.1,
          ease: [0.33, 1, 0.68, 1],
          delay: 0.2,
        }}
      >
        <motion.div
          className=" text-sm text-start font-mono"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {link ? (
            <motion.div
              className=" underline-offset-2 text-neutral-800 underline "
              whileHover={{ opacity: 0.8 }}
              transition={{ duration: 0.2 }}
            >
              <a href={link} className="flex group h-1 ">
                {title}{' '}
                <ArrowUpRightIcon
                  size={14}
                  className="hidden group-hover:block transition-all duration-500 ease-in"
                />{' '}
              </a>
            </motion.div>
          ) : (
            <motion.div
              className="underline-offset-2 text-neutral-800 underline"
              whileHover={{ opacity: 0.8 }}
              transition={{ duration: 0.2 }}
            >
              <a href={git}>{title} </a>
            </motion.div>
          )}
          <br />
        </motion.div>

        <motion.p
          className=" text-sm text-neutral-500 font-mono"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          {desc}
        </motion.p>
      </motion.div>
    </motion.div>
  );
}
