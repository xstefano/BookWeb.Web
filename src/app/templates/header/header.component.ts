import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  userName: string | null = localStorage.getItem("userName");

  constructor() {
  }

  logout(){
    localStorage.removeItem("token");
    localStorage.removeItem("tokenExpirationDate");
    localStorage.removeItem("userName");
  }
}
