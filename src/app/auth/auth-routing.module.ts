import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { RouterModule, Routes } from '@angular/router';


export const AuthRoutes: Routes = [
  {
      path: '',
      children: [
          {
              path: 'login',
              component: LoginComponent
          },
          {
              path: 'register',
              component: RegisterComponent
          },
          {
              path: 'reset-password',
              component: ResetPasswordComponent
          },
      ]
  }
];
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(AuthRoutes),
    CommonModule
  ]
})
export class AuthRoutingModule { }
