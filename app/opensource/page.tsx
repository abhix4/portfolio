import { ScrollArea } from '@/components/ui/scroll-area';
import CareerCard from '../_components/CareerCard';
import Opensource from '../_components/OpenSource';
import { Metadata } from 'next';
import Image from 'next/image';
import { images, contributions } from '@/constants';
import Footer from '../_components/Footer';

export const metadata: Metadata = {
  title: 'Abhishek | Contributions',
  description: 'My open-source contributions and journey.',
  openGraph: {
    title: 'Abhishek | Contributions',
    description: 'Explore my open-source journey and contributions.',
    url: 'https://i.abhiifour.xyz/career',
    siteName: "Abhishek's Portfolio",
    images: [
      {
        url: 'https://i.abhiifour.xyz/ossv1.png',
        width: 1200,
        height: 630,
        alt: 'Abhishek OSS Contributions',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/ossv1.png'],
  },
};

export default function CareersPage() {
  return (
    <div>
  
      <h1 className="text-lg py-6 uppercase tracking-tight font-mono">
        OSS Contributions <span></span>
      </h1>

      <div className="flex flex-wrap justify-center lg:justify-evenly items-center gap-6 mb-6 ">
        {images.map((img, index) => (
          <a href={img.link} key={index}>
            <Image
              src={img.url}
              width={45}
              height={45}
              priority
              className="cursor-pointer rounded-lg overflow-hidden grayscale opacity-80 hover:opacity-100 hover:grayscale-0 transition-all"
              alt="abhi-logo"
              loading="eager"
              draggable={false}
            />
          </a>
        ))}
      </div>

 
        <div className="relative flex flex-col mt-12 py-5">
          {contributions.map((contribution, index) => (
            <Opensource
              key={index}
              title={contribution.title}
              company={contribution.company}
              url={contribution.url}
            />
          ))}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-neutral-100 to-transparent"></div>
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-neutral-100 to-transparent"></div>
        </div>
   
      <Footer/>
    </div>
  );
}
