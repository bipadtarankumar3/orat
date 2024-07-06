import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/custom.css'
import Headerimg1 from '../image/SALST122313_1.avif';
import Headerimg3 from '../image/VASC032317_1.avif';
import Headerimg4 from '../image/MKSH112325_1.avif';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Headerimg2, Heart, Logo, Search, Shoppingcart, User } from '../image';
import { Button, Modal } from 'react-bootstrap';
import { MDBInputGroup, MDBInput, MDBIcon, MDBBtn } from 'mdb-react-ui-kit';
import Browse from './browse';
import LoginModal from './loginmodal';
import { Link } from 'react-router-dom';

const Header = () => {
    const values = [true,];
    const [fullscreen, setFullscreen] = useState(true);
    const [show, setShow] = useState(false);
    const [modalShow, setModalShow] = React.useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const MenuItem = () => {
        const [isDropdownVisible, setIsDropdownVisible] = useState(false);
    
        const toggleDropdown = () => {
            setIsDropdownVisible(prevState => !prevState);
        };
    }
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);
    const toggleDropdown = () => {
        setIsDropdownVisible(prevState => !prevState);
    };
    
    function handleShow(breakpoint) {
        setFullscreen(breakpoint);
        setShow(true);
    }

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
      };
    

    return (
        <div className='App'>
            <header className="Header">
                <div className="TopHeader">
                    <div className="p2 pernia-white-color text-center">
                        For best prices and early deliveries, chat with us at{' '}
                        <span className='text-danger'> +91 1234567890 </span>
                    </div>
                </div>
                <div className='Content layout BreakPointContainer'>
                    <div className="layout column full-width prel">
                        <div className='SearchAndActions'>
                            <div className="layout align-center justify-center prel">
                                <div className='currencyContainer dsmnone'>
                                    <select name="cars" id="cars" className='currency demi-bold'>
                                        <option value="">INR</option>
                                    </select>
                                </div>
                                <button className="currencyContainer navbar-toggle" onClick={toggleNavbar}>
                                    {/* <span className="navbar-toggle-icon">&#9776;</span> */}
                                    <i className={isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'}></i>
                                </button>
                                {/* <div className="ShopfrontSelectionTab layout row">
                                    <div className="h7 tab"></div>
                                    <div className="h7 tab"></div>
                                </div> */}
                                <div className='Logo cursor-pointer'>
                                   <Link to="/"> <img src={Logo} alt='A descriptive text' className='logo-img' /> </Link>
                                </div>
                                <div className='flex layout align-center Actions'>
                                    <Button className="prel btn-icon p-l-0 p-r-0 d-none d-lg-block" style={{ background: 'none' }}>
                                        {values.map((v, idx) => (
                                            <img src={Search} alt="logo" className='user-icon' key={idx} onClick={() => handleShow(v)} />
                                        ))}
                                    </Button>
                                    <div className="search_model">
                                        <Modal className='App' show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
                                            <div className="container">
                                                <Modal.Header closeButton>
                                                    <Modal.Title>
                                                        <MDBInputGroup>
                                                            <MDBInput placeholder='Search' />
                                                            <MDBBtn rippleColor='dark'>
                                                                <MDBIcon icon='search' />
                                                            </MDBBtn>
                                                        </MDBInputGroup>
                                                    </Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body> <Browse /> </Modal.Body>
                                            </div>
                                        </Modal>
                                    </div>

                                    <Button className="prel btn-icon p-l-0 p-r-0 d-none d-lg-block" style={{ background: 'none' }}>
                                       <Link to="/wishlist" style={{margin:'0px'}}> <img src={Heart} alt="logo" className='IconBtn' /> </Link>
                                    </Button>

                                    {/* <Button className="prel btn-icon p-l-0 p-r-0" style={{ background: 'none' }}>
                                        <Link to="/myaccount" style={{margin:'0px'}}> <img src={User} alt="logo" className='user-icon'/> </Link>
                                    </Button> */}
                                    <Button className="prel btn-icon p-l-0 p-r-0" style={{ background: 'none' }}>
                                        <img src={User} alt="logo" className='IconBtn' onClick={() => setModalShow(true)}/>
                                    </Button>
                                    <Button className="prel btn-icon p-l-0 p-r-0" style={{ background: 'none' }}>
                                    <Link to="/checkout" style={{margin:'0px'}}> <img src={Shoppingcart} alt="logo" className='user-icon'/> </Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div className="desktop_menu">
                            <div className='flex layout justify-center Menu'>
                                <div className='cursor-pointer MenuItem start'>
                                    <a href="/" className='p4'>
                                        <div className="prel layout align-center">
                                            <span> New </span>
                                        </div>
                                    </a>
                                </div>
                                <div className='cursor-pointer MenuItem'>
                                    <a href="/" className='p4'>
                                        <div className="prel layout align-center">
                                            <span> Women </span>
                                        </div>
                                    </a>
                                    <div className="showSubMenuContent mega-dropdown">
                                        <div className="layout full-height BreakPointContainer">
                                            <div className="row">
                                                <div className="flex xs2 layout column">
                                                    {/* <ul>
                                                        <li>
                                                            <a href="/">
                                                                <h6 className='mega-menu-title'> Shop By designers </h6>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/">Aster</a>
                                                        </li>
                                                        <li>
                                                            <a href="/">VASTRAA Jewellery</a>
                                                        </li>
                                                        <li>
                                                            <a href="/">Cosa Nostraa</a>
                                                        </li>
                                                        <li>
                                                            <a href="/">Zevar By Geeta</a>
                                                        </li>
                                                        <li>
                                                            <a href="/">Moh-Maya by Disha Khatri</a>
                                                        </li>
                                                        <li>
                                                            <a href="/">Auraa Trends</a>
                                                        </li>
                                                        <li>
                                                            <a href="/">House of D'oro</a>
                                                        </li>
                                                        <li>
                                                            <a href="/">Vivinia By Vidhi Mehra</a>
                                                        </li>
                                                        <li>
                                                            <a href="/">Tad Accessories</a>
                                                        </li>
                                                        <li>
                                                            <a href="/">Diosa Paris Jewellery</a>
                                                        </li>
                                                        <li className='mt-3'>
                                                            <a href="/">SEE ALL</a>
                                                        </li>
                                                    </ul> */}
                                                    <div className="m-l-12">
                                                        <h4> <span className='prel'> SHOP BY DESIGNERS</span> </h4>
                                                        <div>
                                                            <div className="m-b-5">
                                                                <a href="" className='prel'>
                                                                    <span> Aster </span>
                                                                </a>
                                                            </div>
                                                            <div className="m-b-5">
                                                                <a href="" className='prel'>
                                                                    <span> VASTRAA Jewellery </span>
                                                                </a>
                                                            </div>
                                                            <div className="m-b-5">
                                                                <a href="" className='prel'>
                                                                    <span> Cosa Nostraa </span>
                                                                </a>
                                                            </div>
                                                            <div className="m-b-5">
                                                                <a href="" className='prel'>
                                                                    <span> Zevar By Geeta </span>
                                                                </a>
                                                            </div>
                                                            <div className="m-b-5">
                                                                <a href="" className='prel'>
                                                                    <span> Moh-Maya by Disha Khatri </span>
                                                                </a>
                                                            </div>
                                                            <div className="m-b-5">
                                                                <a href="" className='prel'>
                                                                    <span> Auraa Trends </span>
                                                                </a>
                                                            </div>
                                                            <div className="m-b-5">
                                                                <a href="" className='prel'>
                                                                    <span> House of D'oro </span>
                                                                </a>
                                                            </div>
                                                            <div className="m-b-5">
                                                                <a href="" className='prel'>
                                                                    <span> Vivinia By Vidhi Mehra </span>
                                                                </a>
                                                            </div>
                                                            <div className="m-b-5">
                                                                <a href="" className='prel'>
                                                                    <span> Tad Accessories </span>
                                                                </a>
                                                            </div>
                                                            <div className="m-b-5">
                                                                <a href="" className='prel'>
                                                                    <span> Diosa Paris Jewellery </span>
                                                                </a>
                                                            </div>
                                                            <div className="m-b-5">
                                                                <a href="" className='SellAllLink demi-bold'>
                                                                    <span> SEE ALL </span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex xs2 layout column">
                                                    <h4> <span className='prel'> Shop By category </span> </h4>
                                                    <div className="m-b-5">
                                                        <a href="/" className='prel'>
                                                            <span>Womenswear</span>  </a>
                                                    </div>
                                                    <div className="m-b-5">
                                                        <a href="/" className='prel'>
                                                            <span>Menswear</span> </a>
                                                    </div>
                                                    <div className="m-b-5">
                                                        <a href="/" className='prel'>
                                                            <span>Designer Jewellery</span> </a>
                                                    </div>
                                                    <div className="m-b-5">
                                                        <a href="/" className='prel'>
                                                            <span>Decor</span> </a>
                                                    </div>
                                                    <div className="m-b-5">
                                                        <a href="/" className='prel'>
                                                            <span>Accessories</span> </a>
                                                    </div>
                                                    <div className="m-b-5">
                                                        <a href="/" className='prel'>
                                                            <span>Kidswear</span> </a>
                                                    </div>
                                                    <div className='mt-3'>
                                                        <a href="/" className='SellAllLink demi-bold'> <span> SEE ALL </span></a>
                                                    </div>
                                                </div>
                                                <div className="Product flex xs2 offset-xs0">
                                                    <div className="layout column">
                                                        <a href="" className='flex ProductImage'>
                                                            <div className="DynamicHeightLoaderWrapper" style={{ paddingTop: '150%' }}>
                                                                <div className="DynamicHeightLoader layout row align-center justify-center">
                                                                    <img src={Headerimg1} alt='A descriptive text' className='img-resp DynamicHeightLoaderImage' />
                                                                </div>
                                                            </div>
                                                            {/* <div className="animated-bg-placeholder"></div> */}
                                                        </a>
                                                        <div className="ProductImageDetail">
                                                            <h4 className='ellipsis demi-bold'> Zoon Tribe </h4>
                                                            <p className='ellipsis-two-line'> Rose Gold Hand Embroidered Kurta Set </p>
                                                            <div className="ProductPrice layout align-center row wrap m-t-10">
                                                                <span className='SpecialPrice p2 demi-bold'> ₹ 16,000 </span>
                                                                <span className='InitialPrice p3'> ₹ 20,000</span>
                                                                <span className='DiscountPriceRound p3'> 20% OFF </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="Product flex xs2">
                                                    <div className="layout column">
                                                        <a href="" className='flex ProductImage'>
                                                            <div className="DynamicHeightLoaderWrapper" style={{ paddingTop: '150%' }}>
                                                                <div className="DynamicHeightLoader layout row align-center justify-center">
                                                                    <img src={Headerimg2} alt='A descriptive text' className='img-resp DynamicHeightLoaderImage' />
                                                                </div>
                                                            </div>
                                                            {/* <div className="animated-bg-placeholder"></div> */}
                                                        </a>
                                                        <div className="ProductImageDetail">
                                                            <h4 className='ellipsis demi-bold'> fine threads by hina &.. </h4>
                                                            <p className='ellipsis-two-line'> Rose Gold Hand Embroidered Kurta Set </p>
                                                            <div className="ProductPrice layout align-center row wrap m-t-10">
                                                                <span className='SpecialPrice p2 demi-bold'> ₹ 16,000 </span>
                                                                <span className='InitialPrice p3'> ₹ 20,000</span>
                                                                <span className='DiscountPriceRound p3'> 20% OFF </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="Product flex xs2">
                                                    {/* <ul>
                                                        <li>
                                                            <a href="/">
                                                                <img src={Headerimg3} alt='A descriptive text' />
                                                            </a>
                                                            <div className="header-title">
                                                                <h6> Vandana sethi </h6>
                                                                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                                                                <div className="price-div">
                                                                    <p className='text-dark'> ₹66,850 <span className='text-decoration-line-through text-secondary'> ₹95,500 </span> <span className='text-danger'> 30% OFF </span> </p>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul> */}
                                                    <div className="layout column">
                                                        <a href="" className='flex ProductImage'>
                                                            <div className="DynamicHeightLoaderWrapper" style={{ paddingTop: '150%' }}>
                                                                <div className="DynamicHeightLoader layout row align-center justify-center">
                                                                    <img src={Headerimg3} alt='A descriptive text' className='img-resp DynamicHeightLoaderImage' />
                                                                </div>
                                                            </div>
                                                            {/* <div className="animated-bg-placeholder"></div> */}
                                                        </a>
                                                        <div className="ProductImageDetail">
                                                            <h4 className='ellipsis demi-bold'> Vandana sethi </h4>
                                                            <p className='ellipsis-two-line'> Rose Gold Hand Embroidered Kurta Set </p>
                                                            <div className="ProductPrice layout align-center row wrap m-t-10">
                                                                <span className='SpecialPrice p2 demi-bold'> ₹ 16,000 </span>
                                                                <span className='InitialPrice p3'> ₹ 20,000</span>
                                                                <span className='DiscountPriceRound p3'> 20% OFF </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="Product flex xs2">
                                                    {/* <ul>
                                                        <li>
                                                            <a href="/">
                                                                <img src={Headerimg4} alt='A descriptive text' />
                                                            </a>
                                                            <div className="header-title">
                                                                <h6> mehak sharma </h6>
                                                                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                                                                <div className="price-div">
                                                                    <p className='text-dark'> ₹30,590 <span className='text-decoration-line-through text-secondary'> ₹43,700 </span> <span className='text-danger'> 30% OFF </span> </p>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul> */}
                                                    <div className="layout column">
                                                        <a href="" className='flex ProductImage'>
                                                            <div className="DynamicHeightLoaderWrapper" style={{ paddingTop: '150%' }}>
                                                                <div className="DynamicHeightLoader layout row align-center justify-center">
                                                                    <img src={Headerimg4} alt='A descriptive text' className='img-resp DynamicHeightLoaderImage' />
                                                                </div>
                                                            </div>
                                                            {/* <div className="animated-bg-placeholder"></div> */}
                                                        </a>
                                                        <div className="ProductImageDetail">
                                                            <h4 className='ellipsis demi-bold'> mehak sharma </h4>
                                                            <p className='ellipsis-two-line'> Rose Gold Hand Embroidered Kurta Set </p>
                                                            <div className="ProductPrice layout align-center row wrap m-t-10">
                                                                <span className='SpecialPrice p2 demi-bold'> ₹ 16,000 </span>
                                                                <span className='InitialPrice p3'> ₹ 20,000</span>
                                                                <span className='DiscountPriceRound p3'> 20% OFF </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='cursor-pointer MenuItem'>
                                    <a href="/" className='p4'>
                                        <div className="prel layout align-center"> <span> LEHENGAS </span></div> </a>
                                </div>
                                <div className='cursor-pointer MenuItem'>
                                    <a href="/" className='p4'> <div className="prel layout align-center"> <span> KURTA SETS </span></div></a>
                                </div>
                                <div className='cursor-pointer MenuItem'>
                                    <a href="/" className='p4'> <div className="prel layout align-center"> <span> DRESSES </span></div></a>
                                </div>
                                <div className='cursor-pointer MenuItem'>
                                    <a href="/" className='p4'> <div className="prel layout align-center"> <span> PRET</span> </div></a>
                                </div>
                                <div className='cursor-pointer MenuItem'>
                                    <a href="/" className='p4'> <div className="prel layout align-center"> <span> READY TO SHIP</span> </div></a>
                                </div>
                                <div className='cursor-pointer MenuItem'>
                                    <a href="/" className='p4'> <div className="prel layout align-center"> <span> Sale </span> </div></a>
                                </div>
                            </div>
                        </div>

                        {/* mobile-menu */}
                        
                        <div className="mobile_menu">
                            <div className={`flex layout justify-center Menu ${isOpen ? 'active' : ''}`}>
                                <div className='cursor-pointer MenuItem start'>
                                    <a href="/" className='p4'>
                                        <div className="prel layout align-center">
                                            <span> New </span>
                                        </div>
                                    </a>
                                </div>
                                {/* <div className='cursor-pointer MenuItem'>
                                    <a href="/" className='p4'>
                                        <div className="prel layout align-center">
                                            <span> Women </span>
                                        </div>
                                    </a>
                                    <div className="menu-dropdown">
                                        <div className="layout full-height BreakPointContainer">
                                            <div className="menu-div">
                                                <a href="#"> Product Name </a>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                                      <div className='cursor-pointer MenuItem'>
                                            <a className='p4' onClick={toggleDropdown}>
                                                <div className="prel layout align-center justify-content-between">
                                                    <span> Women </span>
                                                    <i className={`fa-solid fa-chevron-down dropdown-icon ${isDropdownVisible ? 'active' : ''}`}></i>
                                                </div>
                                            </a>
                                            {isDropdownVisible && (
                                                <div className="menu-dropdown">
                                                    <div className="full-height BreakPointContainer">
                                                        <div className="menu-div">
                                                            <a href="#"> TYOHAAR COLLECTION </a>
                                                        </div>
                                                        <div className="menu-div">
                                                            <a href="#"> SANJANA X AACHHO </a>
                                                        </div>
                                                        <div className="menu-div">
                                                            <a href="#"> CELEBRITY IN AACHHO </a>
                                                        </div>
                                                        <div className="menu-div">
                                                            <a href="#"> TRENDING NOW </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                <div className='cursor-pointer MenuItem'>
                                    <a href="/" className='p4'>
                                        <div className="prel layout align-center"> <span> LEHENGAS </span></div> </a>
                                </div>
                                <div className='cursor-pointer MenuItem'>
                                    <a href="/" className='p4'> <div className="prel layout align-center"> <span> KURTA SETS </span></div></a>
                                </div>
                                <div className='cursor-pointer MenuItem'>
                                    <a href="/" className='p4'> <div className="prel layout align-center"> <span> DRESSES </span></div></a>
                                </div>
                                <div className='cursor-pointer MenuItem'>
                                    <a href="/" className='p4'> <div className="prel layout align-center"> <span> PRET</span> </div></a>
                                </div>
                                <div className='cursor-pointer MenuItem'>
                                    <a href="/" className='p4'> <div className="prel layout align-center"> <span> READY TO SHIP</span> </div></a>
                                </div>
                                <div className='cursor-pointer MenuItem'>
                                    <a href="/" className='p4'> <div className="prel layout align-center"> <span className='blink_me'> Sale </span> </div></a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </header>
            <LoginModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </div>
    );
};

export default Header;
