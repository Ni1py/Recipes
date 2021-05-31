import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLogIn: boolean = false;

  toggleLoginStatus(_isLogIn: any) {
    this.isLogIn = !_isLogIn;
  }

  constructor() { }

  ngOnInit(): void {
  }

}