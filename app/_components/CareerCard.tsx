export default function CareerCard() {
  return (
    <div className="">
      <div className="flex sm:flex-col gap-3 sm:gap-2 sm:items-start items-center">
        <div>
          <h2 className="text-xl font-medium text-[#898988]">
            from feb 2025 to april 2025 i've worked at
            <br className="sm:hidden" />
            <span> </span>
            <a
              className="text-xl text-[#0199FF] hover:underline font-medium"
              target="_blank"
              href="https://buildrappo.com"
            >
              buildrappo
            </a>
            . after that, i started exploring{' '}
            <a
              href="/opensource"
              className="text-xl text-[#0199FF] hover:underline font-medium"
            >
              opensource
            </a>{' '}
            where i found out about{' '}
            <a
              href="https://github.com/antiwork"
              target="_blank"
              className="text-xl text-[#0199FF] hover:underline font-medium"
            >
              antiwork
            </a>
            , eventually starting working as a software engineer
            contract/freelance based there.
          </h2>
        </div>
      </div>
    </div>
  );
}
