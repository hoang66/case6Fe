export class Product {
  id: number
  nameSt: string
  img:string
  price:number
  status:boolean
  description:string

  constructor(id: number, nameSt: string, img: string,price:number,status:boolean, description: string) {
    this.id = id;
    this.nameSt = nameSt;
    this.img= img;
    this.price = price;
    this.status=status;
    this.description = description;
  }
}
