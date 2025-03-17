import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="w-full pt-[4vh] md:pt-[12vh] h-screen bg-[#f7f6fb]">
      <div className="flex justify-center flex-col w-[90%] sm:w-[80%] h-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          {/* Content */}
          <div className="">
            {/* top box */}
            <div className="w-fit py-1.5 px-2 md:px-5 rounded-full shadow-md flex items-center space-x-3 bg-white">
              <div
                className="px-3 py-1 md:px-5 mdpy-1 rounded-full bg-blue-700 md:text-base sm:text-sm text-xs
                    text-white"
              >
                News
              </div>
              <p className="text-xs sm:text-sm">
                We have updated our term & conditon policy
              </p>
            </div>
            {/* Heading */}
            <h1
              data-aos="fade-up"
              className="text-2xl sm:text-4xl md:text-5xl mt-6 mb-6 font-bold md:leading-[3rem] lg:leading-[3.5rem]"
            >
              The preier workspace companion for your daily needs.
            </h1>
            {/* Dscription */}
            <p className="text-gray-700">
              A refined design with smooth typography and balanced spacing. The
              color palette conveys professionalism while maintaining visual and
              sophisticated design with a touch of professionalism appeal.
            </p>
            {/* icon 3D */}
            <div className="flex mt-8 mb-8 items-center space-x-4 ">
              <Image
                src="/images/ig.png"
                alt="ig"
                width={150}
                height={150}
                className="  sm:max-w-sm md:max-w-md object-cover"
              />
              {/* <Image src='/images/git.png' alt="git" width={150} height={150} className="  sm:max-w-sm md:max-w-md object-cover"/> */}
              <Image
                src="/images/line.png"
                alt="line"
                width={150}
                height={150}
                className=" sm:max-w-sm md:max-w-md object-cover"
              />
            </div>
          </div>
          {/* Image Cntent */}
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className=" hidden lg:block"
          >
            <Image src="/images/a.png" alt="hero" width={700} height={700} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
