'use client';

export default function ProjectCard({
  url,
  git,
  link,
  title,
  desc,
  tech,
  index,
}: {
  url: string;
  git: string;
  link: string;
  title: string;
  desc: string;
  tech: string;
  index: number;
}) {
  return (
    <div className="text-xl font-medium">
      <h2 className=" text-xl tracking-tight  text-[#898988] font-medium">
        <a
          href={link}
          target="_blank"
          className="text-xl text-[#0199FF] font-medium hover:underline lowercase"
        >
          {title}{' '}
        </a>
        <span className="lowercase">{desc}</span>
      </h2>
    </div>
  );
}
