import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class RestaurantService {
  private readonly BASE_URL = 'http://localhost:1337/api/restaurants';
  private readonly IMAGE_POPULATE_URL = '?populate=image';

  constructor(private httpClient: HttpClient) {}

  // Fetch basic restaurant data
  getRestaurants(): Observable<any> {
    return this.httpClient.get(this.BASE_URL + this.IMAGE_POPULATE_URL).pipe(
      map(this.transformRestaurantData),
      catchError(this.handleError)
    );
  }

  // Fetch detailed data for a specific restaurant by ID
  getRestaurantDetails(id: number): Observable<any> {
    const url = `${this.BASE_URL}/${id}?populate=menu,reviews,categories,image,openingHours,menuItems`;
    return this.httpClient.get(url).pipe(
      map(this.transformDetailedRestaurantData),
      catchError(this.handleError)
    );
  }

  private transformRestaurantData(response: any): any {
    if (response && response.data) {
      return response.data.map((restaurant: any) => {
        return {
          id: restaurant.id,
          name: restaurant.attributes.name,
          description: restaurant.attributes.description,
          avgPrice: restaurant.attributes.avgPrice,
          imageUrl: restaurant.attributes.image &&
                    restaurant.attributes.image.data &&
                    restaurant.attributes.image.data[0] &&
                    restaurant.attributes.image.data[0].attributes &&
                    restaurant.attributes.image.data[0].attributes.formats &&
                    restaurant.attributes.image.data[0].attributes.formats.thumbnail &&
                    restaurant.attributes.image.data[0].attributes.formats.thumbnail.url,
        };
      });
    }
    return [];
  }

  private transformDetailedRestaurantData(response: any): any {
    if (response && response.data) {
      const restaurant = response.data;
      return {
        id: restaurant.id,
        name: restaurant.attributes.name,
        description: restaurant.attributes.description,
        avgPrice: restaurant.attributes.avgPrice,
        createdAt: restaurant.attributes.createdAt,
        updatedAt: restaurant.attributes.updatedAt,
        publishedAt: restaurant.attributes.publishedAt,
        reviews: restaurant.attributes.reviews && restaurant.attributes.reviews.data,
        categories: restaurant.attributes.categories && restaurant.attributes.categories.data,
        images: restaurant.attributes.image && restaurant.attributes.image.data,
        menu: restaurant.attributes.menu && restaurant.attributes.menu.data.attributes,
        openingHours: restaurant.attributes.openingHours,
        menuItems: restaurant.attributes.menuItems
      };
    }
    return null;
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = '';

    if (error.error instanceof ErrorEvent) {
      // Client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }

    console.error(errorMessage);
    return throwError(() => new Error(errorMessage));
  }
}

