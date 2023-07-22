import React from 'react';
import { DefaultLayout } from '../layout';
import { GamesContent } from '../container';

const GamePage: React.FC = () => {
  return (
    <DefaultLayout>
      <GamesContent />
    </DefaultLayout>
  );
};

export default GamePage;
