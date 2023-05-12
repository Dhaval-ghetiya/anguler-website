import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormComponent } from './form/form.component';
import { RouterModule } from '@angular/router';
import { componentRoutes } from './component-routing.module';
import { SharedModule } from '../shared/shared.module';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
@NgModule({
  declarations: [
    DashboardComponent,
    FormComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(componentRoutes),
    SharedModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    
  ]
})
export class ComponentModule { }
