import React from "react";
import WhyChooseCard from "./WhyChooseCard";

const WhyChoose = () => {
  return (
    <div className="pt-16 pb-16">
      <h1 className="mt-6 text-2xl md:text-3xl capitalize font-bold text-center">
        Why You Choose this applcation
      </h1>
      <div className="mt-20 grid w-[90%] mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">
        <div data-aos="fade-right" data-aos-anchor-placement="top-center">
          <WhyChooseCard
            image="/images/c.png"
            title="Create Free Account"
            LinkText="Start Earning"
          />
        </div>
        <div
          data-aos="fade-right"
          data-aos-anchor-placement="top-center"
          data-aos-delay="100"
        >
          <WhyChooseCard
            image="/images/b.png"
            title="Monitor User Ananlutics"
            LinkText="Sign up your store"
          />
        </div>
        <div
          data-aos="fade-right"
          data-aos-anchor-placement="top-center"
          data-aos-delay="200"
        >
          <WhyChooseCard
            image="/images/d.png"
            title="Safe & Trusted"
            LinkText="Get the App"
          />
        </div>
        <div
          data-aos="fade-right"
          data-aos-anchor-placement="top-center"
          data-aos-delay="300"
        >
          <WhyChooseCard
            image="/images/web.png"
            title="Fast Customer Support"
            LinkText="Learn More"
          />
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
