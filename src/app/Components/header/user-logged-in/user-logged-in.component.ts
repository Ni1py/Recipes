import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-user-logged-in',
  templateUrl: './user-logged-in.component.html',
  styleUrls: ['./user-logged-in.component.css']
})
export class UserLoggedInComponent implements OnInit {

  @Output() myEvent = new EventEmitter<boolean>();
  toggleLoginStatus(_isLogIn: any) {
        this.myEvent.emit(_isLogIn);
    }

  constructor() { }

  ngOnInit(): void {
  }

}