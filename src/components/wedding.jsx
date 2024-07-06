import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Weddingbanner1, Weddingbanner2, Weddingbanner3, Weddingbanner4, Weddingbanner5, Weddingbanner6 } from '../image';

const optionwedding = {
    loop: true,
    // margin: 10,
    nav: true,
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

function wedding() {
  return (
    <div className='App'>
        <div className="BreakPointContainer">
            <div className="CarouselSectionContainer">
                <div className="layout row justify-space-between align-center text-left SectionTitle">
                    <h1 className='m-t-0 m-b-0 demi-bold'> WEDDING TALES </h1>
                </div>
                <div className="layout">
                    <div className="flex left-align-slick xs12">
                    <OwlCarousel className='owl-theme' loop nav {...optionwedding}>
                        <div className='item'>
                            <div className="CarouselSection category">
                                <div className="prel Gutter">
                                    <a href="#">
                                        <div className="DynamicHeightLoaderWrapper" style={{ paddingTop: '70%' }}>
                                            <div className="DynamicHeightLoader layout row align-center justify-center" style={{ paddingTop: '32%' }}>
                                                <img src={Weddingbanner1} alt="logo" className='img-resp DynamicHeightLoaderImage' style={{ padding: '0px' }}/>
                                            </div>
                                            {/* <div className="animated-bg-placeholder"></div> */}
                                        </div>
                                        {/* <div className="image-gradient"></div> */}
                                        <div className="ImageTextDetail CategoryImageTextDetail">
                                            <label className="h3 demi-bold ellipsis ImageTextLabelBottom block font-normal"> SEEMA GUJRAL </label>
                                            <label class="h6 ellipsis ImageTextLabelBottom block font-normal">SHOP NOW</label>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className='item'>
                            <div className="CarouselSection category">
                                <div className="prel Gutter">
                                    <a href="#">
                                        <div className="DynamicHeightLoaderWrapper" style={{ paddingTop: '70%' }}>
                                            <div className="DynamicHeightLoader layout row align-center justify-center" style={{ paddingTop: '32%' }}>
                                                <img src={Weddingbanner2} alt="logo" className='img-resp DynamicHeightLoaderImage' style={{ padding: '0px' }}/>
                                            </div>
                                            {/* <div className="animated-bg-placeholder"></div> */}
                                        </div>
                                        {/* <div className="image-gradient"></div> */}
                                        <div className="ImageTextDetail CategoryImageTextDetail">
                                            <label className="h3 demi-bold ellipsis ImageTextLabelBottom block font-normal"> VVANI BY VANI VATS </label>
                                            <label class="h6 ellipsis ImageTextLabelBottom block font-normal">SHOP NOW</label>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className='item'>
                            <div className="CarouselSection category">
                                <div className="prel Gutter">
                                    <a href="#">
                                        <div className="DynamicHeightLoaderWrapper" style={{ paddingTop: '70%' }}>
                                            <div className="DynamicHeightLoader layout row align-center justify-center" style={{ paddingTop: '32%' }}>
                                                <img src={Weddingbanner3} alt="logo" className='img-resp DynamicHeightLoaderImage' style={{ padding: '0px' }}/>
                                            </div>
                                            {/* <div className="animated-bg-placeholder"></div> */}
                                        </div>
                                        {/* <div className="image-gradient"></div> */}
                                        <div className="ImageTextDetail CategoryImageTextDetail">
                                            <label className="h3 demi-bold ellipsis ImageTextLabelBottom block font-normal"> PUNIT BALANA </label>
                                            <label class="h6 ellipsis ImageTextLabelBottom block font-normal">SHOP NOW</label>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className='item'>
                            <div className="CarouselSection category">
                                <div className="prel Gutter">
                                    <a href="#">
                                        <div className="DynamicHeightLoaderWrapper" style={{ paddingTop: '70%' }}>
                                            <div className="DynamicHeightLoader layout row align-center justify-center" style={{ paddingTop: '32%' }}>
                                                <img src={Weddingbanner4} alt="logo" className='img-resp DynamicHeightLoaderImage' style={{ padding: '0px' }}/>
                                            </div>
                                            {/* <div className="animated-bg-placeholder"></div> */}
                                        </div>
                                        {/* <div className="image-gradient"></div> */}
                                        <div className="ImageTextDetail CategoryImageTextDetail">
                                            <label className="h3 demi-bold ellipsis ImageTextLabelBottom block font-normal"> PAYAL SINGHAL </label>
                                            <label class="h6 ellipsis ImageTextLabelBottom block font-normal">SHOP NOW</label>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className='item'>
                            <div className="CarouselSection category">
                                <div className="prel Gutter">
                                    <a href="#">
                                        <div className="DynamicHeightLoaderWrapper" style={{ paddingTop: '70%' }}>
                                            <div className="DynamicHeightLoader layout row align-center justify-center" style={{ paddingTop: '32%' }}>
                                                <img src={Weddingbanner5} alt="logo" className='img-resp DynamicHeightLoaderImage' style={{ padding: '0px' }}/>
                                            </div>
                                            {/* <div className="animated-bg-placeholder"></div> */}
                                        </div>
                                        {/* <div className="image-gradient"></div> */}
                                        <div className="ImageTextDetail CategoryImageTextDetail">
                                            <label className="h3 demi-bold ellipsis ImageTextLabelBottom block font-normal"> JIGAR MALI </label>
                                            <label class="h6 ellipsis ImageTextLabelBottom block font-normal">SHOP NOW</label>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className='item'>
                            <div className="CarouselSection category">
                                <div className="prel Gutter">
                                    <a href="#">
                                        <div className="DynamicHeightLoaderWrapper" style={{ paddingTop: '70%' }}>
                                            <div className="DynamicHeightLoader layout row align-center justify-center" style={{ paddingTop: '32%' }}>
                                                <img src={Weddingbanner6} alt="logo" className='img-resp DynamicHeightLoaderImage' style={{ padding: '0px' }}/>
                                            </div>
                                            {/* <div className="animated-bg-placeholder"></div> */}
                                        </div>
                                        {/* <div className="image-gradient"></div> */}
                                        <div className="ImageTextDetail CategoryImageTextDetail">
                                            <label className="h3 demi-bold ellipsis ImageTextLabelBottom block font-normal"> RITIKA MIRCHANDANI </label>
                                            <label class="h6 ellipsis ImageTextLabelBottom block font-normal">SHOP NOW</label>
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

export default wedding