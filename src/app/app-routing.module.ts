import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasePageComponent } from './components/base-page/base-page.component';
import { DashboardComponent } from './components/base-page/dashboard/dashboard.component';
import { EditDetailComponent } from './components/base-page/hero-details/edit-detail/edit-detail.component';
import { HeroesListComponent } from './components/base-page/heroes-list/heroes-list.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    component: BasePageComponent,
    children: [
      { path: '', redirectTo: 'hero-dashboard', pathMatch: 'full' },
      { path: 'hero-dashboard', component: DashboardComponent },
      { path: 'hero-list', component: HeroesListComponent },
      { path: 'hero-edit/:id', component: EditDetailComponent },
    ],
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
