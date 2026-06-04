'use client';
import { usePathname, useRouter } from 'next/navigation';

export default function NavBar() {
  const router = useRouter();
  let heading;
  const pathName = usePathname();
  switch (pathName) {
    case '/':
      heading = `hi i'm abhishek.`;
      break;
    case '/opensource':
      heading = `opensource contributions list`;
      break;
    case '/projects':
      heading = `stuffs i built`;
      break;
    default:
      heading = 'not found.';
  }
  return (
    <div className="flex flex-col justify-between items-start gap-8 pb-8 sm:py-6 py-12 mt-2 max-w-[500px]">
      <ul className="flex gap-x-4 flex-wrap">
        <li
          className="text-xl tracking-tighter font-medium text-[#0199FF] underline cursor-pointer"
          onClick={() => router.push('/')}
        >
          home
        </li>
        <li
          className="text-xl tracking-tighter font-medium text-[#0199FF] underline cursor-pointer"
          onClick={() => router.push('/opensource')}
        >
          os contributions
        </li>
        <li
          className="text-xl tracking-tighter font-medium text-[#0199FF] underline cursor-pointer"
          onClick={() => router.push('/projects')}
        >
          stuffs, i built
        </li>
      </ul>
      <h1 className="font-bold sm:text-3xl text-5xl tracking-tighter ">{heading}</h1>
    </div>
  );
}
