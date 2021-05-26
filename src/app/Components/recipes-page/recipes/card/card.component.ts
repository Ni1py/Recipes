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
  }

  selectLiked()
  {
    this.isLiked = !this.isLiked;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
