'use client';

export default function Footer() {
  return (
    <div className="flex flex-col justify-center items-start sm:gap-4 mt-12">
      <p className="text-xl tracking-tight  text-[#898988] font-medium">
        ping me at abhiifour@gmail.com,<span> </span>
        <a
          href="https://x.com/abhiix4"
          target="_blank"
          className="text-xl hover:underline text-[#0199FF]  font-medium"
        >
          twitter
        </a>
        <span> and </span>
        <a
          href="https://github.com/abhix4"
          target="_blank"
          className=" text-xl text-[#0199FF]  hover:underline  font-medium"
        >
          github
        </a>
        .
      </p>
    </div>
  );
}
