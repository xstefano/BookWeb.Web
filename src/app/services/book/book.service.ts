import { Injectable } from '@angular/core';
import { IBook }  from 'src/app/models/book.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http : HttpClient) { }

  getAllBooks(): Observable<any> {

    let direction = "https://apibookweb.azurewebsites.net/api/Book";
    let headers = new HttpHeaders({
      'Authorization': 'bearer ' + localStorage.getItem('token')
    });
    
    return this.http.get<IBook[]>(direction, { headers });
  }

  getBook(id:number) : Observable<any>{
    let direction = "https://apibookweb.azurewebsites.net/api/Book/" + id;
    let headers = new HttpHeaders({
      'Authorization': 'bearer ' + localStorage.getItem('token')
    });

    return this.http.get<IBook[]>(direction, { headers });
  }

  newBook() : Observable<any>{
    let direction = "https://apibookweb.azurewebsites.net/api/Book"
    let headers = new HttpHeaders({
      'Authorization': 'bearer ' + localStorage.getItem('token')
    });

    return this.http.post<IBook[]>(direction, { headers });
  }

  updateBook() : Observable<any>{
    let direction = "https://apibookweb.azurewebsites.net/api/Book"
    let headers = new HttpHeaders({
      'Authorization': 'bearer ' + localStorage.getItem('token')
    });

    return this.http.put<IBook[]>(direction, { headers });
  }

  deleteBook(id:Int16Array) : Observable<any>{
    let direction = "https://apibookweb.azurewebsites.net/api/Book/" + id;
    let headers = new HttpHeaders({
      'Authorization': 'bearer ' + localStorage.getItem('token')
    });

    return this.http.delete<IBook[]>(direction, { headers });
  }
}
