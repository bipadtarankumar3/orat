import React, { useState } from 'react';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Filter = () => {
    // State to track the values of the min and max price
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(100);

    // Event handlers for min and max price changes
    const handleMinPriceChange = (event) => {
        setMinPrice(parseInt(event.target.value, 10));
    };

    const handleMaxPriceChange = (event) => {
        setMaxPrice(parseInt(event.target.value, 10));
    };

    return (
        
        <div className="FilterContainer">
            <div className="Filter">
                <div className="Breadcrumbs layout align-center">
                    <div>
                        <a href="" className='pernia-color-hover ellipsis'> Home </a>
                        <span className='m-l-5 m-r-5'> <MdOutlineKeyboardArrowRight /> </span>
                    </div>
                    <div>
                        <a href="" className='ellipsis'> Sale </a>
                    </div>
                </div>
                <div className="FilterContent">
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
                    <div className="CheckboxList">
                        <h3 className='demi-bold mt-3'style={{fontWeight: '700'}}> NEW  </h3>
                        <h5 class="CheckboxListTitle demi-bold">SHOP BY OCCASSION</h5>
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
                        </div>
                        <div className="CheckboxListFooter layout align-center">
                            <button className='btn-icon pernia-color'>
                                {/* <h6 className='demi-bold'> View More </h6> */}
                            </button>
                        </div>
                    </div>
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
                        </div>
                        <div className="CheckboxListFooter layout align-center">
                            <button className='btn-icon pernia-color'>
                                {/* <h6 className='demi-bold'> View More </h6> */}
                            </button>
                        </div>
                    </div>
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
                        </div>
                        <div className="CheckboxListFooter layout align-center">
                            <button className='btn-icon pernia-color'>
                                {/* <h6 className='demi-bold'> View More </h6> */}
                            </button>
                        </div>
                    </div>
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
                        <div className="CheckboxListFooter layout align-center">
                            <button className='btn-icon pernia-color'>
                                {/* <h6 className='demi-bold'> View More </h6> */}
                            </button>
                        </div>
                    </div>
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
                <div className="PriceFilterContainer CheckboxList">
                    <div className="layout justify-space-between align-center CheckboxListTitle">
                        <h5 class="demi-bold">Price</h5>
                    </div>
                    <div className="layout">
                        <div className="flex xs5">
                            <p class="m-b-5 CurrencySymbol m-l-12 p2">Min</p>
                            <div className="layout align-center">
                                <span class="m-r-5 CurrencySymbol p2" style={{fontFamily: "initial"}}>₹</span>
                                <div className="layout">
                                    <input type="number" placeholder="Min" class="full-width p2" />
                                </div>
                            </div>
                        </div>
                        <div className="flex xs6 offset-xs1">
                            <p class="m-b-5 CurrencySymbol m-l-12 p2">Max</p>
                            <div className="layout align-center">
                                <span class="m-r-5 CurrencySymbol p2" style={{fontFamily: "initial"}}>₹</span>
                                <div className="layout">
                                    <input type="number" placeholder="Max" class="full-width p2" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="m-t-10 p-t-10 layout p-b-20 m-r-10">
                        <div style={{width: "100%"}}>
                            <input
                                type="range"
                                id="minPriceSlider"
                                min="0"
                                max={maxPrice}
                                value={minPrice}
                                onChange={handleMinPriceChange}
                                style={{padding: "0px", width: 'inherit'}}
                            />
                            <p style={{fontFamily: "initial"}}>₹{minPrice}</p>
                        </div>
                        {/* <div className="">
                            <input
                                type="range"
                                id="maxPriceSlider"
                                min={minPrice}
                                max="100"
                                value={maxPrice}
                                onChange={handleMaxPriceChange}
                                style={{width: '80px'}}
                            />
                            <p>₹{maxPrice}</p>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Filter;
