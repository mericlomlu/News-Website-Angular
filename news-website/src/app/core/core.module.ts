import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './components/main/main.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomeComponent } from './pages/home/home.component';
import { ScienceComponent } from './pages/science/science.component';
import { SportsComponent } from './pages/sports/sports.component';
import { BusinessComponent } from './pages/business/business.component';
import { GeneralComponent } from './pages/general/general.component';
import { HealthComponent } from './pages/health/health.component';
import { TechnologyComponent } from './pages/technology/technology.component';
import { EntertainmentComponent } from './pages/entertainment/entertainment.component';
import { NewsTemplateComponent } from './templates/news-template/news-template.component';



@NgModule({
  declarations: [
    MainComponent,
    NavBarComponent,
    HomeComponent,
    ScienceComponent,
    SportsComponent,
    BusinessComponent,
    GeneralComponent,
    HealthComponent,
    TechnologyComponent,
    EntertainmentComponent,
    NewsTemplateComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
