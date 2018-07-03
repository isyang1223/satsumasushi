import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurrestaurantComponent } from './ourrestaurant.component';

describe('OurrestaurantComponent', () => {
  let component: OurrestaurantComponent;
  let fixture: ComponentFixture<OurrestaurantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurrestaurantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurrestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
