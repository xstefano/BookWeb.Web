import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  registerForm = new FormGroup({
    userName : new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password : new FormControl('', Validators.required)
  })

  constructor( private auth:AuthService, private router:Router) { }


  successMessage:boolean = false;
  message:string = "";
  errorMessage:boolean = false;

  ngOnInit() : void {
    this.checkLocalStorage();
  }

  checkLocalStorage() {
    const token = localStorage.getItem('token');
    const tokenExpirationDate = localStorage.getItem('tokenExpirationDate');
  
    if (token && tokenExpirationDate) {
      const expirationDate = new Date(tokenExpirationDate);
  
      if (expirationDate <= new Date()) {
        localStorage.removeItem('token');
        localStorage.removeItem('tokenExpirationDate');
      } else {
        this.router.navigate(['dashboard']);
      }
    }
  }
  onRegister(form:any){
    this.auth.registerByUserName(form).subscribe(data =>{
      if (data.isSuccess){
        console.log(data)
        this.errorMessage = false;
        this.successMessage = true;
        this.message = data.displayMessage;

        setTimeout(() => {
          this.router.navigate(['/login']);
        }, 2000);
      }
    },
    error => {
      this.errorMessage = true
      this.successMessage = false;
    }
    )
  }
}
