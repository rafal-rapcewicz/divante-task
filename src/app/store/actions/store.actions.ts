import { Action } from '@ngrx/store';

import { Book } from '../../services/book-service.service';

export enum StoreActionNames {
    GetBooks = '[Store] Get Books',
    GetBooksSucceeded = '[Store] Get Books Succeeded',
    GetBooksFailed = '[Store] Get Books Failed',
    AddBookToCart = '[Store] Add Book to cart',
}

export class GetBooksAction implements Action {
    public readonly type = StoreActionNames.GetBooks;
}

export class GetBooksSucceededAction implements Action {
    public readonly type = StoreActionNames.GetBooksSucceeded;
    constructor(public books: Book[]) { }
}

export class GetBooksFailedAction implements Action {
    public readonly type = StoreActionNames.GetBooksFailed;
    constructor(public error: any) { }
}

export class AddBookToCartAction implements Action {
    public readonly type = StoreActionNames.AddBookToCart;
    constructor(public book: Book) { }
}

export type StoreActions =
    GetBooksAction
    | GetBooksSucceededAction
    | GetBooksFailedAction
    | AddBookToCartAction;