// pages/index.js
export default function ContentBlocks() {
    return (
      <div className="bg-[#7a5cc1] text-white min-h-screen p-8">
        {/* Header Section */}
        <div className="text-left mb-12">
          <h2 className="text-3xl font-bold mb-4">Use the content blocks</h2>
          <p className="text-lg max-w-716*72 mx-auto">
            We’ve built out a multitude of content blocks for you to use in your landing pages. From
            hero sections, forms, CTAs to pricing sections. Everything you need to get started
            building polished, modern landing pages.
          </p>
        </div>
  
        {/* Content Block */}
        <div className="flex flex-col lg:flex-row bg-white rounded-lg overflow-hidden shadow-lg">
          {/* Left Image */}
          <div className="lg:w-1/2">
            <img
              src="/images/Image.jpg"
              alt="Living Room Sofa"
              className="w-full h-full object-cover"
            />
          </div>
  
          {/* Right Form Section */}
          <div className="lg:w-1/2 flex flex-col justify-center p-8 text-black">
            <h3 className="text-2xl font-semibold mb-4">Join the club and get the benefits</h3>
            <p className="text-gray-600 mb-6">
              Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop up
              stores and more.
            </p>
  
            {/* Email Input and Button */}
            <div className="flex">
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full border border-gray-300 rounded-l-lg p-3 text-gray-700"
              />
              <button className="bg-[#5A4B81] text-white px-6 rounded-r-lg hover:bg-[#463b6b]">
                Sign up
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  