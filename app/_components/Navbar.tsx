'use client';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function NavBar() {
  const router = useRouter();
  return (
    <div className="flex justify-between items-end pb-8 max-w-[600px]   ">
      <Image
        src="/header.gif"
        width={200}
        height={50}
        className="cursor-pointer bg-cover"
        onClick={() => router.push('/')}
        alt="abhi-logo"
        loading="eager"
        draggable={false}
      />
    </div>
  );
}
