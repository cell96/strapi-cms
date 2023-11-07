import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantInfoComponent } from './components/restaurant-info/restaurant-info.component';
import { RestaurantMenuComponent } from './components/restaurant-menu/restaurant-menu.component';
import { RestaurantOpeningHoursComponent } from './components/restaurant-opening-hours/restaurant-opening-hours.component';
import { RestaurantReviewsComponent } from './components/restaurant-reviews/restaurant-reviews.component';
import { RestaurantDetailRoutingModule } from './restaurant-detail-routing.module';



@NgModule({
  declarations: [
    RestaurantInfoComponent,
    RestaurantMenuComponent,
    RestaurantOpeningHoursComponent,
    RestaurantReviewsComponent
  ],
  imports: [
    CommonModule,
    RestaurantDetailRoutingModule
  ]
})
export class RestaurantDetailModule { }
