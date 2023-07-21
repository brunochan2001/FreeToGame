import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/storeConfig';
import { GamesList } from '../GamesList';
import { FiltersGame } from '../FiltersGames';
import { Game } from '../../lib/types';

const GamesContent: React.FC = () => {
  const { loading, data } = useSelector((state: RootState) => state);
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    setGames(data);
  }, [data]);

  return (
    <>
      <FiltersGame setGames={setGames} />
      {loading ? <div>isLoading</div> : <GamesList games={games} />}
    </>
  );
};

export default GamesContent;
