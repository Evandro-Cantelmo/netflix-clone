import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full">
      <div className="min-[1920px]:place-self-center z-20 min-[1920px]:w-[1920px]">
        <div className="relative h-[664px] min-[960px]:h-[760px] xl:h-[98.56vh]">
          <div className="absolute h-full w-full">
            <Image
              src="https://i.imgur.com/JouJG45.jpeg"
              fill
              alt="netflix hero"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-home-hero-gradient-mobile min-[600px]:bg-home-hero-gradient-tablet min-[960px]:bg-home-hero-gradient-laptop xl:bg-home-hero-gradient-desktop" />
          </div>
          <div className="z-30 absolute h-full w-full pt-[100px]">
            <div className=" w-full -mt-8 flex flex-col justify-center items-center h-[calc(100%-100px)] py-0 p-8">
              <div className="flex flex-col justify-center items-center  w-full min-[600px]:w-[432px] min-[960px]:w-[508px] xl:w-[588px] space-y-4 min-[960px]:space-y-6 xl:space-y-8 text-white">
                <div className="space-y-2 xl:space-y-4 text-center">
                  <h1 className="text-[32px] min-[960px]:text-[40px] xl:text-[3.5rem] leading-tight font-extrabold xl:font-black ">
                    Unlimited movies, TV shows, and more
                  </h1>
                  <p className="md:text-base xl:text-xl xl:font-semibold">
                    Starts at BRL 20.90. Cancel anytime.
                  </p>
                </div>
                <div className="space-y-4 w-full text-center">
                  <p className="text-base tracking-tight lg:px-2 xl:px-0">
                    Ready to watch? Enter your email to create or restart your
                    membership.
                  </p>
                  <div className="min-[600px]:h-14 gap-x-2 gap-y-4 max-[600px]:flex-col flex items-center">
                    <input
                      placeholder="Email address"
                      className="h-full max-[600px]:w-full max-[600px]:h-12 bg-[rgba(22,_22,_22,_0.7)] border-[rgba(128,_128,_128,_0.7)] grow border-[0.0625rem] rounded-[0.25rem]  px-4 placeholder:text-white/[0.7]"
                    />
                    <button className="text-lg xl:text-2xl h-full max-[600px]:h-12 font-medium whitespace-nowrap flex items-center justify-center gap-3 max-[600px]:gap-2 max-[600px]:px-4 max-[600px]:py-2 px-6 py-3 bg-[#E50914] rounded-[0.25rem]">
                      Get Started
                      <Image
                        src="/rightArrow.svg"
                        width={24}
                        height={24}
                        alt="right arrow"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
