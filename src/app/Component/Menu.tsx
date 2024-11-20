import React from 'react';

const Menu = () => {
  return (
    <div className="min-h-screen w-full bg-black">
      <h1 className="font-bold text-white flex justify-center pt-10 text-5xl">Menu</h1>
      <div className="flex flex-wrap justify-center mt-10">
        {/* Image Section 1 */}
        <div className="flex flex-wrap justify-center">
          <div className="flex flex-col items-center m-7">
            <img className="h-72 w-80" src="../images/image (1).jpeg" alt="pizza" />
            <button className="w-3/4 mt-4 py-2 bg-yellow-400 text-red-600 font-bold text-lg">Price: 1000</button>
          </div>
          <div className="flex flex-col items-center m-7">
            <img className="h-72 w-80" src="../images/images (2).jpeg" alt="pizza" />
            <button className="w-3/4 mt-4 py-2 bg-yellow-400 text-red-600 font-bold text-lg">Price: 1500</button>
          </div>
          <div className="flex flex-col items-center m-7">
            <img className="h-72 w-80" src="../images/About 2.jpeg" alt="pizza" />
            <button className="w-3/4 mt-4 py-2 bg-yellow-400 text-red-600 font-bold text-lg">Price: 2000</button>
          </div>
        </div>

        {/* Image Section 2 */}
        <div className="flex flex-wrap justify-center mt-10">
          <div className="flex flex-col items-center m-7">
            <img className="h-72 w-80" src="../images/images (4).jpeg" alt="pizza" />
            <button className="w-3/4 mt-4 py-2 bg-yellow-400 text-red-600 font-bold text-lg">Price: 2500</button>
          </div>
          <div className="flex flex-col items-center m-7">
            <img className="h-72 w-80" src="../images/images (5).jpeg" alt="pizza" />
            <button className="w-3/4 mt-4 py-2 bg-yellow-400 text-red-600 font-bold text-lg">Price: 3000</button>
          </div>
          <div className="flex flex-col items-center m-7">
            <img className="h-72 w-80" src="../images/images (6).jpeg" alt="pizza" />
            <button className="w-3/4 mt-4 py-2 bg-yellow-400 text-red-600 font-bold text-lg">Price: 1800</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
