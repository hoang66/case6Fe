export class OderProduct {
  id?: number
  quantity?: number
  img?: string
  price?: number
  priceAll?: number
  description?: string
  user: any
  product: any

  constructor(id: number, quantity: number, img: string, price: number, priceAll: number, description: string, user: any, product: any) {
    this.id = id;
    this.quantity = quantity;
    this.img = img;
    this.price = price;
    this.priceAll = priceAll;
    this.description = description;
    this.user = user;
    this.product = product;
  }
}
