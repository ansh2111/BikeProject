import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FleetPriceComponent } from './fleet-price.component';

describe('FleetPriceComponent', () => {
  let component: FleetPriceComponent;
  let fixture: ComponentFixture<FleetPriceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FleetPriceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FleetPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
