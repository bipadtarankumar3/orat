import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Completebanner1, Completebanner10, Completebanner2, Completebanner3, Completebanner4, Completebanner5, Completebanner6, Completebanner7, Completebanner8, Completebanner9 } from '../image';

const optioncomplete = {
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
            items: 6
        }
    }
};

function complete() {
    return (
        <div className='App HomeSection'>
            <div className="BreakPointContainer">
                <div className="CarouselSectionContainer CarouselOneSectionContainer">
                    <div className="layout row justify-space-between align-center text-left SectionTitle">
                        <h1 className='m-t-0 m-b-0 demi-bold w-auto'> COMPLETE THE LOOK </h1>
                        <a href="#" class="ViewAllUrlsLink pernia-color-hover h5 demi-bold w-auto"> VIEW ALL </a>
                    </div>
                    <OwlCarousel className='owl-theme' loop nav {...optioncomplete}>
                        <div className='item'>
                            <div className="CarouselSection product">
                                <div className="prel Gutter">
                                    <a href="#">
                                        <div className="DynamicHeightLoaderWrapper" style={{ paddingTop: '130%', overflow: 'hidden' }}>
                                            <div className="DynamicHeightLoader layout row align-center justify-center" style={{ paddingTop: '22%' }}>
                                                <img src={Completebanner1} alt="logo" className='img-resp DynamicHeightLoaderImage' style={{ padding: '0px', bottom: 'inherit' }} />
                                            </div>
                                            {/* <div className="animated-bg-placeholder"></div> */}
                                        </div>
                                        {/* <div className="image-gradient"></div> */}
                                        <div className="ImageTextDetail ProductImageTextDetail">
                                            <label className="ellipsis h5 ImageTextLabelTop m-t-5 demi-bold"> Wendell Rodricks X Amit Aggarwal </label>
                                            <label class="h6 ellipsis-two-line font-normal ImageTextLabelBottom block font-normal">Blue Scalloped Detailed Ring Gown</label>
                                            <div className="ProductPrice layout row wrap">
                                                <span className='SpecialPrice p2 demi-bold w-auto p-0' style={{ marginLeft: '5%' }}> ₹ 20,000 </span>
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
                                        <div className="DynamicHeightLoaderWrapper" style={{ paddingTop: '130%', overflow: 'hidden' }}>
                                            <div className="DynamicHeightLoader layout row align-center justify-center" style={{ paddingTop: '22%' }}>
                                                <img src={Completebanner2} alt="logo" className='img-resp DynamicHeightLoaderImage' style={{ padding: '0px', bottom: 'inherit' }} />
                                            </div>
                                            {/* <div className="animated-bg-placeholder"></div> */}
                                        </div>
                                        {/* <div className="image-gradient"></div> */}
                                        <div className="ImageTextDetail ProductImageTextDetail">
                                            <label className="ellipsis h5 ImageTextLabelTop m-t-5 demi-bold"> Wendell Rodricks X Amit Aggarwal </label>
                                            <label class="h6 ellipsis-two-line font-normal ImageTextLabelBottom block font-normal">Green Scalloped Detailed Ring Gown </label>
                                            <div className="ProductPrice layout row wrap">
                                                <span className='SpecialPrice p2 demi-bold w-auto p-0' style={{ marginLeft: '5%' }}> ₹ 20,000 </span>
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
                                        <div className="DynamicHeightLoaderWrapper" style={{ paddingTop: '130%', overflow: 'hidden' }}>
                                            <div className="DynamicHeightLoader layout row align-center justify-center" style={{ paddingTop: '22%' }}>
                                                <img src={Completebanner3} alt="logo" className='img-resp DynamicHeightLoaderImage' style={{ padding: '0px', bottom: 'inherit' }} />
                                            </div>
                                            {/* <div className="animated-bg-placeholder"></div> */}
                                        </div>
                                        {/* <div className="image-gradient"></div> */}
                                        <div className="ImageTextDetail ProductImageTextDetail">
                                            <label className="ellipsis h5 ImageTextLabelTop m-t-5 demi-bold"> Wendell Rodricks X Amit Aggarwal </label>
                                            <label class="h6 ellipsis-two-line font-normal ImageTextLabelBottom block font-normal">Green & Neon Scalloped Detailed Robe With Grey Slip Dress </label>
                                            <div className="ProductPrice layout row wrap">
                                                <span className='SpecialPrice p2 demi-bold w-auto p-0' style={{ marginLeft: '5%' }}> ₹ 20,000 </span>
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
                                        <div className="DynamicHeightLoaderWrapper" style={{ paddingTop: '130%', overflow: 'hidden' }}>
                                            <div className="DynamicHeightLoader layout row align-center justify-center" style={{ paddingTop: '22%' }}>
                                                <img src={Completebanner4} alt="logo" className='img-resp DynamicHeightLoaderImage' style={{ padding: '0px', bottom: 'inherit' }} />
                                            </div>
                                            {/* <div className="animated-bg-placeholder"></div> */}
                                        </div>
                                        {/* <div className="image-gradient"></div> */}
                                        <div className="ImageTextDetail ProductImageTextDetail">
                                            <label className="ellipsis h5 ImageTextLabelTop m-t-5 demi-bold"> Wendell Rodricks X Amit Aggarwal </label>
                                            <label class="h6 ellipsis-two-line font-normal ImageTextLabelBottom block font-normal">Salmon Pink & Blush Scalloped Detailed Draped Sash Dress</label>
                                            <div className="ProductPrice layout row wrap">
                                                <span className='SpecialPrice p2 demi-bold w-auto p-0' style={{ marginLeft: '5%' }}> ₹ 20,000 </span>
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
                                        <div className="DynamicHeightLoaderWrapper" style={{ paddingTop: '130%', overflow: 'hidden' }}>
                                            <div className="DynamicHeightLoader layout row align-center justify-center" style={{ paddingTop: '22%' }}>
                                                <img src={Completebanner5} alt="logo" className='img-resp DynamicHeightLoaderImage' style={{ padding: '0px', bottom: 'inherit' }} />
                                            </div>
                                            {/* <div className="animated-bg-placeholder"></div> */}
                                        </div>
                                        {/* <div className="image-gradient"></div> */}
                                        <div className="ImageTextDetail ProductImageTextDetail">
                                            <label className="ellipsis h5 ImageTextLabelTop m-t-5 demi-bold"> Wendell Rodricks X Amit Aggarwal </label>
                                            <label class="h6 ellipsis-two-line font-normal ImageTextLabelBottom block font-normal">One-Shoulder Green Omber Printed Ring Dress</label>
                                            <div className="ProductPrice layout row wrap">
                                                <span className='SpecialPrice p2 demi-bold w-auto p-0' style={{ marginLeft: '5%' }}> ₹ 20,000 </span>
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
                                        <div className="DynamicHeightLoaderWrapper" style={{ paddingTop: '130%', overflow: 'hidden' }}>
                                            <div className="DynamicHeightLoader layout row align-center justify-center" style={{ paddingTop: '22%' }}>
                                                <img src={Completebanner6} alt="logo" className='img-resp DynamicHeightLoaderImage' style={{ padding: '0px', bottom: 'inherit' }} />
                                            </div>
                                            {/* <div className="animated-bg-placeholder"></div> */}
                                        </div>
                                        {/* <div className="image-gradient"></div> */}
                                        <div className="ImageTextDetail ProductImageTextDetail">
                                            <label className="ellipsis h5 ImageTextLabelTop m-t-5 demi-bold"> Wendell Rodricks X Amit Aggarwal </label>
                                            <label class="h6 ellipsis-two-line font-normal ImageTextLabelBottom block font-normal">Lilac & Salmon Half N half Fringe Yoke Dress</label>
                                            <div className="ProductPrice layout row wrap">
                                                <span className='SpecialPrice p2 demi-bold w-auto p-0' style={{ marginLeft: '5%' }}> ₹ 20,000 </span>
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
                                        <div className="DynamicHeightLoaderWrapper" style={{ paddingTop: '130%', overflow: 'hidden' }}>
                                            <div className="DynamicHeightLoader layout row align-center justify-center" style={{ paddingTop: '22%' }}>
                                                <img src={Completebanner7} alt="logo" className='img-resp DynamicHeightLoaderImage' style={{ padding: '0px', bottom: 'inherit' }} />
                                            </div>
                                            {/* <div className="animated-bg-placeholder"></div> */}
                                        </div>
                                        {/* <div className="image-gradient"></div> */}
                                        <div className="ImageTextDetail ProductImageTextDetail">
                                            <label className="ellipsis h5 ImageTextLabelTop m-t-5 demi-bold"> Wendell Rodricks X Amit Aggarwal </label>
                                            <label class="h6 ellipsis-two-line font-normal ImageTextLabelBottom block font-normal">Lilac & Salmon Half N half Fringe Yoke Dress</label>
                                            <div className="ProductPrice layout row wrap">
                                                <span className='SpecialPrice p2 demi-bold w-auto p-0' style={{ marginLeft: '5%' }}> ₹ 20,000 </span>
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
                                        <div className="DynamicHeightLoaderWrapper" style={{ paddingTop: '130%', overflow: 'hidden' }}>
                                            <div className="DynamicHeightLoader layout row align-center justify-center" style={{ paddingTop: '22%' }}>
                                                <img src={Completebanner8} alt="logo" className='img-resp DynamicHeightLoaderImage' style={{ padding: '0px', bottom: 'inherit' }} />
                                            </div>
                                            {/* <div className="animated-bg-placeholder"></div> */}
                                        </div>
                                        {/* <div className="image-gradient"></div> */}
                                        <div className="ImageTextDetail ProductImageTextDetail">
                                            <label className="ellipsis h5 ImageTextLabelTop m-t-5 demi-bold"> Wendell Rodricks X Amit Aggarwal </label>
                                            <label class="h6 ellipsis-two-line font-normal ImageTextLabelBottom block font-normal">Lilac & Salmon Half N half Fringe Yoke Dress</label>
                                            <div className="ProductPrice layout row wrap">
                                                <span className='SpecialPrice p2 demi-bold w-auto p-0' style={{ marginLeft: '5%' }}> ₹ 20,000 </span>
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
                                        <div className="DynamicHeightLoaderWrapper" style={{ paddingTop: '130%', overflow: 'hidden' }}>
                                            <div className="DynamicHeightLoader layout row align-center justify-center" style={{ paddingTop: '22%' }}>
                                                <img src={Completebanner9} alt="logo" className='img-resp DynamicHeightLoaderImage' style={{ padding: '0px', bottom: 'inherit' }} />
                                            </div>
                                            {/* <div className="animated-bg-placeholder"></div> */}
                                        </div>
                                        {/* <div className="image-gradient"></div> */}
                                        <div className="ImageTextDetail ProductImageTextDetail">
                                            <label className="ellipsis h5 ImageTextLabelTop m-t-5 demi-bold"> Wendell Rodricks X Amit Aggarwal </label>
                                            <label class="h6 ellipsis-two-line font-normal ImageTextLabelBottom block font-normal">Lilac & Salmon Half N half Fringe Yoke Dress</label>
                                            <div className="ProductPrice layout row wrap">
                                                <span className='SpecialPrice p2 demi-bold w-auto p-0' style={{ marginLeft: '5%' }}> ₹ 20,000 </span>
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
                                        <div className="DynamicHeightLoaderWrapper" style={{ paddingTop: '130%', overflow: 'hidden' }}>
                                            <div className="DynamicHeightLoader layout row align-center justify-center" style={{ paddingTop: '22%' }}>
                                                <img src={Completebanner10} alt="logo" className='img-resp DynamicHeightLoaderImage' style={{ padding: '0px', bottom: 'inherit' }} />
                                            </div>
                                            {/* <div className="animated-bg-placeholder"></div> */}
                                        </div>
                                        {/* <div className="image-gradient"></div> */}
                                        <div className="ImageTextDetail ProductImageTextDetail">
                                            <label className="ellipsis h5 ImageTextLabelTop m-t-5 demi-bold"> Wendell Rodricks X Amit Aggarwal </label>
                                            <label class="h6 ellipsis-two-line font-normal ImageTextLabelBottom block font-normal">Lilac & Salmon Half N half Fringe Yoke Dress</label>
                                            <div className="ProductPrice layout row wrap">
                                                <span className='SpecialPrice p2 demi-bold w-auto p-0' style={{ marginLeft: '5%' }}> ₹ 20,000 </span>
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
    )
}

export default complete