import Image from "next/image";
import React from "react";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

type Props = {
  name: string;
  image: string;
};

const RevivewCard = ({ image, name }: Props) => {
  return (
    <div className="w-full lg:w-[90%] relative bg-white shadow-lg rounded-xl p-6 flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-6 border border-gray-200">
      {/* Icon Quote */}
      <div className="absolute top-4 left-4 text-gray-300 text-4xl">
        <FaQuoteLeft />
      </div>
      {/* Content */}
      <div className="flex-1 text-center md:text-left mt-7">
        <p className="text-gray-700 italic text-lg leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque atque
          nisi blanditiis illo, deserunt officia laborum doloribus suscipit
          rerum nostrum voluptatem est ipsa molestiae hic eaque deleniti vel,
          delectus quas
        </p>

        {/* Stars */}
        <div className="flex justify-center md:justify-start space-x-1 mt-4">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} className="text-yellow-500 w-6 h-6" />
          ))}
        </div>

        {/* Name and Role */}
        <h1 className="text-xl font-semibold mt-4 text-gray-900">{name}</h1>
        <p className="text-gray-500 text-sm">Fullstack Web Developer</p>
      </div>
      <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-gray-200">
        <Image
          src={image}
          alt={name}
          width={180}
          height={128}
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default RevivewCard;
