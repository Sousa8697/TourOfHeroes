import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/base-page/dashboard/dashboard.component';
import { HeroesListComponent } from './components/base-page/heroes-list/heroes-list.component';
import { BasePageComponent } from './components/base-page/base-page.component';
import { NavComponent } from './components/base-page/nav/nav.component';
import { MiniDetailComponent } from './components/base-page/hero-details/mini-detail/mini-detail.component';
import { EditDetailComponent } from './components/base-page/hero-details/edit-detail/edit-detail.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroesListComponent,
    BasePageComponent,
    NavComponent,
    MiniDetailComponent,
    EditDetailComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
