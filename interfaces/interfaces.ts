export interface propsMainLayout {
  children: React.ReactElement;
  title: string;
  pageDescription: string;
  imageFullUrl?: string; // ?:opcional
}
export interface IProduct {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}
export interface ICartProduct {
  product: IProduct;
  total: number;
  shipping: number;
  taxes: number;
}