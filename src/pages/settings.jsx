import React from 'react'
import { FaChevronRight } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { Aug, Productimg3, Productimg3hover } from '../image';

function settings() {
    return (
        <div className='App other-page-top my-settings-mobile'>
            <div className="AppContent BreakPointContainer">
                <div className="MyAccountWrapper prel overflow-hidden">
                    <div className="MyAccountHeader layout align-center">
                        <div className="layout demi-bold justify-start h4 align-center">
                            <span> MY ACCOUNT </span>
                            <div className="DynamicHeightLoaderWrapper icon">
                                <FaChevronRight style={{ width: '20px', height: '12px', margin: '0px 8px', color: '#000' }} />
                            </div>
                            <span className="demi-bold">MY SETTINGS</span>
                        </div>
                    </div>
                    <div className="MyAccBody layout xs12">
                        <div className="h5 optionListLineHeight xs3 layout column pernia-dark-grey-color">
                            <Link to="/myaccount" className='cursor-pointer demi-bold pernia-black-color'> PERSONAL DETAILS </Link>
                            <Link to="/orderhistory" className='cursor-pointer demi-bold pernia-black-color'> ORDER HISTORY </Link>
                            <Link to="/addaddress" className='cursor-pointer demi-bold pernia-black-color'> MANAGE ADDRESSES </Link>
                            <Link to="/credits" className='cursor-pointer demi-bold pernia-black-color'> MY CREDITS </Link>
                            <Link to="/wishlist" className='cursor-pointer demi-bold pernia-black-color'> MY WISHLIST </Link>
                            <Link to="/settings" className='cursor-pointer demi-bold pernia-color'> SETTINGS </Link>
                            <Link to="" className='cursor-pointer demi-bold pernia-black-color'> LOGOUT </Link>
                        </div>
                        <div className="MyAccountPageWrapper flex xs9  prel overflow-hidden">
                            <div className="MySettings">
                                 <h4 className="m-b-20 demi-bold">MY SETTINGS</h4>
                                 <div className="flex xs7">
                                    <div className="MySettingsRow p-t-15 p-b-15 layout align-center justify-space-between">
                                     <h5 className="demi-bold">Whatsapp Notifications</h5>
                                    </div>
                                    <div className="layout align-start justify-content">
                                     <p className="p2 pernia-dark-grey-color m-r-20 m-b-15">By opting for WhatsApp updates, you consent to receiving notifications from Pernia's Pop-Up Shop regarding your order status, and shipping details, as well as updates on marketing and promotional&nbsp;activities.</p>
                                        <div className="SwitchCheckbox">
                                            <input type="checkbox" id="switch"/>
                                            <label for="switch">Toggle</label>
                                        </div>
                                    </div>
                                    <div className="MySettingsRow p-t-15 p-b-15 layout column">
                                        <div className="DeleteAccountContainer layout justify-space-between align-center">
                                            <div className="layout column justify-space-between align-start">
                                                 <h5 class="demi-bold text-capitalize m-b-5">delete my account</h5>
                                                 <div className="PslCheckbox flex">
                                                    <label>
                                                      <input name="" type="checkbox" className="PslCheckboxInput"/>
                                                      <span class="PslCheckboxCheckmark"></span>
                                                      <span class="PslCheckboxText m-l-5 m-r-5 ellipsis p2 pernia-dark-grey-color">Yes, I want to permanently close my Account and delete my data.</span>
                                                    </label>
                                                 </div>
                                            </div>
                                            <button class="btn-pernia-primary text-uppercase">delete my account</button>
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

export default settings