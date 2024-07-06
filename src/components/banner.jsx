import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Bannerimg1, Bannerimg2, Bannerimg3 } from '../image';

const options = {
    loop: true,
    margin: 10,
    nav: true,
    dots:false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 1
        }
    }
};

function Banner() {
    return (
        <div className='banner-sec App'>
            <div className="Content layout BreakPointContainer">
                <OwlCarousel className='owl-theme' loop margin={10} nav {...options}>
                    <div className='item'>
                        <a href="#">
                            <div className="DynamicHeightLoaderWrapper">
                                <div className="DynamicHeightLoader layout row align-center justify-center" style={{ paddingTop: '46%' }}>
                                    <img src={Bannerimg1} alt="logo" className='img-resp DynamicHeightLoaderImage' />
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className='item'>
                        <a href="#">
                            <div className="DynamicHeightLoaderWrapper">
                                <div className="DynamicHeightLoader layout row align-center justify-center" style={{ paddingTop: '46%' }}>
                                    <img src={Bannerimg2} alt="logo" className='img-resp DynamicHeightLoaderImage' />
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className='item'>
                        <a href="#">
                            <div className="DynamicHeightLoaderWrapper">
                                <div className="DynamicHeightLoader layout row align-center justify-center" style={{ paddingTop: '46%' }}>
                                    <img src={Bannerimg3} alt="logo" className='img-resp DynamicHeightLoaderImage' />
                                </div>
                            </div>
                        </a>
                    </div>
                </OwlCarousel>
            </div>
        </div>
    );
}

export default Banner;