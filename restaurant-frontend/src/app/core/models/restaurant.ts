// src/app/core/models/restaurant.model.ts

import { OpeningHours } from './opening-hours.model';
import { MenuItem } from './menu-item.model';
import { Category } from './category.model';
import { Review } from './review.model';

export interface Restaurant {
  name: string;
  description: string;
  image: string;
  openingHours: OpeningHours;
  categories: Category[];
  avgPrice: number;
  reviews: Review[];
  menu: MenuItem[];
}
