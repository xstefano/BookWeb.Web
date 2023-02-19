import { Injectable } from '@angular/core';
import { IOrder } from 'src/app/models/order.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http : HttpClient) { }

  getOrders(userName: string) : Observable<any>{

    let direction = "https://apibookweb.azurewebsites.net/api/Order/GetOrders/" + userName;
    let headers = new HttpHeaders({
      'Authorization': 'bearer ' + localStorage.getItem('token')
    });
    
    return this.http.get<IOrder[]>(direction, { headers });
  }

  getOrder(id: number) : Observable<any>{
    
    let direction = "https://apibookweb.azurewebsites.net/api/Order/" + id;
    let headers = new HttpHeaders({
      'Authorization': 'bearer ' + localStorage.getItem('token')
    });

    return this.http.get<IOrder[]>(direction, { headers });
  }

  createOrder(userName : string) : Observable<any>{

    let direction = "https://apibookweb.azurewebsites.net/api/Order/create/" + userName;
    let headers = new HttpHeaders({
      'Authorization': 'bearer ' + localStorage.getItem('token')
    });

    return this.http.post<IOrder[]>(direction, {}, { headers });
  }

}
