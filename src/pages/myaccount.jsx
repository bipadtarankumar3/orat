import React from 'react'
import { FaChevronRight } from "react-icons/fa6";
import { Link } from 'react-router-dom';

function myaccount() {
  return (
    <div className='App other-page-top my-account-mobile'>
        <div className="AppContent BreakPointContainer">
            <div className="MyAccountWrapper prel overflow-hidden">
                <div className="MyAccountHeader layout align-center">
                    <div className="layout demi-bold justify-start h4 align-center">
                        <span> MY ACCOUNT </span>
                        <div className="DynamicHeightLoaderWrapper icon">
                            <FaChevronRight style={{width:'20px',height: '12px',margin: '0px 8px', color:'#000'}} />
                        </div>
                        <span className="demi-bold">PERSONAL DETAILS</span>
                    </div>
                </div>
                <div className="MyAccBody layout xs12">
                    <div className="h5 optionListLineHeight xs3 layout column pernia-dark-grey-color">
                        <Link to="/myaccount" className='cursor-pointer demi-bold pernia-color'> PERSONAL DETAILS </Link>
                        <Link to="/orderhistory" className='cursor-pointer demi-bold pernia-black-color'> ORDER HISTORY </Link>
                        <Link to="/addaddress" className='cursor-pointer demi-bold pernia-black-color'> MANAGE ADDRESSES </Link>
                        <Link to="/credits" className='cursor-pointer demi-bold pernia-black-color'> MY CREDITS </Link>
                        <Link to="/wishlist" className='cursor-pointer demi-bold pernia-black-color'> MY WISHLIST </Link>
                        <Link to="/settings" className='cursor-pointer demi-bold pernia-black-color'> SETTINGS </Link>
                        <Link to="" className='cursor-pointer demi-bold pernia-black-color'> LOGOUT </Link>
                    </div>
                    <div className="MyAccountPageWrapper flex xs9  prel overflow-hidden">
                        <div>
                            <div className="layout">
                                <div className="h4 flex xs3 m-b-20 demi-bold">MY DETAILS</div>
                            </div>
                            <div className="layout wrap align-start form_mobile">
                                <form action="" className='flex xs5 sm4'>
                                    <div className="layout column flex xs12">
                                        <div className="input-container-with-header">
                                             <div className="form-field-header p3 font-normal text-uppercase">FULL NAME</div>
                                             <input name="fname" className="account-my-detail" type="text" placeholder="Full Name" value="" required/>
                                        </div>
                                        <div className="input-container-with-header">
                                             <div className="form-field-header p3 font-normal text-uppercase">PHONE NUMBER</div>
                                             <input name="fname" className="account-my-detail" type="text" placeholder="Contact Number" value="" required/>
                                        </div>
                                        <div className="input-container-with-header">
                                             <div className="form-field-header p3 font-normal text-uppercase">EMAIL ADDRESS</div>
                                             <input name="fname" className="account-my-detail" type="text" placeholder="Email Address" value="" required/>
                                        </div>
                                        <button type="submit" className="btn-pernia-primary full-width m-t-48">SAVE CHANGES</button>
                                    </div>
                                </form>
                                <form action="" className='flex xs5 sm4 offset-xs1'>
                                    <div className="layout column flex xs12">
                                        <div className="input-container-with-header">
                                            <div className="form-field-header p3 font-normal text-uppercase">current password</div>
                                            <input name="old_password" className="account-my-detail" type="password" placeholder="Current Password" value="" required/>
                                        </div>
                                        <div className="input-container-with-header">
                                            <div className="form-field-header p3 font-normal text-uppercase">new password</div>
                                            <input name="old_password" className="account-my-detail" type="password" placeholder="New Password" value="" required/>
                                        </div>
                                        <div class="input-container-with-header">
                                            <div className="form-field-header p3 font-normal text-uppercase">confirm new password</div>
                                            <input name="confirmnewpassword" className="account-my-detail" type="password" placeholder="Confirm New Password" value="" required/>
                                        </div>
                                        <button type="submit" className="btn-pernia-primary full-width m-t-48">CHANGE PASSWORD</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>    
    </div>
  )
}

export default myaccount