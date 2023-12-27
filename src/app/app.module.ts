import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ImageSliderComponent } from './header/image-slider/image-slider.component';
import { ActivityComponent } from './main/activity/activity.component';
import { KarateComponent } from './main/karate/karate.component';
import { SkatingComponent } from './main/skating/skating.component';
import { AppRoutingModule } from './app-routing.module';
import { FootballComponent } from './main/football/football.component';
import { VolleyballComponent } from './main/volleyball/volleyball.component';
import { TabletennisComponent } from './main/tabletennis/tabletennis.component';
import { BilliardpoolComponent } from './main/billiardpool/billiardpool.component';
import { SketingformComponent } from './main/sketingform/sketingform.component';
import { SketingallComponent } from './main/sketingall/sketingall.component';
import { FootballformComponent } from './main/footballform/footballform.component';
import { FootballallComponent } from './main/footballall/footballall.component';
import { VolleyballformComponent } from './main/volleyballform/volleyballform.component';
import { VolleyballallComponent } from './main/volleyballall/volleyballall.component';
import { TabletennisformComponent } from './main/tabletennisform/tabletennisform.component';
import { TabletennisallComponent } from './main/tabletennisall/tabletennisall.component';
import { BilliardpoolformComponent } from './main/billiardpoolform/billiardpoolform.component';
import { BilliardpoolallComponent } from './main/billiardpoolall/billiardpoolall.component';
import { SummaryComponent } from './summary/summary.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    HomeComponent,
    ImageSliderComponent,
    ActivityComponent,
    KarateComponent,
    SkatingComponent,
    FootballComponent,
    VolleyballComponent,
    TabletennisComponent,
    BilliardpoolComponent,
    SketingformComponent,
    SketingallComponent,
    FootballformComponent,
    FootballallComponent,
    VolleyballformComponent,
    VolleyballallComponent,
    TabletennisformComponent,
    TabletennisallComponent,
    BilliardpoolformComponent,
    BilliardpoolallComponent,
    SummaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
