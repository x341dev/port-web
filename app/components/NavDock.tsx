import { useNavigate } from 'react-router';
import { FaHouse, FaUser, FaGithub } from 'react-icons/fa6';
import Dock from './Dock';

export default function NavDock() {
  const navigate = useNavigate();

  const items = [
    {
      icon: <FaHouse size={24} />,
      label: 'Home',
      onClick: () => navigate('/')
    },
    {
      icon: <FaUser size={24} />,
      label: 'About',
      onClick: () => navigate('/about')
    },
    {
      icon: <FaGithub size={24} />,
      label: 'GitHub',
      onClick: () => window.open('https://github.com/x341dev', '_blank')
    }
  ];

  return (
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
      <Dock items={items} />
    </div>
  );
}
