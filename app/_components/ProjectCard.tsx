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
      className="bg-bg-color-gray rounded-lg px-4 py-4 border border-gray-400/5 "
      initial={{ opacity: 0, y: 20 }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.2,
        ease: [0.33, 1, 0.68, 1], // Custom easing curve for smoother motion
      }}
    >
      {/* <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ 
          duration: 0.4,
          ease: [0.33, 1, 0.68, 1],
          delay: 0.1
        }}
      >
        <Image 
          src={url} 
          alt={title}  
          width={800} 
          height={500} 
          className="max-w-[700px] max-h-[400px] sm:w-[80%] sm:h-[160px] rounded-[25px] sm:m-auto "
        />
      </motion.div> */}

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
          className="text-neutral-100 text-sm text-start"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {link ? (
            <motion.span
              className=" underline-offset-2"
              whileHover={{ opacity: 0.8 }}
              transition={{ duration: 0.2 }}
            >
              <a href={link}>{title} </a>
            </motion.span>
          ) : (
            <motion.span
              className="underline-offset-2 underline"
              whileHover={{ opacity: 0.8 }}
              transition={{ duration: 0.2 }}
            >
              <a href={git}>{title} </a>
            </motion.span>
          )}
          <br />
        </motion.div>

        <motion.div
          className="text-neutral-400 text-sm mt-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          {desc}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
