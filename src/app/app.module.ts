import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';

//import { SidebuttonsComponent } from './sidebuttons/sidebuttons.component';
import { CoursesComponent } from './courses/courses.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { EntreComponent } from './entre/entre.component';

import { YouTubePlayerModule } from '@angular/youtube-player';
import { HindiComponent } from './hindi/hindi.component';
import { KannadaComponent } from './kannada/kannada.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    //SidebuttonsComponent,
    CoursesComponent,
    LoginComponent,
    EntreComponent,
    HindiComponent,
    KannadaComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    YouTubePlayerModule,
    RouterModule.forRoot([
      {path: 'login', component: LoginComponent},
      {path: 'courses', component: CoursesComponent},
      {path: 'index',component:IndexComponent},
      {path: 'entre',component:EntreComponent},
      {path: 'hindi',component:HindiComponent},
      {path: 'kannada',component:KannadaComponent},
      {path: 'about',component:AboutComponent}
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
