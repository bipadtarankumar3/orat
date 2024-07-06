import React from 'react'
import { Bestsellingbanner1, Bestsellingbanner2, Bestsellingbanner3, Bestsellingbanner4, Bestsellingbanner5, Bestsellingbanner6, Bestsellingbanner7 } from '../image'
import { Link } from 'react-router-dom';

function bestselling() {
    return (
        <div>
            <div className='App'>
                <div className="BreakPointContainer">
                    <div className="CarouselSectionContainer">
                        <div className="layout row justify-space-between align-center text-left SectionTitle">
                            <h1 className='m-t-0 m-b-0 demi-bold w-auto'> BESTSELLING DESIGNERS </h1>
                            <Link to="/category" className='ViewAllUrlsLink pernia-color-hover h5 demi-bold w-auto'>VIEW ALL</Link>
                        </div>
                        <div className="grid-2 layout row wrap align-start">
                            <div className="flex GridSection xs6 sm3 p-sm-0">
                                <div className="prel Gutter">
                                    <a href="">
                                        <div className="DynamicHeightLoaderWrapper" style={{ paddingTop: '112%' }}>
                                            <div className="DynamicHeightLoader layout row align-center justify-center" style={{ paddingTop: '32%' }}>
                                                <img src={Bestsellingbanner1} alt="logo" className='img-resp DynamicHeightLoaderImage' style={{ padding: '0px' }} />
                                            </div>
                                            {/* <div className="animated-bg-placeholder"></div> */}
                                        </div>
                                        {/* <div className="image-gradient"></div> */}
                                        <div className="ImageTextDetail CategoryImageTextDetail">
                                            <label className="h4 ImageTextLabelTop m-t-5 demi-bold"> ISHA GUPTA TAYAL </label>
                                            <label class="h6 ellipsis ImageTextLabelBottom block font-normal">SHOP NOW</label>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="flex GridSection xs6 sm3 p-sm-0">
                                <div className="prel Gutter">
                                    <a href="">
                                        <div className="DynamicHeightLoaderWrapper" style={{ paddingTop: '112%' }}>
                                            <div className="DynamicHeightLoader layout row align-center justify-center" style={{ paddingTop: '32%' }}>
                                                <img src={Bestsellingbanner2} alt="logo" className='img-resp DynamicHeightLoaderImage' style={{ padding: '0px' }} />
                                            </div>
                                            {/* <div className="animated-bg-placeholder"></div> */}
                                        </div>
                                        {/* <div className="image-gradient"></div> */}
                                        <div className="ImageTextDetail CategoryImageTextDetail">
                                            <label className="h4 ImageTextLabelTop m-t-5 demi-bold"> POMCHA JAIPUR </label>
                                            <label class="h6 ellipsis ImageTextLabelBottom block font-normal">SHOP NOW</label>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="flex GridSection xs6 sm3 p-sm-0">
                                <div className="prel Gutter">
                                    <a href="">
                                        <div className="DynamicHeightLoaderWrapper" style={{ paddingTop: '112%' }}>
                                            <div className="DynamicHeightLoader layout row align-center justify-center" style={{ paddingTop: '32%' }}>
                                                <img src={Bestsellingbanner3} alt="logo" className='img-resp DynamicHeightLoaderImage' style={{ padding: '0px' }} />
                                            </div>
                                            {/* <div className="animated-bg-placeholder"></div> */}
                                        </div>
                                        {/* <div className="image-gradient"></div> */}
                                        <div className="ImageTextDetail CategoryImageTextDetail">
                                            <label className="h4 ImageTextLabelTop m-t-5 demi-bold"> SAFAA </label>
                                            <label class="h6 ellipsis ImageTextLabelBottom block font-normal">SHOP NOW</label>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="flex GridSection xs6 sm3 p-sm-0">
                                <div className="prel Gutter">
                                    <a href="">
                                        <div className="DynamicHeightLoaderWrapper" style={{ paddingTop: '112%' }}>
                                            <div className="DynamicHeightLoader layout row align-center justify-center" style={{ paddingTop: '32%' }}>
                                                <img src={Bestsellingbanner4} alt="logo" className='img-resp DynamicHeightLoaderImage' style={{ padding: '0px' }} />
                                            </div>
                                            {/* <div className="animated-bg-placeholder"></div> */}
                                        </div>
                                        {/* <div className="image-gradient"></div> */}
                                        <div className="ImageTextDetail CategoryImageTextDetail">
                                            <label className="h4 ImageTextLabelTop m-t-5 demi-bold"> CHAASHNI BY MAANSI AND KETAN </label>
                                            <label class="h6 ellipsis ImageTextLabelBottom block font-normal">SHOP NOW</label>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="flex GridSection xs12 sm6 p-sm-0">
                                <div className="prel Gutter">
                                    <a href="">
                                        <div className="DynamicHeightLoaderWrapper" style={{ paddingTop: '40%' }}>
                                            <div className="DynamicHeightLoader layout row align-center justify-center" style={{ paddingTop: '30%' }}>
                                                <img src={Bestsellingbanner5} alt="logo" className='img-resp DynamicHeightLoaderImage' style={{ padding: '0px' }} />
                                            </div>
                                            {/* <div className="animated-bg-placeholder"></div> */}
                                        </div>
                                        {/* <div className="image-gradient"></div> */}
                                        <div className="ImageTextDetail CategoryImageTextDetail">
                                            <label className="h4 ImageTextLabelTop m-t-5 demi-bold"> CHARU & VASUNDHARA </label>
                                            <label class="h6 ellipsis ImageTextLabelBottom block font-normal">SHOP NOW</label>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="flex GridSection xs6 sm3 p-sm-0">
                                <div className="prel Gutter">
                                    <a href="">
                                        <div className="DynamicHeightLoaderWrapper" style={{ paddingTop: '112%' }}>
                                            <div className="DynamicHeightLoader layout row align-center justify-center" style={{ paddingTop: '32%' }}>
                                                <img src={Bestsellingbanner6} alt="logo" className='img-resp DynamicHeightLoaderImage' style={{ padding: '0px' }} />
                                            </div>
                                            {/* <div className="animated-bg-placeholder"></div> */}
                                        </div>
                                        {/* <div className="image-gradient"></div> */}
                                        <div className="ImageTextDetail CategoryImageTextDetail">
                                            <label className="h4 ImageTextLabelTop m-t-5 demi-bold"> OUTHOUSE </label>
                                            <label class="h6 ellipsis ImageTextLabelBottom block font-normal">SHOP NOW</label>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="flex GridSection xs6 sm3 p-sm-0">
                                <div className="prel Gutter">
                                    <a href="">
                                        <div className="DynamicHeightLoaderWrapper" style={{ paddingTop: '112%' }}>
                                            <div className="DynamicHeightLoader layout row align-center justify-center" style={{ paddingTop: '32%' }}>
                                                <img src={Bestsellingbanner7} alt="logo" className='img-resp DynamicHeightLoaderImage' style={{ padding: '0px' }} />
                                            </div>
                                            {/* <div className="animated-bg-placeholder"></div> */}
                                        </div>
                                        {/* <div className="image-gradient"></div> */}
                                        <div className="ImageTextDetail CategoryImageTextDetail">
                                            <label className="h4 ImageTextLabelTop m-t-5 demi-bold"> COSA NOSTRAA </label>
                                            <label class="h6 ellipsis ImageTextLabelBottom block font-normal">SHOP NOW</label>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default bestselling