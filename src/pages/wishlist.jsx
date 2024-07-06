import React from 'react';
import { FaChevronRight } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { Aug, Productimg3, Productimg3hover } from '../image';


function wishlist() {
    return (
        <div className='App other-page-top my-wishlist-mobile'>
            <div className="AppContent BreakPointContainer">
                <div className="MyAccountWrapper prel overflow-hidden">
                    <div className="MyAccountHeader layout align-center">
                        <div className="layout demi-bold justify-start h4 align-center">
                            <span> MY ACCOUNT </span>
                            <div className="DynamicHeightLoaderWrapper icon">
                                <FaChevronRight style={{ width: '20px', height: '12px', margin: '0px 8px', color: '#000' }} />
                            </div>
                            <span className="demi-bold">MY WISHLIST</span>
                        </div>
                    </div>
                    <div className="MyAccBody layout xs12">
                        <div className="h5 optionListLineHeight xs3 layout column pernia-dark-grey-color">
                            <Link to="/myaccount" className='cursor-pointer demi-bold pernia-black-color'> PERSONAL DETAILS </Link>
                            <Link to="/orderhistory" className='cursor-pointer demi-bold pernia-black-color'> ORDER HISTORY </Link>
                            <Link to="/addaddress" className='cursor-pointer demi-bold pernia-black-color'> MANAGE ADDRESSES </Link>
                            <Link to="/credits" className='cursor-pointer demi-bold pernia-black-color'> MY CREDITS </Link>
                            <Link to="/wishlist" className='cursor-pointer demi-bold pernia-color'> MY WISHLIST </Link>
                            <Link to="/settings" className='cursor-pointer demi-bold pernia-black-color'> SETTINGS </Link>
                            <Link to="" className='cursor-pointer demi-bold pernia-black-color'> LOGOUT </Link>
                        </div>
                        <div className="MyAccountPageWrapper flex xs9  prel overflow-hidden">
                            <div>
                                <div className="layout align-center">
                                    <div class="h4 demi-bold">MY WISHLIST ITEMS &nbsp; </div>
                                    <span class="p2 demi-bold pernia-light-grey align-self-end" style={{marginBottom: '7px'}}>(1 products)</span>
                                </div>
                                <div className="CatalogsearchResult p-t-20 WishListProductsResult">
                                    <div className="layout wrap align-start">
                                        <div className="flex xs4">
                                            <div>
                                                <a href="" target='_blank' className='ProductCard'>
                                                    <div className="ProductCardImageWrapper">
                                                        <div className="ProductImageWrapper">
                                                            <div className="FirstProductImage">
                                                                <div className="DynamicHeightLoaderWrapper" style={{ paddingTop: '50%' }}>
                                                                    <div className="DynamicHeightLoader layout row align-center justify-center" style={{ paddingTop: '100%' }}>
                                                                        <img src={Productimg3} alt="logo" className='img-resp DynamicHeightLoaderImage' style={{ padding: '0%' }} />
                                                                    </div>
                                                                    {/* <div class="animated-bg-placeholder"></div> */}
                                                                </div>
                                                            </div>
                                                            <div className="HoverProductImage">
                                                                <div className="DynamicHeightLoaderWrapper" style={{ paddingTop: '50%' }}>
                                                                    <div className="DynamicHeightLoader layout row align-center justify-center" style={{ paddingTop: '100%' }}>
                                                                        <img src={Productimg3hover} alt="logo" className='img-resp DynamicHeightLoaderImage' style={{ padding: '0%' }} />
                                                                    </div>
                                                                    {/* <div class="animated-bg-placeholder"></div> */}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="ProductCardBottom">
                                                        <h6 className="ProductCardTitle ellipsis demi-bold">Paulmi &amp; Harsh</h6>
                                                        <p className="ProductCardDescription p2 ellipsis-two-line">Dark Rose Pink Georgette Floral Printed Pre-Stitched Saree Set</p>
                                                        <div>
                                                            <div className="ProductPrice h6">
                                                                <span className="SpecialPrice demi-bold">₹24,120</span>
                                                            </div>
                                                        </div>
                                                        <div>
                                                         <button className="m-t-10 btn-pernia-bg-grey full-width">REMOVE FROM WISHLIST</button>
                                                        </div>
                                                    </div>
                                                    {/* <div class="layout">
                                                        <div class="ReadyToShip">
                                                            <div class="layout align-center justify-center full-height">
                                                                <img src={Aug} alt="redy-to-ship icon" />
                                                                <span class="bold">SHIP IN 48 HOURS</span>
                                                            </div>
                                                        </div>
                                                    </div> */}
                                                </a>
                                            </div>
                                        </div>
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

export default wishlist