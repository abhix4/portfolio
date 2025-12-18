'use client';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function NavBar() {
  const router = useRouter();
  return (
    <div className="flex justify-between items-center text-neutral-400  pb-8 max-w-[600px]   ">
      {/* <OpenToWork/> */}
      <Image
        src="/bug3.gif" // Make sure bug.gif is placed inside the public directory
        width={50}
        height={50}
        className="cursor-pointer"
        onClick={() => router.push('/')}
        alt="abhi-logo"
        loading="eager"
        draggable={false}
      />

      <div className="flex gap-4 ">
        <p
          className="cursor-pointer hover:text-white text-sm"
          onClick={() => router.push('/projects')}
        >
          Projects
        </p>
        <p
          className="cursor-pointer hover:text-white text-sm"
          onClick={() => router.push('/career')}
        >
          Timeline
        </p>
      </div>
    </div>
  );
}
