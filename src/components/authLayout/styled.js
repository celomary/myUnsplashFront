import {
  Box,
  Typography,
  Grid,
  Button,
  TextField,
} from '@mui/material';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';

export const AuthContainer = styled(Box)({
  display: 'flex',
  width: '100%',
  height: '100vh',
});

export const InformationContainer = styled(Box)({
  width: '60%',
  padding: '0 20px',
  height: '100vh',
});

export const ImageContainer = styled('img')({
  width: '40%',
  height: '100vh',
});

export const AuthLogo = styled(Typography)({
  fontSize: 22,
  marginTop: '20px',
  marginLeft: '10px',
});

export const AuthHeaderGridContainer = styled(Grid)({
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  display: 'flex',
  marginTop: '20px',
});

export const AuthButton = styled(Button)({
  backgroundColor: '#000',
  color: '#fff',
  border: '1px solid transparent',
  minWidth: '100px',
  width: 'minContent',
  '&:hover': {
    backgroundColor: '#fff',
    color: '#000',
    border: '1px solid #000',
  },
});

export const FormAuthContainer = styled('form')({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '15px',
  alignItems: 'center',
  marginTop: '24px',
});

export const FormTextField = styled(TextField)({
  width: '60%',
});

export const FormLink = styled(Link)({
  color: '#444',
  textDecoration: 'none',
  '&:hover': {
    textDecoration: 'underline',
  },
});
