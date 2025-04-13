import React from 'react';
import CheckoutForm from '../components/cart/CheckoutForm';

const Checkout: React.FC = () => {
  const handleFormSubmit = (formData: { name: string; address: string; cardNumber: string }) => {
    console.log('Order submitted:', formData);
  };

  return (
    <div className="checkout-page">
      <h1>Checkout</h1>
      <CheckoutForm onSubmit={handleFormSubmit} />
    </div>
  );
};

export default Checkout;
