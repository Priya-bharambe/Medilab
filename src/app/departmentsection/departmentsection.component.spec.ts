import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentsectionComponent } from './departmentsection.component';

describe('DepartmentsectionComponent', () => {
  let component: DepartmentsectionComponent;
  let fixture: ComponentFixture<DepartmentsectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartmentsectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentsectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
