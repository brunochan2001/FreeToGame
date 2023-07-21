import { Box, styled } from '@mui/material';

export const CustomBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.dark,
  padding: '4rem 0 2rem',
  minHeight: 'calc(100vh - 56px)',
  '.MuiContainer-root': {
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem'
  }
}));
