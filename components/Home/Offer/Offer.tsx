import React from "react";

const Offer = () => {
    return (
        <div className="flex items-center justify-center pt-24 pb-24 mb-20 bg-black">
          <div className="text-center px-6">
            <h1 className="text-white text-2xl md:text-3xl font-semibold mb-4">
              Unlock Ultimate Features with Premium
            </h1>
            <p className="text-gray-400 mb-8">Take your app to the next level with our exclusive tools.</p>
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 px-6 rounded-full text-lg font-medium mb-4 hover:from-purple-600 hover:to-pink-600 transition-all duration-300">
              Start Free Trial
            </button>
            <p className="text-gray-400">No credit card required</p>
          </div>
        </div>
      );
      
};

export default Offer;
