import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable, of, switchMap } from 'rxjs';
import { RestaurantService } from 'src/app/core/services/restaurant.service';

@Component({
  selector: 'app-restaurant-info',
  templateUrl: './restaurant-info.component.html',
  styleUrls: ['./restaurant-info.component.scss']
})

export class RestaurantInfoComponent {
  restaurant$: Observable<any> = this.route.paramMap.pipe(
    switchMap(params => {
      const idStr = params.get('id');
      if (idStr) {
        const id = +idStr;
        return this.restaurantService.getRestaurantDetails(id);
      }
      return of(null);
    }),
    map((restaurant: { images: string | any[]; primaryImageUrl: string; }) => {
      if (restaurant && restaurant.images && restaurant.images.length) {
        restaurant.primaryImageUrl = 'http://localhost:1337' + restaurant.images[0].url;
      }
      console.log(restaurant);
      return restaurant;
    })
  );


  constructor(
    private route: ActivatedRoute,
    private restaurantService: RestaurantService
  ) {}
}
