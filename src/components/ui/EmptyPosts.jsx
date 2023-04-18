import React from 'react';
import { Grid, Typography } from '@mui/material';

export default function EmptyPosts() {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      height="50vh"
    >
      <Grid item>
        <Typography>
          No Posts Found! Please feel free to add some
        </Typography>
      </Grid>
    </Grid>
  );
}
