import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'; 

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http : HttpClient) { }

  loginByUserName(form : any){
    let direction = "https://apibookweb.azurewebsites.net/api/Authenticate/Login"
    return this.http.post<any>(direction, form);
  }

  registerByUserName(form: any){
    let direction = "https://apibookweb.azurewebsites.net/api/Authenticate/Register"
    return this.http.post<any>(direction, form);
  }
}
