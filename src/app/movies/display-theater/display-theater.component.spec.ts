import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayTheaterComponent } from './display-theater.component';

describe('DisplayTheaterComponent', () => {
  let component: DisplayTheaterComponent;
  let fixture: ComponentFixture<DisplayTheaterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayTheaterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayTheaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
