import { Item } from "./Item";
export let cartId:number=0
export class Cart{
    Id:number | any;
    Item: Item;
    Quantity:number ;
    TotalPrice:any;
    Status:Boolean=true

    constructor(quantity:number,item:any){
        this.TotalPrice=0;
        this.Id=cartId++,
        this.Item=item,
        this.Quantity=quantity
        this.TotalPrice=this.Item.Price*this.Quantity;
    }
}
