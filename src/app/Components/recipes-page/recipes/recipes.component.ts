import { Component, OnInit } from '@angular/core';
import { RecipeDTO } from '../../../Entites/recipe-dto';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  public cards!: RecipeDTO[];

  constructor() { }

  ngOnInit(): void {
    this.cards = [
      {
        id: 1,
        name: "Клубничная панна-котта",
        description: "Десерт, который невероятно легко и быстро готовится. Советую подавать его порционно в красивых бокалах, украсив взбитыми сливками, свежими ягодами и мятой.",
        author: "@glazest",
        likes: 8,
        favourites: 10,
        timeMinutes: 35,
        numberOfPersons: 5,
        tags: ["десерты", "клубника", "сливки"],
        photo: "../../../../assets/images/recipe1.png",
        ingredients: [{
          title: "Для панна котты",
          items: [
            "Сливки-20-30% - 500мл.",
            "Молоко - 100мл.",
            "Желатин - 2ч.л.",
            "Сахар - 3ст.л.",
            "Ванильный сахар - 2 ч.л."
          ]
        },
        {
          title: "Для клубничного желе",
          items: [
            "Сливки-20-30% - 500мл.",
            "Молоко - 100мл.",
            "Желатин - 2ч.л.",
            "Сахар - 3ст.л.",
            "Ванильный сахар - 2 ч.л."
          ]
        }],
        steps: [
          {
            number: 1,
            description: "Приготовим панна котту: Зальем желатин молоком и поставим на 30 минут для набухания. В сливки добавим сахар и ванильный сахар. Доводим до кипения (не кипятим!)."
          },
          {
            number: 2,
            description: "Добавим в сливки набухший в молоке желатин. Перемешаем до полного растворения. Огонь отключаем. Охладим до комнатной температуры."
          },
          {
            number: 3,
            description: "Разольем охлажденные сливки по креманкам и поставим в холодильник до полного застывания. Это около 3-5 часов."
          },
          {
            number: 4,
            description: "Приготовим клубничное желе: Клубнику помоем, очистим от плодоножек. Добавим сахар. Взбиваем клубнику с помощью блендера в пюре."
          },
          {
            number: 5,
            description: "Добавим в миску с желатином 2ст.ложки холодной воды и сок лимона. Перемешаем и поставим на 30 минут для набухания. Доведем клубничное пюре до кипения. Добавим набухший желатин, перемешаем до полного растворения. Огонь отключаем. Охладим до комнатной температуры."
          },
          {
            number: 6,
            description: "Сверху на застывшие сливки добавим охлажденное клубничное желе. Поставим в холодильник до полного застывания клубничного желе. Готовую панна коту подаем с фруктами."
          }
        ]
      },
      {
        id: 2,
        name: "Мясные фрикадельки",
        description: "Мясные фрикадельки в томатном соусе - несложное и вкусное блюдо, которым можно порадовать своих близких.",
        author: "@horilka",
        likes: 7,
        favourites: 4,
        timeMinutes: 90,
        numberOfPersons: 4,
        tags: ["вторые блюда", "мясо", "соевый соус"],
        photo: "../../../../assets/images/recipe2.png",
        ingredients: [{
          title: "",
          items: []
        }],
        steps: [
          {
            number: 1,
            description: ""
          }
        ]
      },
      {
        id: 3,
        name: "Панкейки",
        description: "Панкейки: меньше, чем блины, но больше, чем оладьи. Основное отличие — в тесте, оно должно быть воздушным, чтобы панкейки не растекались по сковородке...",
        author: "@turum-pum-pum",
        likes: 7,
        favourites: 25,
        timeMinutes: 40,
        numberOfPersons: 3,
        tags: ["десерты", "завтрак", "блины"],
        photo: "../../../../assets/images/recipe3.png",
        ingredients: [{
          title: "",
          items: []
        }],
        steps: [
          {
            number: 1,
            description: ""
          }
        ]
      },
      {
        id: 4,
        name: "Полезное мороженое без сахара",
        description: "Йогуртовое мороженое сочетает в себе нежный вкус и низкую калорийность, что будет особенно актуально для сладкоежек, соблюдающих диету.",
        author: "@sweet-girl",
        likes: 7,
        favourites: 4,
        timeMinutes: 35,
        numberOfPersons: 2,
        tags: ["десерты", "вишня", "мороженное"],
        photo: "../../../../assets/images/recipe4.png",
        ingredients: [{
          title: "",
          items: []
        }],
        steps: [
          {
            number: 1,
            description: ""
          }
        ]
      }];
  }

}