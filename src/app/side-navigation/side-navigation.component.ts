import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Book } from '../services/book-service.service';
import { AppState } from '../store/state/app.state';
import { selectCart } from '../store/selectors/store.selectors';

@Component({
  selector: 'app-side-navigation',
  templateUrl: './side-navigation.component.html',
  styleUrls: ['./side-navigation.component.scss']
})
export class SideNavigationComponent implements OnInit {

  cartItems$: Observable<Book[]>;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.cartItems$ = this.store.pipe(select(selectCart));
  }

}
