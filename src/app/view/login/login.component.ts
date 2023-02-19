import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { AuthService } from 'src/app/services/auth/auth.service';

import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
      userName : new FormControl('', Validators.required),
      password : new FormControl('', Validators.required)
  }) 

  constructor( private auth:AuthService, private router:Router) { }

  errorStatus:boolean = false;

  ngOnInit(): void {
    this.checkLocalStorage();
  }

  checkLocalStorage(){
    const token = localStorage.getItem('token');
    const tokenExpirationDate = localStorage.getItem('tokenExpirationDate');
  
    if (token && tokenExpirationDate) {
      const expirationDate = new Date(tokenExpirationDate);
  
      if (expirationDate <= new Date()) {
        localStorage.removeItem('token');
        localStorage.removeItem('tokenExpirationDate');
        localStorage.removeItem('userName');
      } else {
        this.router.navigate(['dashboard']);
      }
    }
  }

  onLogin(form:any){
    this.auth.loginByUserName(form).subscribe(data =>{
      if (data.isSuccess){
        localStorage.setItem("userName", form.userName);
        localStorage.setItem("token", data.token);
        localStorage.setItem("tokenExpirationDate", data.expiration);
        this.errorStatus = false;
        this.router.navigate(['dashboard']);
      }
    },
    error => {
      this.errorStatus = true;
      console.log(error)
    })
  }
}