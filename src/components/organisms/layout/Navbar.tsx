import Image from "next/image";
import Link from "next/link";

function Navbar() {
  return (
    <div className="flex justify-center">
      <div className="px-6 min-[600px]:px-8 min-[960px]:px-20 xl:px-[148px] h-[120px] w-full absolute z-40 bg-navbar-gradient min-[1920px]:w-[1920px] min-[1920px]:px-[354px]">
        <div className="w-full h-20 xl:h-[88px] flex items-center justify-between">
          <Image src="/netflix.svg" alt="netflix" width={148} height={40} className="min-[960px]:w-[148px] w-[89px]" />

          <div className="h-[38px] flex justify-center items-center gap-3 p-[3px]">
            <div className="relative h-full">
              <span className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <Image
                  src="/translateIcon.svg"
                  width={16}
                  height={16}
                  alt="translate icon"
                />
              </span>
              <select className="appearance-none w-[62px] min-[600px]:w-[146px] text-transparent min-[600px]:text-white h-full rounded-[0.25rem] min-[600px]:px-[34px] py-[4px] font-medium border-[rgba(128,_128,_128,_0.7)] border-[1px] bg-neutral-900/70 text-base">
                <option className="text-black">English</option>
                <option className="text-black">Português</option>
              </select>
              <span className="absolute inset-y-0 right-3 flex items-center pointer-events-none top-[2px]">
                <Image
                  src="/downArrow.svg"
                  width={16}
                  height={16}
                  alt="arrow icon"
                />
              </span>
            </div>
            <Link
              href={"/sign-in"}
              className="px-4 py-1 bg-[#E50914] h-full flex items-center rounded-[0.25rem] text-white text-sm font-bold"
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
