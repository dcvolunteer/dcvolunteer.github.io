import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { HeroesComponent }      from './heroes/heroes.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';
import { DashboardResolveService } from './dashboard-resolve.service';
import { HeroDetailResolveService } from './hero-detail-resolve.service';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { 
    path: 'dashboard',  
    component: DashboardComponent,
    resolve: {
      heroes: DashboardResolveService  
    },
  },
  { 
    path: 'detail/:id', 
    component: HeroDetailComponent,
    resolve: {
      hero: HeroDetailResolveService
    },
  },
  { path: 'heroes',     component: HeroesComponent }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  providers: [
    DashboardResolveService,
    HeroDetailResolveService
  ]
})
export class AppRoutingModule {}