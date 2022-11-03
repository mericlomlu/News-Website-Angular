import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessComponent } from './core/pages/business/business.component';
import { EntertainmentComponent } from './core/pages/entertainment/entertainment.component';
import { GeneralComponent } from './core/pages/general/general.component';
import { HealthComponent } from './core/pages/health/health.component';
import { HomeComponent } from './core/pages/home/home.component';
import { ScienceComponent } from './core/pages/science/science.component';
import { SportsComponent } from './core/pages/sports/sports.component';
import { TechnologyComponent } from './core/pages/technology/technology.component';
import { WelcomeComponent } from './core/pages/welcome/welcome.component';

const routes: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'business', component: BusinessComponent},
  {path: 'entertainment', component: EntertainmentComponent},
  {path: 'general', component: GeneralComponent},
  {path: 'health', component: HealthComponent},
  {path: 'science', component: ScienceComponent},
  {path: 'sports', component: SportsComponent},
  {path: 'technology', component: TechnologyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
