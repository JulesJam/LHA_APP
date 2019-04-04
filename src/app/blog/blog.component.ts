import { Component, OnInit } from '@angular/core';
import { BrowserModule, DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {

  private iframeURL: any
 
  constructor(private sanitizer: DomSanitizer) {
    console.log("ifu", this.iframeURL);
   this.iframeURL  = sanitizer.bypassSecurityTrustResourceUrl( "https://embed.tumblr.com/embed/post/zV81tYHrlsC2KIYsM898WA/176872968312");
    console.log("Here is the iframe", this.iframeURL);
   }

  ngOnInit() {
  }

}

