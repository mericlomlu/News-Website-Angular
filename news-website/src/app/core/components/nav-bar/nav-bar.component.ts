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
        label: 'Categories',
        icon: 'pi pi-list',
        items: [
          {
            label: 'Business',
            icon: 'pi pi-briefcase',
            routerLink: ['/business']
          },
          {
            separator:true
          },
          {
            label: 'Entertainment',
            icon: 'pi pi-gift',
            routerLink: ['/entertainment']
          },
          {
            separator:true
          },
          {
            label: 'General',
            icon: 'pi pi-globe',
            routerLink: ['/general']
          },
          {
            separator:true
          },
          {
            label: 'Health',
            icon: 'pi pi-heart',
            routerLink: ['/health']
          },
          {
            separator:true
          },
          {
            label: 'Science',
            icon: 'pi pi-calculator',
            routerLink: ['/science']
          },
          {
            separator:true
          },
          {
            label: 'Sports',
            icon: 'pi pi-stopwatch',
            routerLink: ['/sports']
          },
          {
            separator:true
          },
          {
            label: 'Technology',
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
