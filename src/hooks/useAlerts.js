import { useSelector, useDispatch } from 'react-redux';
import {
  addAlert,
  removeAlert,
} from '../store/slices/alertsSlice';
import generateAlert from '../utils/generateAlert';

const ALERT_DURATION_IN_SEC = 5;
const useAlerts = () => {
  const alerts = useSelector((state) => state.alerts);
  const dispatch = useDispatch();

  const addNewAlert = (type, message) => {
    const alert = generateAlert(type, message);
    dispatch(addAlert(alert));
    setTimeout(() => {
      dispatch(removeAlert(alert.id));
    }, ALERT_DURATION_IN_SEC * 1000);
  };

  return {
    addNewAlert,
    alerts,
  };
};

export default useAlerts;
