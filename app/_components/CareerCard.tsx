import Image from 'next/image';

export default function CareerCard() {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center gap-4   py-4 rounded-lg sm:items-start">
      <p className="text-xs text-neutral-500 uppercase font-mono">
        Feb 2025 - April 2025
      </p>
      <div className="flex sm:flex-col gap-3 sm:gap-2 sm:items-start items-center">
        <div className="flex lg:flex-row flex-col items-start lg:items-center gap-2">
          <p className="text-sm font-mono ">Software engineer intern at </p>
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
          <a className="text-sm font-mono" href="https://buildrappo.com">
            Buildrappo
          </a>
        </div>
      </div>
    </div>
  );
}
