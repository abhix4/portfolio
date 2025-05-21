"use client"
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { IoEarth } from "react-icons/io5";
import {motion} from "framer-motion"

export default function Footer(){
      const fadeUpVariants = {
    hidden: { 
      opacity: 0,
      y: 20,
      filter: "blur(10px)"
    },
    visible: (i:any) => ({
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
        <motion.div className="flex flex-col justify-center items-start gap-8  font-Poppins sm:gap-4 mt-8"
         variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              custom={1}
        >
          
        {/* <div> E-mail : <a href="mailto:abhiifour@gmail.com" className="underline">abhiifour@gmail.com.</a></div> */}
            <div className="text-white flex gap-4 text-sm ">
            <div className=" hover:text-neutral-500">
           
            <a href="https://x.com/yeargerite" className="flex gap-1 items-center"><FaXTwitter className="cursor-pointer"  /> <p className="text-xs">Twitter</p></a>
            </div>
            <div className=" hover:text-neutral-500">
            <a href="https://github.com/abhiifour" className="flex gap-1 items-center"><FaGithub   className="cursor-pointer" /> <p className="text-xs ">Github</p></a>
            </div>
            {/* <div className="hover:bg-white p-2 rounded-full hover:text-black">
            <IoEarth  className="cursor-pointer" />
            </div>
           */}
            
            </div>

            {/* <div className="text-[16px] text-my-gray sm:text-[12px] sm:w-[80%] sm:text-center">
            ©Abhishek Singh 2025 •
            </div> */}
        </motion.div>
    )
}