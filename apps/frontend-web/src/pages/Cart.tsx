import React from 'react';
import CartItem from '../components/cart/CartItem';
import CheckoutForm from '../components/cart/CheckoutForm';

interface CartProps {
  items: {
    id: string;
    name: string;
    price: number;
    quantity: number;
  }[];
  onRemoveItem: (id: string) => void;
  onUpdateItemQuantity: (id: string, quantity: number) => void;
  onSubmitOrder: (formData: { name: string; address: string; cardNumber: string }) => void;
}

const Cart: React.FC<CartProps> = ({ items, onRemoveItem, onUpdateItemQuantity, onSubmitOrder }) => {
  return (
    <div className="cart-page">
      <h1>Shopping Cart</h1>
      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {items.map((item) => (
            <CartItem
              key={item.id}
              id={item.id}
              name={item.name}
              price={item.price}
              quantity={item.quantity}
              onRemove={onRemoveItem}
              onUpdateQuantity={onUpdateItemQuantity}
            />
          ))}
          <CheckoutForm onSubmit={onSubmitOrder} />
        </div>
      )}
    </div>
  );
};

export default Cart;
