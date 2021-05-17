import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeOfTheDayComponent } from './recipe-of-the-day.component';

describe('RecipeOfTheDayComponent', () => {
  let component: RecipeOfTheDayComponent;
  let fixture: ComponentFixture<RecipeOfTheDayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeOfTheDayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeOfTheDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
