import { useNavigate } from 'react-router-dom';

const useNavbarNavigation = () => {
  const navigate = useNavigate();

  const handleLoginBtnClick = () => {
    navigate('/login');
  };

  const handleRegisterBtnClick = () => {
    navigate('/register');
  };

  const handleProfileBtnClick = () => {
    navigate('/profile');
  };

  return {
    handleLoginBtnClick,
    handleRegisterBtnClick,
    handleProfileBtnClick,
  };
};

export default useNavbarNavigation;
