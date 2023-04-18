import { v4 } from 'uuid';

const generateAlert = (type, message) => ({
  message,
  type,
  id: v4(),
});

export default generateAlert;
