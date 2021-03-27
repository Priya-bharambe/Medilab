import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionsectionComponent } from './questionsection.component';

describe('QuestionsectionComponent', () => {
  let component: QuestionsectionComponent;
  let fixture: ComponentFixture<QuestionsectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionsectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionsectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
