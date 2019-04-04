import { Component, OnInit } from '@angular/core';
import { NgImageSliderModule } from 'ng-image-slider';


@Component({
  selector: 'image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css']
})
export class ImageSliderComponent implements OnInit {


  private imageObject: Array<object>;


  constructor() { }

  ngOnInit() {

   this.imageObject = [
      {image: 'assets/images/slider/1.jpg',
      thumbImage: 'assets/images/slider/1-min.jpg',
      title: `Tea and doillies - mixed media`
      },

      {image: 'assets/images/slider/2.jpg',
      thumbImage: 'assets/images/slider/2-min.jpg',
      title: `Buntings out - mixed media`
      },

      {image: 'assets/images/slider/3.jpg',
      thumbImage: 'assets/images/slider/3-min.jpg',
      title: `Who's wrong now - mixed media`
      },

      {image: 'assets/images/slider/4.jpg',
      thumbImage: 'assets/images/slider/4-min.jpg',
      title: `Jam Dodgers anyone - media biscuit`
      }

    ]
  }

}
