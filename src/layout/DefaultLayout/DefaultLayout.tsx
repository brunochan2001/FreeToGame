import React from 'react';
import { Header } from '../../components';
import { Container } from '@mui/material';

interface Props {
  children: React.ReactNode;
}

const DefaultLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <div className="content">
        <Container maxWidth="lg">{children}</Container>
      </div>
    </>
  );
};

export default DefaultLayout;
