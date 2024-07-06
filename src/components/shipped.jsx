import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Shippedbanner1, Shippedbanner2, Shippedbanner3 } from '../image';

const optionshours = {
    loop: true,
    // margin: 10,
    nav: false,
    dots:false,
    responsive: {
        0: {
            items: 1.4
        },
        600: {
            items: 3
        },
        1000: {
            items: 3    
        }
    }
};

function shipped() {
  return (
    <div className='App'>
        <div className="BreakPointContainer">
            <div className="CarouselSectionContainer">
                <div className="layout row justify-space-between align-center text-left SectionTitle">
                    <h1 className='m-t-0 m-b-0 demi-bold'> LAST CHANCE TO BUY </h1>
                </div>
                <div className="layout">
                    <div className="flex left-align-slick xs12">
                    <OwlCarousel className='owl-theme' loop nav {...optionshours}>
                        <div className='item'>
                            <div className="CarouselSection category">
                                <div className="prel Gutter">
                                    <a href="#">
                                        <div className="DynamicHeightLoaderWrapper" style={{ paddingTop: '12%' }}>
                                            <div className="DynamicHeightLoader layout row align-center justify-center" style={{ paddingTop: '32%' }}>
                                                <img src={Shippedbanner1} alt="logo" className='img-resp DynamicHeightLoaderImage' style={{ padding: '0px' }}/>
                                            </div>
                                            {/* <div className="animated-bg-placeholder"></div> */}
                                        </div>
                                        {/* <div className="image-gradient"></div> */}
                                        <div className="ImageTextDetail CategoryImageTextDetail">
                                            <label className="h3 demi-bold ellipsis ImageTextLabelBottom block font-normal"> WOMENSWEAR </label>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className='item'>
                            <div className="CarouselSection category">
                                <div className="prel Gutter">
                                    <a href="#">
                                        <div className="DynamicHeightLoaderWrapper" style={{ paddingTop: '12%' }}>
                                            <div className="DynamicHeightLoader layout row align-center justify-center" style={{ paddingTop: '32%' }}>
                                                <img src={Shippedbanner2} alt="logo" className='img-resp DynamicHeightLoaderImage' style={{ padding: '0px' }}/>
                                            </div>
                                            {/* <div className="animated-bg-placeholder"></div> */}
                                        </div>
                                        {/* <div className="image-gradient"></div> */}
                                        <div className="ImageTextDetail CategoryImageTextDetail">
                                            <label className="h3 demi-bold ellipsis ImageTextLabelBottom block font-normal"> WOMENSWEAR </label>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className='item'>
                            <div className="CarouselSection category">
                                <div className="prel Gutter">
                                    <a href="#">
                                        <div className="DynamicHeightLoaderWrapper" style={{ paddingTop: '12%' }}>
                                            <div className="DynamicHeightLoader layout row align-center justify-center" style={{ paddingTop: '32%' }}>
                                                <img src={Shippedbanner3} alt="logo" className='img-resp DynamicHeightLoaderImage' style={{ padding: '0px' }}/>
                                            </div>
                                            {/* <div className="animated-bg-placeholder"></div> */}
                                        </div>
                                        {/* <div className="image-gradient"></div> */}
                                        <div className="ImageTextDetail CategoryImageTextDetail">
                                            <label className="h3 demi-bold ellipsis ImageTextLabelBottom block font-normal"> WOMENSWEAR </label>
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

export default shipped