export interface IProduct {
  id: string;
  name: string;
  price: number;
  image: string;
}
export interface newIProduct {
  product: IProduct;
  quantity: number;
}
export interface ICartProduct {
  product: IProduct;
  total: number;
  shipping: number;
  taxes: number;
}