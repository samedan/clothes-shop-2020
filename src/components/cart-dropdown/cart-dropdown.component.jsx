import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button.components';
import './cart-dropdown.styles.scss';
import CartItem from '../cart_item/cart-item.component';
import { createStructuredSelector } from 'reselect';
import { selectCartItems } from '../../redux/cart/cart.selectors';

const CartDropdown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.map(cartItem => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))}
    </div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);

const mapStateToProps = createStructuredSelector({
  // memoization
  cartItems: selectCartItems
});

export default connect(mapStateToProps)(CartDropdown);
