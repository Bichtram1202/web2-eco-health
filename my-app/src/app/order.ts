export class Order {
  constructor(
    public productid:any=null,
    public name_product:string="",
    public img1_url:string="",
    public price:number,
    public quantity:number,
    public total: number){}
}
