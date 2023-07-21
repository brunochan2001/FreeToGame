import React from 'react';
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography
} from '@mui/material';
import { Game } from '../../lib/types';
import './style.css';

interface Props {
  game: Game;
}

const GameCard: React.FC<Props> = ({ game }) => {
  return (
    <Card sx={{ maxWidth: 345 }} className="card__container">
      <CardMedia
        sx={{ height: 140 }}
        image={game.thumbnail}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" className="title">
          {game.title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          className="description"
        >
          {game.short_description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="outlined">
          See more
        </Button>
      </CardActions>
    </Card>
  );
};

export default GameCard;
