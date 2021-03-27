import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyussectionComponent } from './whyussection.component';

describe('WhyussectionComponent', () => {
  let component: WhyussectionComponent;
  let fixture: ComponentFixture<WhyussectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhyussectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhyussectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
