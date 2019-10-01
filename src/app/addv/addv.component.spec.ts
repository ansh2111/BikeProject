import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddvComponent } from './addv.component';

describe('AddvComponent', () => {
  let component: AddvComponent;
  let fixture: ComponentFixture<AddvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
