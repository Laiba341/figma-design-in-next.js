import React from 'react'

export const About = () => {
  return (
    <div className='h-screen w-auto bg-black'>
      <h1 className='font-bold text-white flex justify-center pt-10 text-5xl'>About us</h1>

      <div className=' flex justify-start mt-20'>
        <h1 className='text-white ml-28 font-bold text-2xl'>welcome to [Pizza Hunt] where we believe<br></br> that a slice of pizza
          should be more than <br></br>just food - it should be a taste experience.<br></br>
          our journey began with a  love for authentic,<br></br> hand-crafted pizzas made from the<br></br> freshest ingredients
          we source only the<br></br> finest  meats, cheases, and  produced <br></br>ensouring every bite bursts with flavoure our<br></br>
          skills chefs craft each pizza with passion,<br></br>blanding tradditional italian recipes with <br></br>innovative flavers to suit every palate.<br></br>
          whether you're here for a classic<br></br> margherita, a spicy pepperoni or a unique<br></br>
          gourmet creation,we are dedicated to <br></br>bringing you the best in every slice.
        </h1>
        <div className="flex flex-col items-center">
          <div>
            <img className="w-96 h-48 ml-72" src="../images/About 1.jpeg" alt="pizza" />
          </div>
          <div className="mt-14">
            <img className="w-80 h-44 ml-72" src="../images/About 2.jpeg" alt="pizza" />
          </div>
        </div>

          


      </div>
    </div>
  )
}

export default About
