import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Wendellbanner1, Wendellbanner2, Wendellbanner3, Wendellbanner4, Wendellbanner5, Wendellbanner6, Wendellimg } from '../image';

const optionwendell = {
    loop: true,
    // margin: 10,
    nav: true,
    dots:false,
    responsive: {
        0: {
            items: 1.5
        },
        600: {
            items: 3
        },
        1000: {
            items: 3    
        }
    }
};

function wendell() {
  return (
    <div className='App'>
        <div className="BreakPointContainer">
            <div className="CarouselSectionContainer CarouselOneSectionContainer">
                <div className="d-lg-flex mobile">
                    <div className="layout flex xs3 justify-center">
                        <div className="flex left-align-slick xs8 offset-xs1">
                            <div className="SideCarouselHeaderImg">
                                <div className="DynamicHeightLoaderWrapper icon mobile_img" style={{ paddingTop: '66%' }}>
                                    <div className="DynamicHeightLoader layout row align-center justify-center" style={{ paddingTop: '66%' }}>
                                        <img src={Wendellimg} alt="logo" className='DynamicHeightLoaderImage'/>
                                    </div>
                                </div>
                            </div>
                            <div className="mobile_button">
                             <a href="" className='btn-pernia-primary m-t-10 purple-bg-color demi-bold-manrope'> EXPLORE ALL </a>
                            </div>
                        </div>
                    </div>
                    <div className="flex left-align-slick xs8 offset-xs1">
                        <OwlCarousel className='owl-theme' loop nav {...optionwendell}>
                            <div className='item'>
                                <div className="CarouselSection product">
                                    <div className="prel Gutter">
                                        <a href="#">
                                            <div className="DynamicHeightLoaderWrapper" style={{ paddingTop: '130%',overflow: 'hidden' }}>
                                                <div className="DynamicHeightLoader layout row align-center justify-center" style={{ paddingTop: '22%' }}>
                                                    <img src={Wendellbanner1} alt="logo" className='img-resp DynamicHeightLoaderImage' style={{ padding: '0px',bottom:'inherit' }}/>
                                                </div>
                                                {/* <div className="animated-bg-placeholder"></div> */}
                                            </div>
                                            {/* <div className="image-gradient"></div> */}
                                            <div className="ImageTextDetail ProductImageTextDetail">
                                                <label className="ellipsis h5 ImageTextLabelTop m-t-5 demi-bold"> Wendell Rodricks X Amit Aggarwal </label>
                                                <label class="h6 ellipsis-two-line font-normal ImageTextLabelBottom block font-normal">Blue Scalloped Detailed Ring Gown</label>
                                                <div className="ProductPrice layout row wrap">
                                                    <span className='SpecialPrice p2 demi-bold w-auto p-0' style={{marginLeft: '4%'}}> ₹ 20,000 </span>
                                                    <span className='InitialPrice p3 w-auto p-0'> ₹ 22,500 </span>
                                                    <span className='DiscountPriceRound p3 w-auto p-0'> ₹ 10% OFF </span>
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
                                            <div className="DynamicHeightLoaderWrapper" style={{ paddingTop: '130%',overflow: 'hidden' }}>
                                                <div className="DynamicHeightLoader layout row align-center justify-center" style={{ paddingTop: '22%' }}>
                                                    <img src={Wendellbanner2} alt="logo" className='img-resp DynamicHeightLoaderImage' style={{ padding: '0px',bottom:'inherit' }}/>
                                                </div>
                                                {/* <div className="animated-bg-placeholder"></div> */}
                                            </div>
                                            {/* <div className="image-gradient"></div> */}
                                            <div className="ImageTextDetail ProductImageTextDetail">
                                                <label className="ellipsis h5 ImageTextLabelTop m-t-5 demi-bold"> Wendell Rodricks X Amit Aggarwal </label>
                                                <label class="h6 ellipsis-two-line font-normal ImageTextLabelBottom block font-normal">Green Scalloped Detailed Ring Gown </label>
                                                <div className="ProductPrice layout row wrap">
                                                    <span className='SpecialPrice p2 demi-bold w-auto p-0' style={{marginLeft: '4%'}}> ₹ 20,000 </span>
                                                    <span className='InitialPrice p3 w-auto p-0'> ₹ 22,500 </span>
                                                    <span className='DiscountPriceRound p3 w-auto p-0'> ₹ 10% OFF </span>
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
                                            <div className="DynamicHeightLoaderWrapper" style={{ paddingTop: '130%',overflow: 'hidden' }}>
                                                <div className="DynamicHeightLoader layout row align-center justify-center" style={{ paddingTop: '22%' }}>
                                                    <img src={Wendellbanner3} alt="logo" className='img-resp DynamicHeightLoaderImage' style={{ padding: '0px',bottom:'inherit' }}/>
                                                </div>
                                                {/* <div className="animated-bg-placeholder"></div> */}
                                            </div>
                                            {/* <div className="image-gradient"></div> */}
                                            <div className="ImageTextDetail ProductImageTextDetail">
                                                <label className="ellipsis h5 ImageTextLabelTop m-t-5 demi-bold"> Wendell Rodricks X Amit Aggarwal </label>
                                                <label class="h6 ellipsis-two-line font-normal ImageTextLabelBottom block font-normal">Green & Neon Scalloped Detailed Robe With Grey Slip Dress </label>
                                                <div className="ProductPrice layout row wrap">
                                                    <span className='SpecialPrice p2 demi-bold w-auto p-0' style={{marginLeft: '4%'}}> ₹ 20,000 </span>
                                                    <span className='InitialPrice p3 w-auto p-0'> ₹ 22,500 </span>
                                                    <span className='DiscountPriceRound p3 w-auto p-0'> ₹ 10% OFF </span>
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
                                            <div className="DynamicHeightLoaderWrapper" style={{ paddingTop: '130%',overflow: 'hidden' }}>
                                                <div className="DynamicHeightLoader layout row align-center justify-center" style={{ paddingTop: '22%' }}>
                                                    <img src={Wendellbanner4} alt="logo" className='img-resp DynamicHeightLoaderImage' style={{ padding: '0px',bottom:'inherit' }}/>
                                                </div>
                                                {/* <div className="animated-bg-placeholder"></div> */}
                                            </div>
                                            {/* <div className="image-gradient"></div> */}
                                            <div className="ImageTextDetail ProductImageTextDetail">
                                                <label className="ellipsis h5 ImageTextLabelTop m-t-5 demi-bold"> Wendell Rodricks X Amit Aggarwal </label>
                                                <label class="h6 ellipsis-two-line font-normal ImageTextLabelBottom block font-normal">Salmon Pink & Blush Scalloped Detailed Draped Sash Dress</label>
                                                <div className="ProductPrice layout row wrap">
                                                    <span className='SpecialPrice p2 demi-bold w-auto p-0' style={{marginLeft: '4%'}}> ₹ 20,000 </span>
                                                    <span className='InitialPrice p3 w-auto p-0'> ₹ 22,500 </span>
                                                    <span className='DiscountPriceRound p3 w-auto p-0'> ₹ 10% OFF </span>
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
                                            <div className="DynamicHeightLoaderWrapper" style={{ paddingTop: '130%',overflow: 'hidden' }}>
                                                <div className="DynamicHeightLoader layout row align-center justify-center" style={{ paddingTop: '22%' }}>
                                                    <img src={Wendellbanner5} alt="logo" className='img-resp DynamicHeightLoaderImage' style={{ padding: '0px',bottom:'inherit' }}/>
                                                </div>
                                                {/* <div className="animated-bg-placeholder"></div> */}
                                            </div>
                                            {/* <div className="image-gradient"></div> */}
                                            <div className="ImageTextDetail ProductImageTextDetail">
                                                <label className="ellipsis h5 ImageTextLabelTop m-t-5 demi-bold"> Wendell Rodricks X Amit Aggarwal </label>
                                                <label class="h6 ellipsis-two-line font-normal ImageTextLabelBottom block font-normal">One-Shoulder Green Omber Printed Ring Dress</label>
                                                <div className="ProductPrice layout row wrap">
                                                    <span className='SpecialPrice p2 demi-bold w-auto p-0' style={{marginLeft: '4%'}}> ₹ 20,000 </span>
                                                    <span className='InitialPrice p3 w-auto p-0'> ₹ 22,500 </span>
                                                    <span className='DiscountPriceRound p3 w-auto p-0'> ₹ 10% OFF </span>
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
                                            <div className="DynamicHeightLoaderWrapper" style={{ paddingTop: '130%',overflow: 'hidden' }}>
                                                <div className="DynamicHeightLoader layout row align-center justify-center" style={{ paddingTop: '22%' }}>
                                                    <img src={Wendellbanner6} alt="logo" className='img-resp DynamicHeightLoaderImage' style={{ padding: '0px',bottom:'inherit' }}/>
                                                </div>
                                                {/* <div className="animated-bg-placeholder"></div> */}
                                            </div>
                                            {/* <div className="image-gradient"></div> */}
                                            <div className="ImageTextDetail ProductImageTextDetail">
                                                <label className="ellipsis h5 ImageTextLabelTop m-t-5 demi-bold"> Wendell Rodricks X Amit Aggarwal </label>
                                                <label class="h6 ellipsis-two-line font-normal ImageTextLabelBottom block font-normal">Lilac & Salmon Half N half Fringe Yoke Dress</label>
                                                <div className="ProductPrice layout row wrap">
                                                    <span className='SpecialPrice p2 demi-bold w-auto p-0' style={{marginLeft: '4%'}}> ₹ 20,000 </span>
                                                    <span className='InitialPrice p3 w-auto p-0'> ₹ 22,500 </span>
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
        </div>
    </div>
  )
}

export default wendell