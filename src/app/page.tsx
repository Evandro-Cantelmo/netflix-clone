import Image from "next/image";

import NumberedSlider from "../components/molecules/sliders/NumberedSlider";

export default function Home() {
  return (
    <div>
      <div className="w-full relative z-30">
        {" "}
        <div className="absolute min-[1920px]:bg-background-hero-gradient bg-center w-full h-full" />
        <div className="min-[1920px]:place-self-center z-20 min-[1920px]:w-[1920px] ">
          <div className="relative overflow-hidden h-[664px] min-[960px]:h-[760px]  [@media(max-height:900px)]:max-xl:h-screen [@media(max-height:900px)]:max-xl:max-h-[888px] xl:h-[888px] min-[1920px]:h-[996px]">
            <div className="absolute h-full w-full">
              <Image
                src="https://i.imgur.com/JouJG45.jpeg"
                fill
                alt="netflix hero"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-home-hero-gradient-mobile min-[600px]:bg-home-hero-gradient-tablet min-[960px]:bg-home-hero-gradient-laptop xl:bg-home-hero-gradient-desktop min-[1920px]:bg-home-hero-gradient-4k" />
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
              <div className="absolute box-border bottom-0 h-[100px] -left-[15%] w-[130%] bottom-curve-gradient border-top-left-50-100 border-top-right-50-100 before:absolute before:bg-bottom-curve-background before:h-full before:w-full before:-z-10 before:-mt-1 before:rounded-[inherit]" />
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto px-6 min-[600px]:px-8 min-[960px]:px-20 xl:px-[148px] min-[1920px]:px-[354px] z-50 max-w-[120rem] w-full -mt-8 space-y-14 min-[800px]:space-y-16">
        <div className="flex items-center gap-x-6 z-50 max-[600px]:flex-col max-[600px]:items-start ">
          <Image
            className="z-50 max-[600px]:relative top-[20px] left-4 max-[600px]:size-[67.2px]"
            src="/popcorn.svg"
            width={76.8}
            height={76.8}
            alt="arrow icon"
          />
          <div className="z-40 before:rounded-2xl before:bg-gradient-ad before:absolute before:w-full before:h-full relative w-full before:opacity-65 flex justify-between items-center  flex-wrap">
            <div className="relative py-[14.5px] px-5 max-[600px]:pt-8">
              <p className="text-xl font-bold ">
                The Netflix you love for just BRL 20.90.
              </p>
              <p className="font-semibold">
                Get our most affordable, ad-supported plan.
              </p>
            </div>
            <button className="px-4 max-[600px]:mb-8 max-md:mb-[14.5px] mr-8 ml-5 relative h-10 bg-[rgba(128,128,128,0.4)] flex items-center rounded font-bold">
              Learn More
            </button>
          </div>
        </div>
        <div>
          <h5 className="text-2xl">Trending Now</h5>
          <NumberedSlider className="my-2">
            {Array.from({ length: 20 }).map((_, index) => (
              <div
                className="flex snap-center items-center justify-center last:mr-0 md:snap-start px-[10px] min-[960px]:px-[22px]"
                key={index}
              >
                <div className="bg-red-500 min-[960px]:h-[196px] h-[156px] min-[1280px]:h-[252px] min-[960px]:min-w-[140px] min-w-[112px] min-[1280px]:min-w-[180px] rounded-lg relative">
                  <p className="absolute text-[4rem] min-[960px]:text-[5rem] min-[1280px]:text-[6.25rem] min-[1280px]:h-[130px] min-[960px]:h-28 min-[960px]:-left-6 -left-3 min-[1280px]:-left-5 bottom-0 z-50 text-black font-sans font-bold text-stroke">
                    {index + 1}
                  </p>
                </div>
              </div>
            ))}
          </NumberedSlider>
        </div>
        <div className="space-y-4">
          <h5 className="text-2xl">More Reasons to Join</h5>
          <div className="flex gap-4">
            <div className="w-[274px] h-[268px] bg-red-500 rounded-2xl relative ">
              <p className="text-2xl">Enjoy on your TV</p>
              <p>
                Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV,
                Blu-ray players, and more.
              </p>
              <Image
                className="z-50 absolute bottom-4 right-4 max-[960px]:size-[63.36px]"
                src="./computer.svg"
                width={72}
                height={72}
                alt="arrow icon"
              />
            </div>
            <div className="w-[274px] h-[268px] bg-red-500 rounded-2xl relative ">
              <p className="text-2xl">Download your shows to watch offline</p>
              <p>
                Save your favorites easily and always have something to watch.
              </p>
              <Image
                className="z-50 absolute bottom-4 right-4 max-[960px]:size-[63.36px]"
                src="./download.svg"
                width={72}
                height={72}
                alt="arrow icon"
              />
            </div>
            <div className="w-[274px] h-[268px] bg-red-500 rounded-2xl relative ">
              <p className="text-2xl">Watch everywhere</p>
              <p>
                Stream unlimited movies and TV shows on your phone, tablet,
                laptop, and TV.
              </p>
              <Image
                className="z-50 absolute bottom-4 right-4 max-[960px]:size-[63.36px]"
                src="./telescope.svg"
                width={72}
                height={72}
                alt="arrow icon"
              />
            </div>
            <div className="w-[274px] h-[268px] bg-red-500 rounded-2xl relative ">
              <p className="text-2xl">Create profiles for kids</p>
              <p>
                Send kids on adventures with their favorite characters in a
                space made just for them — free with your membership.
              </p>
              <Image
                className="z-50 absolute bottom-4 right-4 max-[960px]:size-[63.36px]"
                src="./kidsProfiles.svg"
                width={72}
                height={72}
                alt="arrow icon"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
