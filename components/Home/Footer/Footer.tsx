import Link from "next/link";
import React from "react";
import {
  FaDribbble,
  FaEnvelope,
  FaFacebook,
  FaGlobe,
  FaMapMarkedAlt,
  FaPhoneAlt,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-white py-10">
      <div className="w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div>
            <h1 className="text-xl md:text-2xl font-extrabold">
              <span className="text-3xl md:text-4xl text-pink-700">A</span>
              ppify
            </h1>
            <p className="text-gray-600 text-sm mt-2">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit
              blanditiis quod dicta dolore, facilis, iste tenetur beatae porro
              officia, possimus ad voluptate quis rem ea magni ut animi!
              Dolorum, nihil.
            </p>
          </div>

          {/* About us links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800">About Us</h3>
            <ul className="mt-4 space-y-2 text-sm font-medium text-gray-600">
              <li>Support Center</li>
              <li>Customer Support</li>
              <li>Our Team</li>
              <li>Copyright</li>
              <li>Popular Campaigns</li>
            </ul>
          </div>

          {/* Services links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800">Services</h3>
            <ul className="mt-4 space-y-2 text-sm font-medium text-gray-600">
              <li>Consulting</li>
              <li>Marketing</li>
              <li>Branding</li>
              <li>Web Development</li>
              <li>SEO Optimization</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800">
              Contact Info
            </h3>
            <ul className="mt-4 space-y-2 text-sm font-medium text-gray-600">
              <li className="flex items-center">
                <FaMapMarkedAlt className="mr-2 text-pink-700" />
                Amsterdam, Netherlands
              </li>
              <li className="flex items-center">
                <FaPhoneAlt className="mr-2 text-pink-700" />
                +31 123 456 789
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-2 text-pink-700" />
                contact@appify.com
              </li>
              <li className="flex items-center">
                <FaGlobe className="mr-2 text-pink-700" />
                www.appify.com
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 border-t pt-8 flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm">
          <p className="text-center md:text-left">
            &copy; 2024 Webdev, All Rights Reserved.
          </p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <span className="font-medium">Follow Us:</span>
            <Link
              href="#"
              className="text-gray-500 hover:text-gray-800 text-xl"
            >
              <FaFacebook />
            </Link>
            <Link
              href="#"
              className="text-gray-500 hover:text-gray-800 text-xl"
            >
              <FaTwitter />
            </Link>
            <Link
              href="#"
              className="text-gray-500 hover:text-gray-800 text-xl"
            >
              <FaDribbble />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
