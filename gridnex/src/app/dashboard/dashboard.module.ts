import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { ContentComponent } from './components/content/content.component';

@NgModule({
  declarations: [DashboardComponent, SideNavComponent, FooterComponent, HeaderComponent, ContentComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
