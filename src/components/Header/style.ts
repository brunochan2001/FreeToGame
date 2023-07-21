import { AppBar, styled } from '@mui/material';

export const CustomAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.primary.dark,
  img: {
    height: '45px'
  }
}));
