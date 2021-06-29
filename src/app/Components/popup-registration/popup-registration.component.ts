import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopupAuthorizationComponent } from '../popup-authorization/popup-authorization.component';

@Component({
  selector: 'app-popup-registration',
  templateUrl: './popup-registration.component.html',
  styleUrls: ['./popup-registration.component.css']
})
export class PopupRegistrationComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  public openPopupAuthorization() {
    this.dialog.open(PopupAuthorizationComponent);
  }

  ngOnInit(): void {
  }

}
