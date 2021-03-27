import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorssectionComponent } from './doctorssection.component';

describe('DoctorssectionComponent', () => {
  let component: DoctorssectionComponent;
  let fixture: ComponentFixture<DoctorssectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorssectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorssectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
