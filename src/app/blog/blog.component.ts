import { Component, OnInit } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  constructor(private http: HttpClient) {
    var headers = new HttpHeaders();
    headers.append('x-forwarded-host', 'Access-Control-Allow-Origin');
    http.get('https://embed.tumblr.com/embed/post/zV81tYHrlsC2KIYsM898WA/176557519517" data-did="60e487907089ceccd2f821841e62428caec2b752"><a href="https://homeiswheretheheartisuk.tumblr.com/post/176557519517/oh-you-didnt-make-your-own-gravy-i-didnt', {headers: headers}).subscribe(response =>{
      this.fetchedTumblBlog = response.json();
    })

   }

  ngOnInit() {
  }

}
