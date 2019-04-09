import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'top-navigation',
  templateUrl: './top-navigation.component.html',
  styleUrls: ['./top-navigation.component.css']
})
export class TopNavigationComponent implements OnInit {

  worksMenuOpen: boolean;



  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
   this.worksMenuOpen = false;
  }

  toggleMenu(route): void {

    switch(route){
      case 'none':
      this.worksMenuOpen =! this.worksMenuOpen;
      console.log('None', this.worksMenuOpen, route);
      break;
      case 'blog':
      //route to blog
      this.changeRoute(route);
      console.log('blog');
      break;
      case 'instagram-feed':
      //route to instagram
      this.changeRoute(route);
      console.log('instagram');
      break;
      case 'works-by-year':
      //route to works by years
      this.changeRoute(route);
      console.log('works by years');
      break;
      default:
      this.worksMenuOpen =!this.worksMenuOpen;
    }

   
  }

  changeRoute(route): void{
    this.router.navigateByUrl(route);
    this.worksMenuOpen =! this.worksMenuOpen;
  }



}
