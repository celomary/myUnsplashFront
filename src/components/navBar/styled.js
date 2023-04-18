import { styled } from '@mui/system';
import { AppBar, Button } from '@mui/material';

export const NavBarContainer = styled(AppBar)({
  backgroundColor: '#fff',
  color: '#000',
});

export const NavBarButton = styled(Button)({
  backgroundColor: '#000',
  color: '#fff',
  '&:hover': {
    backgroundColor: '#000',
    color: '#fff',
  },
});
