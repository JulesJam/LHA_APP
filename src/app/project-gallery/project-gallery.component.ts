import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations'
import { ImageSliderComponent } from '../image-slider/image-slider.component';


@Component({
  selector: 'app-project-gallery',
  templateUrl: './project-gallery.component.html',
  styleUrls: ['./project-gallery.component.css'],
  animations: [
    trigger('changeDivSize', [
      state('initial', style({
        display: 'none'
      })),
      state('final', style({
       position: 'absolute',
       backgroundColor: 'rgba(173, 173, 173, .8)',
       width: '100%',
       height: '88vh',
       maxHeight: '88vh',
       top: 0,
       left: 0,
       zIndex: 100
      })),
      transition('initial=>final', animate('1500ms')),
      transition('final=>initial', animate('1000ms'))
    ]),
  ]

})
export class ProjectGalleryComponent implements OnInit {

  private projects: Array<{id: number, imageUrl: string, title: string, year: number, blurb: string}>;

  private blurb: string;
  private displayProjectState: string;



  constructor() { }

  ngOnInit() {

    this.displayProjectState = 'initial';

    this.blurb = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pretium vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae. Ornare suspendisse sed nisi lacus sed viverra tellus in hac. Convallis aenean et tortor at risus viverra. Etiam non quam lacus suspendisse faucibus interdum posuere lorem ipsum. Pharetra et ultrices neque ornare. Auctor elit sed vulputate mi. Amet est placerat in egestas erat imperdiet sed. Eget duis at tellus at. Scelerisque felis imperdiet proin fermentum leo vel. Sodales neque sodales ut etiam sit amet nisl purus in. Bibendum est ultricies integer quis auctor. Elementum sagittis vitae et leo duis'

    this.projects = [{
      id: 1,
      imageUrl: '../assets/projects/hand decorated with love 2018/1.jpg',
      title: 'Hand Decorated With Love',
      year: 2018,
      blurb: this.blurb },

      {id: 2,
      imageUrl: '../assets/projects/keeping up appearances 2017/1.jpg',
      title: 'Keeping up appearances 2017',
      year: 2017,
      blurb: this.blurb },

      {id: 3,
      imageUrl: '../assets/projects/im not being rude 2017/1.jpg',
      title: `I'm not being rude`,
      year: 2017,
      blurb: this.blurb },

      {id: 4,
      imageUrl: '../assets/projects/icing hides a multitude of sins 2019/1.jpg',
      title: 'Icing Hides A Multitude of Sins',
      year: 2019,
      blurb: this.blurb },

      {id: 5,
      imageUrl: '../assets/projects/my mousetrap is nicer than your mousetrap 2017/1.jpg',
      title: 'My Mousetrap is Nicer Than Your Mousetrap 2017',
      year: 2017,
      blurb: this.blurb }
    ]
  }

  displayToggle():  void {
    console.log("Switching state -pgc l 83", this.displayProjectState);
    this.displayProjectState = this.displayProjectState === 'initial' ? 'final' : 'initial';
 
  }

  

}
