import React from 'react';
import { Box } from '@mui/material';
import propTypes from 'prop-types';

export default function Seperator({ height }) {
  return <Box sx={{ height }} />;
}

Seperator.propTypes = {
  height: propTypes.oneOfType([
    propTypes.string,
    propTypes.number,
  ]).isRequired,
};
