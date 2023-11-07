import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantOpeningHoursComponent } from './restaurant-opening-hours.component';

describe('RestaurantOpeningHoursComponent', () => {
  let component: RestaurantOpeningHoursComponent;
  let fixture: ComponentFixture<RestaurantOpeningHoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestaurantOpeningHoursComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestaurantOpeningHoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
