import Image from "next/image";
import React from "react";

type Props = {
  title: string;
  image: string;
  LinkText: string;
};

const WhyChooseCard = ({ image, LinkText, title }: Props) => {
  return (
    <div>
      <Image
        src={image}
        alt=""
        width={145}
        height={80}
        className="object-cover mx-auto"
      />
      <h1 className="text-center text-lg mt-5 font-semibold text-gray-800">
        {title}
      </h1>
      <p className="text-gray-600 text-center font-medium text-sm mb-7 mt-4">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
        odio dicta asperiores error necessitatibus veniam ipsum repellat
        blanditiis doloribus fuga sit, rerum minus cum! Quaerat ex sint
        aspernatur saepe incidunt.
      </p>
      <p className="text-center font-semibold text-blue-900 hover:text-blue-950 transition-all duration-200 cursor-pointer">{LinkText}</p>
    </div>
  );
};

export default WhyChooseCard;
