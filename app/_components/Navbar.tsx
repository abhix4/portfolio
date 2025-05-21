"use client"
import { useRouter } from "next/navigation";
import OpenToWork from "./openToWork";
import Image from "next/image";

export default function NavBar(){
     const router = useRouter()
    return(

       
        <div className="flex justify-between items-center text-neutral-400  pb-8 max-w-[600px]   ">
            {/* <OpenToWork/> */}
            <Image
            src="/icon.png"
            width={40}
            height={40}
            className="rounded-full cursor-pointer"
            onClick={() => router.push("/")}
            alt="abhi-logo"
            loading="eager"
            />

            <div className="flex gap-4 ">
                <p className="cursor-pointer hover:text-white text-sm" onClick={() => router.push("/projects")}>Projects</p>
                <p className="cursor-pointer hover:text-white text-sm" onClick={() => router.push("/career")}>Career</p>
            </div>
        </div>
    )
}