import { projects } from '@/constants';
import ProjectCard from '../_components/ProjectCard';
import Footer from '../_components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title:  'Abhishek | Projects',
  description:
    'Collection of all Projects🚀✨',
  openGraph: {
    siteName: "Abhishek's Projects",
    images: [
      {
        url: 'https://i.abhiifour.xyz/ossv1.png?v=2',
        width: 1200,
        height: 630,
        alt: 'Abhishek Portfolio OG Image',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['https://i.abhiifour.xyz/ossv1.png?v=2'],
  },
};

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
      <Footer/>
    </div>
  );
}
