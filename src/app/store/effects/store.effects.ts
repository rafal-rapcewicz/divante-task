import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { merge, of } from 'rxjs';
import { filter, switchMap, map, toArray, catchError } from 'rxjs/operators';
import * as _ from 'lodash';

import * as storeActions from '../actions/store.actions';
import { BookService } from '../../services/book-service.service';

@Injectable()
export class StoreEffects {

  // I know that this kind of getting data from api is bizzare, but I have only this endpoint,
  // so I didn't care of efficiency this time
  @Effect()
  getUser$ = this.actions$.pipe(
    ofType<storeActions.GetBooksAction>(storeActions.StoreActionNames.GetBooks),
    switchMap(() => this.bookService.getCatalog().pipe(
        switchMap(catalog =>
          merge(
            ...catalog.map(catalogItem =>
              this.bookService.getByISBN(catalogItem).pipe(
                map(books => _.first(books.items)),
                filter(book => !_.isEmpty(book))
              )
            )
          )
        ),
        toArray(),
      ),
    ),
    map(books => new storeActions.GetBooksSucceededAction(books)),
    catchError(error => of(new storeActions.GetBooksFailedAction(error)))
  );

  constructor(
    private bookService: BookService,
    private actions$: Actions,
  ) {}
}