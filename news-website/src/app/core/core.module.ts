import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './components/main/main.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';



@NgModule({
  declarations: [
    MainComponent,
    NavBarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
