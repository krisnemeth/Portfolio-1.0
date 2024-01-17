import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function SplashPage() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('/home');
    }, 3000); // change page after 3 seconds
  }, [navigate]);

  return (
    <div className='flex items-center justify-center h-screen'>
      <h1 className='text-4xl font-jetBrainsExtraBold'>HELLO THERE</h1>
    </div>
  );
}

export default SplashPage;
