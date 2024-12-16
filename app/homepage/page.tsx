// // pages/styles.js
// export default function StylesPage() {
//     return (
//       <div className="bg-[#3D348B] text-white min-h-screen p-8">
//         {/* Heading Section */}
//         <div className="text-center mb-12">
//           <h1 className="text-4xl font-bold mb-4">Use the styles</h1>
//           <p className="text-lg leading-relaxed max-w-3xl mx-auto">
//             {/* Styles in Figma mean you don’t have to repetitively enter values for typography, colors, and elevations, 
//             minimising the risk of inconsistencies and streamlining the design process. */}
//           </p>
//           <p className="text-lg leading-relaxed max-w-3xl mx-auto mt-4">
//            {/* //Within this template, you can find color and type styles, and their definitions on the style guide page. 
//             To use them, simply select them from the Figma style panel as shown below.// */}
//           </p>
//         </div>
  
//         {/* Cards Section */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {/* Text Styles Card */}
//           <div className="bg-[#1D1D1D] rounded-lg p-6">
//             <h3 className="text-lg font-semibold mb-4">Text Styles</h3>
//             <ul className="space-y-2">
//               <li className="text-gray-300">• <span className="text-white">Headings</span></li>
//               <li className="text-gray-300">• <span className="text-white">Body</span></li>
//               <ul className="ml-4">
//                 <li className="text-gray-300">
//                   <span className="font-mono text-white">Ag</span> Small · 14/150
//                 </li>
//                 <li className="text-gray-300">
//                   <span className="font-mono text-white">Ag</span> Medium · 16/150
//                 </li>
//                 <li className="text-gray-300">
//                   <span className="font-mono text-white">Ag</span> Large · 18/150
//                 </li>
//               </ul>
//             </ul>
//           </div>
  
//           {/* Images Card */}
//           <div className="bg-[#1D1D1D] rounded-lg p-6">
//             <h3 className="text-lg font-semibold mb-4">Images</h3>
//             <ul className="space-y-2 text-gray-300">
//               <li>• Blue Chair</li>
//               <li>• Three Vases</li>
//               <li>• Single Vase</li>
//               <li>• Ceiling Lamp</li>
//               <li>• Large Sofa</li>
//               <li>• Dark Chair</li>
//               <li>• Yellow Chair</li>
//             </ul>
//           </div>
  
//           {/* Color Styles Card */}
//           <div className="bg-[#1D1D1D] rounded-lg p-6">
//             <h3 className="text-lg font-semibold mb-4">Color Styles</h3>
//             <ul className="space-y-2 text-gray-300">
//               <li className="flex items-center">
//                 <span className="w-4 h-4 bg-[#2C2C54] rounded-full inline-block mr-2"></span> Dark Primary
//               </li>
//               <li className="flex items-center">
//                 <span className="w-4 h-4 bg-[#4747E7] rounded-full inline-block mr-2"></span> Primary
//               </li>
//               <li className="flex items-center">
//                 <span className="w-4 h-4 bg-gray-300 rounded-full inline-block mr-2"></span> Light Grey
//               </li>
//               <li className="flex items-center">
//                 <span className="w-4 h-4 bg-gray-400 rounded-full inline-block mr-2"></span> Border Grey
//               </li>
//               <li className="flex items-center">
//                 <span className="w-4 h-4 bg-white rounded-full inline-block mr-2"></span> White
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     );
//   }
  


// pages/styles.js

// import React from "react";

// const StylesPage = () => {
//   return (
//     <div className="bg-[#3D348B] text-white min-h-screen p-8">
//       {/* Heading Section */}
//       <div className="text-center mb-12">
//         <h1 className="text-4xl font-bold mb-4">Use the styles</h1>
//         <p className="text-lg leading-relaxed max-w-3xl mx-auto">
//           Styles in Figma mean you don’t have to repetitively enter values for
//           typography, colors, and elevations, minimising the risk of
//           inconsistencies and streamlining the design process.
//         </p>
//         <p className="text-lg leading-relaxed max-w-3xl mx-auto mt-4">
//            Within this template, you can find color and type styles, and their
//           definitions on the style guide page. To use them, simply select them
//           from the Figma style panel as shown below. 
//         </p>
//       </div>

//       {/* Cards Section */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//         {/* Text Styles Card */}
//         <div className="bg-[#1D1D1D] rounded-lg p-6">
//           <h3 className="text-lg font-semibold mb-4">Text Styles</h3>
//           <ul className="space-y-2">
//             <li className="text-gray-300">^ <span className="text-white">Headings</span></li>
//             <li className="text-gray-300">~ <span className="text-white">Body</span></li>
//             <ul className="ml-4">
//               <li className="text-gray-300">
//                 <span className="font-mono text-white">Ag</span> Small · 14/150
//               </li>
//               <li className="text-gray-300">
//                 <span className="font-mono text-white">Ag</span> Medium · 16/150
//               </li>
//               <li className="text-gray-300">
//                 <span className="font-mono text-white">Ag</span> Large · 18/150
//               </li>
//             </ul>
//           </ul>
//         </div>

//         {/* Images Card */}
//         <div className="bg-[#1D1D1D] rounded-lg p-6">
//           <h3 className="text-lg font-semibold mb-4">Images</h3>
//           <ul className="space-y-2 text-gray-300">
//             <li>• Blue Chair</li>
//             <li>• Three Vases</li>
//             <li>• Single Vase</li>
//             <li>• Ceiling Lamp</li>
//             <li>• Large Sofa</li>
//             <li>• Dark Chair</li>
//             <li>• Yellow Chair</li>
//           </ul>
//         </div>

