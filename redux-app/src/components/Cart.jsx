import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CartItem from './CartItem';
import { calculateTotals } from '../features/cart/cartSlice';
import '../styles/Cart.css';

const Cart = () => {
  const dispatch = useDispatch();
  const { items, totalQuantity, totalAmount } = useSelector(state => state.cart);

  useEffect(() => {
    dispatch(calculateTotals());
  }, [items, dispatch]);

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      <div className="cart-items">
        {items.map(item => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <div className="cart-summary">
        <div>Total Quantity: {totalQuantity}</div>
        <div>Total Amount: ${totalAmount}</div>
      </div>
    </div>
  );
};

export default Cart;
