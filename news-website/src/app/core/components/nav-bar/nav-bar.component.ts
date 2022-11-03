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
        label: 'Welcome Page',
        icon: 'pi pi-ticket',
        routerLink: ['/']
      },
      {
        label: 'Home Page',
        icon: 'pi pi-home',
        routerLink: ['/home']
      },
      {
        label: 'News Categories',
        icon: 'pi pi-list',
        items: [
          {
            label: 'Business News',
            icon: 'pi pi-briefcase',
            routerLink: ['/business']
          },
          {
            separator:true
          },
          {
            label: 'Entertainment News',
            icon: 'pi pi-gift',
            routerLink: ['/entertainment']
          },
          {
            separator:true
          },
          {
            label: 'General News',
            icon: 'pi pi-globe',
            routerLink: ['/general']
          },
          {
            separator:true
          },
          {
            label: 'Health News',
            icon: 'pi pi-heart',
            routerLink: ['/health']
          },
          {
            separator:true
          },
          {
            label: 'Science News',
            icon: 'pi pi-calculator',
            routerLink: ['/science']
          },
          {
            separator:true
          },
          {
            label: 'Sports News',
            icon: 'pi pi-stopwatch',
            routerLink: ['/sports']
          },
          {
            separator:true
          },
          {
            label: 'Technology News',
            icon: 'pi pi-desktop',
            routerLink: ['/technology']
          },
          {
            separator:true
          }
        ]
      }
    ];
  }

}
