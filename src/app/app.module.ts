import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { SideNavigationComponent } from './side-navigation/side-navigation.component';
import { ShopItemsComponent } from './shop-items/shop-items.component';
import { BookService } from './services/book-service.service';
import { ItemCardComponent } from './item-card/item-card.component';
import { appReducer, metaReducers } from './store/reducers/app.reducer';
import { StoreEffects } from './store/effects/store.effects';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    TopMenuComponent,
    SideNavigationComponent,
    ShopItemsComponent,
    ItemCardComponent,
    WelcomeComponent
  ],
  imports: [
    StoreModule.forRoot(appReducer, { metaReducers }),
    EffectsModule.forRoot([ StoreEffects ]),
    StoreRouterConnectingModule.forRoot({ stateKey: 'router' }),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatButtonModule
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
