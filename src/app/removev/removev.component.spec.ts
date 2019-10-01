import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemovevComponent } from './removev.component';

describe('RemovevComponent', () => {
  let component: RemovevComponent;
  let fixture: ComponentFixture<RemovevComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemovevComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemovevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
