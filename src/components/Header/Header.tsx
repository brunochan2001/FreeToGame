import React from 'react';
import { Container, Box, Toolbar } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import { CustomAppBar } from './style';
import Logo from '../../static/image/logo.png';
import { IconButton, Tooltip, Link } from '@mui/material';

const Header: React.FC = () => {
  return (
    <Box>
      <CustomAppBar position="static">
        <Container maxWidth="lg">
          <Toolbar sx={{ justifyContent: 'space-between' }}>
            <Tooltip title="FreeToGame">
              <img src={Logo} alt="logo" />
            </Tooltip>
            <Tooltip title="Github">
              <Link href="https://github.com/brunochan2001" underline="none">
                <IconButton>
                  <GitHubIcon />
                </IconButton>
              </Link>
            </Tooltip>
          </Toolbar>
        </Container>
      </CustomAppBar>
    </Box>
  );
};

export default Header;
