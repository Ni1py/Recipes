import { Component, Input, OnInit } from '@angular/core';
import { CardContent } from '../recipe-of-the-day/recipe-of-the-day-card';

@Component({
  selector: 'app-recipe-of-the-day',
  templateUrl: './recipe-of-the-day.component.html',
  styleUrls: ['./recipe-of-the-day.component.css']
})
export class RecipeOfTheDayComponent implements OnInit {
  public card!: CardContent;
  constructor() { 
  }

  ngOnInit(): void {
    this.card =
    {
      image: "../../../../assets/images/day-recipe.png",
      likes: "356",
      time: "35 минут",
      title: "Тыквенный супчик на кокосовом молоке",
      text: "Если у вас осталась тыква, и вы не знаете что с ней сделать, то это решение для вас! Ароматный, согревающий суп-пюре на кокосовом молоке. Можно даже в Пост!",
      author: "@glazest",
    }
  }

}