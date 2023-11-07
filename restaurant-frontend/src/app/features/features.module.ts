import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantListingModule } from './restaurant-listing/restaurant-listing.module';
import { RestaurantDetailModule } from './restaurant-detail/restaurant-detail.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RestaurantListingModule,
    RestaurantDetailModule
  ]
})
export class FeaturesModule { }
