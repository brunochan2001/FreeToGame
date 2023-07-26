export interface Game {
  id: number;
  title: string;
  thumbnail: string;
  short_description: string;
  game_url: string;
  genre: string;
  platform: string;
  publisher: string;
  developer: string;
  release_date: string;
  freetogame_profile_url: string;
}

export interface GamesState {
  loading: boolean;
  error: false | unknown;
  data: Game[];
  activeGame: ActiveGame | any;
}

export interface options {
  label: string;
  value: string;
}

export interface Screenshots {
  id: number;
  image: string;
}
export interface MinimumSystemRequirements {
  os: string;
  processor: string;
  memory: string;
  graphics: string;
  storage: string;
}

export interface ActiveGame extends Game {
  status: string;
  description: string;
  minimum_system_requirements: MinimumSystemRequirements;
  screenshots: Screenshots[];
}
