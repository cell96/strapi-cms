import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-restaurant-reviews',
  templateUrl: './restaurant-reviews.component.html',
  styleUrls: ['./restaurant-reviews.component.scss']
})
export class RestaurantReviewsComponent {
  @Input() reviews: any[] | undefined;

  getNumericRating(rating: string): number {
    switch (rating) {
        case 'one': return 1;
        case 'two': return 2;
        case 'three': return 3;
        case 'four': return 4;
        case 'five': return 5;
        default: return 0;
    }
  }
}
