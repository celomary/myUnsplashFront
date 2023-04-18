import React from 'react';
import { Alert, Stack } from '@mui/material';
import useAlerts from '../../hooks/useAlerts';

export default function Alerts() {
  const { alerts } = useAlerts();

  const renderAlerts = () =>
    alerts.map((alert) => (
      <Alert severity={alert.type} key={alert.id}>
        {alert.message}
      </Alert>
    ));

  return (
    <Stack
      sx={{
        position: 'fixed',
        top: '70px',
        left: '50%',
        zIndex: 9999,
        width: '50%',
        transform: 'translateX(-50%)',
      }}
      spacing={1}
    >
      {renderAlerts()}
    </Stack>
  );
}
