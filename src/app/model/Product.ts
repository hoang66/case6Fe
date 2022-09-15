export class Product {
  id: number
  nameSt: string
  img: string
  price: number
  quantity: number
  status: boolean
  description: string
  amount: number

  constructor(id: number, nameSt: string, img: string, price: number, quantity: number, status: boolean, description: string, amount: number) {
    this.id = id;
    this.nameSt = nameSt;
    this.img = img;
    this.price = price;
    this.quantity = quantity;
    this.status = status;
    this.description = description;
    this.amount = amount;
  }
}
