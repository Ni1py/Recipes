import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-recipes',
  templateUrl: './search-recipes.component.html',
  styleUrls: ['./search-recipes.component.css']
})
export class SearchRecipesComponent implements OnInit {

  tags: string[] = ["Мясо", "Деликатесы", "Пироги", "Рыба"];

  constructor() { }

  ngOnInit(): void {
  }

}