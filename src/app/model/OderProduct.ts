export class OderProduct {
  id: number
  name: string
  quantity: number
  priceAll: number
  appUser: any
  product: any


  constructor(id: number, name: string, quantity: number, priceAll: number, appUser: any, product: any) {
    this.id = id;
    this.name = name;
    this.quantity = quantity;
    this.priceAll = priceAll;
    this.appUser = appUser;
    this.product = product;
  }
}
