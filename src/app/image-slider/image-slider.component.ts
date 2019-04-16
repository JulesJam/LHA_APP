import { Component, OnInit, Input, OnChanges, AfterViewInit } from '@angular/core';
import { NgImageSliderModule } from 'ng-image-slider';
import { Project } from '../project';


@Component({
  selector: 'image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css']
})
export class ImageSliderComponent {



  private images: Array<object>;
  private background: String;

  @Input() project: Project;
  private infinite: boolean;





  constructor() {

  }

  ngOnChanges(){

    this.infinite = true;
    
    if(this.project){
      this.images = this.project.images;
      this.background = this.project.imageUrl;
    }
    else {
      this.images = [{}];
    }

    console.log("this images ",this.images)
  }

 


  // use this to display more info on a clicked image

 
  showClickedImage(imageId){
    console.log('ImageId', imageId);
  }
  

}
