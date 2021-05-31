import { Component, OnInit, Input } from '@angular/core';
import { CardContent } from './card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() card!: CardContent;

  isFavorite: boolean = true;
  isLiked: boolean = true;
   
  selectFavorite()
  {
    this.isFavorite = !this.isFavorite;
    this.isFavorite == false ? this.card.favorites++ : this.card.favorites--;
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