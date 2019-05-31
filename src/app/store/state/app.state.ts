import { RouterReducerState } from '@ngrx/router-store';

import { initialStoreState, StoreState } from './store.state';


export interface AppState {
  router?: RouterReducerState;
  store: StoreState;
}

export const initialAppState: AppState = {
  store: initialStoreState
};

export function getInitialState(): AppState {
  return initialAppState;
}
