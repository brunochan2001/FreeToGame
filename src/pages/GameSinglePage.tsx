import React from 'react';
import { DefaultLayout } from '../layout';
import { SingleGame } from '../container';

const GameSinglePage: React.FC = () => {
  return (
    <DefaultLayout>
      <SingleGame />
    </DefaultLayout>
  );
};

export default GameSinglePage;
