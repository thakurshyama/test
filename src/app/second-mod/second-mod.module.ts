import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecondModRoutingModule } from './second-mod-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SectionComponent } from './section/section.component';


@NgModule({
  declarations: [
    DashboardComponent,
    SectionComponent
  ],
  imports: [
    CommonModule,
    SecondModRoutingModule
  ]
})
export class SecondModModule { }
