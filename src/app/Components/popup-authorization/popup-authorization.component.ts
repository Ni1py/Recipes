import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopupRegistrationComponent } from '../popup-registration/popup-registration.component';

@Component({
  selector: 'app-popup-authorization',
  templateUrl: './popup-authorization.component.html',
  styleUrls: ['./popup-authorization.component.css']
})
export class PopupAuthorizationComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  public openPopupRegistration() {
    this.dialog.open(PopupRegistrationComponent);
  }

  ngOnInit(): void {
  }

}
