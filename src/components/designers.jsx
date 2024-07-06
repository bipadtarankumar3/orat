import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Designersbanner1, Designersbanner2, Designersbanner3, Designersbanner4, Designersbanner5, Designersbanner6, Designersbanner7, Designersbanner8} from '../image';
import { Link } from 'react-router-dom';

const optiondesigners = {
    loop: true,
    // margin: 10,
    nav: true,
    dots:false,
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

function designers() {
  return (
    <div className='App'>
        <div className="BreakPointContainer">
            <div className="CarouselSectionContainer">
                <div className="layout row justify-space-between align-center text-left SectionTitle">
                    <h1 className='m-t-0 m-b-0 demi-bold w-auto'> DESIGNERS ON DISCOUNT </h1>
                    <Link to="/category" className='ViewAllUrlsLink pernia-color-hover h5 demi-bold w-auto'>VIEW ALL</Link>
                </div>
                <div className="layout">
                    <div className="flex left-align-slick xs12">
                    <OwlCarousel className='owl-theme' loop nav {...optiondesigners}>
                        <div className='item'>
                            <div className="CarouselSection category">
                                <div className="prel Gutter">
                                    <a href="#">
                                        <div className="DynamicHeightLoaderWrapper" style={{ paddingTop: '112%' }}>
                                            <div className="DynamicHeightLoader layout row align-center justify-center" style={{ paddingTop: '32%' }}>
                                                <img src={Designersbanner1} alt="logo" className='img-resp DynamicHeightLoaderImage' style={{ padding: '0px' }}/>
                                            </div>
                                            {/* <div className="animated-bg-placeholder"></div> */}
                                        </div>
                                        {/* <div className="image-gradient"></div> */}
                                        <div className="ImageTextDetail CategoryImageTextDetail">
                                            <label className="h3 demi-bold ellipsis ImageTextLabelBottom block font-normal"> PAULMI & HARSH </label>
                                            <label class="h6 ellipsis ImageTextLabelBottom block font-normal">UP TO 25% OFF</label>
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
                                                <img src={Designersbanner2} alt="logo" className='img-resp DynamicHeightLoaderImage' style={{ padding: '0px' }}/>
                                            </div>
                                            {/* <div className="animated-bg-placeholder"></div> */}
                                        </div>
                                        {/* <div className="image-gradient"></div> */}
                                        <div className="ImageTextDetail CategoryImageTextDetail">
                                            <label className="h3 demi-bold ellipsis ImageTextLabelBottom block font-normal"> NIRRAAMYAA </label>
                                            <label class="h6 ellipsis ImageTextLabelBottom block font-normal">UP TO 20% OFF</label>
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
                                                <img src={Designersbanner3} alt="logo" className='img-resp DynamicHeightLoaderImage' style={{ padding: '0px' }}/>
                                            </div>
                                            {/* <div className="animated-bg-placeholder"></div> */}
                                        </div>
                                        {/* <div className="image-gradient"></div> */}
                                        <div className="ImageTextDetail CategoryImageTextDetail">
                                            <label className="h3 demi-bold ellipsis ImageTextLabelBottom block font-normal"> SURUCHI PARAKH </label>
                                            <label class="h6 ellipsis ImageTextLabelBottom block font-normal">UP TO 20% OFF</label>
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
                                                <img src={Designersbanner4} alt="logo" className='img-resp DynamicHeightLoaderImage' style={{ padding: '0px' }}/>
                                            </div>
                                            {/* <div className="animated-bg-placeholder"></div> */}
                                        </div>
                                        {/* <div className="image-gradient"></div> */}
                                        <div className="ImageTextDetail CategoryImageTextDetail">
                                            <label className="h3 demi-bold ellipsis ImageTextLabelBottom block font-normal">YUVRANI JAIPUR </label>
                                            <label class="h6 ellipsis ImageTextLabelBottom block font-normal">UP TO 20% OFF</label>
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
                                                <img src={Designersbanner5} alt="logo" className='img-resp DynamicHeightLoaderImage' style={{ padding: '0px' }}/>
                                            </div>
                                            {/* <div className="animated-bg-placeholder"></div> */}
                                        </div>
                                        {/* <div className="image-gradient"></div> */}
                                        <div className="ImageTextDetail CategoryImageTextDetail">
                                            <label className="h3 demi-bold ellipsis ImageTextLabelBottom block font-normal"> GOPI VAID </label>
                                            <label class="h6 ellipsis ImageTextLabelBottom block font-normal">UP TO 15% OFF</label>
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
                                                <img src={Designersbanner6} alt="logo" className='img-resp DynamicHeightLoaderImage' style={{ padding: '0px' }}/>
                                            </div>
                                            {/* <div className="animated-bg-placeholder"></div> */}
                                        </div>
                                        {/* <div className="image-gradient"></div> */}
                                        <div className="ImageTextDetail CategoryImageTextDetail">
                                            <label className="h3 demi-bold ellipsis ImageTextLabelBottom block font-normal"> NEHA MEHTA COUTURE </label>
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
                                                <img src={Designersbanner7} alt="logo" className='img-resp DynamicHeightLoaderImage' style={{ padding: '0px' }}/>
                                            </div>
                                            {/* <div className="animated-bg-placeholder"></div> */}
                                        </div>
                                        {/* <div className="image-gradient"></div> */}
                                        <div className="ImageTextDetail CategoryImageTextDetail">
                                            <label className="h3 demi-bold ellipsis ImageTextLabelBottom block font-normal">RISHI & VIBHUTI </label>
                                            <label class="h6 ellipsis ImageTextLabelBottom block font-normal">UP TO 25% OFF</label>
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
                                                <img src={Designersbanner8} alt="logo" className='img-resp DynamicHeightLoaderImage' style={{ padding: '0px' }}/>
                                            </div>
                                            {/* <div className="animated-bg-placeholder"></div> */}
                                        </div>
                                        {/* <div className="image-gradient"></div> */}
                                        <div className="ImageTextDetail CategoryImageTextDetail">
                                            <label className="h3 demi-bold ellipsis ImageTextLabelBottom block font-normal"> VEDIKA SONI </label>
                                            <label class="h6 ellipsis ImageTextLabelBottom block font-normal">UP TO 30% OFF</label>
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

export default designers