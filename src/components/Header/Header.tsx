import React from 'react';
import { Container } from '@mui/material';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import GitHubIcon from '@mui/icons-material/GitHub';
import Logo from '../../static/image/logo.png';
import { CustomAppBar } from './style';

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
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
