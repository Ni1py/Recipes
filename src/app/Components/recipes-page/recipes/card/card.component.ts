import { Component, OnInit, Input } from '@angular/core';
import { CardContent } from './card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() content!: CardContent;

  isFavoriteRecipe: boolean = true;
  isLikedRecipe: boolean = true;
   
  switchFavoriteRecipe()
  {
    this.isFavoriteRecipe = !this.isFavoriteRecipe;
  }

  switchLikedRecipe()
  {
    this.isLikedRecipe = !this.isLikedRecipe;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
