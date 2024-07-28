import React, { useState,useEffect } from 'react';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { categoryList } from '../services/General-service';
import { productColor, productSize,occassionList } from '../services/Product-service';



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


    const [categoryArr,setCategoryArr] = useState([]);
    const [colorArr,setColorArr] = useState([]);
    const [sizeArr,setSizeArr] = useState([]);
    const [occassionArr,setOccassionArr] = useState([]);

    const getCategoryList = () =>{
        categoryList('').then((data) =>{
            console.log(data);
            setCategoryArr(data.data);
            }
            
        ).catch((error)=>{

        })
    }
    const getColorList = () =>{
        productColor('').then((data) =>{
            console.log(data);
            setColorArr(data.data);
        }
            
        ).catch((error)=>{

        })
    }
    const getSizeList = () =>{
        productSize('').then((data) =>{
            console.log(data);
            setSizeArr(data.data);
            }
            
        ).catch((error)=>{

        })
    }

    const getOccassionList = () =>{
        occassionList('').then((data) =>{
            console.log(data);
            setOccassionArr(data.data);
            }
            
        ).catch((error)=>{

        })
    }

    useEffect(()=> {
        getCategoryList();
        getColorList();
        getSizeList();
        getOccassionList();
    },[]);

        
    const [searchTerm, setSearchTerm] = useState('');
    const [searchColor, setSearchColor] = useState('');
    const [searchSize, setSearchSize] = useState('');
    const [searchOccassion, setSearchOccassion] = useState('');

    // Handler for search input changes
    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };
    const handleColorSearchChange = (event) => {
        setSearchColor(event.target.value);
    };
    const handleSizeSearchChange = (event) => {
        setSearchSize(event.target.value);
    };
    const handleOccassionSearchChange = (event) => {
        setSearchOccassion(event.target.value);
    };

    // Filter the category array based on the search term
    const filteredCategories = categoryArr.filter((data) =>
        data.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const filteredColor = colorArr.filter((data) =>
        data.title.toLowerCase().includes(searchColor.toLowerCase())
    );

    const filteredSize = sizeArr.filter((data) =>
        data.size.toLowerCase().includes(searchSize.toLowerCase())
    );

    const filteredOccassion = occassionArr.filter((data) =>
        data.title.toLowerCase().includes(searchOccassion.toLowerCase())
    );



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
                            <input
                            type="text"
                            value={searchOccassion}
                            onChange={handleOccassionSearchChange}
                            placeholder="Search"
                            />
                        </div>
                        <div className="CheckboxListOptions layout row align-start wrap">



                            {
                                filteredOccassion.map((data,index) =>(

                                <div  key={data.id} className="flex xs12 CheckboxColorOptions">
                                    <div className="PslCheckbox flex">
                                        <label>
                                            <input type="checkbox" name="5" class="PslCheckboxInput" />
                                            <span class="PslCheckboxCheckmark"></span>
                                            <span class="PslCheckboxText m-l-5 m-r-5 ellipsis p2">{data.title} </span>
                                            <span class="PslCheckboxCount p2">(61951)</span>
                                        </label>
                                    </div>
                                </div>

                                ))
                            }

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
                        <input
                        type="text"
                        value={searchTerm}
                        onChange={handleSearchChange}
                        placeholder="Search"
                        />
                        </div>
                        <div className="CheckboxListOptions layout row align-start wrap">

                        {
                            filteredCategories.map((data,index) =>(

                            <div  key={data.id} className="flex xs12 CheckboxColorOptions">
                                <div className="PslCheckbox flex">
                                    <label>
                                        <input type="checkbox" name="5" class="PslCheckboxInput" />
                                        <span class="PslCheckboxCheckmark"></span>
                                        <span class="PslCheckboxText m-l-5 m-r-5 ellipsis p2">{data.title} </span>
                                        <span class="PslCheckboxCount p2">(61951)</span>
                                    </label>
                                </div>
                            </div>

                            ))
                        }

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
                            <input
                                type="text"
                                value={searchSize}
                                onChange={handleSizeSearchChange}
                                placeholder="Search"
                                />
                        </div>
                        <div className="CheckboxListOptions layout row align-start wrap">


                            {
                                filteredSize.map((data,index) =>(

                                <div  key={data.id} className="flex xs12 CheckboxColorOptions">
                                    <div className="PslCheckbox flex">
                                        <label>
                                            <input type="checkbox" name="5" class="PslCheckboxInput" />
                                            <span class="PslCheckboxCheckmark"></span>
                                            <span class="PslCheckboxText m-l-5 m-r-5 ellipsis p2">{data.size} </span>
                                            <span class="PslCheckboxCount p2">(61951)</span>
                                        </label>
                                    </div>
                                </div>

                                ))
                            }

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


                            {
                                filteredColor.map((data,index) =>(
                                    <div className="flex xs12 CheckboxColorOptions">
                                        <div className="PslCheckbox flex">
                                            <label>
                                                <input type="checkbox" name="5" class="PslCheckboxInput" />
                                                <span class="PslCheckboxCheckmark" style={{ background: data.color, borderColor: data.size }}></span>
                                                <span class="PslCheckboxText m-l-5 m-r-5 ellipsis p2">{data.title}</span>
                                                <span class="PslCheckboxCount p2">(61951)</span>
                                            </label>
                                        </div>
                                    </div>
                                ))
                            }

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
