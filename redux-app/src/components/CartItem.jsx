import React from 'react';
import { useDispatch } from 'react-redux';
import { increaseQuantity, decreaseQuantity } from '../features/cart/cartSlice';
import '../styles/Cart.css';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className="cart-item">
      <span>{item.name}</span>
      <span>${item.price}</span>
      <div className="quantity-controls">
        <button onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>
        <span>{item.quantity}</span>
        <button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
      </div>
      <span>${item.price * item.quantity}</span>
    </div>
  );
};

export default CartItem;
