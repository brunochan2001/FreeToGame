import { AnyAction, ThunkDispatch, configureStore } from '@reduxjs/toolkit';
import { gamesReducer } from './reducers';
import { combineReducers } from 'redux';

const reducer = combineReducers({ games: gamesReducer });

export const store = configureStore({ reducer });

export type RootState = ReturnType<typeof store.getState>;
export type AppThunkDispatch = ThunkDispatch<RootState, void, AnyAction>;
