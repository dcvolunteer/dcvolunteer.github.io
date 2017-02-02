import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';
import { DashboardResolve } from './dashboard.resolve';
import { HeroDetailResolve } from './hero-detail.resolve';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/opportunities', pathMatch: 'full' },
  { 
    path: 'opportunities',  
    component: DashboardComponent,
    resolve: {
      heroes: DashboardResolve
    },
  },
  { 
    path: 'opportunities/:urlFriendlyId', 
    component: HeroDetailComponent,
    resolve: {
      hero: HeroDetailResolve
    },
  },
  { path: '**', component: PageNotFoundComponent },
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  providers: [
    DashboardResolve,
    HeroDetailResolve
  ]
})
export class AppRoutingModule {}