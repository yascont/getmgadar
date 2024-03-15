import { Component } from '@angular/core';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { Router, NavigationEnd } from '@angular/router';
import { inject } from '@angular/core';
import { OnInit } from '@angular/core';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {


  private readonly router: Router = inject(Router);
  ngOnInit() {
    this.router.events
      .pipe(
        filter((event): event is NavigationEnd => event instanceof NavigationEnd)
      )
      .subscribe((event: NavigationEnd) => {
        if (event.url === '/' || event.url === '/home') {
          this.router.navigate(['/home']);
        }
      });
  }
  
}
