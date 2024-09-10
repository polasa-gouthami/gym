import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 

const teamMembers = [
  {
    name: 'Richard',
    role: 'Running',
    imageUrl: 'https://images.pexels.com/photos/4944982/pexels-photo-4944982.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    name: 'John',
    role: 'Aesthetic',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuLJmgWRfQXCqWNF4hvM7LGQ0k5g0_9udD_w&s',
  },
  {
    name: 'Ben',
    role: 'Athlete',
    imageUrl: 'https://media.istockphoto.com/id/1289416200/photo/athletic-woman-doing-the-full-body-cardio-workout.jpg?s=612x612&w=0&k=20&c=IKxEnR8Jb_iJ8wv91C1NkrmMq_OfFxWII1aJFVZJTRo=',
  },
  {
    name: 'Smith',
    role: 'Yoga',
    imageUrl: 'https://cdn.prod.website-files.com/61f6a1f670934ed39d548853/64aa5ff3de12cf521d1f1291_The%20Yoga%20and%20Mindfulness%20Seekers.webp',
  },
  {
    name: 'Helen',
    role: 'Cross Fit Gym',
    imageUrl: 'https://t3.ftcdn.net/jpg/01/71/17/66/360_F_171176650_QXGmZl3vr4RVZo5i6RyxsaHnkMw5dEDt.jpg',
  },
  {
    name: 'David',
    role: 'Circuit Training',
    imageUrl: 'https://media.istockphoto.com/id/1067774764/photo/it-all-starts-with-determination.jpg?s=612x612&w=0&k=20&c=HQP48vtJZx7YC_0bx1POY52B4M--Hv5-rpM8IZF_Esk=',
  },
];

const Team = () => {
  const navigate = useNavigate(); 
  const [showAll, setShowAll] = useState(false);

  const goBack = () => {
    navigate(-1); 
  };

  const handleToggle = () => {
    setShowAll(prevState => !prevState);
  };

  const displayedMembers = showAll ? teamMembers : teamMembers.slice(0, 3);

  return (
    <section id="team" className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-gray-800">Our Team Members</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {displayedMembers.map((member, index) => (
          <div
            key={index}
            className="bg-gray-800 text-center p-4 rounded-lg shadow-lg"
          >
            <img
              src={member.imageUrl}
              alt={member.name}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold text-white">{member.name}</h3>
            <p className="text-red-500">{member.role}</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <button
          onClick={handleToggle}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          {showAll ? 'View Less' : 'Show All'}
        </button>
      </div>

      <div className="text-center mt-8">
        <button
          onClick={goBack}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Go Back
        </button>
      </div>
    </section>
  );
};

export default Team;
