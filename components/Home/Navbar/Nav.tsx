"use client";
import { navLinks } from "@/constant/Constant";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { HiBars3BottomRight } from "react-icons/hi2";

const Nav = () => {
  const [navBg, setNavBg] = useState(false);

  const handler = () => {
    if (window.scrollY >= 90) setNavBg(true);
    if (window.scrollY < 90) setNavBg(false);
  };

  useEffect(() => {
    handler();
    window.addEventListener("scroll", handler);
    return () => {
      window.removeEventListener("scroll", handler);
    };
  }, []);

  return (
    <div
      className={`fixed ${
        navBg ? "bg-white shadow-md" : "fixed"
      } w-full transition-all duration-200 h-[12vh] z-[1000]`}
    >
      <div className="flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto">
        {/* LOGO */}
        <h1 className="text-xl md:text-2xl font-extrabold">
          <span className="text-3xl md:text-4xl text-pink-700">A</span>
          ppify
        </h1>
        {/* NavLinks */}
        <div className="hidden lg:flex items-center space-x-10">
          {navLinks.map((link) => {
            return (
              <Link href={link.url} key={link.id}>
                <p
                  className="
              relative text-base font-medium w-fit block 
              after:block after:content-[''] after:absolute after:h-[3px]
              after:bg-pink-600 after:w-full after:scale-x-0 
              hover:after:scale-x-100 after:transition after:duration-300 after:origin-right"
                >
                  {link.label}
                </p>
              </Link>
            );
          })}
        </div>
        {/* Buttons */}
        <div className="flex items-center space-x-4">
          <button className="md:px-8 md:py-2.5 px-6 py-2 text-white font-semibold text-base bg-blue-700 hover:bg-blue-900 transition-all duration-200 rounded-full">
            Join Now
          </button>
          {/* Burger memu */}
          <HiBars3BottomRight className="w-8 h-8 cursor-pointer text-black lg:hidden" />
        </div>
      </div>
    </div>
  );
};

export default Nav;
