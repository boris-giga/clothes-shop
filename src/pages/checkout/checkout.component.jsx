import React from 'react'
import './checkout.styles.scss'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal } from './../../redux/cart/cart.selectors';
import CheckoutItem from './../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from './../../components/stripe-button/stripe-button.component';

const CheckoutPage = ({cartItems, total}) => {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>PRODUCT</span>
        </div>
        <div className="header-block">
          <span>DESCRIPTION</span>
        </div>
        <div className="header-block">
          <span>QUANTITY</span>
        </div>
        <div className="header-block">
          <span>PRICE</span>
        </div>
        <div className="header-block">
          <span>REMOVE</span>
        </div>
      </div>
      {cartItems.map(cartItem => <CheckoutItem key={cartItem.id} cartItem={cartItem}/>)}
      <div className="total">
        <span>TOTAL ${total}</span>
      </div>
      <div className="test-warning">
      * PLEASE USE THE FOLLOWING TEST CREDIT CARD FOR PAYMENTS *
      <br/>
      4242 4242 4242 4242, EXP 01/22, CVV 123 
      </div>
      <StripeCheckoutButton price={total}/>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
})

export default connect(mapStateToProps)(CheckoutPage)