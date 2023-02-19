import { ICartItem } from "./cartItem.interface";

export interface ICart{
    id:number;
    userName:string;
    items:Array<ICartItem>
}