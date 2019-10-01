import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangenameComponent } from './changename.component';

describe('ChangenameComponent', () => {
  let component: ChangenameComponent;
  let fixture: ComponentFixture<ChangenameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangenameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangenameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
