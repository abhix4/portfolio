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
    <div className="flex justify-between items-start text-neutral-400 px-4 py-4 rounded-lg bg-bg-color-gray sm:items-start">
      <div className="flex sm:flex-col gap-3 sm:gap-2 sm:items-start items-center">
        <BiGitPullRequest size={16} />
        <div>
          <h1 className=" text-white text-sm hover:underline">
            <a href={url}>{title}</a>
          </h1>
          <p className="text-xs">{company}</p>
        </div>
      </div>

      {/* <p className="text-xs">
        feb 2025 - april 2025
        </p> */}
    </div>
  );
}
