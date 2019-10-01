import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllbookComponent } from './allbook.component';

describe('AllbookComponent', () => {
  let component: AllbookComponent;
  let fixture: ComponentFixture<AllbookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllbookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
