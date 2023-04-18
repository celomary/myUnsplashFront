import { styled } from '@mui/system';
import { Button, IconButton } from '@mui/material';

export const AddPostButton = styled(Button)({
  color: '#fff',
  backgroundColor: '#3DB46D',
  borderRadius: '20px',
  padding: '10px 20px',
  textTransform: 'capitalize',
  '&:hover': {
    color: '#fff',
    backgroundColor: '#3DB46D',
  },
});

export const ConstumizeButton = styled(IconButton)({
  backgroundColor: '#3DB46D',
  color: '#fff',
  borderRadius: '100%',
  width: '30px',
  height: '30px',
  '&:hover': {
    color: '#fff',
    backgroundColor: '#3DB46D',
  },
});
