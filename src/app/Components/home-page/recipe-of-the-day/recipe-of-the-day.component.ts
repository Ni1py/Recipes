import { Component, Input, OnInit } from '@angular/core';
import { RecipeDTO } from '../../../Entites/recipe-dto';

@Component({
  selector: 'app-recipe-of-the-day',
  templateUrl: './recipe-of-the-day.component.html',
  styleUrls: ['./recipe-of-the-day.component.css']
})
export class RecipeOfTheDayComponent implements OnInit {
  public card!: RecipeDTO;
  constructor() { 
  }

  ngOnInit(): void {
    this.card =
    {
      id: 1,
      name: "Тыквенный супчик на кокосовом молоке",
      description: "Если у вас осталась тыква, и вы не знаете что с ней сделать, то это решение для вас! Ароматный, согревающий суп-пюре на кокосовом молоке. Можно даже в Пост!",
      author: "@glazest",
      likes: 356,
      favourites: 20,
      timeMinutes: 35,
      numberOfPersons: 4,
      tags: ["тыква", "кокосовое молоко", "обед"],
      photo: "../../../../assets/images/day-recipe.png",
      ingredients: [{
        title: "Общая масса",
        items: [
          "Тыква - 500г.", 
          "Морковь - 1шт.", 
          "Лук-шалот - 1шт.",
          "Чеснок - 2 зубчика.",
          "Карри - 1 ч.л.",
          "Лавровый лист - 3шт."
        ]
      },
      {
        title: "Финальный штрих",
        items: ["Кокосовое молоко-17-19% - 400мл."]
      }],
      steps: [
        {
          number: 1,
          description: "Тыкву очистить, удалить семена и нарезать мякоть на кубики."
        },
        {
          number: 2,
          description: "Лук-шалот и морковь очистить, нарезать мелкими кубиками. Чеснок очистить и нарезать."
        },
        {
          number: 3,
          description: "Все овощи поместить в кастрюлю, добавить карри, лавровый лист, перец и соль по вкусу. Овощи на 2/3 объема кастрюли залить водой и поставить на огонь. Довести до кипения и варить 20 минут."
        },
        {
          number: 4,
          description: "Снять с огня, вынуть лавровый лист, добавить подогретое кокосовое молоко и взбить суп погружным блендером."
        },
        {
          number: 5,
          description: "Подавать горячим, украсить тыквенными семечками."
        }
      ],
    }
  }

}