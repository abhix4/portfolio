import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { IoEarth } from "react-icons/io5";

export default function Footer(){
    return (
        <div className="flex flex-col justify-center items-center gap-8 mt-[180px] mb-[80px] font-Poppins sm:gap-4 sm:mb-12 sm:mt-16">
            <div className="text-white text-[18px] sm:text-[13px] sm:w-[80%] sm:text-center">
            Want to work with me? Get in touch!
            <div> E-mail me: <a href="mailto:abhiifour@gmail.com" className="underline">abhiifour@gmail.com.</a></div>
            </div> 

            <div className="text-white flex gap-4 text-[24px] sm:text-[18px]">
            <div className="hover:bg-white p-2 rounded-full hover:text-black">
           
            <a href="https://x.com/yeargerite"><FaXTwitter className="cursor-pointer"  /></a>
            </div>
            <div className="hover:bg-white p-2 rounded-full hover:text-black">
            <a href="https://github.com/Abhiifour"><FaGithub   className="cursor-pointer" /></a>
            </div>
            <div className="hover:bg-white p-2 rounded-full hover:text-black">
            <IoEarth  className="cursor-pointer" />
            </div>
          
            
            </div>

            <div className="text-[16px] text-my-gray sm:text-[12px] sm:w-[80%] sm:text-center">
            ©Abhishek Singh 2024 •
            </div>
        </div>
    )
}