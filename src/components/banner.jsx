import React, { useEffect, useState } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { bannerList } from '../services/General-service';

const options = {
    loop: true,
    margin: 10,
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
            items: 1
        }
    }
};

function Banner() {
    const [bannerArr, setBannerArr] = useState([]);
    const [loading, setLoading] = useState(true);

    const getBannerList = () => {
        bannerList('')
            .then((data) => {
                console.log(data);
                setBannerArr(data.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching banner list:", error);
                setLoading(false);
            });
    };

    useEffect(() => {
        getBannerList();
    }, []);

    return (
        <div className='banner-sec App'>
            <div className="Content layout BreakPointContainer">
                {!loading && bannerArr.length > 0 && (
                    <OwlCarousel className='owl-theme' {...options}>
                        {bannerArr.map((data, index) => (
                            <div className='item' key={index}>
                                <a href="#">
                                    <div className="DynamicHeightLoaderWrapper">
                                        <div className="DynamicHeightLoader layout row align-center justify-center" style={{ paddingTop: '46%' }}>
                                            <img src={data.banner_image} alt="logo" className='img-resp DynamicHeightLoaderImage' />
                                        </div>
                                    </div>
                                </a>
                            </div>
                        ))}
                    </OwlCarousel>
                )}
            </div>
        </div>
    );
}

export default Banner;
