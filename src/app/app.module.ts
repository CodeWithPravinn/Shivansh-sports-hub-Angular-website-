import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
<<<<<<< HEAD
import { ImageSliderComponent } from './header/image-slider/image-slider.component';
import { ActivityComponent } from './main/activity/activity.component';
=======
>>>>>>> e81d6eeb21151b253f0a3ce0d8fc3c2a485fb988

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
<<<<<<< HEAD
    HomeComponent,
    ImageSliderComponent,
    ActivityComponent
=======
    HomeComponent
>>>>>>> e81d6eeb21151b253f0a3ce0d8fc3c2a485fb988
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
