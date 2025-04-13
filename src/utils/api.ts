import { Product } from '../types/product';

const products: Product[] = [
  { id: '1', name: 'Product 1', description: 'Description for product 1', price: 29.99, image: '/assets/img/product1.jpg', category: 'Category 1' },
  { id: '2', name: 'Product 2', description: 'Description for product 2', price: 39.99, image: '/assets/img/product2.jpg', category: 'Category 2' },
  { id: '3', name: 'Product 3', description: 'Description for product 3', price: 49.99, image: '/assets/img/product3.jpg', category: 'Category 1' },
];

export const fetchProducts = async (): Promise<Product[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 1000);
  });
};

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};
