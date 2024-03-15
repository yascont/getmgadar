import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/auth/auth.guard';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutComponent } from './pages/about/about.component';
import { PricingComponent } from './components/pricing/pricing.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    canActivate: [AuthGuard],
    component: AppComponent,
  },
  {
    path: 'home',
    pathMatch: 'full',
    // canActivate: [AuthGuard],
    component: PricingComponent,
  },
  // {
  //   path: 'home',
  //   pathMatch: 'full',
  //   canActivate: [AuthGuard],
  //   component: HomePageComponent,
  // },
  {
    path: 'about',
    pathMatch: 'full',
    canActivate: [AuthGuard],
    component: AboutComponent,
  },
  {
    path: 'auth',
    loadChildren: () => import('../auth/auth.module').then((m) => m.AuthModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
  
}
