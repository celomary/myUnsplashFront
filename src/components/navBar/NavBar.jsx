import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Toolbar,
} from '@mui/material';
import { useLocation } from 'react-router-dom';
import { NavBarContainer, NavBarButton } from './styled';
import TransparentLink from '../ui/TransparentLink';
import useAuth from '../../hooks/useAuth';
import useNavbarNavigation from '../../hooks/useNavbarNavigation';

export default function NavBar() {
  const location = useLocation();
  const { user, logout } = useAuth();
  const {
    handleLoginBtnClick,
    handleRegisterBtnClick,
    handleProfileBtnClick,
  } = useNavbarNavigation();

  const renderPublicBtns = () => (
    <Grid container gap="10px">
      <NavBarButton onClick={handleLoginBtnClick}>
        Login
      </NavBarButton>
      <NavBarButton onClick={handleRegisterBtnClick}>
        Register
      </NavBarButton>
    </Grid>
  );

  const profileButton = location.pathname !==
    '/profile' && (
    <NavBarButton onClick={handleProfileBtnClick}>
      Profile
    </NavBarButton>
  );

  const renderPrivateBtns = () => (
    <Grid container gap="10px">
      {profileButton}
      <NavBarButton onClick={logout}>Logout</NavBarButton>
    </Grid>
  );

  const renderCurrentActiveBtns = user.isAuthenticated
    ? renderPrivateBtns
    : renderPublicBtns;

  const renderLogo = () => (
    <TransparentLink to="/">
      <Typography
        variant="h4"
        component="h1"
        fontSize="22px"
        fontWeight="700"
      >
        Unsplash
      </Typography>
    </TransparentLink>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <NavBarContainer>
        <Toolbar>
          <Grid container justifyContent="space-between">
            <Grid item>{renderLogo()}</Grid>
            <Grid item>{renderCurrentActiveBtns()}</Grid>
          </Grid>
        </Toolbar>
      </NavBarContainer>
    </Box>
  );
}
