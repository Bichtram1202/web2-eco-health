export class ProductTypical{
  slice(startIndex: number, lastIndex: number): any[] {
    throw new Error('Method not implemented.');
  }

    constructor(
      public _id:any=null,
      public id:string="",
      public img_url:string="",
      public name:string="",
      public icon1_url:string="",
      public sold:string="",
      public icon2_url:string="",
      public star:string="",
      public price:string="",
     ){}
    }
