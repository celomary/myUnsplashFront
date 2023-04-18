/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const alertsSlice = createSlice({
  name: 'alerts',
  initialState: [],
  reducers: {
    addAlert: (state, { payload: alert }) => {
      state.push(alert);
    },
    removeAlert: (state, { payload: alertId }) =>
      state.filter((alert) => alert.id !== alertId),
  },
});

export const { addAlert, removeAlert } =
  alertsSlice.actions;
export default alertsSlice;
