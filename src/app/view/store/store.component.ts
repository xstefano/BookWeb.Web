import { Component, OnInit } from '@angular/core';

import { IBook } from 'src/app/models/book.interface';
import { ICartItem } from 'src/app/models/cartItem.interface';

import { BookService } from 'src/app/services/book/book.service';
import { CartService } from 'src/app/services/cart/cart.service';
import { OrderService } from 'src/app/services/order/order.service';

import { ToastrService } from 'ngx-toastr';
import jwt_decode from 'jwt-decode';


@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
  
  userName: string = "";
  cartItems: ICartItem[];
  books: IBook[];
  totalPrice : number;

  constructor(private cart:CartService, private book:BookService, private order:OrderService, private toastr:ToastrService) {

    this.cartItems = [];
    this.books = [];
    this.totalPrice = 0;
    this.toastr.toastrConfig.timeOut = 4500;
  }

  ngOnInit(): void {

    const token = localStorage.getItem("token");
    if (token) {
      const decodedToken : any = jwt_decode(token);
      this.userName = decodedToken['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'];

      this.cart.GetCart(this.userName).subscribe(data => {
        this.cartItems = data.result.items;
      });

      this.book.getAllBooks().subscribe(data => {
        this.books = data.result;
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

  getTotalPrice() {
    let total = 0;
    for (let item of this.cartItems) {
      total += item.totalPrice;
    }
    return total.toFixed(2);
  }

  onQuantityChange(event: any, bookId : number) {
    const newValue = event.target?.value;
    if (newValue != null) {
      const newQuantity = Math.floor(parseFloat(newValue));

      this.cart.UpdateItem(this.userName, bookId, newQuantity)
      .subscribe(data => {
        this.cartItems = data.result.items;
      })
    }
  }

  onCheckout(){
    this.order.createOrder(this.userName).subscribe(data =>{
      this.ngOnInit();
      this.toastr.success('Your order was successfully created', 'Success');
    });
  }

  removeItem(bookId : number){
    this.cart.RemoveItem(this.userName, bookId).subscribe(data =>{
      this.ngOnInit();
      this.toastr.toastrConfig.timeOut = 1000;
      this.toastr.info(`${this.books.find(b => b.id == bookId)?.title} was removed.`, 'Info')
    });
  }

  onRemoveAllItems(){
    this.cart.ClearCart(this.userName).subscribe(data =>{
      this.ngOnInit();
      this.toastr.toastrConfig.timeOut = 2400;
      this.toastr.info('Removed all items from the shopping cart.', 'Info')
    });
  }
}
