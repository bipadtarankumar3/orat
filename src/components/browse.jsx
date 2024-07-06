import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Eidbanner1, Eidbanner10, Eidbanner2, Eidbanner3, Eidbanner4, Eidbanner5, Eidbanner6, Eidbanner7, Eidbanner8, Eidbanner9 } from '../image';
// import { Eidbanner1, Eidbanner10, Eidbanner2, Eidbanner3, Eidbanner4, Eidbanner5, Eidbanner6, Eidbanner7, Eidbanner8, Eidbanner9 } from '../image';
import { Link } from 'react-router-dom';

const optiontrending1= {
    loop: true,
    // margin: 10,
    nav: true,
    dots: false,
    responsive: {
        0: {
            items: 2.2
        },
        600: {
            items: 3
        },
        1000: {
            items: 5
        }
    }
};

const optionbrowse = {
    loop: true,
    // margin: 10,
    nav: true,
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 6.8
        }
    }
};


function browse() {
    return (
        <div>
                <div className='BrowseCategories layout column m-t-64 p-b-64'>
                    <div className='App'>
                        <div className="BrowseCategoriesContainer CustomCarousel">
                            <div className="layout row justify-space-between align-center text-left SectionTitle">
                                <h1 className='m-t-0 m-b-0 demi-bold w-auto'> BROWSE CATEGORIES </h1>
                            </div>
                            <OwlCarousel className='owl-theme' loop nav {...optionbrowse}>
                                <div className='item'>
                                    <div className="CarouselSection product">
                                        <div className="prel Gutter">
                                            <a href="#">
                                                <div className="DynamicHeightLoaderWrapper" style={{ paddingTop: '130%', overflow: 'hidden' }}>
                                                    <div className="DynamicHeightLoader layout row align-center justify-center" style={{ paddingTop: '22%' }}>
                                                        <img src={Eidbanner1} alt="logo" className='img-resp DynamicHeightLoaderImage' style={{ padding: '0px', bottom: 'inherit' }} />
                                                    </div>
                                                    {/* <div className="animated-bg-placeholder"></div> */}
                                                </div>
                                                {/* <div className="image-gradient"></div> */}
                                                <div className="ImageTextDetail ProductImageTextDetail">
                                                    <label className="ellipsis h5 ImageTextLabelTop m-t-5 demi-bold"> Suruchi Parakh </label>
                                                    <label class="h6 ellipsis-two-line font-normal ImageTextLabelBottom block font-normal">Blush Pink & Bright Red Embroidered Anarkali Set</label>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className='item'>
                                    <div className="CarouselSection product">
                                        <div className="prel Gutter">
                                            <a href="#">
                                                <div className="DynamicHeightLoaderWrapper" style={{ paddingTop: '130%', overflow: 'hidden' }}>
                                                    <div className="DynamicHeightLoader layout row align-center justify-center" style={{ paddingTop: '22%' }}>
                                                        <img src={Eidbanner2} alt="logo" className='img-resp DynamicHeightLoaderImage' style={{ padding: '0px', bottom: 'inherit' }} />
                                                    </div>
                                                    {/* <div className="animated-bg-placeholder"></div> */}
                                                </div>
                                                {/* <div className="image-gradient"></div> */}
                                                <div className="ImageTextDetail ProductImageTextDetail">
                                                    <label className="ellipsis h5 ImageTextLabelTop m-t-5 demi-bold"> MeenaGurnam </label>
                                                    <label class="h6 ellipsis-two-line font-normal ImageTextLabelBottom block font-normal">White Georgette Sequins Embroidered Sharara Set</label>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className='item'>
                                    <div className="CarouselSection product">
                                        <div className="prel Gutter">
                                            <a href="#">
                                                <div className="DynamicHeightLoaderWrapper" style={{ paddingTop: '130%', overflow: 'hidden' }}>
                                                    <div className="DynamicHeightLoader layout row align-center justify-center" style={{ paddingTop: '22%' }}>
                                                        <img src={Eidbanner3} alt="logo" className='img-resp DynamicHeightLoaderImage' style={{ padding: '0px', bottom: 'inherit' }} />
                                                    </div>
                                                    {/* <div className="animated-bg-placeholder"></div> */}
                                                </div>
                                                {/* <div className="image-gradient"></div> */}
                                                <div className="ImageTextDetail ProductImageTextDetail">
                                                    <label className="ellipsis h5 ImageTextLabelTop m-t-5 demi-bold"> Studio A </label>
                                                    <label class="h6 ellipsis-two-line font-normal ImageTextLabelBottom block font-normal">Black Embroidered Kurta Set </label>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className='item'>
                                    <div className="CarouselSection product">
                                        <div className="prel Gutter">
                                            <a href="#">
                                                <div className="DynamicHeightLoaderWrapper" style={{ paddingTop: '130%', overflow: 'hidden' }}>
                                                    <div className="DynamicHeightLoader layout row align-center justify-center" style={{ paddingTop: '22%' }}>
                                                        <img src={Eidbanner4} alt="logo" className='img-resp DynamicHeightLoaderImage' style={{ padding: '0px', bottom: 'inherit' }} />
                                                    </div>
                                                    {/* <div className="animated-bg-placeholder"></div> */}
                                                </div>
                                                {/* <div className="image-gradient"></div> */}
                                                <div className="ImageTextDetail ProductImageTextDetail">
                                                    <label className="ellipsis h5 ImageTextLabelTop m-t-5 demi-bold"> WILDFLOWER BY KRISHNA </label>
                                                    <label class="h6 ellipsis-two-line font-normal ImageTextLabelBottom block font-normal">Magenta Chinon Hand Embroidered Anarkali Set</label>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className='item'>
                                    <div className="CarouselSection product">
                                        <div className="prel Gutter">
                                            <a href="#">
                                                <div className="DynamicHeightLoaderWrapper" style={{ paddingTop: '130%', overflow: 'hidden' }}>
                                                    <div className="DynamicHeightLoader layout row align-center justify-center" style={{ paddingTop: '22%' }}>
                                                        <img src={Eidbanner5} alt="logo" className='img-resp DynamicHeightLoaderImage' style={{ padding: '0px', bottom: 'inherit' }} />
                                                    </div>
                                                    {/* <div className="animated-bg-placeholder"></div> */}
                                                </div>
                                                {/* <div className="image-gradient"></div> */}
                                                <div className="ImageTextDetail ProductImageTextDetail">
                                                    <label className="ellipsis h5 ImageTextLabelTop m-t-5 demi-bold"> Ikshita Choudhary </label>
                                                    <label class="h6 ellipsis-two-line font-normal ImageTextLabelBottom block font-normal">Magenta Hand Embroidered Kurta Set</label>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className='item'>
                                    <div className="CarouselSection product">
                                        <div className="prel Gutter">
                                            <a href="#">
                                                <div className="DynamicHeightLoaderWrapper" style={{ paddingTop: '130%', overflow: 'hidden' }}>
                                                    <div className="DynamicHeightLoader layout row align-center justify-center" style={{ paddingTop: '22%' }}>
                                                        <img src={Eidbanner6} alt="logo" className='img-resp DynamicHeightLoaderImage' style={{ padding: '0px', bottom: 'inherit' }} />
                                                    </div>
                                                    {/* <div className="animated-bg-placeholder"></div> */}
                                                </div>
                                                {/* <div className="image-gradient"></div> */}
                                                <div className="ImageTextDetail ProductImageTextDetail">
                                                    <label className="ellipsis h5 ImageTextLabelTop m-t-5 demi-bold"> Drishti & Zahabia </label>
                                                    <label class="h6 ellipsis-two-line font-normal ImageTextLabelBottom block font-normal">Drishti & Zahabia</label>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className='item'>
                                    <div className="CarouselSection product">
                                        <div className="prel Gutter">
                                            <a href="#">
                                                <div className="DynamicHeightLoaderWrapper" style={{ paddingTop: '130%', overflow: 'hidden' }}>
                                                    <div className="DynamicHeightLoader layout row align-center justify-center" style={{ paddingTop: '22%' }}>
                                                        <img src={Eidbanner7} alt="logo" className='img-resp DynamicHeightLoaderImage' style={{ padding: '0px', bottom: 'inherit' }} />
                                                    </div>
                                                    {/* <div className="animated-bg-placeholder"></div> */}
                                                </div>
                                                {/* <div className="image-gradient"></div> */}
                                                <div className="ImageTextDetail ProductImageTextDetail">
                                                    <label className="ellipsis h5 ImageTextLabelTop m-t-5 demi-bold"> Almaari by Pooja Patel </label>
                                                    <label class="h6 ellipsis-two-line font-normal ImageTextLabelBottom block font-normal">Almaari by Pooja Patel</label>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className='item'>
                                    <div className="CarouselSection product">
                                        <div className="prel Gutter">
                                            <a href="#">
                                                <div className="DynamicHeightLoaderWrapper" style={{ paddingTop: '130%', overflow: 'hidden' }}>
                                                    <div className="DynamicHeightLoader layout row align-center justify-center" style={{ paddingTop: '22%' }}>
                                                        <img src={Eidbanner8} alt="logo" className='img-resp DynamicHeightLoaderImage' style={{ padding: '0px', bottom: 'inherit' }} />
                                                    </div>
                                                    {/* <div className="animated-bg-placeholder"></div> */}
                                                </div>
                                                {/* <div className="image-gradient"></div> */}
                                                <div className="ImageTextDetail ProductImageTextDetail">
                                                    <label className="ellipsis h5 ImageTextLabelTop m-t-5 demi-bold"> Wazir C </label>
                                                    <label class="h6 ellipsis-two-line font-normal ImageTextLabelBottom block font-normal">Hot Pink Silk Embroidered A-Line Kurta Set</label>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className='item'>
                                    <div className="CarouselSection product">
                                        <div className="prel Gutter">
                                            <a href="#">
                                                <div className="DynamicHeightLoaderWrapper" style={{ paddingTop: '130%', overflow: 'hidden' }}>
                                                    <div className="DynamicHeightLoader layout row align-center justify-center" style={{ paddingTop: '22%' }}>
                                                        <img src={Eidbanner9} alt="logo" className='img-resp DynamicHeightLoaderImage' style={{ padding: '0px', bottom: 'inherit' }} />
                                                    </div>
                                                    {/* <div className="animated-bg-placeholder"></div> */}
                                                </div>
                                                {/* <div className="image-gradient"></div> */}
                                                <div className="ImageTextDetail ProductImageTextDetail">
                                                    <label className="ellipsis h5 ImageTextLabelTop m-t-5 demi-bold"> Ranian </label>
                                                    <label class="h6 ellipsis-two-line font-normal ImageTextLabelBottom block font-normal">Black Embroidered Kurta Set</label>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className='item'>
                                    <div className="CarouselSection product">
                                        <div className="prel Gutter">
                                            <a href="#">
                                                <div className="DynamicHeightLoaderWrapper" style={{ paddingTop: '130%', overflow: 'hidden' }}>
                                                    <div className="DynamicHeightLoader layout row align-center justify-center" style={{ paddingTop: '22%' }}>
                                                        <img src={Eidbanner10} alt="logo" className='img-resp DynamicHeightLoaderImage' style={{ padding: '0px', bottom: 'inherit' }} />
                                                    </div>
                                                    {/* <div className="animated-bg-placeholder"></div> */}
                                                </div>
                                                {/* <div className="image-gradient"></div> */}
                                                <div className="ImageTextDetail ProductImageTextDetail">
                                                    <label className="ellipsis h5 ImageTextLabelTop m-t-5 demi-bold"> Megha & Jigar </label>
                                                    <label class="h6 ellipsis-two-line font-normal ImageTextLabelBottom block font-normal">Bottle Green Embroidered Jacket Set</label>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>

                            </OwlCarousel>
                        </div>
                    </div>
                </div>

                <div className='App demo'>
                    <div className="BreakPointContainer">
                        <div className="layout row justify-space-between align-center text-left SectionTitle">
                            <h1 className='m-t-0 m-b-0 demi-bold w-auto'> TRENDING PRODUCTS </h1>
                            <Link to="/category" className='ViewAllUrlsLink pernia-color-hover h5 demi-bold w-auto'>VIEW ALL</Link>
                        </div>
                        <OwlCarousel className='owl-theme' loop nav {...optiontrending1}>
                            <div className='item'>
                                <div className="CarouselSection product">
                                    <div className="prel Gutter">
                                        <a href="#">
                                            <div className="DynamicHeightLoaderWrapper" style={{ paddingTop: '130%', overflow: 'hidden' }}>
                                                <div className="DynamicHeightLoader layout row align-center justify-center" style={{ paddingTop: '22%' }}>
                                                    <img src={Eidbanner1} alt="logo" className='img-resp DynamicHeightLoaderImage' style={{ padding: '0px', bottom: 'inherit' }} />
                                                </div>
                                                {/* <div className="animated-bg-placeholder"></div> */}
                                            </div>
                                            {/* <div className="image-gradient"></div> */}
                                            <div className="ImageTextDetail ProductImageTextDetail">
                                                <label className="ellipsis h5 ImageTextLabelTop m-t-5 demi-bold"> Suruchi Parakh </label>
                                                <label class="h6 ellipsis-two-line font-normal ImageTextLabelBottom block font-normal">Blush Pink & Bright Red Embroidered Anarkali Set</label>
                                                <div className="ProductPrice layout row wrap">
                                                    <span className='SpecialPrice p2 demi-bold w-auto p-0' style={{ marginLeft: '4%' }}> ₹ 15,600 </span>
                                                    <span className='InitialPrice p3 w-auto p-0'> ₹ 19,500 </span>
                                                    <span className='DiscountPriceRound p3 w-auto p-0'> ₹ 20% OFF </span>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className='item'>
                                <div className="CarouselSection product">
                                    <div className="prel Gutter">
                                        <a href="#">
                                            <div className="DynamicHeightLoaderWrapper" style={{ paddingTop: '130%', overflow: 'hidden' }}>
                                                <div className="DynamicHeightLoader layout row align-center justify-center" style={{ paddingTop: '22%' }}>
                                                    <img src={Eidbanner2} alt="logo" className='img-resp DynamicHeightLoaderImage' style={{ padding: '0px', bottom: 'inherit' }} />
                                                </div>
                                                {/* <div className="animated-bg-placeholder"></div> */}
                                            </div>
                                            {/* <div className="image-gradient"></div> */}
                                            <div className="ImageTextDetail ProductImageTextDetail">
                                                <label className="ellipsis h5 ImageTextLabelTop m-t-5 demi-bold"> MeenaGurnam </label>
                                                <label class="h6 ellipsis-two-line font-normal ImageTextLabelBottom block font-normal">White Georgette Sequins Embroidered Sharara Set</label>
                                                <div className="ProductPrice layout row wrap">
                                                    <span className='SpecialPrice p2 demi-bold w-auto p-0' style={{ marginLeft: '4%' }}> ₹ 16,030 </span>
                                                    <span className='InitialPrice p3 w-auto p-0'> ₹ 22,900 </span>
                                                    <span className='DiscountPriceRound p3 w-auto p-0'> ₹ 30% OFF </span>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className='item'>
                                <div className="CarouselSection product">
                                    <div className="prel Gutter">
                                        <a href="#">
                                            <div className="DynamicHeightLoaderWrapper" style={{ paddingTop: '130%', overflow: 'hidden' }}>
                                                <div className="DynamicHeightLoader layout row align-center justify-center" style={{ paddingTop: '22%' }}>
                                                    <img src={Eidbanner3} alt="logo" className='img-resp DynamicHeightLoaderImage' style={{ padding: '0px', bottom: 'inherit' }} />
                                                </div>
                                                {/* <div className="animated-bg-placeholder"></div> */}
                                            </div>
                                            {/* <div className="image-gradient"></div> */}
                                            <div className="ImageTextDetail ProductImageTextDetail">
                                                <label className="ellipsis h5 ImageTextLabelTop m-t-5 demi-bold"> Studio A </label>
                                                <label class="h6 ellipsis-two-line font-normal ImageTextLabelBottom block font-normal">Black Embroidered Kurta Set </label>
                                                <div className="ProductPrice layout row wrap">
                                                    <span className='SpecialPrice p2 demi-bold w-auto p-0' style={{ marginLeft: '4%' }}> ₹ 13,125 </span>
                                                    <span className='InitialPrice p3 w-auto p-0'> ₹ 17,500 </span>
                                                    <span className='DiscountPriceRound p3 w-auto p-0'> ₹ 25% OFF </span>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className='item'>
                                <div className="CarouselSection product">
                                    <div className="prel Gutter">
                                        <a href="#">
                                            <div className="DynamicHeightLoaderWrapper" style={{ paddingTop: '130%', overflow: 'hidden' }}>
                                                <div className="DynamicHeightLoader layout row align-center justify-center" style={{ paddingTop: '22%' }}>
                                                    <img src={Eidbanner4} alt="logo" className='img-resp DynamicHeightLoaderImage' style={{ padding: '0px', bottom: 'inherit' }} />
                                                </div>
                                                {/* <div className="animated-bg-placeholder"></div> */}
                                            </div>
                                            {/* <div className="image-gradient"></div> */}
                                            <div className="ImageTextDetail ProductImageTextDetail">
                                                <label className="ellipsis h5 ImageTextLabelTop m-t-5 demi-bold"> WILDFLOWER BY KRISHNA </label>
                                                <label class="h6 ellipsis-two-line font-normal ImageTextLabelBottom block font-normal">Magenta Chinon Hand Embroidered Anarkali Set</label>
                                                <div className="ProductPrice layout row wrap">
                                                    <span className='SpecialPrice p2 demi-bold w-auto p-0' style={{ marginLeft: '4%' }}> ₹ 25,760 </span>
                                                    <span className='InitialPrice p3 w-auto p-0'> ₹ 32,200 </span>
                                                    <span className='DiscountPriceRound p3 w-auto p-0'> ₹ 20% OFF </span>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className='item'>
                                <div className="CarouselSection product">
                                    <div className="prel Gutter">
                                        <a href="#">
                                            <div className="DynamicHeightLoaderWrapper" style={{ paddingTop: '130%', overflow: 'hidden' }}>
                                                <div className="DynamicHeightLoader layout row align-center justify-center" style={{ paddingTop: '22%' }}>
                                                    <img src={Eidbanner5} alt="logo" className='img-resp DynamicHeightLoaderImage' style={{ padding: '0px', bottom: 'inherit' }} />
                                                </div>
                                                {/* <div className="animated-bg-placeholder"></div> */}
                                            </div>
                                            {/* <div className="image-gradient"></div> */}
                                            <div className="ImageTextDetail ProductImageTextDetail">
                                                <label className="ellipsis h5 ImageTextLabelTop m-t-5 demi-bold"> Ikshita Choudhary </label>
                                                <label class="h6 ellipsis-two-line font-normal ImageTextLabelBottom block font-normal">Magenta Hand Embroidered Kurta Set</label>
                                                <div className="ProductPrice layout row wrap">
                                                    <span className='SpecialPrice p2 demi-bold w-auto p-0' style={{ marginLeft: '4%' }}> ₹ 6,400 </span>
                                                    <span className='InitialPrice p3 w-auto p-0'> ₹ 8,000 </span>
                                                    <span className='DiscountPriceRound p3 w-auto p-0'> ₹ 20% OFF </span>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className='item'>
                                <div className="CarouselSection product">
                                    <div className="prel Gutter">
                                        <a href="#">
                                            <div className="DynamicHeightLoaderWrapper" style={{ paddingTop: '130%', overflow: 'hidden' }}>
                                                <div className="DynamicHeightLoader layout row align-center justify-center" style={{ paddingTop: '22%' }}>
                                                    <img src={Eidbanner6} alt="logo" className='img-resp DynamicHeightLoaderImage' style={{ padding: '0px', bottom: 'inherit' }} />
                                                </div>
                                                {/* <div className="animated-bg-placeholder"></div> */}
                                            </div>
                                            {/* <div className="image-gradient"></div> */}
                                            <div className="ImageTextDetail ProductImageTextDetail">
                                                <label className="ellipsis h5 ImageTextLabelTop m-t-5 demi-bold"> Drishti & Zahabia </label>
                                                <label class="h6 ellipsis-two-line font-normal ImageTextLabelBottom block font-normal">Drishti & Zahabia</label>
                                                <div className="ProductPrice layout row wrap">
                                                    <span className='SpecialPrice p2 demi-bold w-auto p-0' style={{ marginLeft: '4%' }}> ₹ 24,225 </span>
                                                    <span className='InitialPrice p3 w-auto p-0'> ₹ 28,500 </span>
                                                    <span className='DiscountPriceRound p3 w-auto p-0'> ₹ 15% OFF </span>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className='item'>
                                <div className="CarouselSection product">
                                    <div className="prel Gutter">
                                        <a href="#">
                                            <div className="DynamicHeightLoaderWrapper" style={{ paddingTop: '130%', overflow: 'hidden' }}>
                                                <div className="DynamicHeightLoader layout row align-center justify-center" style={{ paddingTop: '22%' }}>
                                                    <img src={Eidbanner7} alt="logo" className='img-resp DynamicHeightLoaderImage' style={{ padding: '0px', bottom: 'inherit' }} />
                                                </div>
                                                {/* <div className="animated-bg-placeholder"></div> */}
                                            </div>
                                            {/* <div className="image-gradient"></div> */}
                                            <div className="ImageTextDetail ProductImageTextDetail">
                                                <label className="ellipsis h5 ImageTextLabelTop m-t-5 demi-bold"> Almaari by Pooja Patel </label>
                                                <label class="h6 ellipsis-two-line font-normal ImageTextLabelBottom block font-normal">Almaari by Pooja Patel</label>
                                                <div className="ProductPrice layout row wrap">
                                                    <span className='SpecialPrice p2 demi-bold w-auto p-0' style={{ marginLeft: '4%' }}> ₹ 23,800 </span>
                                                    <span className='InitialPrice p3 w-auto p-0'> ₹ 28,000 </span>
                                                    <span className='DiscountPriceRound p3 w-auto p-0'> ₹ 15% OFF </span>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className='item'>
                                <div className="CarouselSection product">
                                    <div className="prel Gutter">
                                        <a href="#">
                                            <div className="DynamicHeightLoaderWrapper" style={{ paddingTop: '130%', overflow: 'hidden' }}>
                                                <div className="DynamicHeightLoader layout row align-center justify-center" style={{ paddingTop: '22%' }}>
                                                    <img src={Eidbanner8} alt="logo" className='img-resp DynamicHeightLoaderImage' style={{ padding: '0px', bottom: 'inherit' }} />
                                                </div>
                                                {/* <div className="animated-bg-placeholder"></div> */}
                                            </div>
                                            {/* <div className="image-gradient"></div> */}
                                            <div className="ImageTextDetail ProductImageTextDetail">
                                                <label className="ellipsis h5 ImageTextLabelTop m-t-5 demi-bold"> Wazir C </label>
                                                <label class="h6 ellipsis-two-line font-normal ImageTextLabelBottom block font-normal">Hot Pink Silk Embroidered A-Line Kurta Set</label>
                                                <div className="ProductPrice layout row wrap">
                                                    <span className='SpecialPrice p2 demi-bold w-auto p-0' style={{ marginLeft: '4%' }}> ₹ 9,600 </span>
                                                    <span className='InitialPrice p3 w-auto p-0'> ₹ 12,000 </span>
                                                    <span className='DiscountPriceRound p3 w-auto p-0'> ₹ 20% OFF </span>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className='item'>
                                <div className="CarouselSection product">
                                    <div className="prel Gutter">
                                        <a href="#">
                                            <div className="DynamicHeightLoaderWrapper" style={{ paddingTop: '130%', overflow: 'hidden' }}>
                                                <div className="DynamicHeightLoader layout row align-center justify-center" style={{ paddingTop: '22%' }}>
                                                    <img src={Eidbanner9} alt="logo" className='img-resp DynamicHeightLoaderImage' style={{ padding: '0px', bottom: 'inherit' }} />
                                                </div>
                                                {/* <div className="animated-bg-placeholder"></div> */}
                                            </div>
                                            {/* <div className="image-gradient"></div> */}
                                            <div className="ImageTextDetail ProductImageTextDetail">
                                                <label className="ellipsis h5 ImageTextLabelTop m-t-5 demi-bold"> Ranian </label>
                                                <label class="h6 ellipsis-two-line font-normal ImageTextLabelBottom block font-normal">Black Embroidered Kurta Set</label>
                                                <div className="ProductPrice layout row wrap">
                                                    <span className='SpecialPrice p2 demi-bold w-auto p-0' style={{ marginLeft: '4%' }}> ₹ 17,360 </span>
                                                    <span className='InitialPrice p3 w-auto p-0'> ₹ 24,800 </span>
                                                    <span className='DiscountPriceRound p3 w-auto p-0'> ₹ 30% OFF </span>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className='item'>
                                <div className="CarouselSection product">
                                    <div className="prel Gutter">
                                        <a href="#">
                                            <div className="DynamicHeightLoaderWrapper" style={{ paddingTop: '130%', overflow: 'hidden' }}>
                                                <div className="DynamicHeightLoader layout row align-center justify-center" style={{ paddingTop: '22%' }}>
                                                    <img src={Eidbanner10} alt="logo" className='img-resp DynamicHeightLoaderImage' style={{ padding: '0px', bottom: 'inherit' }} />
                                                </div>
                                                {/* <div className="animated-bg-placeholder"></div> */}
                                            </div>
                                            {/* <div className="image-gradient"></div> */}
                                            <div className="ImageTextDetail ProductImageTextDetail">
                                                <label className="ellipsis h5 ImageTextLabelTop m-t-5 demi-bold"> Megha & Jigar </label>
                                                <label class="h6 ellipsis-two-line font-normal ImageTextLabelBottom block font-normal">Bottle Green Embroidered Jacket Set</label>
                                                <div className="ProductPrice layout row wrap">
                                                    <span className='SpecialPrice p2 demi-bold w-auto p-0' style={{ marginLeft: '4%' }}> ₹ 44,910 </span>
                                                    <span className='InitialPrice p3 w-auto p-0'> ₹ 49,900 </span>
                                                    <span className='DiscountPriceRound p3 w-auto p-0'> ₹ 10% OFF </span>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>

                        </OwlCarousel>
                    </div>
                </div>
       </div>
    )
}

export default browse