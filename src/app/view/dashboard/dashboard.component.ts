import { Component, OnInit } from '@angular/core';
import { IBook } from 'src/app/models/book.interface';

import { BookService } from 'src/app/services/book/book.service';
import { CartService } from 'src/app/services/cart/cart.service';

import { ToastrService } from 'ngx-toastr';
import jwt_decode from 'jwt-decode'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  userName : string = "";
  books:IBook[];

  constructor (private book:BookService, private cart:CartService, private toastr:ToastrService) { 
    this.books = [];
    this.toastr.toastrConfig.timeOut = 1000;
  }

  ngOnInit(): void{

    const token = localStorage.getItem("token");
    if (token) {
      const decodedToken : any = jwt_decode(token);
      this.userName = decodedToken['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'];
    }

    this.book.getAllBooks().subscribe(data =>{
      this.books = data.result;
    });
  }

  addToCart(book : IBook){
    this.cart.AddItem(this.userName, book.id).subscribe(data =>{
      this.toastr.success(`${book.title} added to cart`, 'Success');
    })
  }
}
