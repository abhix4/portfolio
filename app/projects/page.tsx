import { projects } from '@/constants';
import ProjectCard from '../_components/ProjectCard';

export default function ProjectsPage() {
  return (
    <div>
      <h1 className="text-lg uppercase font-mono text-neutral-800">
        /Projects
      </h1>

      <div>
        <div className="flex flex-col gap-3 mt-[30px] font-mono ">
          {projects.map((x: any, i: number) => (
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
          ))}
        </div>
      </div>
    </div>
  );
}
