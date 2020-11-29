import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  { path: '', loadChildren: './games-layout/games-layout.module#GamesLayoutModule' },
  { path: 'games', loadChildren: './games-layout/games-layout.module#GamesLayoutModule' },
  { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
  { path: '**', redirectTo: 'games' },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes, { useHash: true })]
})
export class AppRoutingModule { }
