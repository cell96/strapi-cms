import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantListComponent } from './components/restaurant-list/restaurant-list.component';
import { FilterBarComponent } from './components/filter-bar/filter-bar.component';
import { RestaurantListingRoutingModule } from './restaurant-listing-routing.module';



@NgModule({
  declarations: [
    RestaurantListComponent,
    FilterBarComponent
  ],
  imports: [
    CommonModule,
    RestaurantListingRoutingModule
  ]
})
export class RestaurantListingModule { }
