import React, { useState } from 'react';
import { FaChevronRight } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import { IoClose } from "react-icons/io5";


const AddAddress = () => {
    // const [address, setAddress] = useState('');
    const [show, setShow] = useState(false);
    const [edishow, setShow1] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const editClose = () => setShow1(false);
    const editShow = () => setShow1(true);

    return (
        <div className='App other-page-top my-addaddress-mobile'>
            <div className="AppContent BreakPointContainer">
                <div className="MyAccountWrapper prel overflow-hidden">
                    <div className="MyAccountHeader layout align-center">
                        <div className="layout demi-bold justify-start h4 align-center">
                            <span> MY ACCOUNT </span>
                            <div className="DynamicHeightLoaderWrapper icon">
                                <FaChevronRight style={{ width: '20px', height: '12px', margin: '0px 8px', color: '#000' }} />
                            </div>
                            <span className="demi-bold">MANAGE ADDRESSES</span>
                        </div>
                    </div>
                    <div className="MyAccBody layout xs12">
                        <div className="h5 optionListLineHeight xs3 layout column pernia-dark-grey-color">
                            <Link to="/myaccount" className='cursor-pointer demi-bold pernia-black-color'> PERSONAL DETAILS </Link>
                            <Link to="/orderhistory" className='cursor-pointer demi-bold pernia-black-color'> ORDER HISTORY </Link>
                            <Link to="/addaddress" className='cursor-pointer demi-bold pernia-color'> MANAGE ADDRESSES </Link>
                            <Link to="/credits" className='cursor-pointer demi-bold pernia-black-color'> MY CREDITS </Link>
                            <Link to="/wishlist" className='cursor-pointer demi-bold pernia-black-color'> MY WISHLIST </Link>
                            <Link to="/settings" className='cursor-pointer demi-bold pernia-black-color'> SETTINGS </Link>
                            <Link to="" className='cursor-pointer demi-bold pernia-black-color'> LOGOUT </Link>
                        </div>
                        <div className="MyAccountPageWrapper flex xs9  prel overflow-hidden">
                            <div>
                                <div className="MyAddressBookWrapper prel overflow-hidden font-bold">
                                    <div className="layout justify-space-between align-center">
                                        <div className="h4 demi-bold"> MY ADDRESS BOOK </div>
                                        <div className="btn-pernia-inverse cursor-pointer demi-bold p1" onClick={handleShow}> + ADD NEW ADDRESS </div>
                                        <Modal show={show} onHide={handleClose} size="lg">
                                            <Modal.Body>
                                                <form action="" className='address_form flex'>
                                                    <div className="AddressFormWrapperWidth layout column m-t-20 m-l-20 m-b-20 m-r-20">
                                                        <div>
                                                            <div className="layout justify-space-between m-b-20">
                                                                <h4 class="m-l-12 m-b-12 m-t-0 text-uppercase demi-bold">Add Address</h4>
                                                                <div className='btn-icon' style={{cursor: 'pointer'}} onClick={handleClose}> <IoClose /> </div>
                                                            </div>
                                                            <div className="CommonAddressForm">
                                                                <div className="input-container">
                                                                    <div className="layout justify-space-between align-start">
                                                                        <div className="layout column flex xs6 input-container-controls m-l-12 m-r-12">
                                                                            <input name="fname" type="text" placeholder="First Name" value="" required/>
                                                                        </div>
                                                                        <div className="layout column flex xs6 input-container-controls m-l-12 m-r-12">
                                                                            <input name="fname" type="text" placeholder="Last Name" value="" required/>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="input-container">
                                                                    <div className="layout justify-space-between align-start">
                                                                        <div className="layout column flex xs6 input-container-controls m-l-12 m-r-12">
                                                                            <input name="fname" type="text" placeholder="Street Address" value="" required/>
                                                                        </div>
                                                                        <div className="layout column flex xs6 input-container-controls m-l-12 m-r-12">
                                                                            <input name="fname" type="text" placeholder="Zip / Postal Code" value="" required/>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="input-container">
                                                                    <div className="layout justify-space-between align-start">
                                                                        <div className="layout column flex xs6 input-container-controls m-l-12 m-r-12">
                                                                            <input name="fname" type="text" placeholder="City" value="" required/>
                                                                        </div>
                                                                        <div className="layout column flex xs6 input-container-controls m-l-12 m-r-12">
                                                                            <input name="fname" type="text" placeholder="State / Province" value="" required/>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="input-container">
                                                                    <div className="layout justify-space-between align-start">
                                                                        <div className="layout column flex xs6 input-container-controls m-l-12 m-r-12">
                                                                            <select name="country" required>
                                                                                <option value="">Select Country</option>
                                                                                <option value="IN">India</option>
                                                                                <option value="US">United States</option>
                                                                            </select>
                                                                        </div>
                                                                        <div className="layout column flex xs6 input-container-controls m-l-12 m-r-12">
                                                                            <input name="fname" type="text" placeholder="Mobile Number" value="" required/>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="input-container m-t-25 m-l-12 m-r-12">
                                                            <div class="layout justify-center align-start">
                                                                <div class="layout flex xs6">
                                                                    <button class="flex btn-pernia-primary m-l-12 text-uppercase" type="submit">Add Address</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                            </Modal.Body>
                                        </Modal>
                                    </div>
                                    <div className="AddressesList">
                                        <div className="AddressTile layout align-center justify-space-between demi-bold">
                                            <div className="NameContact text-uppercase">
                                                <h6 className='demi-bold'> Cade Jackson </h6>
                                                <h6 className='demi-bold'> 82 </h6>
                                            </div>
                                            <div className="DetailAddress p1">
                                                49 Rocky Oak Court Quisquam obcaecati v - 52865
                                            </div>
                                            <div className="EditDeleteOption">
                                                <button class="EditAddress btn-pernia-bg-grey" onClick={editShow}>EDIT</button>
                                                <button class="DeleteAddress btn-pernia-bg-grey">DELETE</button>
                                                <Modal show={edishow} onHide={editClose} size="lg">
                                                    <Modal.Body>
                                                        <form action="" className='address_form flex'>
                                                            <div className="AddressFormWrapperWidth layout column m-t-20 m-l-20 m-b-20 m-r-20">
                                                                <div>
                                                                    <div className="layout justify-space-between m-b-20">
                                                                        <h4 class="m-l-12 m-b-12 m-t-0 text-uppercase demi-bold">Edit Address</h4>
                                                                        <div className='btn-icon' style={{cursor: 'pointer'}} onClick={editClose}> <IoClose /> </div>
                                                                    </div>
                                                                    <div className="CommonAddressForm">
                                                                        <div className="input-container">
                                                                            <div className="layout justify-space-between align-start">
                                                                                <div className="layout column flex xs6 input-container-controls m-l-12 m-r-12">
                                                                                    <input name="fname" type="text" placeholder="First Name" value="demoname" required/>
                                                                                </div>
                                                                                <div className="layout column flex xs6 input-container-controls m-l-12 m-r-12">
                                                                                    <input name="fname" type="text" placeholder="Last Name" value="demoname" required/>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="input-container">
                                                                            <div className="layout justify-space-between align-start">
                                                                                <div className="layout column flex xs6 input-container-controls m-l-12 m-r-12">
                                                                                    <input name="fname" type="text" placeholder="Street Address" value="35 kolkata" required/>
                                                                                </div>
                                                                                <div className="layout column flex xs6 input-container-controls m-l-12 m-r-12">
                                                                                    <input name="fname" type="text" placeholder="Zip / Postal Code" value="6554" required/>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="input-container">
                                                                            <div className="layout justify-space-between align-start">
                                                                                <div className="layout column flex xs6 input-container-controls m-l-12 m-r-12">
                                                                                    <input name="fname" type="text" placeholder="City" value="" required/>
                                                                                </div>
                                                                                <div className="layout column flex xs6 input-container-controls m-l-12 m-r-12">
                                                                                    <input name="fname" type="text" placeholder="State / Province" value="" required/>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="input-container">
                                                                            <div className="layout justify-space-between align-start">
                                                                                <div className="layout column flex xs6 input-container-controls m-l-12 m-r-12">
                                                                                    <select name="country" required>
                                                                                        <option value="">Select Country</option>
                                                                                        <option value="IN">India</option>
                                                                                        <option value="US">United States</option>
                                                                                    </select>
                                                                                </div>
                                                                                <div className="layout column flex xs6 input-container-controls m-l-12 m-r-12">
                                                                                    <input name="fname" type="text" placeholder="Mobile Number" value="" required/>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="input-container m-t-25 m-l-12 m-r-12">
                                                                    <div class="layout justify-center align-start">
                                                                        <div class="layout flex xs6">
                                                                            <button class="flex btn-pernia-primary m-l-12 text-uppercase" type="submit">Update Address</button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </Modal.Body>
                                                </Modal>
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

export default AddAddress