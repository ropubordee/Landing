import Image from "next/image";
import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const AnalyticsFeature = () => {
  return (
    <div className="pt-24 pb-16">
      {/* grid */}
      <div className="w-[95%] sm:w-[80%] mx-auto items-center grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Image Content */}
        <div data-aos="fade-up" data-aos-anchor-placement="top-center">
          <Image
            src="/images/figma.png"
            alt="image"
            width={400}
            height={500}
            className="object-cover"
          />
        </div>
        {/* text Content */}
        <div className="p-6">
          <h1 className="text-base font-semibold text-blue-500">
            Figma Collaboration & Design
          </h1>
          <h1 className="mt-4 text-xl sm:text-2xl md:text-3xl font-bold text-purple-900">
            The ultimate tool for seamless UI/UX design and team collaboration
          </h1>
          <p className="mt-4 text-gray-600 text-sm font-medium leading-[2rem]">
            Figma empowers designers and teams to create, prototype, and
            collaborate in real time. Work efficiently with powerful features
            that bring ideas to life.
          </p>
          <ul className="mt-7 space-y-2 text-gray-800">
            <li className="flex items-center font-semibold">
              <FaCheckCircle className="text-blue-500 mr-2" />
              Real-time collaboration with teams
            </li>
            <li className="flex items-center font-semibold">
              <FaCheckCircle className="text-blue-500 mr-2" />
              Advanced prototyping and animations
            </li>
            <li className="flex items-center font-semibold">
              <FaCheckCircle className="text-blue-500 mr-2" />
              Seamless integration with design tools
            </li>
          </ul>
          <button
            className="mt-8 px-8 py-3 bg-purple-500 text-white font-semibold rounded-full hover:bg-purple-700
  transition-all duration-200"
          >
            Get Started &rarr;
          </button>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsFeature;
