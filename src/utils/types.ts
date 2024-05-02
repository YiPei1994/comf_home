export type Product = {
  id: number;
  image: string;
  name: string;
  price: number;
  desription: string;
  traits: string[];
  dimesions: string[];
};

export type ProdcutLink = {
  id: number;
  name: string;
  to: string;
};

export type CartProduct = {
  product: Product;
  quantity: number;
};
