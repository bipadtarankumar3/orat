import React, { useState } from 'react';
import Trending from '../components/trending';
import Shoppingcart from '../components/shoppingcart'
import Pricesummary from '../components/pricesummary'
import Recently from '../components/recently';
import Complete from '../components/complete';

function Checkout() {
  // const [isDropdownVisible, setDropdownVisible] = useState(false);

  // const toggleDropdown1 = () => {
  //   setDropdownVisible(!isDropdownVisible);
  // };

  return (
    <div className='App other-page-top mobile_checkout'>
      <div className="CartPage">
        <div className="CartWrapper">
          <div className="layout CartWrapperContent align-start justify-center mobile_ba">
            <div className="ShoppingCart CartWrapperContentLeft">
              <Shoppingcart/>
            </div>
            <div className="CartSummaryWrap CartWrapperContentRight">
              <Pricesummary/>
            </div>
          </div>
        </div>
        <Trending/>
        <Recently/>
        <Complete/>
      </div>
    </div>
  );
}

export default Checkout;
