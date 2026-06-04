import Opensource from '../_components/OpenSource';
import { Metadata } from 'next';

import { contributions } from '@/constants';
import Footer from '../_components/Footer';

export const metadata: Metadata = {
  title: 'Abhishek',
  description: 'My open-source contributions and journey.',
  openGraph: {
    title: 'Abhishek',
    description: 'Explore my open-source journey and contributions.',
    url: 'https://i.abhiifour.xyz/career',
    siteName: "Abhishek's Portfolio",
    images: [
      {
        url: 'https://i.abhii.space/ossv1.png',
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
      <h2 className="text-xl tracking-tight font-medium text-[#898988] lowercase">
        Open source has been a big part of my journey learning new things. I've
        contributed to <span> </span>
        <a
          href="https://github.com/antiwork"
          target="_blank"
          className="text-xl text-[#0199FF] hover:underline font-medium"
        >
          antiwork
        </a>
        ,{' '}
        <a
          href="https://github.com/calcom"
          target="_blank"
          className="text-xl text-[#0199FF] hover:underline font-medium"
        >
          cal.com
        </a>
        ,{' '}
        <a
          href="https://github.com/Mail-0/Zero"
          target="_blank"
          className="text-xl text-[#0199FF] hover:underline font-medium"
        >
          mail-0
        </a>
        ,{' '}
        <a
          href="https://github.com/morphik-org/morphik-core"
          target="_blank"
          className="text-xl text-[#0199FF] hover:underline font-medium"
        >
          morphik
        </a>
        , and more, working on everything from ui fixes and responsiveness
        improvements to new features and code refactors.
      </h2>

      <h2 className="text-xl tracking-tight  font-medium text-[#898988] mt-6 lowercase">
        So far, I've shipped 100+ contributions across different projects and
        communities.
      </h2>
      <h2 className="text-xl tracking-tight  text-[#898988] font-medium mt-6">
        i've listed all my opensource contribution below<span></span>
      </h2>
      <ul className="relative list-disc pl-4 list flex flex-col space-y-2 mt-[30px]">
        {contributions.map((contribution, index) => (
          <li key={index}>
            <Opensource
              key={index}
              title={contribution.title}
              company={contribution.company}
              url={contribution.url}
            />
          </li>
        ))}
      </ul>

      <Footer />
    </div>
  );
}
