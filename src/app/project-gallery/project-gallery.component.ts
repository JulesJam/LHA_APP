import { Component, OnInit } from '@angular/core';
import { ImageSliderComponent } from '../image-slider/image-slider.component';


@Component({
  selector: 'app-project-gallery',
  templateUrl: './project-gallery.component.html',
  styleUrls: ['./project-gallery.component.css']
})
export class ProjectGalleryComponent implements OnInit {

  private projects: Array<{id: number, imageUrl: string, title: string, year: number, blurb: string}>;

  private blurb: string;


  constructor() { }

  ngOnInit() {

    this.blurb = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pretium vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae. Ornare suspendisse sed nisi lacus sed viverra tellus in hac. Convallis aenean et tortor at risus viverra. Etiam non quam lacus suspendisse faucibus interdum posuere lorem ipsum. Pharetra et ultrices neque ornare. Auctor elit sed vulputate mi. Amet est placerat in egestas erat imperdiet sed. Eget duis at tellus at. Scelerisque felis imperdiet proin fermentum leo vel. Sodales neque sodales ut etiam sit amet nisl purus in. Bibendum est ultricies integer quis auctor. Elementum sagittis vitae et leo duis'

    this.projects = [{
      id: 1,
      imageUrl: '..assets/images/projects/hand decorated with love 2018/1.jpg',
      title: 'Hand Decorated With Love',
      year: 2018,
      blurb: this.blurb },

      {id: 2,
      imageUrl: '..assets/images/projects/keeping up appearances 2017/1.jpg',
      title: 'Keeping up appearances 2017',
      year: 2017,
      blurb: this.blurb },

      {id: 3,
      imageUrl: '..assets/images/projects/im not being rude 2017/1.jpg',
      title: `I'm not being rude`,
      year: 2017,
      blurb: this.blurb },

      {id: 4,
      imageUrl: '..assets/images/projects/icing hides a multitude of sins 2019/1.jpg',
      title: 'Icing Hides A Multitude of Sins',
      year: 2019,
      blurb: this.blurb },

      {id: 5,
      imageUrl: '..assets/images/projects/my mousetrap is nicer than your mousetrap 2017/1.jpg',
      title: 'My Mousetrap is Nicer Than Your Mousetrap 2017',
      year: 2017,
      blurb: this.blurb }
    ]
  }

  

}
