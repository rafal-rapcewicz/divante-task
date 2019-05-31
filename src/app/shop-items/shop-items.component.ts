import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';

import { Book } from '../services/book-service.service';
import { AppState } from '../store/state/app.state';
import { selectCatalog } from '../store/selectors/store.selectors';
import { GetBooksAction } from '../store/actions/store.actions'

@Component({
  selector: 'app-shop-items',
  templateUrl: './shop-items.component.html',
  styleUrls: ['./shop-items.component.scss']
})
export class ShopItemsComponent implements OnInit {

  items$: Observable<Book[]>;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.items$ = this.store.pipe(select(selectCatalog));
      
    this.store.dispatch(new GetBooksAction());
  }

}
