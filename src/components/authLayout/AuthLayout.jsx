import React from 'react';
import { Typography, Alert } from '@mui/material';
import propTypes from 'prop-types';
import {
  AuthContainer,
  InformationContainer,
  ImageContainer,
  AuthLogo,
  AuthHeaderGridContainer,
} from './styled';
import TransparentLink from '../ui/TransparentLink';
import useAlerts from '../../hooks/useAlerts';

function AuthLayout({ title, subtitle, renderForm }) {
  const { alerts } = useAlerts();

  const renderHeader = () => (
    <>
      <TransparentLink to="/" data-testid="homeLink">
        <AuthLogo variant="p" component="h1">
          Unsplash
        </AuthLogo>
      </TransparentLink>
      <AuthHeaderGridContainer>
        <Typography variant="h4" fontWeight={500}>
          {title}
        </Typography>
        <Typography color="#555">{subtitle}</Typography>
      </AuthHeaderGridContainer>
    </>
  );

  const renderAlerts = () => (
    <>
      {alerts.map((alert) => (
        <Alert
          severity={alert.type}
          sx={{
            width: '60%',
            marginX: 'auto',
            marginY: '20px',
          }}
          key={alert.id}
        >
          {alert.message}
        </Alert>
      ))}
    </>
  );

  return (
    <AuthContainer maxWidth="xl">
      <InformationContainer>
        {renderHeader()}
        {renderAlerts()}
        {renderForm()}
      </InformationContainer>
      <ImageContainer
        src="https://source.unsplash.com/CcCeHvhtGu0"
        alt="hero"
      />
    </AuthContainer>
  );
}

AuthLayout.propTypes = {
  title: propTypes.string.isRequired,
  subtitle: propTypes.string.isRequired,
  renderForm: propTypes.func.isRequired,
};

export default AuthLayout;
