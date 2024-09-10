import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-gray-700 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-4 md:mb-0">
            <h2 className="text-lg font-semibold">GYM</h2>
            <p className="text-gray-400 mt-2">Lorem ipsum dolor sit feugiat varius nue aliquet.</p>
            <div className="flex space-x-4 mt-4">
              <a href="https://www.facebook.com/your-page" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="https://www.instagram.com/your-profile" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="https://www.youtube.com/channel/your-channel-id" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <FontAwesomeIcon icon={faYoutube} />
              </a>
            </div>
          </div>
          
          <div className="w-full md:w-1/4 mb-4 md:mb-0">
            <h3 className="text-lg font-semibold">Healthy Living</h3>
            <ul className="mt-2 space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Lorem</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Lorem ipsum</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Lorem</a></li>
            </ul>
          </div>
          
          <div className="w-full md:w-1/4 mb-4 md:mb-0">
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="mt-2 space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Lorem</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Lorem ipsum</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Lorem</a></li>
            </ul>
          </div>
          
          <div className="w-full md:w-1/4 mb-4 md:mb-0">
            <h3 className="text-lg font-semibold">Programs</h3>
            <ul className="mt-2 space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Lorem</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Lorem</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Lorem</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400">
          &copy; 2023 All rights reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
