import React from 'react'
import { Norton, Visa, Loyalty, Cartbanner1 } from '../image'
import { MdLockOutline } from "react-icons/md";
import { Link } from 'react-router-dom';

function payment() {
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
                                            <h4 className='h4 Fade mb-0'> 1. USER DETAILS </h4>
                                            <div class="p3 bold m-l-12 UserEmailAddress ellipsis pernia-dark-grey-color">demo@gmail.com</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="StepsShippingAddress CheckoutStep">
                                    <div className="CheckoutStepHeader layout align-center justify-space-between">
                                        <div className="layout align-center">
                                            <div className="h4 Fade mb-0">2. SHIPPING &amp; BILLING INFO</div>
                                            <div className="layout m-l-10 m-r-20">
                                            <div class="p3 bold ellipsis ShippingAddressTag">49 Rocky Oak Court, Quisquam obcaecati v, Harum eius quo reici</div>
                                            </div>
                                        </div>
                                        <button class="btn-icon p3 bold pernia-color-hover">Change</button>
                                    </div>
                                </div>
                                <div className="PaymentMethodsStep CheckoutStep">
                                    <div className="CheckoutStepHeader layout align-center justify-space-between active">
                                        <div>
                                            <div className="h4 mb-0">3. PAYMENT METHOD</div>
                                        </div>
                                    </div>
                                    <div className="CheckoutStepContent prel p-t-10">
                                        <div className="PaymentMethodsList layout wrap">
                                            <div className="layout wrap">
                                                <div className="flex xs6">
                                                    <div className="PaymentMethod">
                                                      <h5>NETBANKING</h5>
                                                      <span class="TicBox"></span>
                                                    </div>
                                                </div>
                                                <div className="flex xs6">
                                                    <div className="PaymentMethod">
                                                      <h5>CREDIT / DEBIT CARD</h5>
                                                      <span class="TicBox"></span>
                                                    </div>
                                                </div>
                                                <div className="flex xs6">
                                                    <div className="PaymentMethod">
                                                      <h5>UPI</h5>
                                                      <span class="TicBox"></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="PaymentMethodsAction p-t-25 m-t-25 m-l-12 m-r-12">
                                            <div className="layout justify-space-between align-center">
                                                <div className="layout column flex xs12 sm7">
                                                    <div className="layout align-center justify-start m-r-12">
                                                        <div className="small PslCheckbox flex">
                                                        <label>
                                                            <input type="checkbox" class="PslCheckboxInput" checked/>
                                                            <span className="PslCheckboxCheckmark"></span>
                                                            <div className="PslCheckboxText withLink m-r-5 m-l-5 ellipsis">I understand and agree to PERNIA'S POP-UP SHOP 
                                                               <span className="pernia-color-hover btn-tandc btn-icon bold text-underline">T&amp;C</span>
                                                            </div>
                                                        </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="layout flex xs6 sm5">
                                                    <button className="flex m-l-12 bold btn-pernia-primary">PAY NOW</button>
                                                </div>
                                            </div>
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
                                            <div className="layout align-center PaymentMethodIcons justify-end justify-sm-none">
                                                <img src={Visa} alt="logo" className='visa'/>
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

export default payment