import React from 'react';
import { ActiveGame, Screenshots } from '../../lib/types';
import {
  Divider,
  Grid,
  ImageListItem,
  Typography,
  Button
} from '@mui/material';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';

interface Props {
  activeGame: ActiveGame;
  onClick: () => void;
}

const InfoGame: React.FC<Props> = ({ activeGame, onClick }) => {
  const {
    description,
    developer,
    game_url,
    genre,
    release_date,
    publisher,
    title,
    id,
    platform,
    screenshots = [],
    minimum_system_requirements
  } = activeGame;

  return (
    <Grid container spacing={4}>
      <Grid item>
        <Button
          size="small"
          variant="outlined"
          onClick={onClick}
          startIcon={<KeyboardReturnIcon />}
        >
          return
        </Button>
      </Grid>
      <Grid item style={{ width: '100%' }}>
        <div>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <ImageListItem>
                <img
                  src={`https://www.freetogame.com/g/${id}/background.jpg`}
                  alt={title}
                />
              </ImageListItem>
            </Grid>
          </Grid>
        </div>
      </Grid>
      <Grid item>
        <div>
          <Typography variant="h2" data-testid="title">
            {title}
          </Typography>
        </div>
      </Grid>
      <Grid item>
        <Typography variant="h4">About</Typography>
        <Divider light sx={{ marginBottom: '.5rem' }} />
        <Typography variant="caption" data-testid="description">
          {description}
        </Typography>
      </Grid>
      <Grid item style={{ width: '100%' }}>
        <Typography variant="h4">Additional Information</Typography>
        <Divider light sx={{ marginBottom: '.5rem' }} />
        <Grid container spacing={2}>
          <Grid item xs={6} md={4}>
            <Grid container spacing={1} flexDirection="column">
              <Grid item xs={12}>
                <Typography variant="subtitle1">Title</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="caption" data-testid="additional-title">
                  {title}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6} md={4}>
            <Grid container spacing={1} flexDirection="column">
              <Grid item xs={12}>
                <Typography variant="h6">Developer</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography
                  variant="caption"
                  data-testid="additional-developer"
                >
                  {developer}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6} md={4}>
            <Grid container spacing={1} flexDirection="column">
              <Grid item xs={12}>
                <Typography variant="h6">Publisher</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography
                  variant="caption"
                  data-testid="additional-publisher"
                >
                  {publisher}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6} md={4}>
            <Grid container spacing={1} flexDirection="column">
              <Grid item xs={12}>
                <Typography variant="h6">Release Date</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography
                  variant="caption"
                  data-testid="additional-releaseDate"
                >
                  {release_date}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6} md={4}>
            <Grid container spacing={1} flexDirection="column">
              <Grid item xs={12}>
                <Typography variant="h6">Genre</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="caption" data-testid="additional-genre">
                  {genre}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6} md={4}>
            <Grid container spacing={1} flexDirection="column">
              <Grid item xs={12}>
                <Typography variant="h6">Platform</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="caption" data-testid="additional-platform">
                  {platform}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Typography variant="h4">ScreenShots</Typography>
        <Divider light />
        <Grid container spacing={2}>
          {screenshots.map((item: Screenshots) => (
            <Grid item key={item.id} xs={12} md={4} sx={{ marginTop: '1rem' }}>
              <ImageListItem style={{ height: '100%' }}>
                <img src={item.image} srcSet={item.image} alt={item.image} />
              </ImageListItem>
            </Grid>
          ))}
        </Grid>
      </Grid>
      {minimum_system_requirements && (
        <Grid item style={{ width: '100%' }}>
          <Typography variant="h4">Minimum System Requirements</Typography>
          <Divider light sx={{ marginBottom: '.5rem' }} />
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Grid container flexDirection="column">
                <Grid item xs={12}>
                  <Typography variant="h6">Graphics</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography
                    variant="caption"
                    data-testid="requirements-graphics"
                  >
                    {minimum_system_requirements['graphics']}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={6}>
              <Grid container flexDirection="column">
                <Grid item xs={12}>
                  <Typography variant="h6">Memory</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography
                    variant="caption"
                    data-testid="requirements-memory"
                  >
                    {minimum_system_requirements['memory']}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={6}>
              <Grid container flexDirection="column">
                <Grid item xs={12}>
                  <Typography variant="h6">Os</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="caption" data-testid="requirements-os">
                    {minimum_system_requirements['os']}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={6}>
              <Grid container flexDirection="column">
                <Grid item xs={12}>
                  <Typography variant="h6">Processor</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography
                    variant="caption"
                    data-testid="requirements-processor"
                  >
                    {minimum_system_requirements['processor']}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={4}>
              <Grid container flexDirection="column">
                <Grid item xs={12}>
                  <Typography variant="h6">Storage</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography
                    variant="caption"
                    data-testid="requirements-storage"
                  >
                    {minimum_system_requirements['storage']}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      )}
    </Grid>
  );
};

export default InfoGame;
