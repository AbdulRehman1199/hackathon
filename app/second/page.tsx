// import React from "react";


// const ComponentsDemo = () => {
//   return (
//     <div className="bg-[#3E348D] text-white p-10 min-h-screen">
//       {/* Heading */}
//       <h1 className="text-3xl font-semibold mb-4">Use the components</h1>
//       <p className="mb-6 text-lg">
//         {/* There’s a bunch of pre-configured components for you to use in this free
//         template. Simply go to the Style Guide page and under the components
//         header you can see everything included. */}
//       </p>
//       <p className="text-lg mb-10">
//         {/* Buttons, steppers, filter options and more for you to integrate into
//         your screens and modify to your tastes and requirements. */}
//       </p>

//       {/* Cards Section */}
//       <div className="flex space-x-6 mb-10">
//         {/* Card 1 */}
//         <div className="bg-[#94C6C7] p-4 rounded-lg shadow-lg">
//           <img 
//             src="/images/Photo.png"
//             alt="/images/Dandy Chair"
//             className="rounded-md mb-4"
//           />
//           <p className="font-medium text-white">The Dandy chair</p>
//           <p className="text-white">£250</p>
//         </div>

//         {/* Card 2 */}
//         <div className="bg-[#EAD2B7] p-4 rounded-lg shadow-lg">
//           <img
//             src="/images/Product Card.png"
//             alt="Small Tables"
//             className="rounded-md mb-4"
//           />
//           <p className="font-medium text-white">Small tables</p>
//           <p className="text-white">£250</p>
//         </div>
//       </div>

//       {/* Buttons Section */}
//       <div className="flex space-x-4 mb-10">
//         <button className="bg-white text-[#3E348D] px-6 py-2 rounded-md">
//           Button
//         </button>
//         <button className="bg-[#2E254E] text-white px-6 py-2 rounded-md">
//           Button
//         </button>
//         <button className="bg-white text-[#3E348D] px-6 py-2 rounded-md">
//           Button
//         </button>
//         <button className="bg-[#6A5FAE] text-white px-6 py-2 rounded-md">
//           Button
//         </button>
//       </div>

//       {/* Checkbox Section */}
//       <div className="grid grid-cols-2 gap-4">
//         <label className="flex items-center">
//           <input
//             type="checkbox"
//             className="form-checkbox h-5 w-5 text-white"
//             defaultChecked
//           />
//           <span className="ml-2 text-white">Homeware</span>
//         </label>

//         <label className="flex items-center">
//           <input type="checkbox" className="form-checkbox h-5 w-5 text-white" />
//           <span className="ml-2 text-white">Furniture</span>
//         </label>

//         <label className="flex items-center">
//           <input type="checkbox" className="form-checkbox h-5 w-5 text-white" />
//           <span className="ml-2 text-white">Vases</span>
//         </label>

//         <label className="flex items-center">
//           <input type="checkbox" className="form-checkbox h-5 w-5 text-white" />
//           <span className="ml-2 text-white">Products</span>
//         </label>

//         <label className="flex items-center">
//           <input type="checkbox" className="form-checkbox h-5 w-5 text-white" />
//           <span className="ml-2 text-white">Components</span>
//         </label>

//         <label className="flex items-center">
//           <input type="checkbox" className="form-checkbox h-5 w-5 text-white" />
//           <span className="ml-2 text-white">Styleguide</span>
//         </label>
//       </div>
//     </div>
//   );
// };

// export default ComponentsDemo;


// import React from "react";

// const ComponentsDemo = () => {
//   return (
//     <div className="bg-[#5548bc] text-white p-10 min-h-screen">
//       {/* Heading */}
//       <h1 className="text-3xl font-semibold mb-4">Use the components</h1>
//       <p className="mb-6 text-lg">
//         {/* Your paragraph content here */}
//       </p>
//       <p className="text-lg mb-10">
//         {/* Your paragraph content here */}
//       </p>

//       {/* Flex Container: Cards + Buttons/Checkbox */}
//       <div className="flex space-x-8">
//         {/* Cards Section */}
//         <div className="flex space-x-6 w-2/3">
//           {/* Card 1 */}
//           <div className="bg-[#94C6C7] p-4 rounded-lg shadow-lg w-full">
//             <img
//               src="/images/Photo.png"
//               alt="Dandy Chair"
//               className="rounded-md mb-4"
//             />
//             <p className="font-medium text-white">The Dandy chair</p>
//             <p className="text-white">£250</p>
//           </div>

//           {/* Card 2 */}
//           <div className="bg-[#EAD2B7] p-4 rounded-lg shadow-lg w-full">
//             <img
//               src="/images/Product Card.png"
//               alt="Small Tables"
//               className="rounded-md mb-4"
//             />
//             <p className="font-medium text-white">Small tables</p>
//             <p className="text-white">£250</p>
//           </div>
//         </div>

