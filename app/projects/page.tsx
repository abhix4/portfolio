import ProjectCard from '../_components/ProjectCard';

const dummy = [
  {
    title: 'Git X 2025',
    link: 'https://ghwrap.vercel.app/',
    url: '/assets/p.png',
    desc: 'GitHub Wrapped for 2025!',
    git: 'https://github.com/Abhiifour/VoteIt',
    tech: 'ReactJs • TailwindCSS • Firebase • Javascript ',
  },
  {
    title: 'Vote it',
    link: 'https://voteit.abhiifour.xyz',
    url: '/assets/p.png',
    desc: 'A dynamic web application enabling users to create and participate in polls seamlessly',
    git: 'https://github.com/Abhiifour/VoteIt',
    tech: 'ReactJs • TailwindCSS • Firebase • Javascript ',
  },
  {
    title: 'Idea Vault',
    link: 'https://ideavault.abhiifour.xyz',
    url: '/assets/p1.png',
    desc: 'A simple and intuitive application designed for users to store, organize, and manage their thoughts effectively',
    git: 'https://github.com/Abhiifour/ideaVault',
    tech: 'ReactJs • TailwindCSS • Supabase • Shadcn • Javascript',
  },
  {
    title: 'Panchayat',
    link: 'https://panchayat.abhiifour.xyz',
    url: '/assets/p1.png',
    desc: 'A minimal and intuitive chat application',
    git: 'https://github.com/Abhiifour/ideaVault',
    tech: 'ReactJs • TailwindCSS • Supabase • Shadcn • Javascript',
  },
  {
    title: 'Wisdom',
    link: 'https://wisdom-nine.vercel.app/',
    url: '/assets/p2.png',
    desc: 'An open and collaborative platform where users can post questions and receive insights from others',
    git: 'https://github.com/Abhiifour/wisdom',
    tech: 'NextJs • TailwindCSS • Prisma • PostgressSQL • Framer • Typescript • Typescript',
  },
  {
    title: 'Better Track',
    link: 'https://trackbetter.abhiifour.xyz',
    url: '/assets/p4.png',
    desc: 'A platform to track and monitor your favourite open source organisation',
    git: 'https://github.com/Abhiifour/Task-app',
    tech: 'NextJs • TailwindCSS • NodeJs • ExpressJs • Prisma • PostgressSQL • Typescript',
  },
  {
    title: 'Rebooked',
    link: 'https://book-exchange-chi.vercel.app/',
    url: '/assets/p2.png',
    desc: 'A web application that enables users to discover, list, and exchange books with other readers.',
    git: 'https://github.com/Abhiifour/wisdom',
    tech: 'NextJs • TailwindCSS • Prisma • PostgressSQL • Framer • Typescript • Typescript',
  },
  {
    title: 'Bio Data',
    link: 'https://biodata.abhiifour.xyz/',
    url: '/assets/p3.png',
    desc: 'A simple and free bio data generator',
    git: 'https://github.com/Abhiifour/social-media',
    tech: 'ReactJs • TailwindCSS • NodeJs • MongoDB • ExpressJs • Cloudinary • Javascript ',
  },
  {
    title: 'Crazy Ones',
    link: 'https://quote-seven-alpha.vercel.app/',
    url: '/assets/p5.png',
    desc: 'A Minimal Quote Directory',
    git: 'https://github.com/Abhiifour/geeta.ai',
    tech: 'ReactJs • TailwindCSS • Python • Embedchain',
  },
  {
    title: 'Helping Paws',
    link: 'https://helpingpaws.vercel.app/',
    url: '/assets/p3.png',
    desc: 'A pet adoption platform',
    git: 'https://github.com/Abhiifour/social-media',
    tech: 'ReactJs • TailwindCSS • NodeJs • MongoDB • ExpressJs • Cloudinary • Javascript ',
  },
  {
    title: 'Bidding Transport',
    link: 'https://github.com/abhiifour/bidding-transport',
    url: '/assets/p5.png',
    desc: 'A full-stack monorepo transport bidding platform built using Next.js, Tailwind CSS, ShadCN UI, Express, Firebase Admin SDK, Prisma, and PostgreSQL, powered by Bun and orchestrated with TurboRepo and Docker.',
    git: 'https://github.com/Abhiifour/geeta.ai',
    tech: 'ReactJs • TailwindCSS • Python • Embedchain',
  },
  {
    title: 'Pinned Tweets',
    link: 'https://pinned.abhiifour.xyz/',
    url: '/assets/p3.png',
    desc: 'Top tweets pinned here !',
    git: 'https://github.com/Abhiifour/social-media',
    tech: 'ReactJs • TailwindCSS • NodeJs • MongoDB • ExpressJs • Cloudinary • Javascript ',
  },
  {
    title: 'Mastery',
    link: 'https://mastery.abhiifour.xyz',
    url: '/assets/p5.png',
    desc: 'For Seekers',
    git: 'https://github.com/Abhiifour/geeta.ai',
    tech: 'ReactJs • TailwindCSS • Python • Embedchain',
  },
];

export default function ProjectsPage() {
  return (
    <div>
      <h1 className="text-white text-lg uppercase">Works</h1>
      {/* <p className="text-neutral-400 text-sm">Some of my works</p> */}
      <div>
        <div className="flex flex-col gap-3 mt-[30px] ">
          {dummy.map((x: any, i: number) => (
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
