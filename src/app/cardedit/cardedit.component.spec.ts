import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardeditComponent } from './cardedit.component';

describe('CardeditComponent', () => {
  let component: CardeditComponent;
  let fixture: ComponentFixture<CardeditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardeditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
