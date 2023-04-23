export class Item{
    id:string | undefined;
    img_url:string |undefined;
    name:string | undefined;
    Price:any | undefined;
    sold: number;
    //star: number;
    describe:string | undefined;






    constructor(id:any,name:any,price:any,sold:number,desc:any) {
       this.id=id;
       this.name=name;
       this.Price=price;
       this.describe=desc;
       this.sold=sold

    }
}
