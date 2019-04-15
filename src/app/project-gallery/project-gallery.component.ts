import { Component, OnInit, AfterViewInit, ElementRef, ViewChild} from '@angular/core';
import { ImageSliderComponent } from '../image-slider/image-slider.component';
import { Project } from '../project';




@Component({
  selector: 'app-project-gallery',
  templateUrl: './project-gallery.component.html',
  styleUrls: ['./project-gallery.component.css']

})
export class ProjectGalleryComponent implements OnInit {

  private projects: Array<Project>;

  private blurb: string;
  private displayProjectState: string;
  private projectDisplayTopCoOrdinate: string;
  private projectToDisplay: Array<any>;
  private project: Project;
  

  @ViewChild('projectBox') projectBox: ElementRef;


  constructor() { }

  ngOnInit() {

    this.displayProjectState = 'close';
    this.projectDisplayTopCoOrdinate = '100 px';
    this.projectToDisplay = [{}];


   

    this.projects = [{
      _id: 1,
      imageUrl: '../assets/projects/hand decorated with love 2018/1.jpg',
      title: 'Hand Decorated With Love',
      year: 2018,
      blurb: 'All about decorating things by hand in a lovely way that shows how loevly things are etc',
      images: [
        {image: '../assets/projects/hand decorated with love 2018/1.jpg',
        thumbImage: '../assets/projects/hand decorated with love 2018/1.jpg',
        title: `Decorated Roll - 1`
        },

        {image: '../assets/projects/hand decorated with love 2018/2.jpg',
        thumbImage: '../assets/projects/hand decorated with love 2018/2.jpg',
        title: `Decorated Roll - front`
        },
  
        {image: '../assets/projects/hand decorated with love 2018/3.jpg',
        thumbImage: '../assets/projects/hand decorated with love 2018/3.jpg',
        title: `Decorated Roll - close up`
        },
  
        {image: '../assets/projects/hand decorated with love 2018/4.jpg',
        thumbImage: '../assets/projects/hand decorated with love 2018/4.jpg',
        title: `Decorated Roll - close up side`
        }
      ]
      },

      {_id: 2,
      imageUrl: '../assets/projects/keeping up appearances 2017/1.jpg',
      title: 'Keeping up appearances 2017',
      year: 2017,
      blurb: 'All about keeping up appearenaces and keeping them up and lovely things etc etc',
      images: [
        {image: '../assets/projects/keeping up appearances 2017/1.jpg',
        thumbImage: '../assets/projects/keeping up appearances 2017/1.jpg',
        title: `Through a blind - 1`
        },

        {image: '../assets/projects/keeping up appearances 2017/2.jpg',
        thumbImage: '../assets/projects/keeping up appearances 2017/2.jpg',
        title: `Through a blind - 2`
        },
  
        {image: '../assets/projects/keeping up appearances 2017/3.jpg',
        thumbImage: '../assets/projects/keeping up appearances 2017/3.jpg',
        title: `Welcoming table on a street`
        },
  
        {image: '../assets/projects/keeping up appearances 2017/4.jpg',
        thumbImage: '../assets/projects/keeping up appearances 2017/4.jpg',
        title: `Welcoming table aeriel shot`
        }
      ]
      },
  
      {_id: 3,
      imageUrl: '../assets/projects/im not being rude 2017/1.jpg',
      title: `I'm not being rude`,
      year: 2017,
      blurb: 'All about not being rude and not rude things and loevly things etc etc',
      images: [
        {image: '../assets/projects/im not being rude 2017/1.jpg',
        thumbImage: '../assets/projects/im not being rude 2017/1.jpg',
        title: `The Table`
        },

        {image: '../assets/projects/im not being rude 2017/2.jpg',
        thumbImage: '../assets/projects/im not being rude 2017/2.jpg',
        title: `Close Up of Bunting and Balloons`
        },
  
        {image: '../assets/projects/im not being rude 2017/3.jpg',
        thumbImage: '../assets/projects/im not being rude 2017/3.jpg',
        title: `The Cell`
        },
  
        {image: '../assets/projects/im not being rude 2017/4.jpg',
        thumbImage: '../assets/projects/im not being rude 2017/4.jpg',
        title: `Close up of table`
        },
  
        {image: '../assets/projects/im not being rude 2017/5.jpg',
        thumbImage: '../assets/projects/im not being rude 2017/5.jpg',
        title: `What are you moaning about...`
        },
        {image: '../assets/projects/im not being rude 2017/6.jpg',
        thumbImage:'../assets/projects/im not being rude 2017/6.jpg',
        title: `The door`
        }
      ]
      },
  
      {_id: 4,
      imageUrl: '../assets/projects/icing hides a multitude of sins 2019/1.jpg',
      title: 'Icing Hides A Multitude of Sins',
      year: 2019,
      blurb: "all about icing over things to make them look like lovely things etc etc",
      images: [
        {image: 'https://www.thespruceeats.com/thmb/tgxI0NzJiPkJbPEbxYrD3r2tJ_Y=/450x0/filters:no_upscale():max_bytes(150000):strip_icc()/9.BakingaChocolateCakeIced_preview-5b0eeb5d30371300373a5beb.jpeg',
        thumbImage: 'https://www.thespruceeats.com/thmb/tgxI0NzJiPkJbPEbxYrD3r2tJ_Y=/450x0/filters:no_upscale():max_bytes(150000):strip_icc()/9.BakingaChocolateCakeIced_preview-5b0eeb5d30371300373a5beb.jpeg',
        title: `Https example`
        },

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
        }]
      },

      {_id: 5,
      imageUrl: '../assets/projects/my mousetrap is nicer than your mousetrap 2017/1.jpg',
      title: 'My Mousetrap is Nicer Than Your Mousetrap 2017',
      year: 2017,
      blurb: 'All about nice mouse traps and lovely things etc etc',
      images:[
        {image: 'https://www.thespruceeats.com/thmb/tgxI0NzJiPkJbPEbxYrD3r2tJ_Y=/450x0/filters:no_upscale():max_bytes(150000):strip_icc()/9.BakingaChocolateCakeIced_preview-5b0eeb5d30371300373a5beb.jpeg',
        thumbImage: 'https://www.thespruceeats.com/thmb/tgxI0NzJiPkJbPEbxYrD3r2tJ_Y=/450x0/filters:no_upscale():max_bytes(150000):strip_icc()/9.BakingaChocolateCakeIced_preview-5b0eeb5d30371300373a5beb.jpeg',
        title: `Https example`
        },

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
        }]
      }
    ]
  }

 

  displayToggle(project):  void {

    if(project){
      this.projectToDisplay = project.images;
      this.project = project;

      //Here I we get the position of clicked image to position the image slider in the viewable part of the viewport otherwise it can be located of screen especially on mobile
      const clickedProjectPosition = this.projectBox.nativeElement.getBoundingClientRect().top;
      if(clickedProjectPosition){this.projectDisplayTopCoOrdinate = (String((clickedProjectPosition*-1)+93))+'px'};
    }

    this.displayProjectState = this.displayProjectState === 'close' ? 'open' : 'close';
    
  }

  

}
