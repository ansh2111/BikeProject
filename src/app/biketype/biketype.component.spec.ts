import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BiketypeComponent } from './biketype.component';

describe('BiketypeComponent', () => {
  let component: BiketypeComponent;
  let fixture: ComponentFixture<BiketypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BiketypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BiketypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
