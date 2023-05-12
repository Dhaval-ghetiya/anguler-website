import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
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
