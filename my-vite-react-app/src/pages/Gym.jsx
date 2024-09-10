import React from 'react';
import OurTeam from './OurTeam';
import About from './About';
import Choose from './Choose';
import Membership from './Membership';
import Footer from './Footer';

function Gym() {
  return (
    <div className=''>
      <div className="relative h-[450px] w-full">
        <img
          className='h-full w-full object-cover'
          src="https://images.pexels.com/photos/841128/pexels-photo-841128.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="gym images"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold text-center px-4">
            Achieve Your Fitness Goals with Us
          </h1>
        </div>
      </div>
       
      <About />
      <Choose />
      <OurTeam />
      <Membership />
      <Footer />
    </div>
  );
}

export default Gym;
