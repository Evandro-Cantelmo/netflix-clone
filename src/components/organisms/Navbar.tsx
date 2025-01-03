import Image from "next/image";
import Link from "next/link";

function Navbar() {
  return (
    <>
      <div className="px-[148px] h-[120px] w-full">
        <div className="w-full h-[88px] flex items-center justify-between">
          <Image src="/netflix.svg" alt="netflix" width={148} height={40} />

          <div className="h-[38px] flex justify-center items-center p-[3px]">
            <Link
              href={"/sign-in"}
              className="px-4 py-1 bg-[#E50914] h-full flex items-center rounded-[0.25rem] text-white text-sm "
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
