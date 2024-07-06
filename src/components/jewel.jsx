import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Jewelbanner1, Jewelbanner2, Jewelbanner3, Jewelbanner4, Jewelbanner5, Jewelbanner6, Jewelbanner7, Jewelbanner8 } from '../image';
import { Link } from 'react-router-dom';

const optionjewel = {
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

function jewel() {
    return (
        <div>
            <div className='App'>
                <div className="BreakPointContainer">
                    <div className="CarouselSectionContainer">
                        <div className="layout row justify-space-between align-center text-left SectionTitle">
                            <h1 className='m-t-0 m-b-0 demi-bold w-auto'> THE JEWEL CABINET </h1>
                            <Link to="/category" className='ViewAllUrlsLink pernia-color-hover h5 demi-bold w-auto'>VIEW ALL</Link>
                        </div>
                        <div className="layout">
                            <div className="flex left-align-slick xs12">
                                <OwlCarousel className='owl-theme' loop nav {...optionjewel}>
                                    <div className='item'>
                                        <div className="CarouselSection category">
                                            <div className="prel Gutter">
                                                <a href="#">
                                                    <div className="DynamicHeightLoaderWrapper" style={{ paddingTop: '112%' }}>
                                                        <div className="DynamicHeightLoader layout row align-center justify-center" style={{ paddingTop: '32%' }}>
                                                            <img src={Jewelbanner1} alt="logo" className='img-resp DynamicHeightLoaderImage' style={{ padding: '0px' }} />
                                                        </div>
                                                        {/* <div className="animated-bg-placeholder"></div> */}
                                                    </div>
                                                    {/* <div className="image-gradient"></div> */}
                                                    <div className="ImageTextDetail CategoryImageTextDetail">
                                                        <label className="h4 ImageTextLabelTop m-t-5 demi-bold"> VASTRAA JEWELLERY </label>
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
                                                    <div className="DynamicHeightLoaderWrapper" style={{ paddingTop: '112%' }}>
                                                        <div className="DynamicHeightLoader layout row align-center justify-center" style={{ paddingTop: '32%' }}>
                                                            <img src={Jewelbanner2} alt="logo" className='img-resp DynamicHeightLoaderImage' style={{ padding: '0px' }} />
                                                        </div>
                                                        {/* <div className="animated-bg-placeholder"></div> */}
                                                    </div>
                                                    {/* <div className="image-gradient"></div> */}
                                                    <div className="ImageTextDetail CategoryImageTextDetail">
                                                        <label className="h4 ImageTextLabelTop m-t-5 demi-bold"> ASTER </label>
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
                                                    <div className="DynamicHeightLoaderWrapper" style={{ paddingTop: '112%' }}>
                                                        <div className="DynamicHeightLoader layout row align-center justify-center" style={{ paddingTop: '32%' }}>
                                                            <img src={Jewelbanner3} alt="logo" className='img-resp DynamicHeightLoaderImage' style={{ padding: '0px' }} />
                                                        </div>
                                                        {/* <div className="animated-bg-placeholder"></div> */}
                                                    </div>
                                                    {/* <div className="image-gradient"></div> */}
                                                    <div className="ImageTextDetail CategoryImageTextDetail">
                                                        <label className="h4 ImageTextLabelTop m-t-5 demi-bold"> JOULES BY RADHIKA </label>
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
                                                    <div className="DynamicHeightLoaderWrapper" style={{ paddingTop: '112%' }}>
                                                        <div className="DynamicHeightLoader layout row align-center justify-center" style={{ paddingTop: '32%' }}>
                                                            <img src={Jewelbanner4} alt="logo" className='img-resp DynamicHeightLoaderImage' style={{ padding: '0px' }} />
                                                        </div>
                                                        {/* <div className="animated-bg-placeholder"></div> */}
                                                    </div>
                                                    {/* <div className="image-gradient"></div> */}
                                                    <div className="ImageTextDetail CategoryImageTextDetail">
                                                        <label className="h4 ImageTextLabelTop m-t-5 demi-bold">HUNAR</label>
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
                                                    <div className="DynamicHeightLoaderWrapper" style={{ paddingTop: '112%' }}>
                                                        <div className="DynamicHeightLoader layout row align-center justify-center" style={{ paddingTop: '32%' }}>
                                                            <img src={Jewelbanner5} alt="logo" className='img-resp DynamicHeightLoaderImage' style={{ padding: '0px' }} />
                                                        </div>
                                                        {/* <div className="animated-bg-placeholder"></div> */}
                                                    </div>
                                                    {/* <div className="image-gradient"></div> */}
                                                    <div className="ImageTextDetail CategoryImageTextDetail">
                                                        <label className="h4 ImageTextLabelTop m-t-5 demi-bold">TAD ACCESSORIES</label>
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
                                                    <div className="DynamicHeightLoaderWrapper" style={{ paddingTop: '112%' }}>
                                                        <div className="DynamicHeightLoader layout row align-center justify-center" style={{ paddingTop: '32%' }}>
                                                            <img src={Jewelbanner6} alt="logo" className='img-resp DynamicHeightLoaderImage' style={{ padding: '0px' }} />
                                                        </div>
                                                        {/* <div className="animated-bg-placeholder"></div> */}
                                                    </div>
                                                    {/* <div className="image-gradient"></div> */}
                                                    <div className="ImageTextDetail CategoryImageTextDetail">
                                                        <label className="h4 ImageTextLabelTop m-t-5 demi-bold"> VINANTI MANJI </label>
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
                                                    <div className="DynamicHeightLoaderWrapper" style={{ paddingTop: '112%' }}>
                                                        <div className="DynamicHeightLoader layout row align-center justify-center" style={{ paddingTop: '32%' }}>
                                                            <img src={Jewelbanner7} alt="logo" className='img-resp DynamicHeightLoaderImage' style={{ padding: '0px' }} />
                                                        </div>
                                                        {/* <div className="animated-bg-placeholder"></div> */}
                                                    </div>
                                                    {/* <div className="image-gradient"></div> */}
                                                    <div className="ImageTextDetail CategoryImageTextDetail">
                                                        <label className="h4 ImageTextLabelTop m-t-5 demi-bold">KOHAR BY KANIKA </label>
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
                                                    <div className="DynamicHeightLoaderWrapper" style={{ paddingTop: '112%' }}>
                                                        <div className="DynamicHeightLoader layout row align-center justify-center" style={{ paddingTop: '32%' }}>
                                                            <img src={Jewelbanner8} alt="logo" className='img-resp DynamicHeightLoaderImage' style={{ padding: '0px' }} />
                                                        </div>
                                                        {/* <div className="animated-bg-placeholder"></div> */}
                                                    </div>
                                                    {/* <div className="image-gradient"></div> */}
                                                    <div className="ImageTextDetail CategoryImageTextDetail">
                                                        <label className="h4 ImageTextLabelTop m-t-5 demi-bold">VIVINIA BY VIDHI MEHRA</label>
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
        </div>
    )
}

export default jewel