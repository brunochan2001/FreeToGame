export interface Game {}

export interface GamesState {
  loading: boolean;
  error: false | unknown;
  data: Game[];
}
