import { Book } from '../../services/book-service.service';

export interface StoreState {
    catalog: Book[];
    cart: Book[];
  }
  
  export const initialStoreState: StoreState = {
    catalog: undefined,
    cart: []
  };
