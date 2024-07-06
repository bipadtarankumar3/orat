import React from 'react';
import { Link } from 'react-router-dom';
import { Loyalty } from '../image';

function pricesummary() {
  return (
    <div>
      <div className="CartWrapperContentRightContent">
        <h4>CART SUMMARY</h4>
        <div className="CartSummary">
          <div className="CartTotal bold">
            <span>Cart Total</span>
            <span class="float-right">₹369,800</span>
          </div>
          <div className="Shipping bold layout justify-space-between">
            <span><p>Total Discount</p></span>
            <span class="float-right">(-) ₹0</span>
          </div>
          <div className="Shipping bold m-b-0">
            <span>Shipping</span>
            <span className="float-right">₹0</span>
          </div>
          <p className="h7 demi-bold">Shipping charges to be calculated on Checkout</p>
        </div>
        <div class="LoyaltyEarnPoints layout align-center">
          <img src={Loyalty} alt='logo' />
          <p>You are earning <span class="bold">18490 Points</span> on this transaction</p>
        </div>
        <div className="LoyaltyEarnPoints m-t-10 m-b-10 layout align-center">
          <div className="PslCheckbox flex">
            <label>
              <input type="checkbox" class="PslCheckboxInput" />
              <span class="PslCheckboxCheckmark"></span>
              <span class="PslCheckboxText m-l-5 m-r-5 ellipsis p2">This is a gift item</span>
            </label>
          </div>
          <Link href="" className='font-normal h6 cursor-pointer'> (Know More) </Link>
        </div>
        <div className="PromoCodeWrapper">
          <h4>COUPON CODE</h4>
          <div className="ApplyPromoCode m-b-25">
            <div class="layout">
              <input type='text' placeholder="Enter Coupon Code" />
              <button type="button" class="btn-pernia-primary bold">APPLY</button>
            </div>
          </div>
        </div>
        <div className="TotalWrapper">
          <span className="Total bold">TOTAL PAYABLE</span>
          <span className="float-right ex-bold TotalAmount">₹369,800</span>
        </div>
        <div className="Buttons">
          <Link to="/address"> <button class="btn-pernia-primary bold">  PROCEED TO CHECKOUT </button> </Link>
          <Link to="/"> <button class="btn-pernia-secondry bold">CONTINUE SHOPPING</button> </Link>
        </div>
      </div>
    </div>
  )
}

export default pricesummary