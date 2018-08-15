import { NgModule } from '@angular/core';
import { RouterModule , Routes } from "@angular/router";
import {HeroesComponent} from "./components/heroes/heroes.component";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {HeroDetailsComponent} from "./components/hero-details/hero-details.component";

const routes: Routes = [
  { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailsComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
