import Image from 'next/image';

export default function ImageHover() {
  return (
    <div>
      <Image
        src="/rappo.svg"
        width={25}
        height={25}
        alt="company-logo"
        loading="eager"
        className=""
        draggable={false}
      />
    </div>
  );
}
