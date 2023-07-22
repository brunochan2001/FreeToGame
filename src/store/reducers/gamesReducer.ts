import { AnyAction } from 'redux';
import * as types from '../actionTypes';
import { GamesState } from '../../lib/types';

const initialState: GamesState = {
  loading: false,
  error: false,
  data: [],
  activeGame: {}
};

const reducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case types.GET_GAMES_LOADING: {
      return {
        ...state,
        loading: true,
        activeGame: {}
      };
    }
    case types.GET_GAMES_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload
      };
    }
    case types.GET_GAMES_FAIL: {
      return {
        ...state,
        loading: false,
        error: action.payload,
        data: []
      };
    }
    case types.GET_SINGLE_GAME_LOADING: {
      return {
        ...state,
        loading: true
      };
    }
    case types.GET_SINGLE_GAME_SUCCESS: {
      return {
        ...state,
        activeGame: action.payload
      };
    }
    case types.GET_SINGLE_GAME_FAIL: {
      return {
        ...state,
        loading: false,
        error: action.payload,
        activeGame: {}
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
