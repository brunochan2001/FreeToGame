import { AnyAction } from 'redux';
import * as types from '../actionTypes';
import { GamesState } from '../../lib/types';

const initialState: GamesState = {
  loading: false,
  error: false,
  data: []
};

const reducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case types.GET_GAMES_LOADING: {
      return {
        ...state,
        loading: true
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
    default: {
      return state;
    }
  }
};

export default reducer;
