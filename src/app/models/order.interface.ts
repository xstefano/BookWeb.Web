import { IOrderItem } from "./orderItem.interface";

export interface IOrder{
    id:number;
    userName:string;
    totalPrice:number;
    createdAt:Date;
    items:Array<IOrderItem>;
}