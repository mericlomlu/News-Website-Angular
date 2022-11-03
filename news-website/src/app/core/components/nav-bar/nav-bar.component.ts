import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  items: MenuItem[] = [];

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Welcome',
        icon: 'pi pi-fast-backward',
        routerLink: ['/']
      },
      {
        label: 'Home',
        icon: 'pi pi-home',
        routerLink: ['/home']
      },
      {
        label: 'Business',
        icon: 'pi pi-briefcase',
        routerLink: ['/business']
      },
      {
        label: 'Entertainment',
        icon: 'pi pi-gift',
        routerLink: ['/entertainment']
      },
      {
        label: 'General',
        icon: 'pi pi-globe',
        routerLink: ['/general']
      },
      {
        label: 'Health',
        icon: 'pi pi-heart',
        routerLink: ['/health']
      },
      {
        label: 'Science',
        icon: 'pi pi-calculator',
        routerLink: ['/science']
      },
      {
        label: 'Sports',
        icon: 'pi pi-stopwatch',
        routerLink: ['/sports']
      },
      {
        label: 'Technology',
        icon: 'pi pi-desktop',
        routerLink: ['/technology']
      }
    ];
  }

}
