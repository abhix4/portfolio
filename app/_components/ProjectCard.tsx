'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

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
      className=" rounded-sm px-4 py-4 border border-gray-200 "
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
            <motion.span
              className=" underline-offset-2 text-neutral-800 underline"
              whileHover={{ opacity: 0.8 }}
              transition={{ duration: 0.2 }}
            >
              <a href={link}>{title} </a>
            </motion.span>
          ) : (
            <motion.span
              className="underline-offset-2 text-neutral-800 underline"
              whileHover={{ opacity: 0.8 }}
              transition={{ duration: 0.2 }}
            >
              <a href={git}>{title} </a>
            </motion.span>
          )}
          <br />
        </motion.div>

        <motion.p
          className=" text-xs text-neutral-500  font-mono"
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
