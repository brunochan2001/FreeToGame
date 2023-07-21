import React, { useEffect, useMemo, useState } from 'react';
import { Pagination, Grid } from '@mui/material';
import { GameCard } from '../../components';
import { Game } from '../../lib/types';
import { useNavigate } from 'react-router-dom';

interface Props {
  games: Game[];
}

const GamesList: React.FC<Props> = ({ games }) => {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const gamesPerPage = 24;
  const gamesList = useMemo(
    () => games.slice((page - 1) * gamesPerPage, page * gamesPerPage),
    [games, page]
  );

  useEffect(() => {
    setPage(1);
  }, [games]);

  useEffect(() => {
    window.scroll(0, 0);
  }, [page]);

  const handleViewUser = (id: number) => {
    navigate(`${id}`);
  };

  return (
    <>
      <Grid container spacing={3}>
        {gamesList.map((game, index) => (
          <Grid item xs={6} md={3} key={index}>
            <GameCard game={game} onClick={handleViewUser} />
          </Grid>
        ))}
      </Grid>
      <Pagination
        sx={{ justifyContent: 'end', display: 'flex' }}
        count={Math.ceil(games.length / gamesPerPage)}
        size="small"
        page={page}
        onChange={(_, newPage) => setPage(newPage)}
      />
    </>
  );
};

export default GamesList;
