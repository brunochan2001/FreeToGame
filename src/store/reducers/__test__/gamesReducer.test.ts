import reducer from '../gamesReducer';
import * as types from '../../actionTypes';
import { game, games } from './mockData';

const initialState = {
  loading: false,
  error: false,
  data: [],
  activeGame: {}
};

describe('Games reducer', () => {
  test('should return the initial state', () => {
    const action = { type: undefined };
    const state = reducer(initialState, action);

    expect(state.loading).toBe(false);
    expect(state.error).toBe(false);
    expect(state.data).toHaveLength(0);
    expect(state.activeGame).toEqual({});
  });

  test('should do load games', () => {
    const action = { type: types.GET_GAMES_LOADING };
    const state = reducer(initialState, action);

    expect(state.loading).toBe(true);
    expect(state.error).toBe(false);
    expect(state.data).toHaveLength(0);
    expect(state.activeGame).toEqual({});
  });

  test('should get the games ', () => {
    const action = { type: types.GET_GAMES_SUCCESS, payload: games };
    const state = reducer(initialState, action);

    expect(state.loading).toBe(false);
    expect(state.error).toBe(false);
    expect(state.data).toBe(games);
    expect(state.data).toHaveLength(3);
    expect(state.activeGame).toEqual({});
  });

  test('should fail to get the games ', () => {
    const error = 'Request failed with status code 403';
    const action = { type: types.GET_GAMES_FAIL, payload: error };
    const state = reducer(initialState, action);

    expect(state.loading).toBe(false);
    expect(state.error).toBe(error);
    expect(state.data).toHaveLength(0);
    expect(state.activeGame).toEqual({});
  });

  test('should do load a single game ', () => {
    const action = { type: types.GET_SINGLE_GAME_LOADING };
    const state = reducer(initialState, action);

    expect(state.loading).toBe(true);
    expect(state.error).toBe(false);
    expect(state.data).toHaveLength(0);
    expect(state.activeGame).toEqual({});
  });

  test('should get a single game ', () => {
    const action = { type: types.GET_SINGLE_GAME_SUCCESS, payload: game };
    const state = reducer(initialState, action);

    expect(state.loading).toBe(false);
    expect(state.error).toBe(false);
    expect(state.data).toHaveLength(0);
    expect(state.activeGame).toEqual(game);
  });

  test('should fail to get the single game ', () => {
    const error = 'No game found with that id';
    const action = { type: types.GET_SINGLE_GAME_FAIL, payload: error };
    const state = reducer(initialState, action);

    expect(state.loading).toBe(false);
    expect(state.error).toBe(error);
    expect(state.data).toHaveLength(0);
    expect(state.activeGame).toEqual({});
  });
});
