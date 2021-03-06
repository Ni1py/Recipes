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
  @Input() displayTheLink!: boolean;
  @Input() isFavourite!: boolean;

  isLiked: boolean = false;
   
  selectFavourite()
  {
    this.isFavourite = !this.isFavourite;
    this.isFavourite == true ? this.card.favourites++ : this.card.favourites--;
  }

  selectLiked()
  {
    this.isLiked = !this.isLiked;
    this.isLiked == true ? this.card.likes++ : this.card.likes--;
  }

  constructor() { }

  ngOnInit(): void {
  }

}