import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimonialsectionComponent } from './testimonialsection.component';

describe('TestimonialsectionComponent', () => {
  let component: TestimonialsectionComponent;
  let fixture: ComponentFixture<TestimonialsectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestimonialsectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestimonialsectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
