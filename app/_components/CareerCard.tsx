import Image from "next/image";

export default function CareerCard(){
    return (
        <div className="flex justify-between items-center text-neutral-400 px-4 py-4 rounded-lg bg-bg-color-gray sm:items-start">
           <div className="flex sm:flex-col gap-3 sm:gap-2 sm:items-start items-center">
            <Image
            src="/rappo.svg"
            width={40}
            height={40}
            alt="company-logo"
            loading="eager"
            />
            <h1 className=" text-white sm:text-sm"><a href="https://buildrappo.com/">Rappo</a></h1>
            <p className="text-sm sm:text-xs">software engineer intern</p>
           </div>

           <p className="text-sm sm:text-xs">
            feb 2025 - april 2025
           </p>
        </div>
    )
}