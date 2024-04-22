import { Product } from './types';

export function randomnumber(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function shuffleProduct(products: Product[], numberOfProducts: number) {
  const shuffled = products.sort(() => 0.5 - Math.random());
  const selected = shuffled.slice(0, numberOfProducts);
  return selected;
}
