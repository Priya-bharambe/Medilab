import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountsectionComponent } from './countsection.component';

describe('CountsectionComponent', () => {
  let component: CountsectionComponent;
  let fixture: ComponentFixture<CountsectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountsectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountsectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
