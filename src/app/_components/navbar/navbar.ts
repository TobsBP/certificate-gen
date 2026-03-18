import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar implements OnInit {
  ngOnInit(): void {
    // Request from api for example
    this.message();
  }
  
  message() {
    console.log('I can call this');
  }
}
