import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddingARecipePageComponent } from './adding-a-recipe-page.component';

describe('AddingARecipePageComponent', () => {
  let component: AddingARecipePageComponent;
  let fixture: ComponentFixture<AddingARecipePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddingARecipePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddingARecipePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
