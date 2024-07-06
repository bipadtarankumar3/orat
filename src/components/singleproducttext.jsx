import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsHeartFill } from "react-icons/bs";
import { MdInfoOutline } from "react-icons/md";
import { Customisations, Download, Earlydelivery, Iconwhatsapp, Setbreak, Videoconsult, Women, Womenm } from '../image';
import { Modal, Tabs, Tab } from 'react-bootstrap';
import { RiTruckLine } from "react-icons/ri";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import Table from 'react-bootstrap/Table';

function Singleproducttext() {
    const [showSizeModal, setShowSizeModal] = useState(false);
    const [showCustomModal, setShowCustomModal] = useState(false);

    const handleCloseSizeModal = () => setShowSizeModal(false);
    const handleShowSizeModal = () => setShowSizeModal(true);

    const handleCloseCustomModal = () => setShowCustomModal(false);
    const handleClosCustomModal = () => setShowCustomModal(false);
    const handleShowCustomModal = () => setShowCustomModal(true);


    return (
        <div className='flex offset-xs1 xs6'>
            <div className="ProductDetailRight">
                <div className="layout justify-space-between">
                    <Link className="ProductTitle demi-bold h1"> Aisha Rao </Link>
                    <div className="m-l-10 btn-icon ProductToWishlist flex xs1"> <BsHeartFill style={{ color: 'red', width: '18px', height: '18px' }} /> </div>
                </div>
                <p className="ProductDesc p1 pernia-dark-grey-color">Multi-Colored Printed &amp; Embellished Lehenga Set</p>
                <div className="layout align-start justify-space-between sectionSeparator sectionSeparator-bg">
                    <div>
                        <div className="ProductPrice">
                            <div className="layout align-center">
                                <span class="h4 m-r-10 demi-bold">₹31,200</span>
                                <span class="InitialPrice p3"> ₹ 40,000</span>
                                <span class="DiscountPriceRound p3"> 22% OFF </span>
                                <div className="psl-tooltip start-from-right">
                                    <MdInfoOutline style={{ width: '18px', height: '18px', marginBottom: '8px', marginLeft: '10px' }} />
                                </div>
                            </div>
                            <p class="p3 pernia-dark-grey-color demi-bold">inclusive of all taxes</p>
                        </div>
                    </div>
                </div>
                <div className="ProductSizes m-b-15">
                    <div>
                        <div className="layout m-b-10 m-l-5 p-t-15 justify-content-between-sm">
                            <p className="m-r-5 demi-bold p2">Select your size</p>
                            <button className="btn-icon p2 demi-bold p-t-0 bold" onClick={handleShowSizeModal}>What’s my size?</button>
                                <Modal show={showSizeModal} onHide={handleCloseSizeModal} size="lg">
                                            <Modal.Body className='CustomTailoredModal ProductInfoModal'>
                                                <div className="singleproduct rc-tabs rc-tabs-top layout column">
                                                    <div className="d-none-lg">
                                                        <div className="layout toolbarWrap2">
                                                            <button type="button" class="m12 close-btn btn btn--icon"  onClick={handleCloseSizeModal}>
                                                                <div className="btn__content">
                                                                    <IoMdClose className="iconNew"/>
                                                                </div>
                                                            </button> 
                                                        </div>
                                                    </div>
                                                    <Tabs
                                                        id="controlled-tab-example"
                                                        // activeKey={key} // Remove if not used
                                                        // onSelect={(k) => setKey(k)} // Remove if not used
                                                        className="mt-5-sm mb-3 layout custom-tailored-header row"
                                                    >
                                                        <Tab eventKey="home" title="SIZE GUIDE">
                                                            <div className="ProductInfoModalContent layout p-0">
                                                                <div className="flex">
                                                                    <div className="layout align-center justify-space-between full-width">
                                                                        <h5 className="bold d-none-sm">Size Chart for Women</h5>
                                                                            <div>
                                                                                <div className="layout align-center">
                                                                                    <h5 className="m-r-8 demi-bold">in</h5>
                                                                                    <div className="SwitchCheckbox black">
                                                                                        <input type="checkbox" id="switch"/>
                                                                                            <label for="switch">Toggle</label>
                                                                                    </div>
                                                                                    <h5 className="m-l-8 demi-bold pernia-light-grey">cms</h5>
                                                                                </div>
                                                                            </div>
                                                                    </div>
                                                                    <Table text-center responsive className='whats-model'>
                                                                        <thead>
                                                                            <tr>
                                                                            <th>(in inches)</th>
                                                                            <th>UK</th>
                                                                            <th>Bust</th>
                                                                            <th>Waist</th>
                                                                            <th>Hip</th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            <tr>
                                                                            <td>XS</td>
                                                                            <td>4</td>
                                                                            <td>32</td>
                                                                            <td>26</td>
                                                                            <td>36</td>
                                                                            </tr>
                                                                            <tr>
                                                                            <td>S</td>
                                                                            <td>4</td>
                                                                            <td>32</td>
                                                                            <td>26</td>
                                                                            <td>36</td>
                                                                            </tr>
                                                                            <tr>
                                                                            <td>M</td>
                                                                            <td>4</td>
                                                                            <td>32</td>
                                                                            <td>26</td>
                                                                            <td>36</td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </Table>
                                                                    <div className="SizeGuideHelpSection">
                                                                        <div className="layout align-center m-b-8">
                                                                        <FaWhatsapp className='whatsapp-icon'/>
                                                                            <p className='p1 pernia-black-color bold m-l-5'>
                                                                            Whatsapp Us at <span className='pernia-black-color'>  <Link className='pernia-color'> +91 1234567890 </Link> if you are unsure of your size. </span>
                                                                            </p>
                                                                        </div>
                                                                        <p className='p5'>
                                                                        This is a standard size guide for the basic body measurements. Length will vary according to style. There may also be variations in some brands commonly with Indian clothing, so please refer to the product measurements displayed on the product page. Alternatively, you may contact our customer care for specific queries at
                                                                        <Link className='pernia-color'> orth@gmail.com </Link>
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </Tab>
                                                        <Tab eventKey="profile" title="MEASURING GUIDE">
                                                            <div className="ProductInfoModalContent p-0">
                                                                <div className="flex xs12 m-t-15">
                                                                   <img src={Womenm} alt="logo" className='w-100 d-none-sm'/>
                                                                   <img src={Women} alt="logo" className='w-100 img-resp d-none-lg'/>
                                                                </div>
                                                            </div>
                                                            <div className="SizeGuideHelpSection">
                                                                        <div className="layout align-center m-b-8">
                                                                        <FaWhatsapp className='whatsapp-icon'/>
                                                                            <p className='p1 pernia-black-color bold m-l-5'>
                                                                            Whatsapp Us at <span className='pernia-black-color'>  <Link className='pernia-color'> +91 1234567890 </Link> if you are unsure of your size. </span>
                                                                            </p>
                                                                        </div>
                                                                        <p className='p5'>
                                                                        This is a standard size guide for the basic body measurements. Length will vary according to style. There may also be variations in some brands commonly with Indian clothing, so please refer to the product measurements displayed on the product page. Alternatively, you may contact our customer care for specific queries at
                                                                        <Link className='pernia-color'> orth@gmail.com </Link>
                                                                        </p>
                                                                    </div>
                                                        </Tab>
                                                        <Tab eventKey="contact" title="HOW TO MEASURE">
                                                            <div className="ProductInfoModalContent HowtomeasureguideContent p-0">
                                                                <div className="ytplayer-video-container">
                                                                <iframe width="100%" src="https://www.youtube.com/embed/YzfbpPQLmtE?si=xFJrLFZlUIFCIzPN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                                                </div>
                                                            </div>
                                                            <div className="SizeGuideHelpSection">
                                                                        <div className="layout align-center m-b-8">
                                                                        <FaWhatsapp className='whatsapp-icon'/>
                                                                            <p className='p1 pernia-black-color bold m-l-5'>
                                                                            Whatsapp Us at <span className='pernia-black-color'>  <Link className='pernia-color'> +91 1234567890 </Link> if you are unsure of your size. </span>
                                                                            </p>
                                                                        </div>
                                                                        <p className='p5'>
                                                                        This is a standard size guide for the basic body measurements. Length will vary according to style. There may also be variations in some brands commonly with Indian clothing, so please refer to the product measurements displayed on the product page. Alternatively, you may contact our customer care for specific queries at
                                                                        <Link className='pernia-color'> orth@gmail.com </Link>
                                                                        </p>
                                                                    </div>
                                                        </Tab>
                                                    </Tabs>
                                                </div>
                                        </Modal.Body>
                               </Modal>
                        </div>
                        <div className="prel m-l-5 p-t-5">
                            <div className="ProductSizesOptions layout wrap">
                                <div className="demi-bold">
                                    <span class="text-uppercase p2 demi-bold">XS</span>
                                </div>
                                <div className="demi-bold">
                                    <span class="text-uppercase p2 demi-bold">S</span>
                                </div>
                                <div className="demi-bold">
                                    <span class="text-uppercase p2 demi-bold">M</span>
                                </div>
                                <div className="demi-bold">
                                    <span class="text-uppercase p2 demi-bold">L</span>
                                </div>
                                <div className="demi-bold">
                                    <span class="text-uppercase p2 demi-bold">XL</span>
                                </div>
                                <div className="demi-bold">
                                    <span class="text-uppercase p2 demi-bold">XLL</span>
                                </div>
                                <div className="demi-bold">
                                    <span class="text-uppercase p2 demi-bold">3XL</span>
                                </div>
                                <div className="demi-bold">
                                    <span class="text-uppercase p2 demi-bold">4XL</span>
                                </div>
                                <div className="demi-bold">
                                    <span class="text-uppercase p2 demi-bold">5XL</span>
                                </div>
                                <div className="demi-bold">
                                    <span class="text-uppercase p2 demi-bold">6XL</span>
                                </div>
                            </div>
                            <div className="ProductSizesOptions">
                                <div className="active p-r-12 p-l-12 demi-bold w-40">
                                        {/* <span class="text-uppercase p2 demi-bold" onClick={handleShow}>CUSTOM TAILORED</span> */}
                                        <span className="text-uppercase p2 demi-bold" onClick={handleShowCustomModal}>CUSTOM TAILORED</span>
                                        <Modal show={showCustomModal} onHide={handleCloseCustomModal} size="lg">
                                            <Modal.Body className='CustomTailoredModal ProductInfoModal CUSTOM-TAILORED'>
                                                    <div className="singleproduct rc-tabs rc-tabs-top layout column">
                                                        <div className="d-none-lg">
                                                            <div className="layout toolbarWrap2">
                                                                <button type="button" class="m12 close-btn btn btn--icon"  onClick={handleCloseCustomModal}>
                                                                    <div className="btn__content">
                                                                        <IoMdClose className="iconNew"/>
                                                                    </div>
                                                                </button> 
                                                                <h3 className="txt-u demi-bold pt15 lh-20">Custom Tailored</h3>
                                                            </div>
                                                        </div>
                                                        {/* <Tabs
                                                            id="controlled-tab-example"
                                                            activeKey={key}
                                                            onSelect={(k) => setKey(k)}
                                                            className="mt-5-sm mb-3 layout custom-tailored-header row"
                                                        > */}
                                                        <Tabs
                                                            id="controlled-tab-example"
                                                            // activeKey={key} // Remove if not used
                                                            // onSelect={(k) => setKey(k)} // Remove if not used
                                                            className="mt-5-sm mb-3 layout custom-tailored-header row"
                                                        >
                                                            <Tab eventKey="home" title="I KNOW MY SIZE">
                                                                <div className="ProductInfoModalContent layout">
                                                                    <div className="flex xs6 flexxs10">
                                                                        <form action="">
                                                                            <div className="layout column">
                                                                                <div className="input-container">
                                                                                    {/* <div className="layout align-center">
                                                                                        <label>Choose your units</label>
                                                                                            <input name="" type="radio" className="m-r-5 m-l-25" value="inches" checked/>
                                                                                            <label>inches</label>
                                                                                            <input name="" type="radio" class="m-r-5 m-l-25" value="cms"/>
                                                                                            <label>cms</label>
                                                                                    </div> */}
                                                                                    <div>
                                                                                    <div className="layout align-center">
                                                                                    <label style={{marginRight: '5px',}}>Choose your units</label>
                                                                                        <h5 className="m-r-8 demi-bold">in</h5>
                                                                                        <div className="SwitchCheckbox black">
                                                                                            <input type="checkbox" id="switch"/>
                                                                                                <label for="switch">Toggle</label>
                                                                                        </div>
                                                                                        <h5 className="m-l-8 demi-bold pernia-light-grey">cms</h5>
                                                                                    </div>
                                                                                </div>
                                                                                </div>
                                                                                <div className="m-b-10">
                                                                                    <label>Tell us your body measurements</label>
                                                                                </div>
                                                                                <div className="input-container">
                                                                                    <div className="layout justify-space-between align-start">
                                                                                        <div className="layout column flex xs6">
                                                                                            <input name="" className="flex m-r-12" type="text" placeholder="Shoulder" value=""/>
                                                                                        </div>
                                                                                        <div class="layout column flex xs6">
                                                                                            <input name="" className="flex m-l-12" type="text" placeholder="Top Length" value=""/>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="input-container">
                                                                                    <div className="layout justify-space-between align-start">
                                                                                        <div className="layout column flex xs6">
                                                                                            <input name="" className="flex m-r-12" type="text" placeholder="Bust" value=""/>
                                                                                        </div>
                                                                                        <div class="layout column flex xs6">
                                                                                            <input name="" className="flex m-l-12" type="text" placeholder="Bottom Length (with heels)" value=""/>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="input-container">
                                                                                    <div className="layout justify-space-between align-start">
                                                                                        <div className="layout column flex xs6">
                                                                                            <input name="" className="flex m-r-12" type="text" placeholder="Under Bust" value=""/>
                                                                                        </div>
                                                                                        <div class="layout column flex xs6">
                                                                                            <input name="" className="flex m-l-12" type="text" placeholder="Kurta Length (with heels)" value=""/>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="input-container">
                                                                                    <div className="layout justify-space-between align-start">
                                                                                        <div className="layout column flex xs6">
                                                                                            <input name="" className="flex m-r-12" type="text" placeholder="Armhole" value=""/>
                                                                                        </div>
                                                                                        <div className="layout column flex xs6">
                                                                                            <input name="" className="flex m-l-12" type="text" placeholder="Front Neck Depth" value=""/>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="input-container">
                                                                                    <div className="layout justify-space-between align-start">
                                                                                        <div className="layout column flex xs6">
                                                                                            <input name="" className="flex m-r-12" type="text" placeholder="Sleeve Length" value=""/>
                                                                                        </div>
                                                                                        <div className="layout column flex xs6">
                                                                                            <input name="" className="flex m-l-12" type="text" placeholder="Back Neck Depth" value=""/>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="input-container">
                                                                                    <div className="layout justify-space-between align-start">
                                                                                        <div className="layout column flex xs6">
                                                                                            <input name="" className="flex m-r-12" type="text" placeholder="Bicep" value=""/>
                                                                                        </div>
                                                                                        <div className="layout column flex xs6">
                                                                                            <input name="" className="flex m-l-12" type="text" placeholder="Crotch Length" value=""/>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="input-container">
                                                                                    <div className="layout justify-space-between align-start">
                                                                                        <div className="layout column flex xs6">
                                                                                            <input name="" className="flex m-r-12" type="text" placeholder="Elbow" value=""/>
                                                                                        </div>
                                                                                        <div className="layout column flex xs6">
                                                                                            <input name="" className="flex m-l-12" type="text" placeholder="Thigh Circumference" value=""/>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="input-container">
                                                                                    <div className="layout justify-space-between align-start">
                                                                                        <div className="layout column flex xs6">
                                                                                            <input name="" className="flex m-r-12" type="text" placeholder="Wrist" value=""/>
                                                                                        </div>
                                                                                        <div className="layout column flex xs6">
                                                                                            <input name="" className="flex m-l-12" type="text" placeholder="Knee Circumference" value=""/>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="input-container">
                                                                                    <div className="layout justify-space-between align-start">
                                                                                        <div className="layout column flex xs6">
                                                                                            <input name="" className="flex m-r-12" type="text" placeholder="Waist" value=""/>
                                                                                        </div>
                                                                                        <div className="layout column flex xs6">
                                                                                            <input name="" className="flex m-l-12" type="text" placeholder="Calf Circumference" value=""/>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="input-container">
                                                                                    <div className="layout justify-space-between align-start">
                                                                                        <div className="layout column flex xs6">
                                                                                            <input name="" className="flex m-r-12" type="text" placeholder="Lower Waist" value=""/>
                                                                                        </div>
                                                                                        <div className="layout column flex xs6">
                                                                                            <input name="" className="flex m-l-12" type="text" placeholder="Ankle Circumference" value=""/>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="input-container">
                                                                                    <div className="layout justify-space-between align-start">
                                                                                        <div className="layout column flex xs6">
                                                                                            <input name="" className="flex m-r-12" type="text" placeholder="Lower Waist" value=""/>
                                                                                        </div>
                                                                                        <div className="layout column flex xs6">
                                                                                            <input name="" className="flex m-l-12" type="text" placeholder="Ankle Circumference" value=""/>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="m-b-10">
                                                                                    <label>Your Contact Details</label>
                                                                                </div>
                                                                                <div className="input-container m-b-5">
                                                                                    <div className="layout justify-space-between align-start">
                                                                                        <div className="layout column flex xs6">
                                                                                            <input name="" className="m-r-12" type="email" placeholder="Email Address" value=""/>
                                                                                        </div>
                                                                                        <div className="layout column flex xs6">
                                                                                            <input name="" type="number" placeholder="Mobile Number" value=""/>
                                                                                        </div>
                                                                                    </div>
                                                                            </div>
                                                                            <div className="">
                                                                                    <div className="PslCheckbox flex">
                                                                                        <label>
                                                                                                <input type="checkbox" name="5" class="PslCheckboxInput" />
                                                                                                <span class="PslCheckboxCheckmark"></span>
                                                                                                <span class="PslCheckboxText m-l-5 m-r-5 ellipsis p2">All the above details are correct</span>
                                                                                        </label>
                                                                                    </div>
                                                                            </div>
                                                                                <div className="input-container">
                                                                                    <div className="layout column flex">
                                                                                        <div className="layout align-center justify-center">
                                                                                            <button className="flex btn-pernia-primary mb-4" type="submit">SUBMIT</button>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </form>
                                                                        <div className="d-none-lg">
                                                                            <div className="layout custom-tailored-footer">
                                                                                <div className="layout contact-info justify-space-between row wrap">
                                                                                    <Link className='layout flex xs3 column align-center justify-center'>
                                                                                        <h4>WHATSAPP US</h4>
                                                                                        <h6>+91 1234567890</h6>
                                                                                    </Link>
                                                                                    <Link className='layout column flex xs3 align-center justify-center'>
                                                                                        <h4>PHONE</h4>
                                                                                        <h6>+91 1234567890</h6>
                                                                                    </Link>
                                                                                    <Link className='layout flex xs12 column mt15 pl15 justify-center mb-4'>
                                                                                        <h4>EMAIL</h4>
                                                                                        <h6>orth@gmail.com</h6>
                                                                                    </Link>
                                                                                </div>
                                                                        </div>
                                                                    </div>
                                                                    </div>
                                                                    <div className="flex xs5 offset-xs1 d-none-sm">
                                                                        <div>
                                                                            <div className="dynamicImgContainer prel layout row align-center justify-center">
                                                                                <img src={Women} alt="logo" className='img-resp'/>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </Tab>
                                                            <Tab eventKey="profile" title="I DON’T KNOW MY SIZE">
                                                                <div className="ProductInfoModalContent">
                                                                    <div className="flex xs12 m-t-15">
                                                                        <form>
                                                                            <div class="m-b-10">
                                                                                <label class="bold m-b-5">Tell us how to get in touch with you</label>
                                                                            </div>
                                                                            <div class="input-container">
                                                                                <div class="layout column flex">
                                                                                    <input name="" type="text" placeholder="Full Name" value=""/>
                                                                                </div>
                                                                            </div>
                                                                            <div class="input-container">
                                                                                <div class="layout column flex">
                                                                                    <input name="" type="email" placeholder="Email Address" value=""/>
                                                                                </div>
                                                                            </div>
                                                                            <div class="input-container">
                                                                                <input name="" type="number" placeholder="Mobile Number" value=""/>
                                                                            </div>
                                                                            <div class="input-container">
                                                                                <input name="" type="text" placeholder="Special Request" value=""/>
                                                                            </div>
                                                                            <div class="input-container m-t-15">
                                                                                <div class="layout align-center justify-center">
                                                                                    <button class="flex btn-pernia-primary" type="submit">SUBMIT</button>
                                                                                </div>
                                                                            </div>
                                                                        </form>
                                                                        <div className="d-none-lg">
                                                                            <div className="layout custom-tailored-footer">
                                                                                <div className="layout contact-info justify-space-between row wrap">
                                                                                    <Link className='layout flex xs3 column align-center justify-center'>
                                                                                        <h4>WHATSAPP US</h4>
                                                                                        <h6>+91 1234567890</h6>
                                                                                    </Link>
                                                                                    <Link className='layout column flex xs3 align-center justify-center'>
                                                                                        <h4>PHONE</h4>
                                                                                        <h6>+91 1234567890</h6>
                                                                                    </Link>
                                                                                    <Link className='layout flex xs12 column mt15 pl15 justify-center mb-4'>
                                                                                        <h4>EMAIL</h4>
                                                                                        <h6>orth@gmail.com</h6>
                                                                                    </Link>
                                                                                </div>
                                                                        </div>
                                                                    </div>
                                                                    </div>
                                                                </div>
                                                            </Tab>
                                                            <Tab eventKey="contact" title="HOW TO MEASURE">
                                                                <div className="ProductInfoModalContent HowtomeasureguideContent">
                                                                    <div className="ytplayer-video-container">
                                                                    <iframe width="100%" src="https://www.youtube.com/embed/YzfbpPQLmtE?si=xFJrLFZlUIFCIzPN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                                                    </div>
                                                                </div>
                                                            </Tab>
                                                        </Tabs>
                                                    </div>
                                            </Modal.Body>
                                        </Modal>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="layout ProductActionButtons sectionSeparator sectionSeparator-bg">
                    <button className="btn-pernia-primary flex xs6 bold p2 bold pernia-white-color">BUY NOW</button>
                    <button className="flex xs6 bold p2 bold btn-pernia-secondry">ADD TO CART</button>
                </div>
                <div className="ProductInfo">
                    <div className="prel">
                        <div className="layout column justify-center ProductInfoBox sectionSeparator merryPromoCode">
                            <p class="text-uppercase demi-bold p2">SHOPMORE50K</p>
                            <div className="layout justify-space-between align-start">
                             <p class="flex xs9 p4 pernia-dark-grey-color">Purchase this product and receive 10% in loyalty points!
                             <Link class="pernia-color" target="_blank"> (T&amp;C Applied)</Link></p>
                             <p className='pernia-color divWithCaret cursor-pointer layout align-start justify-end p4 demi-bold'>
                                <span>COPY CODE</span>
                             </p>
                            </div>
                        </div>
                    </div>
                    <div className="prel">
                    <div className="layout column justify-center ProductInfoBox sectionSeparator merryPromoCode">
                            <p class="text-uppercase demi-bold p2">PRICE MATCH PROMISE</p>
                            <div className="layout justify-space-between align-start">
                             <p class="flex xs9 p4 pernia-dark-grey-color">If you find the product for less we'll match it!
                             <Link class="pernia-color" target="_blank"> (T&amp;C Applied)</Link></p>
                             <p className='pernia-color divWithCaret cursor-pointer layout align-start justify-end p4 demi-bold'>
                                <span>KNOW MORE</span>
                             </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="layout row sectionSeparator">
                    <div className="ProductDescription flex xs7">
                        <p class="demi-bold p2">PRODUCT DESCRIPTION</p>
                        <p class="p4 pernia-dark-grey-color">Featuring a multi-colored lehenga in Indian organza base with print and embellishment. It is paired with a matching blouse and a net dupatta.</p>
                    </div>
                    <div className="flex offset-xs1">
                        <p className="demi-bold p2">PRODUCT CODE</p>
                        <p className="p4 pernia-dark-grey-color">AAOC0722147</p>
                        <button className="btn-icon pernia-color p3 font-normal text-left p-t-0 p-l-0">View Supplier Information</button>
                    </div>
                </div>
                <div className="layout row wrap ProductSpec sectionSeparator">
                    <div className="flex xs4">
                        <div className="m-r-10">
                            <p className="demi-bold p2">Components</p>
                            <p className="p4 pernia-dark-grey-color">3</p>
                        </div>
                    </div>
                    <div className="flex xs4">
                        <div className="m-r-10">
                            <p className="demi-bold p2">FIT</p>
                            <p className="p4 pernia-dark-grey-color">Fitted at bust and waist.</p>
                        </div>
                    </div>
                    <div className="flex xs4">
                        <div className="m-r-10">
                            <p className="demi-bold p2">Composition</p>
                            <p className="p4 pernia-dark-grey-color">Tulle.</p>
                        </div>
                    </div>
                    <div className="flex xs4">
                        <div className="m-r-10">
                            <p className="demi-bold p2">Care</p>
                            <p className="p4 pernia-dark-grey-color">Dry clean only.</p>
                        </div>
                    </div>
                </div>
                <div className="sectionSeparator">
                    <p className="p2 demi-bold">SHIPPING INFORMATION</p>
                    <p className="p4 pernia-dark-grey-color">The estimated shipping date for this product is by 30th of April. Please note that this is the shipping date and not the delivery date.</p>
                </div>
                <div className="sectionSeparator">
                    <p className="p2 demi-bold text-uppercase">Disclaimer</p>
                    <ul className="m-l-0 p-l-15 m-t-5 m-b-5">
                        <li className="p4 pernia-dark-grey-color">This product will be exclusively handcrafted for you, making the colour/texture/pattern slightly vary from the image shown, due to multiple artisan-led techniques and processes involved.</li>
                    </ul>
                </div>
                <div className="sectionSeparator">
                    <div class="flex xs9">
                        <div>
                            <p className='p4'><FaWhatsapp style={{fontSize: '20px'}}/> at +91 123456789 to know more about the product</p>
                            <form class="layout justify-space-between">
                                <div class="flex">
                                    <input type="email" class="su-inputBox mobile_input" placeholder="Here's my Email" value=""/>
                                </div>
                                <button type="submit" class="su-btn btn-pernia-primary flex bold h-33">Sign Up</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="layout align-center justify-space-between m-b-25 p-b-25">
                    <div className="flex xs4 mt-0">
                        <div className="layout align-center SocialMediaLinks">
                            <Link className='m-r-5' target="_blank"> <FaFacebookSquare style={{width: '18px',height: '18px',color: '#000',margin:'0px 5px'}}/> </Link>
                            <Link className='m-r-5' target="_blank"> <FaInstagram style={{width: '18px',height: '18px',color: '#000',margin:'0px 5px'}}/> </Link>
                            <Link className='m-r-5' target="_blank"> <FaTwitter style={{width: '18px',height: '18px',color: '#000',margin:'0px 5px'}}/> </Link>
                            <Link className='m-r-5' target="_blank"> <FaPinterestP  style={{width: '18px',height: '18px',color: '#000',margin:'0px 5px'}}/> </Link>
                        </div>
                    </div>
                    <div className="flex xs8">
                        <div className="layout align-center justify-end">
                            <Link className='m-r-10 p4 demi-bold pernia-color-hover text-capitalize'> SHIPPING POLICY </Link>
                            <Link className='m-r-10 p4 demi-bold pernia-color-hover text-capitalize'> HELP </Link>
                            <Link className='m-r-10 p4 demi-bold pernia-color-hover text-capitalize'> CONTACT US </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Singleproducttext