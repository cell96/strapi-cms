import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-restaurant-opening-hours',
  templateUrl: './restaurant-opening-hours.component.html',
  styleUrls: ['./restaurant-opening-hours.component.scss']
})
export class RestaurantOpeningHoursComponent {
  @Input() hours: any;
}
