'use client';

import CareerCard from './CareerCard';

import { projects } from '@/constants';
import ProjectCard from './ProjectCard';

export default function Hero() {
  return (
    <div className="flex flex-col space-y-8 ">
      <div className="flex flex-col ">
        <div className="flex flex-col gap-4 sm:gap-2">
          <div className="text-start text-sm sm:text-start space-y-4">
            <h2 className="text-xl tracking-tighter text-[#898988] font-medium">
              i’m a full-stack developer who loves building products that feel
              thoughtful and human.
            </h2>
            <h2 className=" font-medium tracking-tighter  text-xl text-[#898988]">
              i work with deep care and intention.
            </h2>
          </div>
        </div>
      </div>

      <div>
        <CareerCard />

        <div className="flex flex-wrap justify-start items-center gap-2 mb-6 "></div>
      </div>

      <h2 className="text-xl font-medium tracking-tighter  text-[#898988]">
        if you're looking to hire me, you can get my cv{' '}
        <a
          href="/abhishek_2026.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#0199FF] hover:underline"
        >
          here
        </a>
        .
      </h2>

      <div>
        <h2 className="text-xl font-medium tracking-tighter  text-[#898988]">
          some of the stuff that i built in the past —
        </h2>
        <div>
          <ul className="mt-2 flex flex-col space-y-1">
            {projects.slice(0, 4).map((x: any, i: number) => (
              <li key={i}>
                <ProjectCard
                  key={i}
                  git={x.git}
                  link={x.link}
                  title={x.title}
                  url={x.url}
                  desc={x.desc}
                  tech={x.tech}
                  index={i}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
