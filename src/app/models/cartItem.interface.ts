import { IBook } from "./book.interface";

export interface ICartItem{
    id:number;
    quantity:number;
    unitPrice:number;
    totalPrice:number;
    bookId:number;
    book:IBook;
}