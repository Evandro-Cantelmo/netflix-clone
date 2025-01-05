import Image from "next/image";

export default function Home() {
  return (
    <div className="z-20">
      <div className="relative lg:h-[84.4vh] xl:h-[98.56vh]">
        <div className="absolute h-full w-full">
          <Image
            src="https://i.imgur.com/JouJG45.jpeg"
            fill
            alt="netflix hero"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-home-hero-gradient md" />
        </div>
        <div className="z-40 absolute h-full w-full pt-[100px]">
          <div className=" w-full -mt-8 flex flex-col justify-center items-center h-[calc(100%-100px)] py-0 p-8">
            <div className="flex flex-col justify-center items-center lg:mx-[226px] xl:mx-[394px] lg:space-y-6 xl:space-y-8 text-white">
              <div className="space-y-2 xl:space-y-4 text-center">
                <h1 className="lg:text-[40px] xl:text-[3.5rem] leading-tight lg:font-extrabold xl:font-black">
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
                <div className="h-14 space-x-2 flex items-center">
                  <input
                    placeholder="Email address"
                    className="h-full bg-[rgba(22,_22,_22,_0.7)] border-[rgba(128,_128,_128,_0.7)] grow border-[0.0625rem] rounded-[0.25rem] px-4 placeholder:text-white/[0.7]"
                  />
                  <button className="lg:text-lg xl:text-2xl font-bold flex items-center justify-center gap-3 px-6 py-3 bg-[#E50914] rounded-[0.25rem]">
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
  );
}
