'use client'
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import RevivewCard from "./RevivewCard";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1, 
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1, 
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, 
  },
};

const Revivew = () => {
  return (
    <div className="pt-16 pb-16 bg-[#fcf6fa]">
      <h1 className="mt-6 text-2xl md:text-3xl capitalize font-bold text-center">
        What Client say about us
      </h1>
      <div className="mt-20 w-[90%] md:w-[80%] mx-auto">
        <Carousel
          arrows={false}
          autoPlay={true}
          autoPlaySpeed={5000}
          infinite
          responsive={responsive}
          showDots
        >
            <RevivewCard name="John Doe" image="/images/rv1.png"/>
            <RevivewCard name="Dew Doe" image="/images/rv2.png"/>
            <RevivewCard name="Aom Doe" image="/images/rv3.png"/>
            <RevivewCard name="Norman Doe" image="/images/rv4.png"/>
        </Carousel>
      </div>
    </div>
  );
};

export default Revivew;
