import axios from 'axios';
import { AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../storeConfig';
import * as types from '../actionTypes';
import * as endpoints from '../endpoints';

export const getGames =
  (): ThunkAction<void, RootState, unknown, AnyAction> => async dispatch => {
    try {
      dispatch({ type: types.GET_GAMES_LOADING });
      const res = await axios(endpoints.endpointGame);

      dispatch({
        type: types.GET_GAMES_SUCCESS,
        payload: res.data
      });
    } catch (error) {
      dispatch({
        type: types.GET_GAMES_FAIL,
        payload: error
      });
    }
  };
