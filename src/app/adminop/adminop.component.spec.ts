import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminopComponent } from './adminop.component';

describe('AdminopComponent', () => {
  let component: AdminopComponent;
  let fixture: ComponentFixture<AdminopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
