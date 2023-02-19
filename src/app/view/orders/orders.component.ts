import { Component, OnInit } from '@angular/core';

import { IOrder } from 'src/app/models/order.interface'; 
import { IOrderItem } from 'src/app/models/orderItem.interface';

import { BookService } from 'src/app/services/book/book.service';
import { OrderService } from 'src/app/services/order/order.service';

import jwt_decode from 'jwt-decode';
import { IBook } from 'src/app/models/book.interface';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  userName: string = "";
  books: IBook[];
  orderUser: IOrder[];
  orderItems: IOrderItem[];
  showModal: boolean;

  constructor(private book:BookService, private order:OrderService){
    this.books = [];
    this.orderUser = [];
    this.orderItems = [];
    this.showModal = false;
  }

  ngOnInit(): void {
    const token = localStorage.getItem("token");
    if (token) {
      const decodedToken : any = jwt_decode(token);
      this.userName = decodedToken['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'];

      this.order.getOrders(this.userName).subscribe(data =>{
        this.orderUser = data.result.sort((a: IOrder, b: IOrder) => {
          return <any>new Date(b.createdAt) - <any>new Date(a.createdAt);
        });
      });

      this.book.getAllBooks().subscribe(data =>{
        this.books = data.result
      });
    }
  }

  getBook(id:number) : IBook {
    const book = this.books.find(b => b.id === id);
    if (book) {
      return book;
    }
    return {
      id: 0,
      title: "",
      imagenURL: "",
      description: "",
      author: "",
      unitPrice: 0,
      createdAt: new Date()
    };
  }

  openModal(order: IOrder): void {
    this.orderItems = order.items;
    this.showModal = true;
    
  }
}
