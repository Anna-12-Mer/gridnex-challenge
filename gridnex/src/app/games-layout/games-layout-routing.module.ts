import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GamesLayoutComponent } from './games-layout.component';

const routes: Routes = [
  {
    path: '',
    component: GamesLayoutComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'prefix' },
      { path: 'home', loadChildren: './home-page/home-page.module#HomePageModule' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GamesLayoutRoutingModule { }
