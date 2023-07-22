import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/storeConfig';
import { GamesList } from '../GamesList';
import { FiltersGame } from '../FiltersGames';
import { Game } from '../../lib/types';
import { Box, CircularProgress } from '@mui/material';

const GamesContent: React.FC = () => {
  const { data, loading } = useSelector((state: RootState) => state.games);
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    setGames(data);
  }, [data]);

  return (
    <>
      <FiltersGame setGames={setGames} />

      {loading && (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <CircularProgress />
        </Box>
      )}
      {!loading && <GamesList games={games} />}
    </>
  );
};

export default GamesContent;
