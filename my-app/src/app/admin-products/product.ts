export class Product {
  constructor(
    public _id: any = null,
    public id: string = '',
    public name: string = '',
    public sold: string = '',
    public price: number = 0,
    public describe: string = '',
    public type: string = '',
    public img_url: string = ''
  ) {}
}

export const ProductType: Record<string, string> = {
  granola: 'Granola',
  boankieng: 'Bơ ăn kiêng',
  biscotti: 'Biscotti',
  hatngucoc: 'Hạt ngũ cốc',
};
