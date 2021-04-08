import { NgModule } from '@angular/core';
// these are imported so that the app can have routing functionality
import { RouterModule, Routes } from '@angular/router';
// this import gives the router somewhere to go once you configure the routes
import { HeroesComponent } from './heroes/heroes.component';
// adding the dashboard route
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
];

@NgModule({
  // add the routermodule to the approutingmodule imports array and configure it w the routes by calling routermodule.forroot()...
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
