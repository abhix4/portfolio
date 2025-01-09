
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import NavBar from "./components/Navbar";
import ProjectCard from "./components/ProjectCard";

const dummy = [
  {
    title:"Vote it",
    link:"https://vote-it-gamma.vercel.app/",
    url:"/assets/p.png",
    desc:"A dynamic web application enabling users to create and participate in polls seamlessly",
    git:"https://github.com/Abhiifour/VoteIt",
    tech:"ReactJs • TailwindCSS • Firebase • Javascript "
  },
  {
    title:"Idea Vault",
    link:"https://idea-vault-one.vercel.app/",
    url:"/assets/p1.png",
    desc:"A simple and intuitive application designed for users to store, organize, and manage their thoughts effectively",
    git:"https://github.com/Abhiifour/ideaVault",
    tech:"ReactJs • TailwindCSS • Supabase • Shadcn • Javascript"
  },
  {
    title:"Task App",
    link:"https://task-app-sepia-iota.vercel.app/",
    url:"/assets/p4.png",
    desc:"Feature-rich application designed to streamline task management while providing actionable insights",
    git:"https://github.com/Abhiifour/Task-app",
    tech:"NextJs • TailwindCSS • NodeJs • ExpressJs • Prisma • PostgressSQL • Typescript"
  },
  {
    title:"Wisdom",
    link:"https://wisdom-nine.vercel.app/",
    url:"/assets/p2.png",
    desc:"An open and collaborative platform where users can post questions and receive insights from others",
    git:"https://github.com/Abhiifour/wisdom",
    tech:"NextJs • TailwindCSS • Prisma • PostgressSQL • Framer • Typescript • Typescript"
  },
  {
    title:"Zocial Media",
    link:"",
    url:"/assets/p3.png",
    desc:"A feature-rich social media application inspired by Instagram, with unique enhancements",
    git:"https://github.com/Abhiifour/social-media",
    tech:"ReactJs • TailwindCSS • NodeJs • MongoDB • ExpressJs • Cloudinary • Javascript "
  },
  {
    title:"Geeta.ai",
    link:"",
    url:"/assets/p5.png",
    desc:"A spiritual and knowledge-driven application offering profound insights from the Bhagavad Gita",
    git:"https://github.com/Abhiifour/geeta.ai",
    tech:"ReactJs • TailwindCSS • Python • Embedchain"
  }
]

export default function Home() {
  return (
    <div className="font-sans">
    <NavBar/>
    <Hero/>
    <div className="flex flex-col gap-12 mt-[50px] sm:gap-10">
      {
        dummy.map((x) =>  <ProjectCard git={x.git} link={x.link} title={x.title} url={x.url} desc={x.desc} tech={x.tech}/>)
      }
   
    </div>
    <Footer/>
    </div>
  );
}
