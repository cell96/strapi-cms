import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestaurantInfoComponent } from './components/restaurant-info/restaurant-info.component';
import { RestaurantMenuComponent } from './components/restaurant-menu/restaurant-menu.component';
import { RestaurantOpeningHoursComponent } from './components/restaurant-opening-hours/restaurant-opening-hours.component';
import { RestaurantReviewsComponent } from './components/restaurant-reviews/restaurant-reviews.component';

const routes: Routes = [
  {
    path: '',
    component: RestaurantInfoComponent,
    children: [
      {
        path: 'menu',
        component: RestaurantMenuComponent,
      },
      {
        path: 'opening-hours',
        component: RestaurantOpeningHoursComponent,
      },
      {
        path: 'reviews',
        component: RestaurantReviewsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RestaurantDetailRoutingModule {}
