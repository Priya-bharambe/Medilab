import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentsectionComponent } from './appointmentsection.component';

describe('AppointmentsectionComponent', () => {
  let component: AppointmentsectionComponent;
  let fixture: ComponentFixture<AppointmentsectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppointmentsectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppointmentsectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
