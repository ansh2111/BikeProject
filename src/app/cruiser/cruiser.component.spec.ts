import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CruiserComponent } from './cruiser.component';

describe('CruiserComponent', () => {
  let component: CruiserComponent;
  let fixture: ComponentFixture<CruiserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CruiserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CruiserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
