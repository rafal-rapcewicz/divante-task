import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShopItemsComponent } from './shop-items/shop-items.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {
    path: 'welcome',
    component: WelcomeComponent
  },
  {
    path: 'shop-items',
    component: ShopItemsComponent
  },
  { path: '',
    redirectTo: '/welcome',
    pathMatch: 'full'
  },
  // { path: 'hero/:id',      component: HeroDetailComponent },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
