import { StoreActions, StoreActionNames } from '../actions/store.actions';
import { initialStoreState, StoreState } from '../state/store.state';

export const storeReducer = (
  state = initialStoreState,
  action: StoreActions
): StoreState => {
  switch (action.type) {
    case StoreActionNames.GetBooksSucceeded: {
      return {
        ...state,
        catalog: action.books
      };
    }
    case StoreActionNames.AddBookToCart: {
      return {
        ...state,
        cart: state.cart.concat(action.book)
      };
    }

    default:
      return state;
  }
};
