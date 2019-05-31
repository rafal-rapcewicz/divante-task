import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { Book } from '../services/book-service.service';
import { StoreState } from '../store/state/store.state';
import * as storeActions from '../store/actions/store.actions';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss']
})
export class ItemCardComponent implements OnInit {

  @Input() item: Book;

  constructor(private store: Store<StoreState>) { }

  ngOnInit() {
  }

  addToCart(book: Book) {
    this.store.dispatch(new storeActions.AddBookToCartAction(book));
  }

}
