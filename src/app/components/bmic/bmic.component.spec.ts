import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BMICComponent } from './bmic.component';

describe('BMICComponent', () => {
  let component: BMICComponent;
  let fixture: ComponentFixture<BMICComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BMICComponent]
    });
    fixture = TestBed.createComponent(BMICComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