//         {/* Buttons and Checkbox Section */}
//         <div className="w-1/3">
//           {/* Buttons Section */}
//           <div className="flex flex-wrap space-x-4 mb-8">
//             <button className="bg-white text-[#3E348D] px-6 py-2 rounded-md mb-2">
//               Button
//             </button>
//             <button className="bg-[#2E254E] text-white px-6 py-2 rounded-md mb-2">
//               Button
//             </button>
//             <button className="bg-white text-[#3E348D] px-6 py-2 rounded-md mb-2">
//               Button
//             </button>
//             <button className="bg-[#6A5FAE] text-white px-6 py-2 rounded-md mb-2">
//               Button
//             </button>
//           </div>

//           {/* Checkbox Section */}
//           <div className="grid grid-cols-1 gap-4">
//             <label className="flex items-center">
//               <input
//                 type="checkbox"
//                 className="form-checkbox h-5 w-5 text-white"
//                 defaultChecked
//               />
//               <span className="ml-2 text-white">Homeware</span>
//             </label>

//             <label className="flex items-center">
//               <input
//                 type="checkbox"
//                 className="form-checkbox h-5 w-5 text-white"
//               />
//               <span className="ml-2 text-white">Furniture</span>
//             </label>

//             <label className="flex items-center">
//               <input
//                 type="checkbox"
//                 className="form-checkbox h-5 w-5 text-white"
//               />
//               <span className="ml-2 text-white">Vases</span>
//             </label>

//             <label className="flex items-center">
//               <input
//                 type="checkbox"
//                 className="form-checkbox h-5 w-5 text-white"
//               />
//               <span className="ml-2 text-white">Products</span>
//             </label>

//             <label className="flex items-center">
//               <input
//                 type="checkbox"
//                 className="form-checkbox h-5 w-5 text-white"
//               />
//               <span className="ml-2 text-white">Components</span>
//             </label>

//             <label className="flex items-center">
//               <input
//                 type="checkbox"
//                 className="form-checkbox h-5 w-5 text-white"
//               />
//               <span className="ml-2 text-white">Styleguide</span>
//             </label>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ComponentsDemo;



import React from "react";

const ComponentsDemo = () => {
  return (
    <div className="bg-[#5548bc] text-white p-6 md:p-10 min-h-screen">
      {/* Heading */}
      <h1 className="text-3xl font-semibold mb-4">Use the components</h1>
      <p className="mb-6 text-lg leading-relaxed">
        There’s a bunch of pre-configured components for you to use in this free
        template. Simply go to the Style Guide page and under the components
        header, you can see everything included.
      </p>
      <p className="text-lg mb-8">
        Buttons, steppers, filter options and more for you to integrate into
        your screens and modify to your tastes and requirements.
      </p>

      {/* Flex Container */}
      <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8">
        {/* Cards Section */}
        <div className="flex space-x-6 w-full md:w-2/3">
          {/* Card 1 */}
          <div className="bg-[#94C6C7] p-4 rounded-lg shadow-lg w-1/2">
            <img
              src="/images/Photo.png"
              alt="The Dandy chair"
              className="rounded-md h-64 w-full object-cover mb-4"
            />
            <p className="font-medium text-white">The Dandy chair</p>
            <p className="text-white">£250</p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#EAD2B7] p-4 rounded-lg shadow-lg w-1/2">
            <img
              src="/images/Product Card.png"
              alt="Small tables"
              className="rounded-md h-64 w-full object-cover mb-4"
            />
            <p className="font-medium text-white">Small tables</p>
            <p className="text-white">£250</p>
          </div>
        </div>

        {/* Buttons & Checkbox Section */}
        <div className="w-full md:w-1/3">
          {/* Buttons Section */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <button className="bg-white text-[#3E348D] px-6 py-2 rounded-md">
              Button
            </button>
            <button className="bg-[#2E254E] text-white px-6 py-2 rounded-md">
              Button
            </button>
            <button className="bg-white text-[#3E348D] px-6 py-2 rounded-md">
              Button
            </button>
            <button className="bg-[#6A5FAE] text-white px-6 py-2 rounded-md">
              Button
            </button>
          </div>

          {/* Checkbox Section */}
          <div className="space-y-4">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-[#5548bc]"
              />
              <span>Furniture</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-[#5548bc]"
                defaultChecked
              />
              <span>Homeware</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-[#5548bc]"
              />
              <span>Vases</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-[#5548bc]"
              />
              <span>Products</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-[#5548bc]"
              />
              <span>Components</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-[#5548bc]"
              />
              <span>Styleguide</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComponentsDemo;
