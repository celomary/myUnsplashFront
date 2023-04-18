import React from 'react';
import {
  Box,
  Grid,
  Typography,
  Button,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import imageNotFound from '../../assets/notFoundIcon.png';

export default function NotFound() {
  const navigate = useNavigate();

  const handleClick = () => navigate('/');

  return (
    <Grid
      container
      sx={{
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100%',
        gap: '20px',
      }}
    >
      <Box
        component="img"
        src={imageNotFound}
        alt="not found"
        sx={{ width: 300, height: 300 }}
      />

      <Typography fontSize={22} fontWeight={700}>
        Page Not Found!
      </Typography>

      <Button variant="contained" onClick={handleClick}>
        Go Back Home
      </Button>
    </Grid>
  );
}
