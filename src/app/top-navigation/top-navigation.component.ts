import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'top-navigation',
  templateUrl: './top-navigation.component.html',
  styleUrls: ['./top-navigation.component.css']
})
export class TopNavigationComponent implements OnInit {

  worksMenuOpen: boolean;
  message: string


  constructor() { }

  ngOnInit() {
   this.worksMenuOpen = false;
   this.message = "apple";
  }

  toggleMenu(): void {

    this.worksMenuOpen =! this.worksMenuOpen;
    this.worksMenuOpen? this.message = "fart" : this.message = "apple";
  }



}
