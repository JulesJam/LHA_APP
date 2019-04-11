import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { NgImageSliderModule } from 'ng-image-slider';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavigationComponent } from './top-navigation/top-navigation.component';
import { BottomNavigationComponent } from './bottom-navigation/bottom-navigation.component';
import { TitleBarComponent } from './title-bar/title-bar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectGalleryComponent } from './project-gallery/project-gallery.component';
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
    ProjectGalleryComponent,
    BlogComponent,
    InstagramFeedComponent,
    ContactComponent,
    ImageSliderComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgImageSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
