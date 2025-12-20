import Image from 'next/image';

export default function CareerCard() {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center gap-4 text-neutral-400  py-4 rounded-lg sm:items-start">
      <p className="text-xs uppercase">Feb 2025 - April 2025</p>
      <div className="flex sm:flex-col gap-3 sm:gap-2 sm:items-start items-center">
        {/* <Image
          src="/rappo.svg"
          width={40}
          height={40}
          alt="company-logo"
          loading="eager"
        /> */}
        <div className="flex items-center gap-2">
          <p className="text-sm">Software engineer intern at </p>
          <Image
            src="/rappo.svg"
            width={25}
            height={25}
            alt="company-logo"
            loading="eager"
            className=""
            priority
            draggable={false}
          />
          <p className="text-sm">Buildrappo</p>
          {/* <h1 className=" text-white text-sm">
            <a href="https://buildrappo.com/">Rappo</a>
          </h1> */}
        </div>
      </div>
    </div>
  );
}
