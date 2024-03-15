import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { AuthService } from '../auth.service';
import {  Router } from '@angular/router';
import { inject } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'mg-signup',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, ReactiveFormsModule, MatCardModule, MatButtonModule, NgIf],
  template: `  <div class="flex justify-center items-center bg-cover bg-center bg-no-repeat h-screen" style="background-image: url('assets/images/fit.jpg')">
    <form [formGroup]="loginForm" class="w-full max-w-xs">
      <mat-card>
          <mat-card-header>
            <mat-card-title>
                SignUp
            </mat-card-title>
          </mat-card-header>
          <mat-form-field>
            <mat-label>email</mat-label>
            <input formControlName="email" matInput />
          </mat-form-field>
          <mat-form-field>
            <mat-label>password</mat-label>
            <input  type="password" formControlName="password" matInput />
          </mat-form-field>
          <mat-card-actions>
            <button (click)="saveForm()" mat-raised-button color="primary" >submit</button>
            <a class="ml-20 hover:text-blue-800 hover:cursor-pointer" (click)="login()" color="primary" >login</a>
          </mat-card-actions>
          <div *ngIf="errorMessage" class="text-red-600 text-sm mt-2">{{ errorMessage }}</div>
      </mat-card>
      </form>
  </div>`,
})
export class SignupComponent {

  constructor(private formBuilder:FormBuilder,private authService: AuthService){
  }

  private readonly router: Router = inject(Router);
  errorMessage: string | null = null;


  loginForm = this.formBuilder.group({
    email : '',
    password : '',
  });

  saveForm(){

    const email: string | null | undefined = this.loginForm.value.email;
    const password: string | null | undefined = this.loginForm.value.password;
    console.log('here')
    if (email && password) {
      this.authService.signup(email, password)
      .then((userCredential) => {
        console.log(userCredential)
        this.router.navigate(['/home']);
      })
      .catch((error) => {
        this.errorMessage = error.message;
        const index = error.message.indexOf(':');
        this.errorMessage = index !== -1 ? error.message.substring(index + 1).trim() : error.message;
        console.log("error!")
      });
    }
  }
  login(){
    this.router.navigate(['/auth/login']);
  }
}
