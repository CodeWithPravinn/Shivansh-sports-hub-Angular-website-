import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { KarateComponent } from './main/karate/karate.component';
import { SkatingComponent } from './main/skating/skating.component';
import { FootballComponent } from './main/football/football.component';
import { VolleyballComponent } from './main/volleyball/volleyball.component';
import { TabletennisallComponent } from './main/tabletennisall/tabletennisall.component';
import { BilliardpoolallComponent } from './main/billiardpoolall/billiardpoolall.component';
import { VolleyballallComponent } from './main/volleyballall/volleyballall.component';
import { FootballallComponent } from './main/footballall/footballall.component';
import { SketingallComponent } from './main/sketingall/sketingall.component';
import { SummaryComponent } from './summary/summary.component';

const routes: Routes = [{ path: 'karate', component: KarateComponent },
{
  path: "skating", component: SketingallComponent
},
{
  path: "football", component: FootballallComponent
},
{
  path: "volleyball", component: VolleyballallComponent
},
{
  path: "tabletennis", component: TabletennisallComponent
},
{
  path: "billiardpool", component: BilliardpoolallComponent
},
{
  path: "summary", component: SummaryComponent
},
{
  path: "", component: SummaryComponent
}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
})
export class AppRoutingModule { }
