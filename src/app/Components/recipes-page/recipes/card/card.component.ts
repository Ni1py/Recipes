import { Component, OnInit, Input } from '@angular/core';
import { RecipeDTO } from '../../../../Entites/recipe-dto';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() card!: RecipeDTO;
  @Input() displayTheTitle!: boolean;

  isFavourite: boolean = true;
  isLiked: boolean = true;
   
  selectFavourite()
  {
    this.isFavourite = !this.isFavourite;
    this.isFavourite == false ? this.card.favourites++ : this.card.favourites--;
  }

  selectLiked()
  {
    this.isLiked = !this.isLiked;
    this.isLiked == false ? this.card.likes++ : this.card.likes--;
  }

  constructor() { }

  ngOnInit(): void {
  }

}