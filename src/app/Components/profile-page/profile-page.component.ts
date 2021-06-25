import { Component, OnInit } from '@angular/core';

import { RecipeDTO } from '../../Entites/recipe-dto';
import { UserDTO } from '../../Entites/user-dto';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {

  public recipes!: RecipeDTO[];
  public author!: UserDTO;

  isVisible: boolean = false;
  isEdit: boolean = false;

  showEditing() {
    let name: any = document.getElementById("name-input");
    let login: any = document.getElementById("login-input");
    let password: any = document.getElementById("password-input");
    this.isEdit = !this.isEdit;
    if (this.isEdit) {
      name.disabled = false;
      login.disabled = false;
      password.disabled = false;
    }
    else {
      name.disabled = true;
      login.disabled = true;
      password.disabled = true;
    }
  }

  showHidePassword() {
    this.isVisible = !this.isVisible;
    let password: any = document.getElementById("password-input");
    if (this.isVisible) {
      password.type = "text";
    }
    else {
      password.type = "password";
    }
  }

  constructor() { }

  ngOnInit(): void {
    this.author = {
      name: "Татьяна",
      login: "glazest",
      password: "12345",
      description: "Буду готовить вместе с вами"
    }
    this.recipes = [
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
      }
    ]
  }
}
