import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'top-navigation',
  templateUrl: './top-navigation.component.html',
  styleUrls: ['./top-navigation.component.css']
})
export class TopNavigationComponent implements OnInit {

  worksMenuOpen: boolean;



  constructor() { }

  ngOnInit() {
   this.worksMenuOpen = false;
  }

  toggleMenu(route): void {

    switch(route){
      case 'none':
      this.worksMenuOpen =! this.worksMenuOpen;
      console.log('None', this.worksMenuOpen);
      break;
      case 'blog':
      //route to blog
      console.log('blog');
      break;
      case 'instagram':
      //route to instagram
      console.log('instagram');
      break;
      case 'worksByYears':
      //route to works byyears
      console.log('works by years');
      break;
      default:
      this.worksMenuOpen =!this.worksMenuOpen;
    }

   
  }



}
