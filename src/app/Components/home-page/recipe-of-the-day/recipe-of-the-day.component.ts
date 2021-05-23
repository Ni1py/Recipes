import { Component, Input, OnInit } from '@angular/core';
import { CardContent } from '../recipe-of-the-day/recipe-of-the-day-card';

@Component({
  selector: 'app-recipe-of-the-day',
  templateUrl: './recipe-of-the-day.component.html',
  styleUrls: ['./recipe-of-the-day.component.css']
})
export class RecipeOfTheDayComponent implements OnInit {

  @Input() card!: CardContent;

  constructor() { }

  ngOnInit(): void {

  }

}
