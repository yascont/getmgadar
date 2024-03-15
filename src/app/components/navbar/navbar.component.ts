import { Component } from '@angular/core';

@Component({
  selector: 'mg-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  currentPage = 'home';
  onChange(page: string) {
    this.currentPage = page
  }
}
