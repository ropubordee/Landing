"use client";
import React, { useEffect } from "react";
import Hero from "./Hero/Hero";
import WhyChoose from "./WhyChoose/WhyChoose";
import AnalyticsFeature from "./AnalyticsFeature/AnalyticsFeature";
import Feature from "./Feature/Feature";
import Revivew from "./Revivew/Revivew";
import Offer from "./Offer/Offer";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  const initAos = async () => {
    await import("aos");
    AOS.init({
      duration: 1000,
      easing: "ease",
      once: true,
      anchorPlacement: "top-bottom",
    });
  };

  useEffect(() => {
    initAos();
  });

  return (
    <div className="overflow-hidden">
      <Hero />
      <WhyChoose />
      <AnalyticsFeature />
      <Feature />
      <Revivew />
      <Offer />
    </div>
  );
};

export default Home;
