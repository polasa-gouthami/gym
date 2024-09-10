import { useNavigate } from 'react-router-dom';

const SuccessMessage = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div className="container mx-auto p-8 text-center">
      <h1 className="text-green-500">Registration/Login Successful!</h1>
      <button onClick={handleGoHome} className="bg-blue-500 text-white px-4 py-2 mt-4 rounded">
        Go Home
      </button>
    </div>
  );
};

export default SuccessMessage;
