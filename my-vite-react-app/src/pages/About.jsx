import React from 'react';
import ReactPlayer from 'react-player';

const AboutUs = () => {
  const handleLearnMoreClick = () => {
    alert('Clicked from About Us section');
  };

  return (
    <section id="About" className="bg-gray-700 container mx-auto px-4 py-8 rounded-lg shadow-md">
      <div className="flex flex-col md:flex-row items-center">
        
        
        <div className="w-full md:w-1/2 mb-4 md:mb-0">
        
          <ReactPlayer
            url="https://www.youtube.com/watch?v=eMjyvIQbn9M&pp=ygUaZ3ltIHRyYWluaW5nIGZvciBiZWdpbm5lcnM%3D"
            className="react-player"
            width="100%"
            controls
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 text-center md:text-left md:pl-8">
          <h2 className="text-3xl font-bold text-red-600 mb-4">About Us</h2>
          <p className="text-white mb-6">
            Join us to achieve your fitness goals with our top-notch classes and training sessions.A gym trainer, also known as a fitness trainer or personal trainer, 
            helps people improve their fitness, health, and physicality. They do this by: 
 
 Teaching: Demonstrating proper exercise techniques, form, and routines, and helping clients follow their programs safely and effectively 
  
 Motivating: Helping clients stay on track to achieve their goals 
  
 Planning: Creating fitness programs tailored to each client's needs and goals 
  
 Monitoring: Checking and recording clients' progress, such as measuring heart rate and body fat levels 
  
 Advising: Giving advice on health, nutrition, and lifestyle changes 
  
 Emergency first aid: Being able to perform emergency first aid if needed 
  
 
          </p>
          <button
            onClick={handleLearnMoreClick}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
