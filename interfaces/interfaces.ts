export interface disabledBtn{
  disabledBtn: boolean;
}
export interface IProduct {
  id: string;
  name: string;
  price: number;
  image: string;
  disabled: boolean;
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