import axios from 'axios';
import { AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../storeConfig';
import * as types from '../actionTypes';
import * as endpoints from '../endpoints';

export const getGames =
  (values = {}): ThunkAction<void, RootState, unknown, AnyAction> =>
  async dispatch => {
    try {
      dispatch({ type: types.GET_GAMES_LOADING });
      const params = new URLSearchParams(values).toString();
      const res = await axios(endpoints.endpointGames + '?' + params);
      const { status } = res.data;

      dispatch({
        type: types.GET_GAMES_SUCCESS,
        payload: status == 0 ? [] : res.data
      });
    } catch (error) {
      dispatch({
        type: types.GET_GAMES_FAIL,
        payload: error
      });
    }
  };

export const viewGame =
  (id: string): ThunkAction<void, RootState, unknown, AnyAction> =>
  async dispatch => {
    try {
      dispatch({ type: types.GET_SINGLE_GAME_LOADING });
      const res = await axios(endpoints.endpointGame + `?id=${id}`);
      dispatch({ type: types.GET_SINGLE_GAME_SUCCESS, payload: res.data });
    } catch (error) {
      dispatch({
        type: types.GET_SINGLE_GAME_FAIL,
        payload: error
      });
    }
  };
