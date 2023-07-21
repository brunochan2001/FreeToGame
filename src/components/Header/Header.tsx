import React from 'react';
import { Container, Box, Toolbar } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import { CustomAppBar } from './style';
import Logo from '../../static/image/logo.png';

const Header: React.FC = () => {
  return (
    <Box>
      <CustomAppBar position="static">
        <Container maxWidth="lg">
          <Toolbar sx={{ justifyContent: 'space-between' }}>
            <img src={Logo} alt="logo" />
            <GitHubIcon />
          </Toolbar>
        </Container>
      </CustomAppBar>
    </Box>
  );
};

export default Header;
