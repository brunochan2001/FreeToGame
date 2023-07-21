import React from 'react';
import { Header } from '../../components';
import { Container } from '@mui/material';
import { CustomBox } from './style';

interface Props {
  children: React.ReactNode;
}

const DefaultLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <CustomBox>
        <Container maxWidth="lg">{children}</Container>
      </CustomBox>
    </>
  );
};

export default DefaultLayout;
