import React from 'react';
import ReactPlayer from 'react-player';

const AboutUs = () => {
  const handleLearnMoreClick = () => {
    alert('Clicked from About Us section');
  };

  return (
    <section className="bg-gray-200 container mx-auto px-4 py-8 rounded-lg shadow-md">
      <div className="flex flex-col md:flex-row items-center">
        
        {/* Text Section */}
        <div className="w-full md:w-1/2 text-center md:text-left md:pr-8 mb-4 md:mb-0">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose Us</h2>
          <p className="text-gray-700 mb-6">
          At our gym, we believe in providing a holistic approach to fitness.
           We stand out because we offer more than just a workout; we offer a community. 
           Our state-of-the-art equipment, highly skilled trainers, and a wide range of 
           classes ensure that you get the best results in a supportive and motivating environment. 
           Whether you're just starting your fitness journey or you're an experienced athlete, 
           we tailor our programs to meet your individual needs. Join us to experience personalized training, 
           flexible membership options, and a community that cheers you on every step of the way.


          </p>
          
        </div>

        {/* Video Section */}
        <div className="w-full md:w-1/2">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=Yko3GMseY40&pp=ygUJZ3ltIHZpZGVv"
            className="react-player"
            width="100%"
            controls
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
