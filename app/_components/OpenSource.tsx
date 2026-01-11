import Image from 'next/image';
import { BiGitPullRequest } from 'react-icons/bi';

export default function Opensource({
  title,
  company,
  url,
}: {
  title: string;
  company: string;
  url: string;
}) {
  return (
    <div className="flex justify-between items-start relative py-4 sm:items-start ">
      <div className="w-[1px] h-[100%] bg-neutral-200 absolute left-1.5 -translate-y-4 "></div>
      <div className="flex   gap-3 sm:gap-2 sm:items-start items-start ">
        <BiGitPullRequest size={16} className="mt-1 text-neutral-600 z-20" />

        <div className=''>
          <p className="font-mono text-sm hover:underline text-neutral-800">
            <a href={url}>{title}</a>
          </p>
          <p className="text-xs font-mono text-neutral-500">{company}</p>
        </div>
      </div>
    </div>
  );
}
