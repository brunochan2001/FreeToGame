import { AnyAction, ThunkDispatch, configureStore } from '@reduxjs/toolkit';
import { gamesReducer } from './reducers';

export const store = configureStore({
  reducer: gamesReducer
});
export type RootState = ReturnType<typeof store.getState>;
export type AppThunkDispatch = ThunkDispatch<RootState, void, AnyAction>;
