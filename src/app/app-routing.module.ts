import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { FormComponent } from './component/form/form.component';
import { LoginComponent } from './auth/login/login.component';
import { FullComponent } from './shared/full/full.component';
const routes: Routes = [
//  {
//     path: '',
//     component: FullComponent,
//     children: [{
//       path: 'dashboard',
//       component: DashboardComponent,
//   },
//   {
//     path: 'form',
//     component: FormComponent
//   },
// ]
//  }

  {
    path: '',
    component: FullComponent,
    children: [{
        path: '',
        loadChildren: () => import('./component/component.module').then(mod => mod.ComponentModule)
    }]
  },
  {
    path: 'auth',
    component: LoginComponent,
    children: [{
        path: '',
        loadChildren: () => import('./auth/auth.module').then(mod => mod.AuthModule)
    }]
  },
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
export class AppRoutingModule { }