import { createSelector } from '@ngrx/store';

import { AppState } from '../state/app.state';
import { StoreState } from '../state/store.state';

const selectStore = (state: AppState) => state.store;

export const selectCatalog = createSelector(
    selectStore,
    (state: StoreState) => state.catalog
);

export const selectCart = createSelector(
    selectStore,
    (state: StoreState) => state.cart
);
