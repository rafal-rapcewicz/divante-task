import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { merge, of } from 'rxjs';
import { switchMap, map, toArray, catchError } from 'rxjs/operators';
import * as _ from 'lodash';

import * as storeActions from '../actions/store.actions';
import { BookService } from '../../services/book-service.service';

@Injectable()
export class StoreEffects {

  @Effect()
  getUser$ = this.actions$.pipe(
    ofType<storeActions.GetBooksAction>(storeActions.StoreActionNames.GetBooks),
    switchMap(() => this.bookService.getCatalog().pipe(
        switchMap(catalog =>
          merge(
            ...catalog.map(catalogItem =>
              this.bookService.getByISBN(catalogItem).pipe(
                map(books => _.first(books.items))
              )
            )
          )
        ),
        toArray()
      )
    ),
    map(books => new storeActions.GetBooksSucceededAction(books)),
    catchError(error => of(new storeActions.GetBooksFailedAction(error)))
  );

  constructor(
    private bookService: BookService,
    private actions$: Actions,
  ) {}
}