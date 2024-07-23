import React, { useState } from 'react';
import { Aug, Productbanner1, Productimg1, Productimg1hover, Productimg2, Productimg2hover, Productimg3, Productimg3hover, Productimg4, Productimg4hover } from '../image'
import { Link } from 'react-router-dom';
import { CiFilter } from "react-icons/ci";
import Button from 'react-bootstrap/Button';
import { Modal, Tabs, Tab } from 'react-bootstrap';
import Filter from './Filter';
import Select from 'react-select';


export default function Productpage() {
  
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [show, setShow] = useState(false);
  const [activeTab, setActiveTab] = useState('v-pills-home');

  const toggleDropdown = () => {
      setDropdownVisible(!isDropdownVisible);
  };
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleTabClick = (tabId) => {
      setActiveTab(tabId);
    };

    const [showSizeModal, setShowSizeModal] = useState(false);
    const [showCustomModal, setShowCustomModal] = useState(false);

    const handleCloseSizeModal = () => setShowSizeModal(false);
    const handleShowSizeModal = () => setShowSizeModal(true);

    const handleCloseCustomModal = () => setShowCustomModal(false);
    const handleClosCustomModal = () => setShowCustomModal(false);
    const handleShowCustomModal = () => setShowCustomModal(true);


  const options = [
    { value: 'Popular', label: 'Popular' },
    { value: 'Latest', label: 'Latest' },
    { value: 'Price - Low to High', label: 'Price - Low to High' },
  ];

  const [selectedOption, setSelectedOption] = useState(null);


  return (
    <>
        <Filter/>
        <div className="custom-flex Productpage ProductListContainer minWidth0">
            <div className="prel">
                <div className="Banner m-t-20 prel">
                    <a href="">
                        <div className="timerPosition layout align-center justify-end">
                            <div className="timer-banner-container">
                                <div className="layout align-center justify-center full-height">
                                    <div className="small-font">  </div>
                                </div>
                            </div>
                        </div>
                        <div className="DynamicHeightLoaderWrapper" style={{ paddingTop: '5%' }}>
                            <div className="DynamicHeightLoader layout row align-center justify-center" style={{ paddingTop: '20%' }}>
                                <img src={Productbanner1} alt="logo" className='img-resp DynamicHeightLoaderImage' style={{ paddingTop: '0%' }} />
                            </div>
                            {/* <div className="animated-bg-placeholder"></div> */}
                        </div>
                    </a>
                </div>
                <div className="CategoryHeader layout justify-space-between align-center">
                    <div>
                        <div className="layout align-center">
                            <h4 class="CategoryTitle ellipsis demi-bold">Sale</h4>
                            <p class="CategoryProductCount h7 font-normal">(116405 products)</p>
                        </div>
                    </div>
                    <div className="CategoryHeaderFilters">
                        <div className="dd-wrapper">
                            <div className="dd-header" onClick={toggleDropdown}>
                                <div>
                                    <span className="dd-header-sort-text">Sort by: </span>
                                    <span className="dd-header-title demi-bold">
                                    
                                    </span>
                                    <Select
                              defaultValue={selectedOption}
                              onChange={setSelectedOption}
                              options={options}
                            />  
                                </div>
                                <span className={`arrow-icon m-r-5 ${isDropdownVisible ? 'arrow-down-icon' : 'arrow-up-icon'}`}></span>
                            </div>

                            {/* {isDropdownVisible && (
                                <ul className='dd-list bold'>
                                    <li className='dd-list-item font-normal selected'> Popular </li>
                                    <li className='dd-list-item font-normal'> Latest </li>
                                    <li className='dd-list-item font-normal'> Price - Low to High </li>
                                    <li className='dd-list-item font-normal'> Price - High to Low </li>
                                    <li className='dd-list-item font-normal'> Discount - High to Low </li>
                                </ul>
                            )} */}
                           
                        </div>
                        <div className="mobile_filter" onClick={handleShow}>
                            <CiFilter />
                        </div>
                        
                            <Modal className="filter-model ProductInfoModal fliter-model " show={show} onHide={handleClose}>
                                <Modal.Header closeButton>
                                <Modal.Title>Filter</Modal.Title>
                                </Modal.Header>
                                <Modal.Body className="singleproduct">
                                        <Tabs id="controlled-tab-example"className="mb-3 layout custom-tailored-header row">
                                            <Tab eventKey="home" title="FILTER BY">
                                                <div className="filter-div">
                                                    <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                                        <a className={`nav-link ${activeTab === 'v-pills-home' ? 'active' : ''}`} id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected={activeTab === 'v-pills-home'} onClick={() => handleTabClick('v-pills-home')}>SHOP</a>
                                                        <a className={`nav-link ${activeTab === 'v-pills-profile' ? 'active' : ''}`} id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected={activeTab === 'v-pills-profile'} onClick={() => handleTabClick('v-pills-profile')}>CATEGORY</a>
                                                        <a className={`nav-link ${activeTab === 'v-pills-messages' ? 'active' : ''}`} id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected={activeTab === 'v-pills-messages'} onClick={() => handleTabClick('v-pills-messages')}>SIZE</a>
                                                        <a className={`nav-link ${activeTab === 'v-pills-settings' ? 'active' : ''}`} id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected={activeTab === 'v-pills-settings'} onClick={() => handleTabClick('v-pills-settings')}>COLOR</a>
                                                        <a className={`nav-link ${activeTab === 'v-pills-SHIPPING-TIME' ? 'active' : ''}`} id="v-pills-SHIPPING-TIME-tab" data-toggle="pill" href="#v-pills-SHIPPING-TIME" role="tab" aria-controls="v-pills-SHIPPING-TIME" aria-selected={activeTab === 'v-pills-SHIPPING-TIME'} onClick={() => handleTabClick('v-pills-SHIPPING-TIME')}>SHIPPING TIME</a>
                                                        <a className={`nav-link ${activeTab === 'v-pills-PRICE' ? 'active' : ''}`} id="v-pills-PRICE-tab" data-toggle="pill" href="#v-pills-PRICE" role="tab" aria-controls="v-pills-PRICE" aria-selected={activeTab === 'v-pills-PRICE'} onClick={() => handleTabClick('v-pills-PRICE')}>PRICE</a>
                                                    </div>
                                                    <div className="tab-content" id="v-pills-tabContent">
                                                        <div className={`tab-pane fade ${activeTab === 'v-pills-home' ? 'show active' : ''}`} id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                                                            <div className="CheckboxList">
                                                                <div className="CheckboxListOptions layout row align-start wrap">
                                                                    <div className="flex xs12 CheckboxColorOptions">
                                                                        <div className="PslCheckbox flex">
                                                                            <label>
                                                                                <input type="checkbox" name="5" class="PslCheckboxInput" />
                                                                                <span class="PslCheckboxCheckmark"></span>
                                                                                <span class="PslCheckboxText m-l-5 m-r-5 ellipsis p2">Ready To Ship</span>
                                                                                <span className='PslCheckboxCount p2'>
                                                                                    (39)
                                                                                </span>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className={`tab-pane fade ${activeTab === 'v-pills-profile' ? 'show active' : ''}`} id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                                                            <div className="CheckboxList">
                                                                <h5 class="CheckboxListTitle demi-bold">Category</h5>
                                                                <div className="CheckboxListSearch">
                                                                    <input type="text" value="" placeholder="Search" />
                                                                </div>
                                                                <div className="CheckboxListOptions layout row align-start wrap">
                                                                    <div className="flex xs12 CheckboxColorOptions">
                                                                        <div className="PslCheckbox flex">
                                                                            <label>
                                                                                <input type="checkbox" name="5" class="PslCheckboxInput" />
                                                                                <span class="PslCheckboxCheckmark"></span>
                                                                                <span class="PslCheckboxText m-l-5 m-r-5 ellipsis p2">Kurta Set</span>
                                                                                <span class="PslCheckboxCount p2">(61951)</span>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                    <div className="flex xs12 CheckboxColorOptions">
                                                                        <div className="PslCheckbox flex">
                                                                            <label>
                                                                                <input type="checkbox" name="5" class="PslCheckboxInput" />
                                                                                <span class="PslCheckboxCheckmark"></span>
                                                                                <span class="PslCheckboxText m-l-5 m-r-5 ellipsis p2">Dresses</span>
                                                                                <span class="PslCheckboxCount p2">(61951)</span>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                    <div className="flex xs12 CheckboxColorOptions">
                                                                        <div className="PslCheckbox flex">
                                                                            <label>
                                                                                <input type="checkbox" name="5" class="PslCheckboxInput" />
                                                                                <span class="PslCheckboxCheckmark"></span>
                                                                                <span class="PslCheckboxText m-l-5 m-r-5 ellipsis p2">Lehenga</span>
                                                                                <span class="PslCheckboxCount p2">(61951)</span>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                    <div className="flex xs12 CheckboxColorOptions">
                                                                        <div className="PslCheckbox flex">
                                                                            <label>
                                                                                <input type="checkbox" name="5" class="PslCheckboxInput" />
                                                                                <span class="PslCheckboxCheckmark"></span>
                                                                                <span class="PslCheckboxText m-l-5 m-r-5 ellipsis p2">Sarees</span>
                                                                                <span class="PslCheckboxCount p2">(61951)</span>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                    <div className="flex xs12 CheckboxColorOptions">
                                                                        <div className="PslCheckbox flex">
                                                                            <label>
                                                                                <input type="checkbox" name="5" class="PslCheckboxInput" />
                                                                                <span class="PslCheckboxCheckmark"></span>
                                                                                <span class="PslCheckboxText m-l-5 m-r-5 ellipsis p2">Necklaces</span>
                                                                                <span class="PslCheckboxCount p2">(61951)</span>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                    <div className="flex xs12 CheckboxColorOptions">
                                                                        <div className="PslCheckbox flex">
                                                                            <label>
                                                                                <input type="checkbox" name="5" class="PslCheckboxInput" />
                                                                                <span class="PslCheckboxCheckmark"></span>
                                                                                <span class="PslCheckboxText m-l-5 m-r-5 ellipsis p2">Earrings</span>
                                                                                <span class="PslCheckboxCount p2">(61951)</span>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                    <div className="flex xs12 CheckboxColorOptions">
                                                                        <div className="PslCheckbox flex">
                                                                            <label>
                                                                                <input type="checkbox" name="5" class="PslCheckboxInput" />
                                                                                <span class="PslCheckboxCheckmark"></span>
                                                                                <span class="PslCheckboxText m-l-5 m-r-5 ellipsis p2">Embroidered Lehenga</span>
                                                                                <span class="PslCheckboxCount p2">(61951)</span>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                    <div className="flex xs12 CheckboxColorOptions">
                                                                        <div className="PslCheckbox flex">
                                                                            <label>
                                                                                <input type="checkbox" name="5" class="PslCheckboxInput" />
                                                                                <span class="PslCheckboxCheckmark"></span>
                                                                                <span class="PslCheckboxText m-l-5 m-r-5 ellipsis p2">Anarkali Set</span>
                                                                                <span class="PslCheckboxCount p2">(61951)</span>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                    <div className="flex xs12 CheckboxColorOptions">
                                                                        <div className="PslCheckbox flex">
                                                                            <label>
                                                                                <input type="checkbox" name="5" class="PslCheckboxInput" />
                                                                                <span class="PslCheckboxCheckmark"></span>
                                                                                <span class="PslCheckboxText m-l-5 m-r-5 ellipsis p2">Sharara Set</span>
                                                                                <span class="PslCheckboxCount p2">(61951)</span>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                    <div className="flex xs12 CheckboxColorOptions">
                                                                        <div className="PslCheckbox flex">
                                                                            <label>
                                                                                <input type="checkbox" name="5" class="PslCheckboxInput" />
                                                                                <span class="PslCheckboxCheckmark"></span>
                                                                                <span class="PslCheckboxText m-l-5 m-r-5 ellipsis p2">Co-Ord Set</span>
                                                                                <span class="PslCheckboxCount p2">(61951)</span>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                    <div className="flex xs12 CheckboxColorOptions">
                                                                        <div className="PslCheckbox flex">
                                                                            <label>
                                                                                <input type="checkbox" name="5" class="PslCheckboxInput" />
                                                                                <span class="PslCheckboxCheckmark"></span>
                                                                                <span class="PslCheckboxText m-l-5 m-r-5 ellipsis p2">Pant Set</span>
                                                                                <span class="PslCheckboxCount p2">(61951)</span>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                    <div className="flex xs12 CheckboxColorOptions">
                                                                        <div className="PslCheckbox flex">
                                                                            <label>
                                                                                <input type="checkbox" name="5" class="PslCheckboxInput" />
                                                                                <span class="PslCheckboxCheckmark"></span>
                                                                                <span class="PslCheckboxText m-l-5 m-r-5 ellipsis p2">Anarkali Set</span>
                                                                                <span class="PslCheckboxCount p2">(61951)</span>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                    <div className="flex xs12 CheckboxColorOptions">
                                                                        <div className="PslCheckbox flex">
                                                                            <label>
                                                                                <input type="checkbox" name="5" class="PslCheckboxInput" />
                                                                                <span class="PslCheckboxCheckmark"></span>
                                                                                <span class="PslCheckboxText m-l-5 m-r-5 ellipsis p2">Anarkali Set</span>
                                                                                <span class="PslCheckboxCount p2">(61951)</span>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                    <div className="flex xs12 CheckboxColorOptions">
                                                                        <div className="PslCheckbox flex">
                                                                            <label>
                                                                                <input type="checkbox" name="5" class="PslCheckboxInput" />
                                                                                <span class="PslCheckboxCheckmark"></span>
                                                                                <span class="PslCheckboxText m-l-5 m-r-5 ellipsis p2">Anarkali Set</span>
                                                                                <span class="PslCheckboxCount p2">(61951)</span>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                    <div className="flex xs12 CheckboxColorOptions">
                                                                        <div className="PslCheckbox flex">
                                                                            <label>
                                                                                <input type="checkbox" name="5" class="PslCheckboxInput" />
                                                                                <span class="PslCheckboxCheckmark"></span>
                                                                                <span class="PslCheckboxText m-l-5 m-r-5 ellipsis p2">Anarkali Set</span>
                                                                                <span class="PslCheckboxCount p2">(61951)</span>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                    <div className="flex xs12 CheckboxColorOptions">
                                                                        <div className="PslCheckbox flex">
                                                                            <label>
                                                                                <input type="checkbox" name="5" class="PslCheckboxInput" />
                                                                                <span class="PslCheckboxCheckmark"></span>
                                                                                <span class="PslCheckboxText m-l-5 m-r-5 ellipsis p2">Anarkali Set</span>
                                                                                <span class="PslCheckboxCount p2">(61951)</span>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                    <div className="flex xs12 CheckboxColorOptions">
                                                                        <div className="PslCheckbox flex">
                                                                            <label>
                                                                                <input type="checkbox" name="5" class="PslCheckboxInput" />
                                                                                <span class="PslCheckboxCheckmark"></span>
                                                                                <span class="PslCheckboxText m-l-5 m-r-5 ellipsis p2">Anarkali Set</span>
                                                                                <span class="PslCheckboxCount p2">(61951)</span>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                    <div className="flex xs12 CheckboxColorOptions">
                                                                        <div className="PslCheckbox flex">
                                                                            <label>
                                                                                <input type="checkbox" name="5" class="PslCheckboxInput" />
                                                                                <span class="PslCheckboxCheckmark"></span>
                                                                                <span class="PslCheckboxText m-l-5 m-r-5 ellipsis p2">Anarkali Set</span>
                                                                                <span class="PslCheckboxCount p2">(61951)</span>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                    <div className="flex xs12 CheckboxColorOptions">
                                                                        <div className="PslCheckbox flex">
                                                                            <label>
                                                                                <input type="checkbox" name="5" class="PslCheckboxInput" />
                                                                                <span class="PslCheckboxCheckmark"></span>
                                                                                <span class="PslCheckboxText m-l-5 m-r-5 ellipsis p2">Anarkali Set</span>
                                                                                <span class="PslCheckboxCount p2">(61951)</span>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                    <div className="flex xs12 CheckboxColorOptions">
                                                                        <div className="PslCheckbox flex">
                                                                            <label>
                                                                                <input type="checkbox" name="5" class="PslCheckboxInput" />
                                                                                <span class="PslCheckboxCheckmark"></span>
                                                                                <span class="PslCheckboxText m-l-5 m-r-5 ellipsis p2">Anarkali Set</span>
                                                                                <span class="PslCheckboxCount p2">(61951)</span>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                    <div className="flex xs12 CheckboxColorOptions">
                                                                        <div className="PslCheckbox flex">
                                                                            <label>
                                                                                <input type="checkbox" name="5" class="PslCheckboxInput" />
                                                                                <span class="PslCheckboxCheckmark"></span>
                                                                                <span class="PslCheckboxText m-l-5 m-r-5 ellipsis p2">Anarkali Set</span>
                                                                                <span class="PslCheckboxCount p2">(61951)</span>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                    <div className="flex xs12 CheckboxColorOptions">
                                                                        <div className="PslCheckbox flex">
                                                                            <label>
                                                                                <input type="checkbox" name="5" class="PslCheckboxInput" />
                                                                                <span class="PslCheckboxCheckmark"></span>
                                                                                <span class="PslCheckboxText m-l-5 m-r-5 ellipsis p2">Anarkali Set</span>
                                                                                <span class="PslCheckboxCount p2">(61951)</span>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                    <div className="flex xs12 CheckboxColorOptions">
                                                                        <div className="PslCheckbox flex">
                                                                            <label>
                                                                                <input type="checkbox" name="5" class="PslCheckboxInput" />
                                                                                <span class="PslCheckboxCheckmark"></span>
                                                                                <span class="PslCheckboxText m-l-5 m-r-5 ellipsis p2">Anarkali Set</span>
                                                                                <span class="PslCheckboxCount p2">(61951)</span>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                    <div className="flex xs12 CheckboxColorOptions">
                                                                        <div className="PslCheckbox flex">
                                                                            <label>
                                                                                <input type="checkbox" name="5" class="PslCheckboxInput" />
                                                                                <span class="PslCheckboxCheckmark"></span>
                                                                                <span class="PslCheckboxText m-l-5 m-r-5 ellipsis p2">Anarkali Set</span>
                                                                                <span class="PslCheckboxCount p2">(61951)</span>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                    <div className="flex xs12 CheckboxColorOptions">
                                                                        <div className="PslCheckbox flex">
                                                                            <label>
                                                                                <input type="checkbox" name="5" class="PslCheckboxInput" />
                                                                                <span class="PslCheckboxCheckmark"></span>
                                                                                <span class="PslCheckboxText m-l-5 m-r-5 ellipsis p2">Anarkali Set</span>
                                                                                <span class="PslCheckboxCount p2">(61951)</span>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                    <div className="flex xs12 CheckboxColorOptions">
                                                                        <div className="PslCheckbox flex">
                                                                            <label>
                                                                                <input type="checkbox" name="5" class="PslCheckboxInput" />
                                                                                <span class="PslCheckboxCheckmark"></span>
                                                                                <span class="PslCheckboxText m-l-5 m-r-5 ellipsis p2">Anarkali Set</span>
                                                                                <span class="PslCheckboxCount p2">(61951)</span>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className={`tab-pane fade ${activeTab === 'v-pills-messages' ? 'show active' : ''}`} id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
                                                            <div className="CheckboxList">
                                                                <h5 class="CheckboxListTitle demi-bold">Size</h5>
                                                                <div className="CheckboxListSearch">
                                                                    <input type="text" value="" placeholder="Search" />
                                                                </div>
                                                                <div className="CheckboxListOptions layout row align-start wrap">
                                                                    <div className="flex xs12 CheckboxColorOptions">
                                                                        <div className="PslCheckbox flex">
                                                                            <label>
                                                                                <input type="checkbox" name="5" class="PslCheckboxInput" />
                                                                                <span class="PslCheckboxCheckmark"></span>
                                                                                <span class="PslCheckboxText m-l-5 m-r-5 ellipsis p2">XS</span>
                                                                                <span class="PslCheckboxCount p2">(61951)</span>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                    <div className="flex xs12 CheckboxColorOptions">
                                                                        <div className="PslCheckbox flex">
                                                                            <label>
                                                                                <input type="checkbox" name="5" class="PslCheckboxInput" />
                                                                                <span class="PslCheckboxCheckmark"></span>
                                                                                <span class="PslCheckboxText m-l-5 m-r-5 ellipsis p2">S</span>
                                                                                <span class="PslCheckboxCount p2">(61951)</span>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                    <div className="flex xs12 CheckboxColorOptions">
                                                                        <div className="PslCheckbox flex">
                                                                            <label>
                                                                                <input type="checkbox" name="5" class="PslCheckboxInput" />
                                                                                <span class="PslCheckboxCheckmark"></span>
                                                                                <span class="PslCheckboxText m-l-5 m-r-5 ellipsis p2">M</span>
                                                                                <span class="PslCheckboxCount p2">(61951)</span>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                    <div className="flex xs12 CheckboxColorOptions">
                                                                        <div className="PslCheckbox flex">
                                                                            <label>
                                                                                <input type="checkbox" name="5" class="PslCheckboxInput" />
                                                                                <span class="PslCheckboxCheckmark"></span>
                                                                                <span class="PslCheckboxText m-l-5 m-r-5 ellipsis p2">L</span>
                                                                                <span class="PslCheckboxCount p2">(61951)</span>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                    <div className="flex xs12 CheckboxColorOptions">
                                                                        <div className="PslCheckbox flex">
                                                                            <label>
                                                                                <input type="checkbox" name="5" class="PslCheckboxInput" />
                                                                                <span class="PslCheckboxCheckmark"></span>
                                                                                <span class="PslCheckboxText m-l-5 m-r-5 ellipsis p2">XL</span>
                                                                                <span class="PslCheckboxCount p2">(61951)</span>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                    <div className="flex xs12 CheckboxColorOptions">
                                                                        <div className="PslCheckbox flex">
                                                                            <label>
                                                                                <input type="checkbox" name="5" class="PslCheckboxInput" />
                                                                                <span class="PslCheckboxCheckmark"></span>
                                                                                <span class="PslCheckboxText m-l-5 m-r-5 ellipsis p2">XXL</span>
                                                                                <span class="PslCheckboxCount p2">(61951)</span>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                    <div className="flex xs12 CheckboxColorOptions">
                                                                        <div className="PslCheckbox flex">
                                                                            <label>
                                                                                <input type="checkbox" name="5" class="PslCheckboxInput" />
                                                                                <span class="PslCheckboxCheckmark"></span>
                                                                                <span class="PslCheckboxText m-l-5 m-r-5 ellipsis p2">3XL</span>
                                                                                <span class="PslCheckboxCount p2">(61951)</span>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                    <div className="flex xs12 CheckboxColorOptions">
                                                                        <div className="PslCheckbox flex">
                                                                            <label>
                                                                                <input type="checkbox" name="5" class="PslCheckboxInput" />
                                                                                <span class="PslCheckboxCheckmark"></span>
                                                                                <span class="PslCheckboxText m-l-5 m-r-5 ellipsis p2">4XL</span>
                                                                                <span class="PslCheckboxCount p2">(61951)</span>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                    <div className="flex xs12 CheckboxColorOptions">
                                                                        <div className="PslCheckbox flex">
                                                                            <label>
                                                                                <input type="checkbox" name="5" class="PslCheckboxInput" />
                                                                                <span class="PslCheckboxCheckmark"></span>
                                                                                <span class="PslCheckboxText m-l-5 m-r-5 ellipsis p2">5XL</span>
                                                                                <span class="PslCheckboxCount p2">(61951)</span>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                    <div className="flex xs12 CheckboxColorOptions">
                                                                        <div className="PslCheckbox flex">
                                                                            <label>
                                                                                <input type="checkbox" name="5" class="PslCheckboxInput" />
                                                                                <span class="PslCheckboxCheckmark"></span>
                                                                                <span class="PslCheckboxText m-l-5 m-r-5 ellipsis p2">6XL</span>
                                                                                <span class="PslCheckboxCount p2">(61951)</span>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                    <div className="flex xs12 CheckboxColorOptions">
                                                                        <div className="PslCheckbox flex">
                                                                            <label>
                                                                                <input type="checkbox" name="5" class="PslCheckboxInput" />
                                                                                <span class="PslCheckboxCheckmark"></span>
                                                                                <span class="PslCheckboxText m-l-5 m-r-5 ellipsis p2">Custom Tailored</span>
                                                                                <span class="PslCheckboxCount p2">(61951)</span>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                    <div className="flex xs12 CheckboxColorOptions">
                                                                        <div className="PslCheckbox flex">
                                                                            <label>
                                                                                <input type="checkbox" name="5" class="PslCheckboxInput" />
                                                                                <span class="PslCheckboxCheckmark"></span>
                                                                                <span class="PslCheckboxText m-l-5 m-r-5 ellipsis p2">Free Size</span>
                                                                                <span class="PslCheckboxCount p2">(61951)</span>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                    <div className="flex xs12 CheckboxColorOptions">
                                                                        <div className="PslCheckbox flex">
                                                                            <label>
                                                                                <input type="checkbox" name="5" class="PslCheckboxInput" />
                                                                                <span class="PslCheckboxCheckmark"></span>
                                                                                <span class="PslCheckboxText m-l-5 m-r-5 ellipsis p2">Free Size</span>
                                                                                <span class="PslCheckboxCount p2">(61951)</span>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                    <div className="flex xs12 CheckboxColorOptions">
                                                                        <div className="PslCheckbox flex">
                                                                            <label>
                                                                                <input type="checkbox" name="5" class="PslCheckboxInput" />
                                                                                <span class="PslCheckboxCheckmark"></span>
                                                                                <span class="PslCheckboxText m-l-5 m-r-5 ellipsis p2">Free Size</span>
                                                                                <span class="PslCheckboxCount p2">(61951)</span>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                    <div className="flex xs12 CheckboxColorOptions">
                                                                        <div className="PslCheckbox flex">
                                                                            <label>
                                                                                <input type="checkbox" name="5" class="PslCheckboxInput" />
                                                                                <span class="PslCheckboxCheckmark"></span>
                                                                                <span class="PslCheckboxText m-l-5 m-r-5 ellipsis p2">Free Size</span>
                                                                                <span class="PslCheckboxCount p2">(61951)</span>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                    <div className="flex xs12 CheckboxColorOptions">
                                                                        <div className="PslCheckbox flex">
                                                                            <label>
                                                                                <input type="checkbox" name="5" class="PslCheckboxInput" />
                                                                                <span class="PslCheckboxCheckmark"></span>
                                                                                <span class="PslCheckboxText m-l-5 m-r-5 ellipsis p2">Free Size</span>
                                                                                <span class="PslCheckboxCount p2">(61951)</span>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className={`tab-pane fade ${activeTab === 'v-pills-settings' ? 'show active' : ''}`} id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">
                                                            <div className="CheckboxList">
                                                                    <h5 class="CheckboxListTitle demi-bold">Color</h5>

                                                                    <div className="CheckboxListOptions layout row align-start wrap">
                                                                        <div className="flex xs12 CheckboxColorOptions">
                                                                            <div className="PslCheckbox flex">
                                                                                <label>
                                                                                    <input type="checkbox" name="5" class="PslCheckboxInput" />
                                                                                    <span class="PslCheckboxCheckmark" style={{ background: '#ffd700', borderColor: '#ffd700' }}></span>
                                                                                    <span class="PslCheckboxText m-l-5 m-r-5 ellipsis p2">Gold</span>
                                                                                    <span class="PslCheckboxCount p2">(61951)</span>
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                        <div className="flex xs12 CheckboxColorOptions">
                                                                            <div className="PslCheckbox flex">
                                                                                <label>
                                                                                    <input type="checkbox" name="5" class="PslCheckboxInput" />
                                                                                    <span class="PslCheckboxCheckmark" style={{ background: '#fff', borderColor: '#000' }}></span>
                                                                                    <span class="PslCheckboxText m-l-5 m-r-5 ellipsis p2">White</span>
                                                                                    <span class="PslCheckboxCount p2">(61951)</span>
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                        <div className="flex xs12 CheckboxColorOptions">
                                                                            <div className="PslCheckbox flex">
                                                                                <label>
                                                                                    <input type="checkbox" name="5" class="PslCheckboxInput" />
                                                                                    <span class="PslCheckboxCheckmark" style={{ background: '#000', borderColor: '#000' }}></span>
                                                                                    <span class="PslCheckboxText m-l-5 m-r-5 ellipsis p2">Black</span>
                                                                                    <span class="PslCheckboxCount p2">(61951)</span>
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                        <div className="flex xs12 CheckboxColorOptions">
                                                                            <div className="PslCheckbox flex">
                                                                                <label>
                                                                                    <input type="checkbox" name="5" class="PslCheckboxInput" />
                                                                                    <span class="PslCheckboxCheckmark" style={{ background: '#4E8B08', borderColor: '#4E8B08' }}></span>
                                                                                    <span class="PslCheckboxText m-l-5 m-r-5 ellipsis p2">Green</span>
                                                                                    <span class="PslCheckboxCount p2">(61951)</span>
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                        <div className="flex xs12 CheckboxColorOptions">
                                                                            <div className="PslCheckbox flex">
                                                                                <label>
                                                                                    <input type="checkbox" name="5" class="PslCheckboxInput" />
                                                                                    <span class="PslCheckboxCheckmark" style={{ background: '#FFC0CB', borderColor: '#FFC0CB' }}></span>
                                                                                    <span class="PslCheckboxText m-l-5 m-r-5 ellipsis p2">Pink</span>
                                                                                    <span class="PslCheckboxCount p2">(61951)</span>
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                        <div className="flex xs12 CheckboxColorOptions">
                                                                            <div className="PslCheckbox flex">
                                                                                <label>
                                                                                    <input type="checkbox" name="5" class="PslCheckboxInput" />
                                                                                    <span class="PslCheckboxCheckmark" style={{ background: '#ffff00', borderColor: '#ffff00' }}></span>
                                                                                    <span class="PslCheckboxText m-l-5 m-r-5 ellipsis p2">Yellow</span>
                                                                                    <span class="PslCheckboxCount p2">(61951)</span>
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                        <div className="flex xs12 CheckboxColorOptions">
                                                                            <div className="PslCheckbox flex">
                                                                                <label>
                                                                                    <input type="checkbox" name="5" class="PslCheckboxInput" />
                                                                                    <span class="PslCheckboxCheckmark" style={{ background: '#ff0000', borderColor: '#ff0000' }}></span>
                                                                                    <span class="PslCheckboxText m-l-5 m-r-5 ellipsis p2">Red</span>
                                                                                    <span class="PslCheckboxCount p2">(61951)</span>
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                        <div className="flex xs12 CheckboxColorOptions">
                                                                            <div className="PslCheckbox flex">
                                                                                <label>
                                                                                    <input type="checkbox" name="5" class="PslCheckboxInput" />
                                                                                    <span class="PslCheckboxCheckmark" style={{ background: '#65DDEF', borderColor: '#65DDEF' }}></span>
                                                                                    <span class="PslCheckboxText m-l-5 m-r-5 ellipsis p2">Powder Blue</span>
                                                                                    <span class="PslCheckboxCount p2">(61951)</span>
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                        <div className="flex xs12 CheckboxColorOptions">
                                                                            <div className="PslCheckbox flex">
                                                                                <label>
                                                                                    <input type="checkbox" name="5" class="PslCheckboxInput" />
                                                                                    <span class="PslCheckboxCheckmark" style={{ background: '#FFB7DE', borderColor: '#FFB7DE' }}></span>
                                                                                    <span class="PslCheckboxText m-l-5 m-r-5 ellipsis p2">Blush Pink</span>
                                                                                    <span class="PslCheckboxCount p2">(61951)</span>
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                        <div className="flex xs12 CheckboxColorOptions">
                                                                            <div className="PslCheckbox flex">
                                                                                <label>
                                                                                    <input type="checkbox" name="5" class="PslCheckboxInput" />
                                                                                    <span class="PslCheckboxCheckmark" style={{ background: '#fff', borderColor: '#000' }}></span>
                                                                                    <span class="PslCheckboxText m-l-5 m-r-5 ellipsis p2">Multi</span>
                                                                                    <span class="PslCheckboxCount p2">(61951)</span>
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                        <div className="flex xs12 CheckboxColorOptions">
                                                                            <div className="PslCheckbox flex">
                                                                                <label>
                                                                                    <input type="checkbox" name="5" class="PslCheckboxInput" />
                                                                                    <span class="PslCheckboxCheckmark" style={{ background: '#A92AED', borderColor: '#A92AED' }}></span>
                                                                                    <span class="PslCheckboxText m-l-5 m-r-5 ellipsis p2">Purple</span>
                                                                                    <span class="PslCheckboxCount p2">(61951)</span>
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                        <div className="flex xs12 CheckboxColorOptions">
                                                                            <div className="PslCheckbox flex">
                                                                                <label>
                                                                                    <input type="checkbox" name="5" class="PslCheckboxInput" />
                                                                                    <span class="PslCheckboxCheckmark" style={{ background: '#0051C2', borderColor: '#0051C2' }}></span>
                                                                                    <span class="PslCheckboxText m-l-5 m-r-5 ellipsis p2">Cobalt Blue</span>
                                                                                    <span class="PslCheckboxCount p2">(61951)</span>
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                            </div>
                                                        </div>
                                                        <div className={`tab-pane fade ${activeTab === 'v-pills-SHIPPING-TIME' ? 'show active' : ''}`} id="v-pills-SHIPPING-TIME" role="tabpanel" aria-labelledby="v-pills-SHIPPING-TIME-tab"> 
                                                        <div className="CheckboxList">
                                                            <h5 class="CheckboxListTitle demi-bold">SHIPPING TIME</h5>
                                                            <div className="CheckboxListOptions layout row align-start wrap">
                                                                <div className="flex xs12 CheckboxColorOptions">
                                                                    <div className="PslCheckbox flex">
                                                                        <label>
                                                                            <input type="checkbox" name="5" class="PslCheckboxInput" />
                                                                            <span class="PslCheckboxCheckmark"></span>
                                                                            <span class="PslCheckboxText m-l-5 m-r-5 ellipsis p2">48 Hours</span>
                                                                            <span className='PslCheckboxCount p2'>
                                                                                (31951)
                                                                            </span>
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                                <div className="flex xs12 CheckboxColorOptions">
                                                                    <div className="PslCheckbox flex">
                                                                        <label>
                                                                            <input type="checkbox" name="5" class="PslCheckboxInput" />
                                                                            <span class="PslCheckboxCheckmark"></span>
                                                                            <span class="PslCheckboxText m-l-5 m-r-5 ellipsis p2">7 Days</span>
                                                                            <span className='PslCheckboxCount p2'>
                                                                                (21951)
                                                                            </span>
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                                <div className="flex xs12 CheckboxColorOptions">
                                                                    <div className="PslCheckbox flex">
                                                                        <label>
                                                                            <input type="checkbox" name="5" class="PslCheckboxInput" />
                                                                            <span class="PslCheckboxCheckmark"></span>
                                                                            <span class="PslCheckboxText m-l-5 m-r-5 ellipsis p2">10 Days</span>
                                                                            <span className='PslCheckboxCount p2'>
                                                                                (11951)
                                                                            </span>
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                                <div className="flex xs12 CheckboxColorOptions">
                                                                    <div className="PslCheckbox flex">
                                                                        <label>
                                                                            <input type="checkbox" name="5" class="PslCheckboxInput" />
                                                                            <span class="PslCheckboxCheckmark"></span>
                                                                            <span class="PslCheckboxText m-l-5 m-r-5 ellipsis p2">1-2 Weeks</span>
                                                                            <span className='PslCheckboxCount p2'>
                                                                                (41951)
                                                                            </span>
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                                <div className="flex xs12 CheckboxColorOptions">
                                                                    <div className="PslCheckbox flex">
                                                                        <label>
                                                                            <input type="checkbox" name="5" class="PslCheckboxInput" />
                                                                            <span class="PslCheckboxCheckmark"></span>
                                                                            <span class="PslCheckboxText m-l-5 m-r-5 ellipsis p2">2-3 Weeks</span>
                                                                            <span className='PslCheckboxCount p2'>
                                                                                (31951)
                                                                            </span>
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                                <div className="flex xs12 CheckboxColorOptions">
                                                                    <div className="PslCheckbox flex">
                                                                        <label>
                                                                            <input type="checkbox" name="5" class="PslCheckboxInput" />
                                                                            <span class="PslCheckboxCheckmark"></span>
                                                                            <span class="PslCheckboxText m-l-5 m-r-5 ellipsis p2">3-4 Weeks</span>
                                                                            <span className='PslCheckboxCount p2'>
                                                                                (31951)
                                                                            </span>
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                                <div className="flex xs12 CheckboxColorOptions">
                                                                    <div className="PslCheckbox flex">
                                                                        <label>
                                                                            <input type="checkbox" name="5" class="PslCheckboxInput" />
                                                                            <span class="PslCheckboxCheckmark"></span>
                                                                            <span class="PslCheckboxText m-l-5 m-r-5 ellipsis p2">4-5 Weeks</span>
                                                                            <span className='PslCheckboxCount p2'>
                                                                                (31951)
                                                                            </span>
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                                <div className="flex xs12 CheckboxColorOptions">
                                                                    <div className="PslCheckbox flex">
                                                                        <label>
                                                                            <input type="checkbox" name="5" class="PslCheckboxInput" />
                                                                            <span class="PslCheckboxCheckmark"></span>
                                                                            <span class="PslCheckboxText m-l-5 m-r-5 ellipsis p2">Above 5 Weeks</span>
                                                                            <span className='PslCheckboxCount p2'>
                                                                                (61951)
                                                                            </span>
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        </div>
                                                        <div className={`tab-pane fade ${activeTab === 'v-pills-PRICE' ? 'show active' : ''}`} id="v-pills-PRICE" role="tabpanel" aria-labelledby="v-pills-PRICE-tab"> 
                                                            <div className="PriceFilterContainer CheckboxList">
                                                                <div className="layout justify-space-between align-center CheckboxListTitle">
                                                                    <h5 class="demi-bold">Price</h5>
                                                                </div>
                                                                <div className="layout">
                                                                    <div className="flex xs5">
                                                                        <p class="m-b-5 CurrencySymbol m-l-12 p2">Min</p>
                                                                        <div className="layout align-center">
                                                                            <span class="m-r-5 CurrencySymbol p2">₹</span>
                                                                            <div className="layout">
                                                                                <input type="number" value="350" placeholder="Min" class="full-width p2" />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="flex xs6 offset-xs1">
                                                                        <p class="m-b-5 CurrencySymbol m-l-12 p2">Max</p>
                                                                        <div className="layout align-center">
                                                                            <span class="m-r-5 CurrencySymbol p2">₹</span>
                                                                            <div className="layout">
                                                                                <input type="number" placeholder="Max" class="full-width p2" value="1000000" />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Tab>   
                                            <Tab eventKey="profile" title="SORT BY">
                                                <div className="layout sorting-dialog column">
                                                    <div className="sorting-list">
                                                        <div className="borderLine-thin"></div>
                                                        <h3> 
                                                            <div className="sorting-list-item lh-22 font-normal pernia-color">Popular </div>
                                                            <div className="borderLine-thin"></div>
                                                        </h3>
                                                        <h3> 
                                                            <div className="sorting-list-item lh-22 font-normal">Latest </div>
                                                            <div className="borderLine-thin"></div>
                                                        </h3>
                                                        <h3> 
                                                            <div className="sorting-list-item lh-22 font-normal">Price - Low to High </div>
                                                            <div className="borderLine-thin"></div>
                                                        </h3>
                                                        <h3> 
                                                            <div className="sorting-list-item lh-22 font-normal">Price - High to Low </div>
                                                            <div className="borderLine-thin"></div>
                                                        </h3>
                                                        <h3> 
                                                            <div className="sorting-list-item lh-22 font-normal">Discount - High to Low</div>
                                                            <div className="borderLine-thin"></div>
                                                        </h3>
                                                    </div>
                                                </div>
                                            </Tab>   
                                        </Tabs>
                                </Modal.Body>
                                <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    CLEAR ALL
                                </Button>
                                <Button variant="primary" onClick={handleClose}>
                                    APPLY
                                </Button>
                                </Modal.Footer>
                            </Modal>
                    </div>
                </div>
                <div className="layout FilterChips wrap">
                    <div className="chip">
                        <span className="flex text-center m-r-5">XS</span>
                        <span className="chipClose">+</span>
                    </div>
                    <div className="chip chipClear">
                        <span className="bold">CLEAR</span>
                    </div>
                </div>
                <div className="layout wrap align-start justify-space-between all_product">
                    <div className="category-div">
                        <Link to="/singleproduct" target='_blank' className='ProductCard'>     
                           <div className="ProductCardImageWrapper">
                                <div className="ProductImageWrapper">
                                    <div className="FirstProductImage">
                                        <div className="DynamicHeightLoaderWrapper" style={{paddingTop:'50%'}}>
                                            <div className="DynamicHeightLoader layout row align-center justify-center" style={{paddingTop:'100%'}}>
                                                <img src={Productimg1} alt="logo" className='img-resp DynamicHeightLoaderImage' style={{padding:'0%'}}/>
                                            </div>
                                            {/* <div class="animated-bg-placeholder"></div> */}
                                        </div>
                                    </div>
                                    <div className="HoverProductImage">
                                        <div className="DynamicHeightLoaderWrapper" style={{paddingTop:'50%'}}>
                                                <div className="DynamicHeightLoader layout row align-center justify-center" style={{paddingTop:'100%'}}>
                                                    <img src={Productimg1hover} alt="logo" className='img-resp DynamicHeightLoaderImage' style={{padding:'0%'}}/>
                                                </div>
                                                {/* <div class="animated-bg-placeholder"></div> */}
                                            </div>
                                    </div>
                                </div>
                           </div>
                           <div className="ProductCardBottom">
                              <h6 class="ProductCardTitle ellipsis demi-bold">Paulmi &amp; Harsh</h6>
                              <p class="ProductCardDescription p2 ellipsis-two-line">Dark Rose Pink Georgette Floral Printed Pre-Stitched Saree Set</p>
                              <div>
                                <div className="ProductPrice h6">
                                    <span class="SpecialPrice demi-bold">₹24,120</span>
                                    <span class="InitialPrice">₹26,800</span>
                                    <span class="DiscountPriceRound demi-bold">10% OFF</span>
                                </div>
                              </div>
                            </div>   
                            <div class="BestSeller demi-bold">BESTSELLER</div>  
                       </Link>
                    </div> 
                    <div className="category-div">
                        <Link to="/singleproduct" target='_blank' className='ProductCard'>     
                           <div className="ProductCardImageWrapper">
                                <div className="ProductImageWrapper">
                                    <div className="FirstProductImage">
                                        <div className="DynamicHeightLoaderWrapper" style={{paddingTop:'50%'}}>
                                            <div className="DynamicHeightLoader layout row align-center justify-center" style={{paddingTop:'100%'}}>
                                                <img src={Productimg2} alt="logo" className='img-resp DynamicHeightLoaderImage' style={{padding:'0%'}}/>
                                            </div>
                                            {/* <div class="animated-bg-placeholder"></div> */}
                                        </div>
                                    </div>
                                    <div className="HoverProductImage">
                                        <div className="DynamicHeightLoaderWrapper" style={{paddingTop:'50%'}}>
                                                <div className="DynamicHeightLoader layout row align-center justify-center" style={{paddingTop:'100%'}}>
                                                    <img src={Productimg2hover} alt="logo" className='img-resp DynamicHeightLoaderImage' style={{padding:'0%'}}/>
                                                </div>
                                                {/* <div class="animated-bg-placeholder"></div> */}
                                            </div>
                                    </div>
                                </div>
                           </div>
                           <div className="ProductCardBottom">
                              <h6 class="ProductCardTitle ellipsis demi-bold">Paulmi &amp; Harsh</h6>
                              <p class="ProductCardDescription p2 ellipsis-two-line">Dark Rose Pink Georgette Floral Printed Pre-Stitched Saree Set</p>
                              <div>
                                <div className="ProductPrice h6">
                                    <span class="SpecialPrice demi-bold">₹24,120</span>
                                    <span class="InitialPrice">₹26,800</span>
                                    <span class="DiscountPriceRound demi-bold">10% OFF</span>
                                </div>
                              </div>
                            </div>   
                            <div class="BestSeller demi-bold">BESTSELLER</div>  
                            <div class="layout">
                                <div class="ReadyToShip">
                                    <div class="layout align-center justify-center full-height">
                                        <img src={Aug} alt="redy-to-ship icon"/>
                                        <span class="bold">READY TO SHIP</span>
                                    </div>
                                </div>
                            </div>
                       </Link>
                    </div>
                    <div className="category-div">
                        <Link to="/singleproduct" target='_blank' className='ProductCard'>     
                           <div className="ProductCardImageWrapper">
                                <div className="ProductImageWrapper">
                                    <div className="FirstProductImage">
                                        <div className="DynamicHeightLoaderWrapper" style={{paddingTop:'50%'}}>
                                            <div className="DynamicHeightLoader layout row align-center justify-center" style={{paddingTop:'100%'}}>
                                                <img src={Productimg3} alt="logo" className='img-resp DynamicHeightLoaderImage' style={{padding:'0%'}}/>
                                            </div>
                                            {/* <div class="animated-bg-placeholder"></div> */}
                                        </div>
                                    </div>
                                    <div className="HoverProductImage">
                                        <div className="DynamicHeightLoaderWrapper" style={{paddingTop:'50%'}}>
                                                <div className="DynamicHeightLoader layout row align-center justify-center" style={{paddingTop:'100%'}}>
                                                    <img src={Productimg3hover} alt="logo" className='img-resp DynamicHeightLoaderImage' style={{padding:'0%'}}/>
                                                </div>
                                                {/* <div class="animated-bg-placeholder"></div> */}
                                            </div>
                                    </div>
                                </div>
                           </div>
                           <div className="ProductCardBottom">
                              <h6 class="ProductCardTitle ellipsis demi-bold">Paulmi &amp; Harsh</h6>
                              <p class="ProductCardDescription p2 ellipsis-two-line">Dark Rose Pink Georgette Floral Printed Pre-Stitched Saree Set</p>
                              <div>
                                <div className="ProductPrice h6">
                                    <span class="SpecialPrice demi-bold">₹24,120</span>
                                    <span class="InitialPrice">₹26,800</span>
                                    <span class="DiscountPriceRound demi-bold">10% OFF</span>
                                </div>
                              </div>
                            </div>   
                            <div class="BestSeller demi-bold">BESTSELLER</div>  
                            <div class="layout">
                                <div class="ReadyToShip">
                                    <div class="layout align-center justify-center full-height">
                                        <img src={Aug} alt="redy-to-ship icon"/>
                                        <span class="bold">SHIP IN 48 HOURS</span>
                                    </div>
                                </div>
                            </div>
                       </Link>
                    </div>
                    <div className="category-div">
                        <Link to="/singleproduct" target='_blank' className='ProductCard'>     
                           <div className="ProductCardImageWrapper">
                                <div className="ProductImageWrapper">
                                    <div className="FirstProductImage">
                                        <div className="DynamicHeightLoaderWrapper" style={{paddingTop:'50%'}}>
                                            <div className="DynamicHeightLoader layout row align-center justify-center" style={{paddingTop:'100%'}}>
                                                <img src={Productimg4} alt="logo" className='img-resp DynamicHeightLoaderImage' style={{padding:'0%'}}/>
                                            </div>
                                            {/* <div class="animated-bg-placeholder"></div> */}
                                        </div>
                                    </div>
                                    <div className="HoverProductImage">
                                        <div className="DynamicHeightLoaderWrapper" style={{paddingTop:'50%'}}>
                                                <div className="DynamicHeightLoader layout row align-center justify-center" style={{paddingTop:'100%'}}>
                                                    <img src={Productimg4hover} alt="logo" className='img-resp DynamicHeightLoaderImage' style={{padding:'0%'}}/>
                                                </div>
                                                {/* <div class="animated-bg-placeholder"></div> */}
                                            </div>
                                    </div>
                                </div>
                           </div>
                           <div className="ProductCardBottom">
                              <h6 class="ProductCardTitle ellipsis demi-bold">Paulmi &amp; Harsh</h6>
                              <p class="ProductCardDescription p2 ellipsis-two-line">Dark Rose Pink Georgette Floral Printed Pre-Stitched Saree Set</p>
                              <div>
                                <div className="ProductPrice h6">
                                    <span class="SpecialPrice demi-bold">₹24,120</span>
                                    <span class="InitialPrice">₹26,800</span>
                                    <span class="DiscountPriceRound demi-bold">10% OFF</span>
                                </div>
                              </div>
                            </div>   
                            <div class="BestSeller demi-bold">BESTSELLER</div>  
                            <div class="layout">
                                <div class="ReadyToShip">
                                    <div class="layout align-center justify-center full-height">
                                        <img src={Aug} alt="redy-to-ship icon"/>
                                        <span class="bold">SHIP IN 48 HOURS</span>
                                    </div>
                                </div>
                            </div>
                       </Link>
                    </div>
                    <div className="category-div">
                        <Link to="/singleproduct" target='_blank' className='ProductCard'>     
                           <div className="ProductCardImageWrapper">
                                <div className="ProductImageWrapper">
                                    <div className="FirstProductImage">
                                        <div className="DynamicHeightLoaderWrapper" style={{paddingTop:'50%'}}>
                                            <div className="DynamicHeightLoader layout row align-center justify-center" style={{paddingTop:'100%'}}>
                                                <img src={Productimg4} alt="logo" className='img-resp DynamicHeightLoaderImage' style={{padding:'0%'}}/>
                                            </div>
                                            {/* <div class="animated-bg-placeholder"></div> */}
                                        </div>
                                    </div>
                                    <div className="HoverProductImage">
                                        <div className="DynamicHeightLoaderWrapper" style={{paddingTop:'50%'}}>
                                                <div className="DynamicHeightLoader layout row align-center justify-center" style={{paddingTop:'100%'}}>
                                                    <img src={Productimg4hover} alt="logo" className='img-resp DynamicHeightLoaderImage' style={{padding:'0%'}}/>
                                                </div>
                                                {/* <div class="animated-bg-placeholder"></div> */}
                                            </div>
                                    </div>
                                </div>
                           </div>
                           <div className="ProductCardBottom">
                              <h6 class="ProductCardTitle ellipsis demi-bold">Paulmi &amp; Harsh</h6>
                              <p class="ProductCardDescription p2 ellipsis-two-line">Dark Rose Pink Georgette Floral Printed Pre-Stitched Saree Set</p>
                              <div>
                                <div className="ProductPrice h6">
                                    <span class="SpecialPrice demi-bold">₹24,120</span>
                                    <span class="InitialPrice">₹26,800</span>
                                    <span class="DiscountPriceRound demi-bold">10% OFF</span>
                                </div>
                              </div>
                            </div>   
                            <div class="BestSeller demi-bold">BESTSELLER</div>  
                            <div class="layout">
                                <div class="ReadyToShip">
                                    <div class="layout align-center justify-center full-height">
                                        <img src={Aug} alt="redy-to-ship icon"/>
                                        <span class="bold">SHIP IN 48 HOURS</span>
                                    </div>
                                </div>
                            </div>
                       </Link>
                    </div>
                    <div className="category-div">
                        <Link to="/singleproduct" target='_blank' className='ProductCard'>     
                           <div className="ProductCardImageWrapper">
                                <div className="ProductImageWrapper">
                                    <div className="FirstProductImage">
                                        <div className="DynamicHeightLoaderWrapper" style={{paddingTop:'50%'}}>
                                            <div className="DynamicHeightLoader layout row align-center justify-center" style={{paddingTop:'100%'}}>
                                                <img src={Productimg1} alt="logo" className='img-resp DynamicHeightLoaderImage' style={{padding:'0%'}}/>
                                            </div>
                                            {/* <div class="animated-bg-placeholder"></div> */}
                                        </div>
                                    </div>
                                    <div className="HoverProductImage">
                                        <div className="DynamicHeightLoaderWrapper" style={{paddingTop:'50%'}}>
                                                <div className="DynamicHeightLoader layout row align-center justify-center" style={{paddingTop:'100%'}}>
                                                    <img src={Productimg1hover} alt="logo" className='img-resp DynamicHeightLoaderImage' style={{padding:'0%'}}/>
                                                </div>
                                                {/* <div class="animated-bg-placeholder"></div> */}
                                            </div>
                                    </div>
                                </div>
                           </div>
                           <div className="ProductCardBottom">
                              <h6 class="ProductCardTitle ellipsis demi-bold">Paulmi &amp; Harsh</h6>
                              <p class="ProductCardDescription p2 ellipsis-two-line">Dark Rose Pink Georgette Floral Printed Pre-Stitched Saree Set</p>
                              <div>
                                <div className="ProductPrice h6">
                                    <span class="SpecialPrice demi-bold">₹24,120</span>
                                    <span class="InitialPrice">₹26,800</span>
                                    <span class="DiscountPriceRound demi-bold">10% OFF</span>
                                </div>
                              </div>
                            </div>   
                            <div class="BestSeller demi-bold">BESTSELLER</div>  
                       </Link>
                    </div>
                    <div className="category-div">
                        <Link to="/singleproduct" target='_blank' className='ProductCard'>     
                           <div className="ProductCardImageWrapper">
                                <div className="ProductImageWrapper">
                                    <div className="FirstProductImage">
                                        <div className="DynamicHeightLoaderWrapper" style={{paddingTop:'50%'}}>
                                            <div className="DynamicHeightLoader layout row align-center justify-center" style={{paddingTop:'100%'}}>
                                                <img src={Productimg3} alt="logo" className='img-resp DynamicHeightLoaderImage' style={{padding:'0%'}}/>
                                            </div>
                                            {/* <div class="animated-bg-placeholder"></div> */}
                                        </div>
                                    </div>
                                    <div className="HoverProductImage">
                                        <div className="DynamicHeightLoaderWrapper" style={{paddingTop:'50%'}}>
                                                <div className="DynamicHeightLoader layout row align-center justify-center" style={{paddingTop:'100%'}}>
                                                    <img src={Productimg3hover} alt="logo" className='img-resp DynamicHeightLoaderImage' style={{padding:'0%'}}/>
                                                </div>
                                                {/* <div class="animated-bg-placeholder"></div> */}
                                            </div>
                                    </div>
                                </div>
                           </div>
                           <div className="ProductCardBottom">
                              <h6 class="ProductCardTitle ellipsis demi-bold">Paulmi &amp; Harsh</h6>
                              <p class="ProductCardDescription p2 ellipsis-two-line">Dark Rose Pink Georgette Floral Printed Pre-Stitched Saree Set</p>
                              <div>
                                <div className="ProductPrice h6">
                                    <span class="SpecialPrice demi-bold">₹24,120</span>
                                    <span class="InitialPrice">₹26,800</span>
                                    <span class="DiscountPriceRound demi-bold">10% OFF</span>
                                </div>
                              </div>
                            </div>   
                            <div class="BestSeller demi-bold">BESTSELLER</div>  
                            <div class="layout">
                                <div class="ReadyToShip">
                                    <div class="layout align-center justify-center full-height">
                                        <img src={Aug} alt="redy-to-ship icon"/>
                                        <span class="bold">SHIP IN 48 HOURS</span>
                                    </div>
                                </div>
                            </div>
                       </Link>
                    </div> 
                    <div className="category-div">
                        <Link to="/singleproduct" target='_blank' className='ProductCard'>     
                           <div className="ProductCardImageWrapper">
                                <div className="ProductImageWrapper">
                                    <div className="FirstProductImage">
                                        <div className="DynamicHeightLoaderWrapper" style={{paddingTop:'50%'}}>
                                            <div className="DynamicHeightLoader layout row align-center justify-center" style={{paddingTop:'100%'}}>
                                                <img src={Productimg2} alt="logo" className='img-resp DynamicHeightLoaderImage' style={{padding:'0%'}}/>
                                            </div>
                                            {/* <div class="animated-bg-placeholder"></div> */}
                                        </div>
                                    </div>
                                    <div className="HoverProductImage">
                                        <div className="DynamicHeightLoaderWrapper" style={{paddingTop:'50%'}}>
                                                <div className="DynamicHeightLoader layout row align-center justify-center" style={{paddingTop:'100%'}}>
                                                    <img src={Productimg2hover} alt="logo" className='img-resp DynamicHeightLoaderImage' style={{padding:'0%'}}/>
                                                </div>
                                                {/* <div class="animated-bg-placeholder"></div> */}
                                            </div>
                                    </div>
                                </div>
                           </div>
                           <div className="ProductCardBottom">
                              <h6 class="ProductCardTitle ellipsis demi-bold">Paulmi &amp; Harsh</h6>
                              <p class="ProductCardDescription p2 ellipsis-two-line">Dark Rose Pink Georgette Floral Printed Pre-Stitched Saree Set</p>
                              <div>
                                <div className="ProductPrice h6">
                                    <span class="SpecialPrice demi-bold">₹24,120</span>
                                    <span class="InitialPrice">₹26,800</span>
                                    <span class="DiscountPriceRound demi-bold">10% OFF</span>
                                </div>
                              </div>
                            </div>   
                            <div class="BestSeller demi-bold">BESTSELLER</div>  
                            <div class="layout">
                                <div class="ReadyToShip">
                                    <div class="layout align-center justify-center full-height">
                                        <img src={Aug} alt="redy-to-ship icon"/>
                                        <span class="bold">READY TO SHIP</span>
                                    </div>
                                </div>
                            </div>
                       </Link>
                    </div>
                    <div className="category-div">
                        <Link to="/singleproduct" target='_blank' className='ProductCard'>     
                           <div className="ProductCardImageWrapper">
                                <div className="ProductImageWrapper">
                                    <div className="FirstProductImage">
                                        <div className="DynamicHeightLoaderWrapper" style={{paddingTop:'50%'}}>
                                            <div className="DynamicHeightLoader layout row align-center justify-center" style={{paddingTop:'100%'}}>
                                                <img src={Productimg3} alt="logo" className='img-resp DynamicHeightLoaderImage' style={{padding:'0%'}}/>
                                            </div>
                                            {/* <div class="animated-bg-placeholder"></div> */}
                                        </div>
                                    </div>
                                    <div className="HoverProductImage">
                                        <div className="DynamicHeightLoaderWrapper" style={{paddingTop:'50%'}}>
                                                <div className="DynamicHeightLoader layout row align-center justify-center" style={{paddingTop:'100%'}}>
                                                    <img src={Productimg3hover} alt="logo" className='img-resp DynamicHeightLoaderImage' style={{padding:'0%'}}/>
                                                </div>
                                                {/* <div class="animated-bg-placeholder"></div> */}
                                            </div>
                                    </div>
                                </div>
                           </div>
                           <div className="ProductCardBottom">
                              <h6 class="ProductCardTitle ellipsis demi-bold">Paulmi &amp; Harsh</h6>
                              <p class="ProductCardDescription p2 ellipsis-two-line">Dark Rose Pink Georgette Floral Printed Pre-Stitched Saree Set</p>
                              <div>
                                <div className="ProductPrice h6">
                                    <span class="SpecialPrice demi-bold">₹24,120</span>
                                    <span class="InitialPrice">₹26,800</span>
                                    <span class="DiscountPriceRound demi-bold">10% OFF</span>
                                </div>
                              </div>
                            </div>   
                            <div class="BestSeller demi-bold">BESTSELLER</div>  
                            <div class="layout">
                                <div class="ReadyToShip">
                                    <div class="layout align-center justify-center full-height">
                                        <img src={Aug} alt="redy-to-ship icon"/>
                                        <span class="bold">SHIP IN 48 HOURS</span>
                                    </div>
                                </div>
                            </div>
                       </Link>
                    </div>
                </div>
            </div>
        </div>
    
    </>
  )
}
