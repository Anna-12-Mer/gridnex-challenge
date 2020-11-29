import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { HomePageRoutingModule } from './home-page-routing.module';
import { HomePageComponent } from './home-page.component';
import { FeaturedGameComponent } from './featured-game/featured-game.component';

@NgModule({
  declarations: [HomePageComponent, FeaturedGameComponent],
  imports: [
    CommonModule,
    FormsModule,
    HomePageRoutingModule,
    Ng2SearchPipeModule,
    ReactiveFormsModule,
    CarouselModule,


  ]
})
export class HomePageModule { }
