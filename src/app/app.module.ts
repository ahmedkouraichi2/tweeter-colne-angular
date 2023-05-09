import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookmarkComponent } from './components/bookmark/bookmark.component';
import { LikeComponent } from './components/like/like.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TweetComponent } from './components/tweet/tweet.component';
import { BookmarkPageComponent } from './pages/bookmark-page/bookmark-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { TweetPageComponent } from './pages/tweet-page/tweet-page.component';
import { SignInComponent } from './pages/landing-page/sign-in/sign-in.component';
import { SignUpComponent } from './pages/landing-page/sign-up/sign-up.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { NgxWebstorageModule } from 'ngx-webstorage';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BookmarkComponent,
    LikeComponent,
    NavbarComponent,
    TweetComponent,
    BookmarkPageComponent,
    HomePageComponent,
    LandingPageComponent,
    ProfilePageComponent,
    TweetPageComponent,
    SignInComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxWebstorageModule.forRoot(),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
