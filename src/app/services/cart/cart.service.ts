import { Directive, Injectable } from '@angular/core';
import { ICart } from 'src/app/models/cart.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http : HttpClient) { }

  GetCarts() : Observable<any>{

    let direction = "https://apibookweb.azurewebsites.net/api/Cart/GetCarts"
    let headers = new HttpHeaders({
      'Authorization': 'bearer ' + localStorage.getItem('token')
    });

    return this.http.get<ICart[]>(direction, { headers });
  }

  GetCart(userName : string) : Observable<any>{

    let direction = "https://apibookweb.azurewebsites.net/api/Cart/GetCart/" + userName
    let headers = new HttpHeaders({
      'Authorization': 'bearer ' + localStorage.getItem('token') 
    });

    return this.http.get<ICart[]>(direction, { headers });
  }

  AddItem(userName : string, bookId : number) : Observable<any>{

    let direction = "https://apibookweb.azurewebsites.net/api/Cart/" + userName + "/AddItem/" + bookId;
    let headers = new HttpHeaders({
      'Authorization': 'bearer ' + localStorage.getItem('token')
    });

    return this.http.post<ICart[]>(direction, {}, { headers });
  }

  RemoveItem(userName: string, bookId: number) : Observable<any>{
    
    let direction = "https://apibookweb.azurewebsites.net/api/Cart/" + userName + "/RemoveItem/" + bookId;
    let headers = new HttpHeaders({
      'Authorization': 'bearer ' + localStorage.getItem('token')
    });

    return this.http.delete<ICart[]>(direction, { headers });
  }

  UpdateItem(userName : string, bookId : number, newQuantity : number) : Observable<any>{
    let direction = "https://apibookweb.azurewebsites.net/api/Cart/" + userName + "/UpdateItem/" + bookId + "?newQuantity=" + newQuantity;
    let headers = new HttpHeaders({
      'Authorization': 'bearer ' + localStorage.getItem('token')
    });
    
    return this.http.post<ICart[]>(direction, {}, { headers });
  }

  ClearCart(userName : string) : Observable<any>{

    let direction = "https://apibookweb.azurewebsites.net/api/Cart/ClearCart/" + userName;
    let headers = new HttpHeaders({
      'Authorization': 'bearer ' + localStorage.getItem('token')
    });

    return this.http.delete<ICart[]>(direction, { headers });
  }
}
