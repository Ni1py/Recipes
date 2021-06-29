import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopupAuthorizationComponent } from '../popup-authorization/popup-authorization.component';
import { PopupRegistrationComponent } from '../popup-registration/popup-registration.component';

@Component({
  selector: 'app-popup-link',
  templateUrl: './popup-link.component.html',
  styleUrls: ['./popup-link.component.css']
})
export class PopupLinkComponent implements OnInit {

  constructor(public dialog: MatDialog) {}

  public openPopupAuthorization() {
    this.dialog.open(PopupAuthorizationComponent);
  }

  public openPopupRegistration() {
    this.dialog.open(PopupRegistrationComponent);
  }

  ngOnInit(): void {
  }

}
