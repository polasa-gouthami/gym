import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Membership = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleGetStarted = () => {
    navigate('/register'); 
  };

  return (
    
    <div id="pricing" className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-10">Membership</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-green-500 mb-4">Day Pass</h2>
          <p className="text-4xl font-bold mb-6">$30</p>
          <ul className="space-y-2 text-gray-300">
            <li>1 Day Pass</li>
            <li>Free Gym Access</li>
            <li>24 Hour Access</li>
          </ul>
        </div>
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-green-500 mb-4">Month to Month</h2>
          <p className="text-4xl font-bold mb-6">$100</p>
          <ul className="space-y-2 text-gray-300">
            <li>$99 Joining Fee</li>
            <li>No Contract</li>
            <li>Free Gym Access</li>
            <li>1 Group Class Included</li>
            <li>24 Hour Access</li>
          </ul>
        </div>
      </div>
      <button
        onClick={handleGetStarted}
        className="mt-8 px-6 py-3 bg-green-500 text-white font-bold rounded-lg shadow-lg hover:bg-green-600"
      >
        Get Started
      </button>
    </div>
     

 );
};

export default Membership;
