import React, { useEffect, useState } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Bannerimg1, Bannerimg2, Bannerimg3 } from '../image';
import { bannerList } from '../services/General-service';
import { getApiUrl } from '../config/apiConfig';


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

    const [bannerArr,setBannerArr] = useState([]);

    const getBannerList = () =>{
        bannerList('').then((data) =>{
            console.log(data);
            setBannerArr(data.data);
            }
            
        ).catch((error)=>{

        })
    }

    useEffect(()=> {
        getBannerList();
    },[])

    return (
        <div className='banner-sec App'>
            <div className="Content layout BreakPointContainer">
                <OwlCarousel className='owl-theme' loop margin={10} nav {...options}>

                    {
                        bannerArr.map((data,index) =>(
                            <div className='item'>
                                <a href="#">
                                    <div className="DynamicHeightLoaderWrapper">
                                        <div className="DynamicHeightLoader layout row align-center justify-center" style={{ paddingTop: '46%' }}>
                                            <img src={getApiUrl(data.banner_image)} alt="logo" className='img-resp DynamicHeightLoaderImage' />
                                        </div>
                                    </div>
                                </a>
                            </div>
                        ))
                    }
                    


                    
                </OwlCarousel>
            </div>
        </div>
    );
}

export default Banner;