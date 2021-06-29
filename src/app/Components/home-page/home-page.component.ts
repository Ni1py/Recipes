import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopupLinkComponent } from '../popup-link/popup-link.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(public dialog: MatDialog) { }
  
  public openPopupLink() {
    this.dialog.open(PopupLinkComponent);
  }

  ngOnInit(): void {
  }

}