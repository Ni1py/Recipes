import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { RecipeDTO } from '../../Entites/recipe-dto';
import { IngredientDTO } from '../../Entites/ingredient-dto';
import { MatChipInputEvent } from '@angular/material/chips';
import { COMMA, ENTER } from '@angular/cdk/keycodes';

@Component({
  selector: 'app-adding-a-recipe-page',
  templateUrl: './adding-a-recipe-page.component.html',
  styleUrls: ['./adding-a-recipe-page.component.css']
})
export class AddingARecipePageComponent implements OnInit {

  public recipe!: RecipeDTO;
  visible = true;
  selectable = true;
  removable = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];

  constructor() { }

  public addTitle(): void {
    this.recipe.ingredients.push({
      title: "",
      items: []
    });
  }

  public deleteTitle(block: number): void {
    this.recipe.ingredients.splice(block, 1);
  }

  public addStep(): void {
    this.recipe.steps.push({
      number: this.recipe.steps.length,
      description: ""
    });
  }

  public deleteStep(step: number): void {
    this.recipe.steps.splice(step, 1);
  }

  addTag(event: MatChipInputEvent): void {
    let tags: any = document.getElementById("tags");
    if (this.recipe.tags.length == 4) {
      tags.disabled = true;
      tags.placeholder = "Максимум тегов";
    }
    const tag: string = (event.value || '').trim();
    // Add our tag
    if (tag) {
      this.recipe.tags.push(tag);
    }
    // Clear the input value
    event.input.value = '';
  }

  removeTag(tag: string): void {
    let tags: any = document.getElementById("tags");
    if (this.recipe.tags.length < 4) {
      tags.disabled = false;
      tags.placeholder = "Добавить теги";
    }
    const index = this.recipe.tags.indexOf(tag);
    if (index >= 0) {
      this.recipe.tags.splice(index, 1);
    }
  }

  addIngredient(event: MatChipInputEvent, ingredient: IngredientDTO): void {
    let ingredients: any = document.getElementById("ingredients");
    if (ingredient.items.length == 9) {
      ingredients.disabled = true;
      ingredients.placeholder = "Максимум ингредиентов";
    }
    const item: string = (event.value || '').trim();
    // Add our ingredient
    if (item) {
      ingredient.items.push(item);
    }
    // Clear the input value
    event.input.value = '';
  }

  removeIngredient(item: string, ingredient: IngredientDTO): void {
    let ingredients: any = document.getElementById("ingredients");
    if (ingredient.items.length == 9) {
      ingredients.disabled = false;
      ingredients.placeholder = "Добавить теги";
    }
    const index = ingredient.items.indexOf(item);
    if (index >= 0) {
      ingredient.items.splice(index, 1);
    }
  }

  ngOnInit(): void {
    this.recipe = {
      id: 0,
      name: "",
      description: "",
      author: "",
      likes: 0,
      favourites: 0,
      timeMinutes: 0,
      numberOfPersons: 0,
      tags: [],
      photo: "",
      ingredients: [
        {
          title: "",
          items: []
        }
      ],
      steps: [
        {
          number: 1,
          description: "" 
        }
      ] 
    }
  }
}