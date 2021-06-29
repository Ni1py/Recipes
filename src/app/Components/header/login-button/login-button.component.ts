import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopupLinkComponent } from '../../popup-link/popup-link.component';

@Component({
  selector: 'app-login-button',
  templateUrl: './login-button.component.html',
  styleUrls: ['./login-button.component.css']
})
export class LoginButtonComponent implements OnInit {
  
  constructor(public dialog: MatDialog) { }
  
  public openPopupLink() {
    this.dialog.open(PopupLinkComponent);
  }

  ngOnInit(): void {
  }

}