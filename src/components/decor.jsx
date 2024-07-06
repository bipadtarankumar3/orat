import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Decorbanner1, Decorbanner2, Decorbanner3, Decorbanner4, Decorbanner5, Decorbanner6, Decorbanner7, Decorbanner8 } from '../image';
import { Link } from 'react-router-dom';

const optiondecor = {
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
            items: 4
        }
    }
};


function decor() {
    return (
        <div>
            <div className='App'>
                <div className="BreakPointContainer">
                    <div className="CarouselSectionContainer">
                        <div className="layout row justify-space-between align-center text-left SectionTitle">
                            <h1 className='m-t-0 m-b-0 demi-bold w-auto'> DAZZLING DECOR </h1>
                            <Link to="/category" className='ViewAllUrlsLink pernia-color-hover h5 demi-bold w-auto'>VIEW ALL</Link>
                        </div>
                        <div className="layout">
                            <div className="flex left-align-slick xs12">
                                <OwlCarousel className='owl-theme' loop nav {...optiondecor}>
                                    <div className='item'>
                                        <div className="CarouselSection category">
                                            <div className="prel Gutter">
                                                <a href="#">
                                                    <div className="DynamicHeightLoaderWrapper" style={{ paddingTop: '112%' }}>
                                                        <div className="DynamicHeightLoader layout row align-center justify-center" style={{ paddingTop: '32%' }}>
                                                            <img src={Decorbanner1} alt="logo" className='img-resp DynamicHeightLoaderImage' style={{ padding: '0px' }} />
                                                        </div>
                                                        {/* <div className="animated-bg-placeholder"></div> */}
                                                    </div>
                                                    {/* <div className="image-gradient"></div> */}
                                                    <div className="ImageTextDetail CategoryImageTextDetail">
                                                        <label className="h4 ImageTextLabelTop m-t-5 demi-bold"> CHIC CUTLERY </label>
                                                        <label class="h6 ellipsis ImageTextLabelBottom block font-normal">UP TO 35% OFF</label>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='item'>
                                        <div className="CarouselSection category">
                                            <div className="prel Gutter">
                                                <a href="#">
                                                    <div className="DynamicHeightLoaderWrapper" style={{ paddingTop: '112%' }}>
                                                        <div className="DynamicHeightLoader layout row align-center justify-center" style={{ paddingTop: '32%' }}>
                                                            <img src={Decorbanner2} alt="logo" className='img-resp DynamicHeightLoaderImage' style={{ padding: '0px' }} />
                                                        </div>
                                                        {/* <div className="animated-bg-placeholder"></div> */}
                                                    </div>
                                                    {/* <div className="image-gradient"></div> */}
                                                    <div className="ImageTextDetail CategoryImageTextDetail">
                                                        <label className="h4 ImageTextLabelTop m-t-5 demi-bold"> STYLISH SERVEWEAR </label>
                                                        <label class="h6 ellipsis ImageTextLabelBottom block font-normal">UP TO 30% OFF</label>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='item'>
                                        <div className="CarouselSection category">
                                            <div className="prel Gutter">
                                                <a href="#">
                                                    <div className="DynamicHeightLoaderWrapper" style={{ paddingTop: '112%' }}>
                                                        <div className="DynamicHeightLoader layout row align-center justify-center" style={{ paddingTop: '32%' }}>
                                                            <img src={Decorbanner3} alt="logo" className='img-resp DynamicHeightLoaderImage' style={{ padding: '0px' }} />
                                                        </div>
                                                        {/* <div className="animated-bg-placeholder"></div> */}
                                                    </div>
                                                    {/* <div className="image-gradient"></div> */}
                                                    <div className="ImageTextDetail CategoryImageTextDetail">
                                                        <label className="h4 ImageTextLabelTop m-t-5 demi-bold"> PLANT PARADISE </label>
                                                        <label class="h6 ellipsis ImageTextLabelBottom block font-normal">UP TO 50% OFF</label>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='item'>
                                        <div className="CarouselSection category">
                                            <div className="prel Gutter">
                                                <a href="#">
                                                    <div className="DynamicHeightLoaderWrapper" style={{ paddingTop: '112%' }}>
                                                        <div className="DynamicHeightLoader layout row align-center justify-center" style={{ paddingTop: '32%' }}>
                                                            <img src={Decorbanner4} alt="logo" className='img-resp DynamicHeightLoaderImage' style={{ padding: '0px' }} />
                                                        </div>
                                                        {/* <div className="animated-bg-placeholder"></div> */}
                                                    </div>
                                                    {/* <div className="image-gradient"></div> */}
                                                    <div className="ImageTextDetail CategoryImageTextDetail">
                                                        <label className="h4 ImageTextLabelTop m-t-5 demi-bold">TRENDSETTING TRAYS</label>
                                                        <label class="h6 ellipsis ImageTextLabelBottom block font-normal">UP TO 60% OFF</label>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='item'>
                                        <div className="CarouselSection category">
                                            <div className="prel Gutter">
                                                <a href="#">
                                                    <div className="DynamicHeightLoaderWrapper" style={{ paddingTop: '112%' }}>
                                                        <div className="DynamicHeightLoader layout row align-center justify-center" style={{ paddingTop: '32%' }}>
                                                            <img src={Decorbanner5} alt="logo" className='img-resp DynamicHeightLoaderImage' style={{ padding: '0px' }} />
                                                        </div>
                                                        {/* <div className="animated-bg-placeholder"></div> */}
                                                    </div>
                                                    {/* <div className="image-gradient"></div> */}
                                                    <div className="ImageTextDetail CategoryImageTextDetail">
                                                        <label className="h4 ImageTextLabelTop m-t-5 demi-bold">PICTURE PERFECT FRAMES</label>
                                                        <label class="h6 ellipsis ImageTextLabelBottom block font-normal">UP TO 30% OFF</label>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='item'>
                                        <div className="CarouselSection category">
                                            <div className="prel Gutter">
                                                <a href="#">
                                                    <div className="DynamicHeightLoaderWrapper" style={{ paddingTop: '112%' }}>
                                                        <div className="DynamicHeightLoader layout row align-center justify-center" style={{ paddingTop: '32%' }}>
                                                            <img src={Decorbanner6} alt="logo" className='img-resp DynamicHeightLoaderImage' style={{ padding: '0px' }} />
                                                        </div>
                                                        {/* <div className="animated-bg-placeholder"></div> */}
                                                    </div>
                                                    {/* <div className="image-gradient"></div> */}
                                                    <div className="ImageTextDetail CategoryImageTextDetail">
                                                        <label className="h4 ImageTextLabelTop m-t-5 demi-bold"> ELEVATE YOUR WALLS </label>
                                                        <label class="h6 ellipsis ImageTextLabelBottom block font-normal">UP TO 35% OFF</label>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='item'>
                                        <div className="CarouselSection category">
                                            <div className="prel Gutter">
                                                <a href="#">
                                                    <div className="DynamicHeightLoaderWrapper" style={{ paddingTop: '112%' }}>
                                                        <div className="DynamicHeightLoader layout row align-center justify-center" style={{ paddingTop: '32%' }}>
                                                            <img src={Decorbanner7} alt="logo" className='img-resp DynamicHeightLoaderImage' style={{ padding: '0px' }} />
                                                        </div>
                                                        {/* <div className="animated-bg-placeholder"></div> */}
                                                    </div>
                                                    {/* <div className="image-gradient"></div> */}
                                                    <div className="ImageTextDetail CategoryImageTextDetail">
                                                        <label className="h4 ImageTextLabelTop m-t-5 demi-bold">RADIANT LIGHT HOLDERS </label>
                                                        <label class="h6 ellipsis ImageTextLabelBottom block font-normal">UP TO 55% OFF</label>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='item'>
                                        <div className="CarouselSection category">
                                            <div className="prel Gutter">
                                                <a href="#">
                                                    <div className="DynamicHeightLoaderWrapper" style={{ paddingTop: '112%' }}>
                                                        <div className="DynamicHeightLoader layout row align-center justify-center" style={{ paddingTop: '32%' }}>
                                                            <img src={Decorbanner8} alt="logo" className='img-resp DynamicHeightLoaderImage' style={{ padding: '0px' }} />
                                                        </div>
                                                        {/* <div className="animated-bg-placeholder"></div> */}
                                                    </div>
                                                    {/* <div className="image-gradient"></div> */}
                                                    <div className="ImageTextDetail CategoryImageTextDetail">
                                                        <label className="h4 ImageTextLabelTop m-t-5 demi-bold">ELEGANT TABLESCAPES</label>
                                                        <label class="h6 ellipsis ImageTextLabelBottom block font-normal">UP TO 50% OFF</label>
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
        </div>
    )
}

export default decor