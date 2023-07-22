import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { viewGame } from '../../store/actions';
import { AppThunkDispatch, RootState } from '../../store/storeConfig';
import { Box, CircularProgress } from '@mui/material';
import { InfoGame } from '../../components';

const SingleGame: React.FC = () => {
  const dispatch = useDispatch<AppThunkDispatch>();
  const navigate = useNavigate();
  const { activeGame } = useSelector((state: RootState) => state.games);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      dispatch(viewGame(id));
    }
  }, [id]);

  const handleNavigateHome = () => {
    navigate('/');
  };

  return (
    <div>
      {Object.values(activeGame).length ? (
        <InfoGame activeGame={activeGame} onClick={handleNavigateHome} />
      ) : (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <CircularProgress />
        </Box>
      )}
    </div>
  );
};

export default SingleGame;
