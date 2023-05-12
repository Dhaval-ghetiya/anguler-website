import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormComponent } from './form/form.component';
import { RouterModule, Routes } from '@angular/router';

export const componentRoutes: Routes = [
  // {
  //     path: 'dashboard',
  //     redirectTo: 'dashboard',
  //     pathMatch: 'full',
  // },
  // {
  //     path: 'dashboard',
  //     component: DashboardComponent,
  // },
  // {
  //     path: 'form',
  //     component: FormComponent,
  // },

  {
    path: '',
    children: [
      {
        path: "dashboard",
        component: DashboardComponent
      },
      {
        path: "form",
        component: FormComponent
      },
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    // RouterModule.forChild(componentRoutes),
  ]
})
export class ComponentRoutingModule { }
