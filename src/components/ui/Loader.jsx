import React from 'react';
import { Grid, CircularProgress } from '@mui/material';

export default function Loader() {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      height="50vh"
    >
      <Grid item>
        <CircularProgress />
      </Grid>
    </Grid>
  );
}
