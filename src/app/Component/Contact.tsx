import React from 'react'

export const Contact = () => {
  return (
    <div className="h-screen w-full bg-yellow-400 flex items-center justify-center">
      <div className="flex w-full max-w-5xl mx-auto gap-10 items-start">
        {/* Form - Left Side */}
        <div className="flex flex-col space-y-6 w-full max-w-lg">
          <h1 className="font-bold text-black text-center text-5xl mb-10">Order Now</h1>

          {/* Form Fields without Gray Placeholder Styling */}
          <div className="flex flex-col space-y-4">
            <label className="text-lg font-medium">
              Name:
              <input
                className="p-2 mt-1 border border-gray-400 rounded-md w-full placeholder-transparent focus:placeholder-gray-500"
                type="text"
                placeholder="Enter your name"
              />
            </label>

            <label className="text-lg font-medium">
              Phone Number:
              <input
                className="p-2 mt-1 border border-gray-400 rounded-md w-full placeholder-transparent focus:placeholder-gray-500"
                type="text"
                placeholder="Enter your phone number"
              />
            </label>

            <label className="text-lg font-medium">
              City/Society:
              <input
                className="p-2 mt-1 border border-gray-400 rounded-md w-full placeholder-transparent focus:placeholder-gray-500"
                type="text"
                placeholder="Enter your city or society"
              />
            </label>

            <label className="text-lg font-medium">
              Pizza Name:
              <input
                className="p-2 mt-1 border border-gray-400 rounded-md w-full placeholder-transparent focus:placeholder-gray-500"
                type="text"
                placeholder="Enter the pizza name"
              />
            </label>

            <label className="text-lg font-medium">
              Size:
              <input
                className="p-2 mt-1 border border-gray-400 rounded-md w-full placeholder-transparent focus:placeholder-gray-500"
                type="text"
                placeholder="Enter the size"
              />
            </label>
          </div>
        </div>

        {/* Image - Right Side */}
        <div className="flex-shrink-0">
          <img className="w-80 h-96 object-cover mt-32 ml-40" src="../images/cheff.jpeg" alt="pizza" />
        </div>
      </div>
    </div>
  )
}
export default Contact
