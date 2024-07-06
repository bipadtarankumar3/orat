import React, { useState } from 'react';
// import Pricesummary from '../components/pricesummary'
import { Norton, Visa, Loyalty, Cartbanner1 } from '../image'
import { MdLockOutline } from "react-icons/md";
import { Link } from 'react-router-dom';

function Address() {
    const [isFormVisible, setFormVisible] = useState(false);

    const showForm = () => {
      setFormVisible(true);
    };
  
    const hideForm = () => {
      setFormVisible(false);
    };

    return (
        <div className='App other-page-top'>
            <div className="BreakPointContainer AppContent">
                <div className="CartPage CheckoutPage">
                    <div className="CartWrapper">
                        <div className="layout CartWrapperContent justify-center responsive">
                            <div className="CheckoutSteps CartWrapperContentLeft">
                                <div className="StepsUserDetails CheckoutStep">
                                    <div className="CheckoutStepHeader layout align-center justify-space-between">
                                        <div className="layout align-center">
                                            <h4 className='h4 Fade'> 1. USER DETAILS </h4>
                                            <div class="p3 bold m-l-12 UserEmailAddress ellipsis pernia-dark-grey-color">demo@gmail.com</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="StepsShippingAddress CheckoutStep">
                                    <div className="CheckoutStepHeader layout align-center justify-space-between active">
                                        <div className="layout align-center">
                                            <div className="h4">2. SHIPPING &amp; BILLING INFO</div>
                                        </div>
                                    </div>
                                    <div className="CheckoutStepContent addressBar">
                                    {isFormVisible ? (
                                    <div>
                                        <form action="">
                                            <div className="layout column">
                                                <div className="layout justify-end">
                                                    <button className='btn-icon pernia-color-hover'  onClick={hideForm}> Back to address </button>
                                                </div>
                                                <div>
                                                    <h4 class="m-l-12 m-b-12 m-t-0">Add Your Shipping Address</h4>
                                                    <div className="CommonAddressForm">
                                                        <div className="input-container">
                                                            <div className="layout justify-space-between align-start">
                                                                <div class="flex xs6 input-container-controls">
                                                                    <div class="m-l-12 m-r-12 layout column">
                                                                        <input name="" type="text" placeholder="First Name" value="" required/>
                                                                    </div>
                                                                </div>
                                                                <div class="flex xs6 input-container-controls">
                                                                    <div class="m-l-12 m-r-12 layout column">
                                                                        <input name="" type="text" placeholder="Last Name" value="" required/>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="input-container">   
                                                            <div className="layout justify-space-between align-start">
                                                                <div class="flex xs6 input-container-controls">
                                                                    <div class="m-l-12 m-r-12 layout column">
                                                                        <input name="" type="text" placeholder="Street Address" value="" required/>
                                                                    </div>
                                                                </div>
                                                                <div class="flex xs6 input-container-controls">
                                                                    <div class="m-l-12 m-r-12 layout column">
                                                                        <input name="" type="text" placeholder="Zip / Postal Code" value="" required/>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>  
                                                        <div className="input-container">   
                                                            <div className="layout justify-space-between align-start">
                                                                <div class="flex xs6 input-container-controls">
                                                                    <div class="m-l-12 m-r-12 layout column">
                                                                        <input name="" type="text" placeholder="City" value="" required/>
                                                                    </div>
                                                                </div>
                                                                <div class="flex xs6 input-container-controls">
                                                                    <div class="m-l-12 m-r-12 layout column">
                                                                        <input name="" type="text" placeholder="State / Province" value="" required/>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="input-container">    
                                                            <div className="layout justify-space-between align-start">
                                                                <div class="flex xs6 input-container-controls">
                                                                    <div class="m-l-12 m-r-12 layout column">
                                                                        <select name="shipping.country" required>
                                                                            <option value="">Select Country</option>
                                                                            <option value="IN">India</option>
                                                                            <option value="US">United States</option>
                                                                            <option value="GB">United Kingdom</option>
                                                                            <option value="CA">Canada</option>
                                                                            <option value="AU">Australia</option>
                                                                            <option value="SG">Singapore</option>
                                                                            <option value="AE">United Arab Emirates</option>
                                                                            <option value="SA">Saudi Arabia</option>
                                                                            <option value="HK">Hong Kong SAR China</option>
                                                                            <option value="MY">Malaysia</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <div class="flex xs6 input-container-controls">
                                                                    <div class="m-l-12 m-r-12 layout column">
                                                                        <input name="" type="number" placeholder="10-digit mobile number without prefix" value="" required/>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="input-container m-t-25 m-l-12 m-r-12">
                                                    <div className="checkboxButtonContainer layout justify-space-between align-start">
                                                        <div className="layout column flex xs12 sm7">
                                                            <div className="layout align-center justify-start m-r-12">
                                                                <div className="small PslCheckbox flex">
                                                                    <label>
                                                                        <input name="is_default_billing" type="checkbox" className="PslCheckboxInput" checked required/>
                                                                        <span className="PslCheckboxCheckmark"></span>
                                                                        <span className="PslCheckboxText m-l-5 m-r-5 ellipsis p2">Billing Address is same as Shipping Address</span>
                                                                    </label>
                                                                </div>
                                                           </div>
                                                        </div>
                                                        <div className="layout flex xs6 sm5">
                                                            <button className="flex btn-pernia-primary m-l-12" type="submit">CONTINUE TO PAYMENT</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    {/* <button className="btn-pernia-secondry flex m-l-12">HIDE FORM</button> */}
                                    </div>
                                ) : (
                                    <div className="AddressSection">
                                    <div className="AddressSectionContent">
                                        <h4 className="m-l-12 m-b-12">Select Your Shipping Address</h4>
                                        <div className="AddressList">
                                            <div className="layout wrap AddressListContent">
                                                            <div className="flex xs6 sm4">
                                                                <div className="AddressBox prel active">
                                                                    <p className="AddressBoxTitle bold m-b-5">Address 1</p>
                                                                    <p className="ellipsis bold">49 Rocky Oak Court</p>
                                                                    <p className="ellipsis bold">Quisquam obcaecati v,Harum eius quo reici</p>
                                                                    <p class="ellipsis bold">TV-52865</p>
                                                                    <p class="m-t-5 ellipsis bold">82</p>
                                                                    <span class="TicBox"></span>
                                                                </div>
                                                            </div>
                                                        </div>
                                        </div>
                                        <div className="layout align-center justify-start m-l-12 m-t-12 m-b-12">
                                        <div className="small PslCheckbox flex">
                                            <label>
                                            <input name="is_default_billing" type="checkbox" className="PslCheckboxInput" checked />
                                            <span className="PslCheckboxCheckmark"></span>
                                            <span className="PslCheckboxText m-l-5 m-r-5 ellipsis p2">Billing Address is same as Shipping Address</span>
                                            </label>
                                        </div>
                                        </div>
                                        <div className="layout m-l-12 m-r-12">
                                        <Link to="/payment">
                                            <button className="btn-pernia-primary flex m-r-12">PROCEED TO PAYMENT</button>
                                        </Link>
                                        <button className="btn-pernia-secondry flex m-l-12" onClick={showForm}>ADD NEW ADDRESS</button>
                                        </div>
                                    </div>
                                    </div>
                                )}
                                    </div>
                                </div>
                                <div className="PaymentMethodsStep CheckoutStep">
                                    <div className="CheckoutStepHeader layout align-center justify-space-between">
                                        <div>
                                            <div className="h4 Fade">3. PAYMENT METHOD</div>
                                        </div>
                                    </div>
                                    <div className="m-t-25 m-b-25 layout align-center justify-end">
                                        <div className="layout align-center PaymentMethodIcons">
                                            <div className="flex xs5">
                                                <div className="layout align-center">
                                                    <img src={Norton} alt="logo" />
                                                    <MdLockOutline />
                                                    <div className="p3 bold pernia-dark-grey-color m-l-5">SECURE CHECKOUT</div>
                                                </div>
                                            </div>
                                            <div className="layout align-center PaymentMethodIcons justify-end">
                                                <img src={Visa} alt="logo" style={{width: 'auto'}}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="CartSummaryWrap CartWrapperContentRight CartWrapperContentRight">
                                {/* <Pricesummary/> */}
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
                                    {/* <div className="PromoCodeWrapper">
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
                                        <button class="btn-pernia-secondry bold">CONTINUE SHOPPING</button>
                                    </div> */}
                                    <div className="ProductSummary CartSummaryWrap">
                                     <h4>PRODUCT SUMMARY</h4>   
                                     <ul className='list-unstyled p-l-0 m-t-0 CartItemWrapper'>
                                        <li className='CartItem'>
                                            <div className="layout">
                                                    <div className="ProductImage">
                                                        <img src={Cartbanner1} alt="logo" className='overflow-hidden p4'/>
                                                    </div>
                                                    <div>
                                                        <div className="ProductDetails flex m-l-12">
                                                          <div className="Brand text-uppercase bold">Aisha Rao</div>
                                                          <div className="Name bold">Multi-Colored Printed &amp; Embellished Lehenga Set</div>
                                                          <div className="ProductPricing">
                                                            <div className="layout align-center">
                                                                <div className="DiscountedPrice bold m-l-0">₹184,900 </div>
                                                            </div>
                                                          </div>
                                                          <div class="Size bold">S</div>
                                                        </div>
                                                    </div>
                                            </div>
                                        </li>
                                     </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Address