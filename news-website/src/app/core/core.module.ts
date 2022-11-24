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
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { RouterModule } from '@angular/router';
import {MenubarModule} from 'primeng/menubar';
import {ButtonModule} from 'primeng/button';
import {DataViewModule} from 'primeng/dataview';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DialogModule} from 'primeng/dialog';
import {PanelModule} from 'primeng/panel';
import {CardModule} from 'primeng/card';

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
    NewsTemplateComponent,
    WelcomeComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    MenubarModule,
    BrowserModule,
    BrowserAnimationsModule,
    DataViewModule,
    PanelModule,
    DialogModule,
    DropdownModule,
    InputTextModule,
    ButtonModule,
    FormsModule,
    CardModule
  ],
  exports: [MainComponent]
})
export class CoreModule { }