//         {/* Color Styles Card */}
//         <div className="bg-[#1D1D1D] rounded-lg p-6">
//           <h3 className="text-lg font-semibold mb-4">Color Styles</h3>
//           <ul className="space-y-2 text-gray-300">
//             <li className="flex items-center">
//               <span className="w-4 h-4 bg-[#2C2C54] rounded-full inline-block mr-2"></span>
//               Dark Primary
//             </li>
//             <li className="flex items-center">
//               <span className="w-4 h-4 bg-[#4747E7] rounded-full inline-block mr-2"></span>
//               Primary
//             </li>
//             <li className="flex items-center">
//               <span className="w-4 h-4 bg-gray-300 rounded-full inline-block mr-2"></span>
//               Light Grey
//             </li>
//             <li className="flex items-center">
//               <span className="w-4 h-4 bg-gray-400 rounded-full inline-block mr-2"></span>
//               Border Grey
//             </li>
//             <li className="flex items-center">
//               <span className="w-4 h-4 bg-white rounded-full inline-block mr-2"></span>
//               White
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default StylesPage;

// import React from "react";

// const StyleGuide = () => {
//   return (
//     <div className="bg-[#3E348D] text-white p-10 min-h-screen">
//       {/* Header Section */}
//       <h1 className="text-3xl font-semibold mb-4">Use the styles</h1>
//       <p className="text-lg mb-6">
//         Styles in Figma mean you don’t have to repetitively enter values for typography, colors and
//         elevations minimising the risk of inconsistencies and streamlining the design process.
//       </p>
//       <p className="text-lg mb-10">
//         Within this template you can find color and type styles, and their definitions on the style
//         guide page. To use them simply select them from the Figma style panel as shown below.
//       </p>

//       {/* Main Content Grid */}
//       <div className="grid grid-cols-3 gap-8">
//         {/* Text Styles */}
//         <div className="bg-[#1E1E1E] p-6 rounded-lg shadow-lg">
//           <h2 className="font-semibold mb-4">Text Styles</h2>
//           <ul className="space-y-2">
//             {/* Headings */}
//             <li className="flex items-center space-x-2">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="w-4 h-4"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//               </svg>
//               <span>Headings</span>
//             </li>
//             {/* Body */}
//             <li className="flex items-center space-x-2 ml-4">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="w-4 h-4 transform rotate-90"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//               </svg>
//               <span>Body</span>
//             </li>
//             <ul className="ml-8 space-y-1">
//               <li>Small · 14/150</li>
//               <li>Medium · 16/150</li>
//               <li>Large · 18/150</li>
//             </ul>
//           </ul>
//         </div>

//         {/* Images */}
//         <div className="bg-[#1E1E1E] p-6 rounded-lg shadow-lg">
//           <h2 className="font-semibold mb-4">Images</h2>
//           <ul className="space-y-3">
//             <li className="flex items-center space-x-2">
//               <img src="/images/blue-chair.png" alt="Blue Chair" className="w-5 h-5" />
//               <span>Blue Chair</span>
//             </li>
//             <li className="flex items-center space-x-2">
//               <img src="/images/three-vases.png" alt="Three Vases" className="w-5 h-5" />
//               <span>Three Vases</span>
//             </li>
//             <li className="flex items-center space-x-2">
//               <img src="/images/single-vase.png" alt="Single Vase" className="w-5 h-5" />
//               <span>Single Vase</span>
//             </li>
//             <li className="flex items-center space-x-2">
//               <img src="/images/ceiling-lamp.png" alt="Ceiling Lamp" className="w-5 h-5" />
//               <span>Ceiling Lamp</span>
//             </li>
//             <li className="flex items-center space-x-2">
//               <img src="/images/large-sofa.png" alt="Large Sofa" className="w-5 h-5" />
//               <span>Large Sofa</span>
//             </li>
//           </ul>
//         </div>

//         {/* Color Styles */}
//         <div className="bg-[#1E1E1E] p-6 rounded-lg shadow-lg">
//           <h2 className="font-semibold mb-4">Color Styles</h2>
//           <ul className="space-y-3">
//             <li className="flex items-center space-x-2">
//               <span className="w-5 h-5 bg-[#2A255A] rounded-full"></span>
//               <span>Dark Primary</span>
//             </li>
//             <li className="flex items-center space-x-2">
//               <span className="w-5 h-5 bg-[#3E348D] rounded-full"></span>
//               <span>Primary</span>
//             </li>
//             <li className="flex items-center space-x-2">
//               <span className="w-5 h-5 bg-[#D9D9D9] rounded-full"></span>
//               <span>Light Grey</span>
//             </li>
//             <li className="flex items-center space-x-2">
//               <span className="w-5 h-5 bg-[#C5C5C5] rounded-full"></span>
//               <span>Border Grey</span>
//             </li>
//             <li className="flex items-center space-x-2">
//               <span className="w-5 h-5 bg-[#FFFFFF] rounded-full"></span>
//               <span>White</span>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default StyleGuide;


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
              <img src="/images/blue-chair.png" alt="Blue Chair" className="w-6 h-6 rounded-sm" />
              <span>Blue Chair</span>
            </li>
            <li className="flex items-center space-x-2">
              <img src="/images/three-vases.png" alt="Three Vases" className="w-6 h-6 rounded-sm" />
              <span>Three Vases</span>
            </li>
            <li className="flex items-center space-x-2">
              <img src="/images/single-vase.png" alt="Single Vase" className="w-6 h-6 rounded-sm" />
              <span>Single Vase</span>
            </li>
            <li className="flex items-center space-x-2">
              <img src="/images/ceiling-lamp.png" alt="Ceiling Lamp" className="w-6 h-6 rounded-sm" />
              <span>Ceiling Lamp</span>
            </li>
            <li className="flex items-center space-x-2">
              <img src="/images/large-sofa.png" alt="Large Sofa" className="w-6 h-6 rounded-sm" />
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
