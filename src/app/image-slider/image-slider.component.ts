import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { NgImageSliderModule } from 'ng-image-slider';
import { Project } from '../project';


@Component({
  selector: 'image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css']
})
export class ImageSliderComponent implements OnInit {



  private imageObject: Array<object>;

  @Input() project: Project;
  private infinite: boolean;





  constructor() { }

  ngOnChanges(){

    this.infinite = true;
    
    if(this.project){
      this.imageObject = this.project.images}
    else {
      this.imageObject = [];
    }
  }

  ngOnInit() {
    this.project = {
      _id: null,
      imageUrl: '',
      title: '',
      year: null,
      blurb: 'string',
      images: []
    };
    this.imageObject = [{}];

  }


  // use this to display more info on a clicked image

 
  showClickedImage(imageId){
    console.log('ImageId', imageId);
  }
  

}
