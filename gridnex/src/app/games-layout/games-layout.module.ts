import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { GamesLayoutComponent } from './games-layout.component';
import { GamesLayoutRoutingModule } from './games-layout-routing.module';

@NgModule({
  declarations: [NavBarComponent, FooterComponent, GamesLayoutComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    GamesLayoutRoutingModule
  ]
})
export class GamesLayoutModule { }
