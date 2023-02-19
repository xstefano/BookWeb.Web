import { IBook } from "./book.interface";

export interface IOrderItem{
    id:number;
    quantity:number;
    unitPrice:number;
    totalPrice:number;
    bookId:number;
    book:IBook;
}