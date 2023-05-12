import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent {
  loginForm: any;
  userId: any;
  forgotFrm: any;
  otp: any;
  constructor(private router:Router) {
  }

  ngOnInit(): void {
    
  }

  goToForgetPassword() {
    this.router.navigate(['/auth/forgetpassword']);
  }

  goToRegisterGuest() {
    this.router.navigate(['/auth/registerguests']);
  }
}
