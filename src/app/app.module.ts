import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { NgImageSliderModule } from 'ng-image-slider';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavigationComponent } from './top-navigation/top-navigation.component';
import { BottomNavigationComponent } from './bottom-navigation/bottom-navigation.component';
import { TitleBarComponent } from './title-bar/title-bar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { WorksByYearComponent } from './works-by-year/works-by-year.component';
import { BlogComponent } from './blog/blog.component';
import { InstagramFeedComponent } from './instagram-feed/instagram-feed.component';
import { ContactComponent } from './contact/contact.component';
import { ImageSliderComponent } from './image-slider/image-slider.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

//update to path location strategy once backend is oprative

@NgModule({
  declarations: [
    AppComponent,
    TopNavigationComponent,
    BottomNavigationComponent,
    TitleBarComponent,
    HomeComponent,
    AboutComponent,
    WorksByYearComponent,
    BlogComponent,
    InstagramFeedComponent,
    ContactComponent,
    ImageSliderComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgImageSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
