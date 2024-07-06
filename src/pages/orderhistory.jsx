import React from 'react'
import { FaChevronRight } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { Noorderhistory } from '../image';

function orderhistory() {
    return (
        <div className='App other-page-top my-orderhistory-mobile'>
            <div className="AppContent BreakPointContainer">
                <div className="MyAccountWrapper prel overflow-hidden">
                    <div className="MyAccountHeader layout align-center">
                        <div className="layout demi-bold justify-start h4 align-center">
                            <span> MY ACCOUNT </span>
                            <div className="DynamicHeightLoaderWrapper icon">
                                <FaChevronRight style={{ width: '20px', height: '12px', margin: '0px 8px', color: '#000' }} />
                            </div>
                            <span className="demi-bold">MY ORDERS</span>
                        </div>
                    </div>
                    <div className="MyAccBody layout xs12">
                        <div className="h5 optionListLineHeight xs3 layout column pernia-dark-grey-color">
                            <Link to="/myaccount" className='cursor-pointer demi-bold pernia-black-color'> PERSONAL DETAILS </Link>
                            <Link to="/orderhistory" className='cursor-pointer demi-bold pernia-color'> ORDER HISTORY </Link>
                            <Link to="/addaddress" className='cursor-pointer demi-bold pernia-black-color'> MANAGE ADDRESSES </Link>
                            <Link to="/credits" className='cursor-pointer demi-bold pernia-black-color'> MY CREDITS </Link>
                            <Link to="/wishlist" className='cursor-pointer demi-bold pernia-black-color'> MY WISHLIST </Link>
                            <Link to="/settings" className='cursor-pointer demi-bold pernia-black-color'> SETTINGS </Link>
                            <Link to="" className='cursor-pointer demi-bold pernia-black-color'> LOGOUT </Link>
                        </div>
                        <div className="MyAccountPageWrapper flex xs9  prel overflow-hidden">
                            <div className="OrdersWrap show">
                                <div className="layout column justify-space-between align-center m-t-48 m-b-48">
                                    <div className="NoStateImage m-b-16">
                                        <div className="DynamicHeightLoaderWrapper icon" style={{ paddingTop: '100%' }}>
                                            <div className="DynamicHeightLoader layout row align-center justify-center">
                                                <img src={Noorderhistory} alt="logo" className='img-resp DynamicHeightLoaderImage' />
                                            </div>
                                        </div>
                                    </div>
                                    <h1 class="h1 demi-bold m-b-8">Your closet is empty!</h1>
                                    <p class="p1 demi-bold m-b-25">Let’s do some shopping.</p>
                                    <button class="btn-pernia-secondry width-auto text-uppercase">start shopping</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default orderhistory