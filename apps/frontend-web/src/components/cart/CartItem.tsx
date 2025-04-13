import React from 'react';

interface CartItemProps {
  id: string;
  name: string;
  price: number;
  quantity: number;
  onRemove: (id: string) => void;
  onUpdateQuantity: (id: string, quantity: number) => void;
}

const CartItem: React.FC<CartItemProps> = ({ id, name, price, quantity, onRemove, onUpdateQuantity }) => {
  const handleRemove = () => {
    onRemove(id);
  };

  const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newQuantity = parseInt(event.target.value, 10);
    onUpdateQuantity(id, newQuantity);
  };

  return (
    <div className="cart-item">
      <h3>{name}</h3>
      <p>Price: ${price.toFixed(2)}</p>
      <input type="number" value={quantity} onChange={handleQuantityChange} min="1" />
      <button onClick={handleRemove}>Remove</button>
    </div>
  );
};

export default CartItem;
