import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from '../main/user/user.component';
import { HomeComponent } from '../main/home/home.component';
import { SectionComponent } from '../second-mod/section/section.component';
import { DashboardComponent } from '../second-mod/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '', component: UserComponent
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'section', component: SectionComponent
  },
  {
    path: 'dashboard', component: DashboardComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutingRoutingModule { }
