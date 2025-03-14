import React from "react";
import {
  FaChartLine,
  FaCogs,
  FaLaptop,
  FaLayerGroup,
  FaMobileAlt,
  FaPalette,
  FaRocket,
  FaShieldAlt,
  FaUserFriends,
} from "react-icons/fa";

const Feature = () => {
  const features = [
    {
      icon: <FaLayerGroup className="text-red-500" />,
      text: "50+ Unique Design Blocks",
    },
    {
      icon: <FaLaptop className="text-blue-500" />,
      text: "Multiple Layouts",
    },
    {
      icon: <FaPalette className="text-purple-500" />,
      text: "Customizable Themes",
    },
    {
      icon: <FaMobileAlt className="text-green-500" />,
      text: "Fully Responsive",
    },
    {
      icon: <FaRocket className="text-orange-500" />,
      text: "Optimized for Performance",
    },
    {
      icon: <FaShieldAlt className="text-yellow-500" />,
      text: "Secure and Reliable",
    },
    {
      icon: <FaCogs className="text-gray-500" />,
      text: "Easy to Customize",
    },
    {
      icon: <FaUserFriends className="text-pink-500" />,
      text: "User Friendly Interface",
    },
    {
      icon: <FaChartLine className="text-teal-500" />,
      text: "SEO Optimized",
    },
  ];
  return (
    <div className="bg-pink-50 pt-20 pb-20">
      <div className="w-[80%] mx-auto text-center">
        <h1 className="mt-6 text-2xl md:text-3xl capitalize font-bold text-center">
          Its Everything you will ever need
        </h1>
        <div className="grid mt-16 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item, index) => (
            <div key={index} className="flex items-center justify-center p-4 bg-white rounded-lg shadow-md space-x-3">
              <div className="text-3xl w-14 h-14 bg-gray-800  flex items-center justify-center flex-col rounded-full">
                <span>{item.icon}</span>
              </div>
              <span className="font-semibold">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Feature;
