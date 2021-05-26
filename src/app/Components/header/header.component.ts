import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isInitialized: boolean = false;

  initialization() {
    this.isInitialized = !this.isInitialized;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
