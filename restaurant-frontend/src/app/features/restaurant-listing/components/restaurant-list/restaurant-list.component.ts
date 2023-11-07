import { Component } from '@angular/core';
import { RestaurantService } from 'src/app/core/services/restaurant.service';


@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.scss']
})
export class RestaurantListComponent {
  restaurants$ = this.restaurantService.getRestaurants();

  constructor(private restaurantService: RestaurantService) { }
}
