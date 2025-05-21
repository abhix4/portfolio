import Image from "next/image";

export default function CareerCard(){
    return (
        <div className="flex justify-between items-center text-neutral-400 px-2 py-4 rounded-lg bg-bg-color-gray">
           <div className="flex gap-3 items-center">
            <Image
            src="/rappo.svg"
            width={40}
            height={40}
            alt="company-logo"
            />
            <h1 className=" text-white"><a href="https://buildrappo.com/">Rappo</a></h1>
            <p className="text-sm">software engineer intern</p>
           </div>

           <p className="text-sm">
            feb 2025 - april 2025
           </p>
        </div>
    )
}