import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { STORESimg1, STORESimg2, STORESimg3, STORESimg4, Stores1, Stores2, Stores3, Stores4, Stores5, Stores6, Stores7, Stores8 } from '../image';
import { Link } from 'react-router-dom';

const optionstores = {
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

function stores() {
  return (
    <div>
          <div className='App'>
                <div className="BreakPointContainer">
                    <div className="CarouselSectionContainer">
                        <div className="layout row justify-space-between align-center text-left SectionTitle">
                            <h1 className='m-t-0 m-b-0 demi-bold w-auto'> STORES </h1>
                            <Link to="/category" className='ViewAllUrlsLink pernia-color-hover h5 demi-bold w-auto'>VIEW ALL</Link>
                        </div>
                        <div className="layout">
                            <div className="flex left-align-slick xs12">
                                <OwlCarousel className='owl-theme' loop nav {...optionstores}>
                                    <div className='item'>
                                        <div className="CarouselSection category">
                                            <div className="prel Gutter">
                                                <a href="#">
                                                    <div className="DynamicHeightLoaderWrapper" style={{ paddingTop: '70%' }}>
                                                        <div className="DynamicHeightLoader layout row align-center justify-center" style={{ paddingTop: '32%' }}>
                                                            <img src={STORESimg1} alt="logo" className='img-resp DynamicHeightLoaderImage' style={{ padding: '0px' }} />
                                                        </div>
                                                        {/* <div className="animated-bg-placeholder"></div> */}
                                                    </div>
                                                    {/* <div className="image-gradient"></div> */}
                                                    <div className="ImageTextDetail CategoryImageTextDetail">
                                                        <label className="h4 ImageTextLabelTop m-t-5 demi-bold"> New Stores </label>
                                                        <label class="h6 ellipsis ImageTextLabelBottom block font-normal">Shop now</label>
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
                                                            <img src={STORESimg2} alt="logo" className='img-resp DynamicHeightLoaderImage' style={{ padding: '0px' }} />
                                                        </div>
                                                        {/* <div className="animated-bg-placeholder"></div> */}
                                                    </div>
                                                    {/* <div className="image-gradient"></div> */}
                                                    <div className="ImageTextDetail CategoryImageTextDetail">
                                                        <label className="h4 ImageTextLabelTop m-t-5 demi-bold"> New Stores </label>
                                                        <label class="h6 ellipsis ImageTextLabelBottom block font-normal">Shop now</label>
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
                                                            <img src={STORESimg3} alt="logo" className='img-resp DynamicHeightLoaderImage' style={{ padding: '0px' }} />
                                                        </div>
                                                        {/* <div className="animated-bg-placeholder"></div> */}
                                                    </div>
                                                    {/* <div className="image-gradient"></div> */}
                                                    <div className="ImageTextDetail CategoryImageTextDetail">
                                                        <label className="h4 ImageTextLabelTop m-t-5 demi-bold"> New Stores </label>
                                                        <label class="h6 ellipsis ImageTextLabelBottom block font-normal">Shop now</label>
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
                                                            <img src={STORESimg4} alt="logo" className='img-resp DynamicHeightLoaderImage' style={{ padding: '0px' }} />
                                                        </div>
                                                        {/* <div className="animated-bg-placeholder"></div> */}
                                                    </div>
                                                    {/* <div className="image-gradient"></div> */}
                                                    <div className="ImageTextDetail CategoryImageTextDetail">
                                                        <label className="h4 ImageTextLabelTop m-t-5 demi-bold">New Stores</label>
                                                        <label class="h6 ellipsis ImageTextLabelBottom block font-normal">Shop now</label>
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
                                                            <img src={STORESimg1} alt="logo" className='img-resp DynamicHeightLoaderImage' style={{ padding: '0px' }} />
                                                        </div>
                                                        {/* <div className="animated-bg-placeholder"></div> */}
                                                    </div>
                                                    {/* <div className="image-gradient"></div> */}
                                                    <div className="ImageTextDetail CategoryImageTextDetail">
                                                        <label className="h4 ImageTextLabelTop m-t-5 demi-bold">New Stores</label>
                                                        <label class="h6 ellipsis ImageTextLabelBottom block font-normal">Shop now</label>
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
                                                            <img src={STORESimg2} alt="logo" className='img-resp DynamicHeightLoaderImage' style={{ padding: '0px' }} />
                                                        </div>
                                                        {/* <div className="animated-bg-placeholder"></div> */}
                                                    </div>
                                                    {/* <div className="image-gradient"></div> */}
                                                    <div className="ImageTextDetail CategoryImageTextDetail">
                                                        <label className="h4 ImageTextLabelTop m-t-5 demi-bold"> New Stores </label>
                                                        <label class="h6 ellipsis ImageTextLabelBottom block font-normal">Shop now</label>
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
                                                            <img src={STORESimg3} alt="logo" className='img-resp DynamicHeightLoaderImage' style={{ padding: '0px' }} />
                                                        </div>
                                                        {/* <div className="animated-bg-placeholder"></div> */}
                                                    </div>
                                                    {/* <div className="image-gradient"></div> */}
                                                    <div className="ImageTextDetail CategoryImageTextDetail">
                                                        <label className="h4 ImageTextLabelTop m-t-5 demi-bold">New Stores</label>
                                                        <label class="h6 ellipsis ImageTextLabelBottom block font-normal">Shop now</label>
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
                                                            <img src={STORESimg4} alt="logo" className='img-resp DynamicHeightLoaderImage' style={{ padding: '0px' }} />
                                                        </div>
                                                        {/* <div className="animated-bg-placeholder"></div> */}
                                                    </div>
                                                    {/* <div className="image-gradient"></div> */}
                                                    <div className="ImageTextDetail CategoryImageTextDetail">
                                                        <label className="h4 ImageTextLabelTop m-t-5 demi-bold">New Stores</label>
                                                        <label class="h6 ellipsis ImageTextLabelBottom block font-normal">Shop now</label>
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

export default stores