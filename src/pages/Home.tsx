import React from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import Carousel from '../components/common/Carousel';
import ProductCard from '../components/product/ProductCard';
import { Product } from '../types/product';

const Home: React.FC = () => {
  const featuredProducts: Product[] = [
    { id: '1', name: 'Product 1', description: 'Description for product 1', price: 29.99, image: '/assets/img/product1.jpg' },
    { id: '2', name: 'Product 2', description: 'Description for product 2', price: 39.99, image: '/assets/img/product2.jpg' },
    { id: '3', name: 'Product 3', description: 'Description for product 3', price: 49.99, image: '/assets/img/product3.jpg' },
  ];

  return (
    <div>
      <Header />
      <Carousel images={['/assets/img/slide1.jpg', '/assets/img/slide2.jpg', '/assets/img/slide3.jpg']} />
      <section>
        <h1>Welcome to Our Shop</h1>
        <p>Discover our featured products</p>
        <div className="featured-products">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
