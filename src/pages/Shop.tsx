import React, { useState, useEffect } from 'react';
import ProductCard from '../components/product/ProductCard';
import ProductFilters from '../components/product/ProductFilters';
import { Product } from '../types/product';
import { fetchProducts } from '../utils/api';

const Shop: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    const loadProducts = async () => {
      const products = await fetchProducts();
      setProducts(products);
      setFilteredProducts(products);
      const uniqueCategories = Array.from(new Set(products.map(product => product.category)));
      setCategories(uniqueCategories);
    };

    loadProducts();
  }, []);

  const handleFilterChange = (selectedCategories: string[]) => {
    if (selectedCategories.length === 0) {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(product => selectedCategories.includes(product.category));
      setFilteredProducts(filtered);
    }
  };

  return (
    <div className="shop-page">
      <h1>Shop</h1>
      <ProductFilters categories={categories} onFilterChange={handleFilterChange} />
      <div className="product-list">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
