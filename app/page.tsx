 


import React from "react";

const StyleGuide = () => {
  return (
    <div className="bg-[#3E348D] text-white p-10 min-h-screen">
      {/* Header Section */}
      <h1 className="text-3xl font-semibold mb-4">Use the styles</h1>
      <p className="text-lg mb-4 leading-relaxed">
        Styles in Figma mean you don’t have to repetitively enter values for typography, colors and
        elevations minimising the risk of inconsistencies and streamlining the design process.
      </p>
      <p className="text-lg mb-10 leading-relaxed">
        Within this template you can find color and type styles, and their definitions on the style
        guide page. To use them simply select them from the Figma style panel as shown below.
      </p>

      {/* Main Content Grid */}
      <div className="flex flex-wrap gap-8">
        {/* Text Styles - Smaller Card */}
        <div className="bg-[#1E1E1E] p-6 rounded-lg shadow-lg w-[250px]">
          <h2 className="font-semibold mb-4">Text Styles</h2>
          <ul className="space-y-2 text-sm">
            {/* Headings */}
            <li className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span>Headings</span>
            </li>
            {/* Body */}
            <li className="flex items-center space-x-2 ml-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 transform rotate-90"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span>Body</span>
            </li>
            <ul className="ml-8 space-y-1">
              <li>Small · 14/150</li>
              <li>Medium · 16/150</li>
              <li>Large · 18/150</li>
            </ul>
          </ul>
        </div>

        {/* Images - Largest Section */}
        <div className="bg-[#1E1E1E] p-6 rounded-lg shadow-lg w-[400px]">
          <h2 className="font-semibold mb-4">Images</h2>
          <ul className="space-y-3">
            <li className="flex items-center space-x-2">
              <img src="/images/Photo.png" alt="Blue Chair" className="w-6 h-6 rounded-sm" />
              <span>Blue Chair</span>
            </li>
            <li className="flex items-center space-x-2">
              <img src="/images/three vases.jpg" alt="Three Vases" className="w-6 h-6 rounded-sm" />
              <span>Three Vases</span>
            </li>
            <li className="flex items-center space-x-2">
              <img src="/images/single.jpeg" alt="Single Vase" className="w-6 h-6 rounded-sm" />
              <span>Single Vase</span>
            </li>
            <li className="flex items-center space-x-2">
              <img src="/images/lamp.jpeg" alt="Ceiling Lamp" className="w-6 h-6 rounded-sm" />
              <span>Ceiling Lamp</span>
            </li>
            <li className="flex items-center space-x-2">
              <img src="/images/sofa.jpeg" alt="Large Sofa" className="w-6 h-6 rounded-sm" />
              <span>Large Sofa</span>
            </li>
          </ul>
        </div>

        {/* Color Styles - Smaller Card */}
        <div className="bg-[#1E1E1E] p-6 rounded-lg shadow-lg w-[250px]">
          <h2 className="font-semibold mb-4">Color Styles</h2>
          <ul className="space-y-3">
            <li className="flex items-center space-x-2">
              <span className="w-5 h-5 bg-[#2A255A] rounded-full"></span>
              <span>Dark Primary</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="w-5 h-5 bg-[#3E348D] rounded-full"></span>
              <span>Primary</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="w-5 h-5 bg-[#D9D9D9] rounded-full"></span>
              <span>Light Grey</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="w-5 h-5 bg-[#C5C5C5] rounded-full"></span>
              <span>Border Grey</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="w-5 h-5 bg-[#FFFFFF] rounded-full"></span>
              <span>White</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default StyleGuide;
