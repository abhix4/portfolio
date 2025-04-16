"use client"
import { motion } from "framer-motion"
import Image from "next/image"

export default function ProjectCard({url, git, link, title, desc, tech}: {
  url: string,
  git: string,
  link: string,
  title: string,
  desc: string,
  tech: string
}) {
  return (
    <motion.div 
      className="bg-bg-color-gray rounded-[28px] w-full flex flex-col justify-center items-center py-10 gap-10 font-Poppins sm:py-8 sm:justify-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ 
        opacity: 1, 
        y: 0,
      }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.4,
        ease: [0.33, 1, 0.68, 1]  // Custom easing curve for smoother motion
      }}
    >
      <motion.div
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
          className="max-w-[700px] max-h-[400px] sm:w-[100%] sm:h-[160px] rounded-[25px] sm:m-auto "
        />
      </motion.div>

      <motion.div 
        className="flex flex-col gap-4 items-center sm:gap-2 sm:w-[80%]  sm:items-start max-w-[700px] mx-auto"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ 
          duration: 0.6,
          ease: [0.33, 1, 0.68, 1],
          delay: 0.2
        }}
      >
        <motion.div 
          className="text-white text-[18px] sm:text-[14px] text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {link ? 
            <motion.span 
              className="underline underline-offset-2"
              whileHover={{ opacity: 0.8 }}
              transition={{ duration: 0.2 }}
            >
              <a href={link}>{title} </a>
            </motion.span> 
            : 
            <motion.span 
              className="underline-offset-2 underline"
              whileHover={{ opacity: 0.8 }}
              transition={{ duration: 0.2 }}
            >
              <a href={git}>{title} </a>
            </motion.span>
          }
           • {desc}
        </motion.div>

        <motion.div 
          className="text-my-gray text-[14px] sm:text-[12px] sm:text-center sm:mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          {tech}
        </motion.div>
      </motion.div>
    </motion.div>
  )
}