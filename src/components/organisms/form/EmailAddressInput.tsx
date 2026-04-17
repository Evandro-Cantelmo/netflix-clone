import Image from "next/image";

function EmailAddressInput() {
  return (
    <div className="min-[600px]:h-14 gap-x-2 gap-y-4 max-[600px]:flex-col flex items-center">
      <input
        placeholder="Email address"
        className="h-full max-[600px]:w-full max-[600px]:h-12 bg-[rgba(22,_22,_22,_0.7)] border-[rgba(128,_128,_128,_0.7)] grow border-[0.0625rem] rounded-[0.25rem]  px-4 placeholder:text-white/[0.7]"
      />
      <button className="text-lg xl:text-2xl h-full max-[600px]:h-12 font-medium whitespace-nowrap flex items-center justify-center gap-3 max-[600px]:gap-2 max-[600px]:px-4 max-[600px]:py-2 px-6 py-3 bg-[#E50914] rounded-[0.25rem]">
        Get Started
        <Image src="/rightArrow.svg" width={24} height={24} alt="right arrow" />
      </button>
    </div>
  );
}
export default EmailAddressInput
