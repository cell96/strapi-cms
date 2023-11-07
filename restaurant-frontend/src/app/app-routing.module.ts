import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'listing',
    pathMatch: 'full',
  },
  {
    path: 'listing',
    loadChildren: () => import('./features/restaurant-listing/restaurant-listing.module').then(m => m.RestaurantListingModule),
  },
  {
    path: 'restaurant/:id',
    loadChildren: () => import('./features/restaurant-detail/restaurant-detail.module').then(m => m.RestaurantDetailModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
