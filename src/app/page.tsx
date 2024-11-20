import Link from 'next/link';
import Contact from './Component/Contact';

import Menu from './Component/Menu';
import About from './Component/About';
import React from 'react';

const Home = () => {
  return (
    <div>
      {/* Navigation Bar */}
      <div className="h-20 w-screen bg-black">
        <nav className="flex items-center justify-between text-white pt-5">
          {/* Logo */}
          <button className="bg-white text-black font-bold ml-6 h-8 w-20">Pizza Hut</button>

          {/* Navigation Links */}
          <div className="flex flex-wrap items-center text-base justify-end">
            <h1 className="mr-10 flex items-center hover:text-yellow-300 transition duration-300 ease-in-out">
              <Link href="/Home">Home</Link>
            </h1>
            <h1 className="mr-10 flex items-center hover:text-yellow-300 transition duration-300 ease-in-out">
              <Link href="/About">About</Link>
            </h1>
            <h1 className="mr-10 flex items-center hover:text-yellow-300 transition duration-300 ease-in-out">
              <Link href="/Menu">Menu</Link>
            </h1>
            <h1 className="mr-10 flex items-center hover:text-yellow-300 transition duration-300 ease-in-out">
              <Link href="/Order">Order</Link>
            </h1>
          </div>
        </nav>
      </div>

      {/* Hero Section with Background Image */}
      <div className="relative">
        <img className="h-screen w-screen object-cover" src="../images/home.webp" alt="view" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-white font-bold text-7xl">delicious pizza</h1>
            <h3 className="text-white text-lg mt-5 ml-5 max-w-md">
  Pizza is an Italian food that was <br></br>created in Italy, in the Naples area. It is<br></br> made with different toppings.
</h3>

          </div>
        </div>
      </div>

      {/* About and Menu Components */}
      <About />
      <Menu />
      <Contact/>
    </div>
  );
};

export default Home;
