import { NgModule } from '@angular/core';
import { Routes, RouterModule, ActivatedRoute } from '@angular/router';
import { LocationStrategy, HashLocationStrategy, APP_BASE_HREF } from '@angular/common';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {ContactComponent} from './contact/contact.component';
import {BlogComponent} from './blog/blog.component';
import { InstagramFeedComponent } from './instagram-feed/instagram-feed.component';
import { WorksByYearComponent } from './works-by-year/works-by-year.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'blog', component: BlogComponent},
  {path: 'instagram-feed', component: InstagramFeedComponent},
  {path: 'works-by-year', component: WorksByYearComponent},


  {path: '**',
component: PageNotFoundComponent}


  
  
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
  { provide: LocationStrategy, useClass: HashLocationStrategy},
  { provide: APP_BASE_HREF, useValue: '/'}
  ]
  
})
export class AppRoutingModule { }
