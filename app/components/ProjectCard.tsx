"use client"
import { motion } from "framer-motion"
import Image from "next/image"

export default function ProjectCard({url , git , link , title, desc , tech}:{url:string ,git:string ,link:string ,title:string , desc : string , tech:string}){
    return (
        <motion.div className="bg-bg-color-gray rounded-[28px] w-full flex flex-col justify-center items-center py-16 gap-10 font-Poppins sm:py-8 sm:justify-center "
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 30 }}
        transition={{ duration: 0.4 , delay: 0.1 }}
        >
            <div className="">
             <Image src={url} alt="image"  width={1100} height={500} className="w-[900px] h-[470px] sm:w-[85%] sm:h-[160px] rounded-[25px] sm:m-auto"/>
            </div>
            <div className="flex flex-col gap-4 items-center  sm:gap-2 sm:w-[80%] w-[85%] sm:items-start">
                <div className="text-white text-[18px] sm:text-[14px]">
                    {
                        link ?<span className=" underline underline-offset-2"><a href={link}> {title} </a></span>  : <span className="underline-offset-2 underline"><a href={git}> {title} </a></span>
                    }
                   • {desc}
                </div>
                <div className="text-my-gray text-[16px] sm:text-[12px] sm:text-start">
                {tech}
                </div>
            </div>
        </motion.div>
    )
}