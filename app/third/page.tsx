
  

// pages/index.js
export default function Home() {
    return (
      <div className="bg-[#5A4B81] text-white min-h-screen p-8">
        {/* Section Header */}
        <div className="text-left mb-8">
          <h1 className="text-3xl font-bold mb-4">Check the layouts</h1>
          <p className="text-lg">
             As well as components and styles we’ve built a bunch of layouts in both mobile and
            desktop sizes. Play around with replacing and modifying the nested content blocks and
            toggle between mobile and desktop. 
          </p>
        </div>
  
        {/* Card Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <div className="bg-[#94C6C7]">
              <img
                src="/images/Product v3 (3).png"
                alt="The Dandy Chair"
                className="w-191.2px h-584.72px object-cover"
              />
            </div>
            <div className="p-4 text-black">
              <p className="text-sm text-gray-500 mb-2">Free delivery on all orders over £50</p>
              <h3 className="text-xl font-semibold">Avion</h3>
            </div>
          </div>
  
          {/* Card 2 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <div className="bg-gray-100">
              <img
                src="/images/Product v3 (4).png"
                alt="The Minimalist Chair"
                className="w-191.2px h-584.72px object-cover"
              />
            </div>
            <div className="p-4 text-black">
              <p className="text-sm text-gray-500 mb-2">Free delivery on all orders over £50</p>
              <h3 className="text-xl font-semibold">Avion</h3>
            </div>
          </div>
  
          {/* Card 3 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <div className="bg-[#EAD2B7]">
              <img
                src="/images/Product v3 (5).png"
                alt="Vase with Plant"
                className="w-191.2 h-584.72px object-cover"
              />
            </div>
            <div className="p-4 text-black">
              <p className="text-sm text-gray-500 mb-2">Free delivery on all orders over £50</p>
              <h3 className="text-xl font-semibold">Avion</h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
