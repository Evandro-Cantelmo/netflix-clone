import Image from "next/image";
import Link from "next/link";

function Navbar() {
  return (
    <>
      <div className="px-[148px] h-[120px] w-full absolute">
        <div className="w-full h-[88px] flex items-center justify-between">
          <Image src="/netflix.svg" alt="netflix" width={148} height={40} />

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
              <select className="appearance-none w-[146px] h-full rounded-[0.25rem] px-[34px] font-medium border-[#767676] border-[1px] bg-transparent font-sans text-[17px]">
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
              className="px-4 py-1 bg-[#E50914] h-full flex items-center rounded-[0.25rem] text-white text-sm font-sans font-bold"
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
export default Navbar;
