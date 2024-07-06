import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Cartbanner1, Razorpay, Visa } from '../image';
import { FaHeart } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import Alert from 'react-bootstrap/Alert';

function ShoppingCart() {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown1 = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  return (
    <div>
      <div>
        <h4>YOUR SHOPPING CART</h4>
        {[
        'danger',
      ].map((variant) => (
        <Alert key={variant} variant={variant}>
          Shop for ₹30,300 more and get flat ₹7,000 OFF! Use coupon 
          <Alert.Link href="#"> SHOPMORE120K</Alert.Link>
        </Alert>
      ))}
        <ul className='list-unstyled p-l-0 m-t-0 CartItemWrapper'>
          <li className="CartItem">
            <div className="layout row">
              <div className="layout row">
                <div className="ProductImage xs2 sm2 flex prel">
                  <Link to="">
                    <img src={Cartbanner1} alt="logo" className='overflow-hidden p4' />
                  </Link>
                </div>
                <div className="ProductDetails xs5 sm5 flex">
                  <div className="Brand text-uppercase bold">Aisha Rao</div>
                  <div className="Name bold">Multi-Colored Printed &amp; Embellished Lehenga Set</div>
                  <div className="Code m-t-10 bold">CODE: AAOC0722147</div>
                  <div className="dd-wrapper plainDropdown cartItemSizes">
                    <div className="dd-header" onClick={toggleDropdown1}>
                      <div className="dd-header-sort-text cartItemSizesHeader demi-bold"> Size: S </div>
                      <span className={`arrow-icon m-r-5 ${isDropdownVisible ? 'arrow-down-icon' : 'arrow-up-icon'}`}></span>
                    </div>
                    {isDropdownVisible && (
                      <ul className='dd-list bold'>
                        <li className='dd-list-item font-normal'>XS</li>
                        <li className="dd-list-item font-normal">S</li>
                        <li className="dd-list-item font-normal">M</li>
                        <li className="dd-list-item font-normal">L</li>
                        <li className="dd-list-item font-normal">XL</li>
                        <li className="dd-list-item font-normal">XXL</li>
                        <li className="dd-list-item font-normal">3XL</li>
                        <li className="dd-list-item font-normal">4XL</li>
                        <li className="dd-list-item font-normal">5XL</li>
                        <li className="dd-list-item font-normal">6XL</li>
                        <li className="dd-list-item font-normal">Custom Tailored</li>
                      </ul>
                    )}
                  </div>
                  <div className="Code m-t-10 bold text-uppercase">estimated shipping date :
                    <span className="text-underline">25th of April</span>
                  </div>
                </div>
                <div className="ProductPricing xs5 sm5 flex text-right layout column justify-space-between">
                  <div>
                    <div class="layout align-center justify-end">
                      <div class="DiscountedPrice bold m-l-0">₹184,900 </div>
                    </div>
                    <div class="layout align-center justify-end">
                      <div>
                        <div class="LoyaltyPoints bold layout align-center">
                          <span>EARN 9245 POINTS</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div></div>
                  <div className="ActionButton">
                    <span className='Wishlist'>
                      <FaHeart />
                    </span>
                    <span className='Remove'>
                      <IoMdClose />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
        <div className="layout align-start justify-end">
          <img src={Razorpay} alt="logo" style={{ width: '20%' }} className='razorpay'/>
        </div>
        <div className="layout justify-space-between Instructions m-t-25 m-b-25 p-b-25">
          <div>
            <div>
              <p>*Once your order has been placed no subsequent changes can be made in it.</p>
              <p>*Shipping cost may vary depending on the delivery destination.</p>
              <p>*Please check the final amount on the order summary page before completing the payment.</p>
              <p>*An item's price may vary according to the size selected.</p>
            </div>
            <div className="m-t-10">
              <Link href="" className='bold pernia-color-hover'> SHIPPING POLICY </Link>
              <Link href="" className='bold pernia-color-hover'> HELP </Link>
              <Link href="" className='bold pernia-color-hover'> CONTACT US </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;
