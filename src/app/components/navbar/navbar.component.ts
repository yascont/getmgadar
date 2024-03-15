import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationEnd } from '@angular/router';

@Component({
  selector: 'mg-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  routes = ['home', 'pricing', 'pages', 'class', 'schedule', 'blog', 'shop', 'contact']
  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.currentPage = this.router.url.substring(1)
        console.log(this.currentPage)
      }
    })
  }
  currentPage = this.router.url.substring(1);
}
