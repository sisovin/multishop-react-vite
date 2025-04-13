import React, { useState } from 'react';

interface ProductFiltersProps {
  categories: string[];
  onFilterChange: (selectedCategories: string[]) => void;
}

const ProductFilters: React.FC<ProductFiltersProps> = ({ categories, onFilterChange }) => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const handleCategoryChange = (category: string) => {
    const updatedCategories = selectedCategories.includes(category)
      ? selectedCategories.filter((cat) => cat !== category)
      : [...selectedCategories, category];

    setSelectedCategories(updatedCategories);
    onFilterChange(updatedCategories);
  };

  return (
    <div className="product-filters">
      <h3>Filter by Category</h3>
      <ul>
        {categories.map((category) => (
          <li key={category}>
            <label>
              <input
                type="checkbox"
                value={category}
                checked={selectedCategories.includes(category)}
                onChange={() => handleCategoryChange(category)}
              />
              {category}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductFilters;
