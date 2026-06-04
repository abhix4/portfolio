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
    <div className="flex justify-between items-start relative sm:items-start ">
      <div className="flex   gap-3 sm:gap-2 sm:items-start items-start ">
        <div className="">
          <h3 className="text-xl font-medium text-[#606161]">
            <a className="underline" target="_blank" href={url}>
              {title}
            </a>{' '}
            <span className="text-neutral-400">{`(${company})`}</span>
          </h3>
        </div>
      </div>
    </div>
  );
}
