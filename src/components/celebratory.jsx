import React from 'react'
import { Celebratorybanner1, Celebratorybanner2, Celebratorybanner3, Celebratorybanner4, Celebratorybanner5 } from '../image'
import { Link } from 'react-router-dom';

function celebratory() {
  return (
    <div>
          <div className='App'>
                <div className="BreakPointContainer">
                    <div className="CarouselSectionContainer">
                        <div className="layout row justify-space-between align-center text-left SectionTitle">
                            <h1 className='m-t-0 m-b-0 demi-bold w-auto'> CELEBRATORY MUST-HAVES </h1>
                            <Link to="/category" className='ViewAllUrlsLink pernia-color-hover h5 demi-bold w-auto'>VIEW ALL</Link>
                        </div>
                        <div className="grid-2 layout row wrap align-start">
                            <div className="flex GridSection xs12 sm8 p-sm-0">
                                <div className="prel Gutter">
                                    <a href="">
                                        <div className="DynamicHeightLoaderWrapper" style={{ paddingTop: '35%' }}>
                                            <div className="DynamicHeightLoader layout row align-center justify-center" style={{ paddingTop: '30%' }}>
                                                <img src={Celebratorybanner1} alt="logo" className='img-resp DynamicHeightLoaderImage' style={{ padding: '0px' }} />
                                            </div>
                                            {/* <div className="animated-bg-placeholder"></div> */}
                                        </div>
                                        {/* <div className="image-gradient"></div> */}
                                        <div className="ImageTextDetail CategoryImageTextDetail">
                                            <label className="h4 ImageTextLabelTop m-t-5 demi-bold"> LEHENGAS </label>
                                            <label class="h6 ellipsis ImageTextLabelBottom block font-normal">UNDER Rs. 1,00,000</label>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="flex GridSection xs6 sm4 p-sm-0">
                                <div className="prel Gutter">
                                    <a href="">
                                        <div className="DynamicHeightLoaderWrapper" style={{ paddingTop: '100%' }}>
                                            <div className="DynamicHeightLoader layout row align-center justify-center" style={{ paddingTop: '32%' }}>
                                                <img src={Celebratorybanner2} alt="logo" className='img-resp DynamicHeightLoaderImage' style={{ padding: '0px' }} />
                                            </div>
                                            {/* <div className="animated-bg-placeholder"></div> */}
                                        </div>
                                        {/* <div className="image-gradient"></div> */}
                                        <div className="ImageTextDetail CategoryImageTextDetail">
                                            <label className="h4 ImageTextLabelTop m-t-5 demi-bold"> SAREES </label>
                                            <label class="h6 ellipsis ImageTextLabelBottom block font-normal">UNDER Rs. 50,000</label>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="flex GridSection xs6 sm4 p-sm-0">
                                <div className="prel Gutter">
                                    <a href="">
                                        <div className="DynamicHeightLoaderWrapper" style={{ paddingTop: '100%' }}>
                                            <div className="DynamicHeightLoader layout row align-center justify-center" style={{ paddingTop: '32%' }}>
                                                <img src={Celebratorybanner3} alt="logo" className='img-resp DynamicHeightLoaderImage' style={{ padding: '0px' }} />
                                            </div>
                                            {/* <div className="animated-bg-placeholder"></div> */}
                                        </div>
                                        {/* <div className="image-gradient"></div> */}
                                        <div className="ImageTextDetail CategoryImageTextDetail">
                                            <label className="h4 ImageTextLabelTop m-t-5 demi-bold"> ANARKALIS </label>
                                            <label class="h6 ellipsis ImageTextLabelBottom block font-normal">UNDER Rs. 40,000</label>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="flex GridSection xs6 sm4 p-sm-0">
                                <div className="prel Gutter">
                                    <a href="">
                                        <div className="DynamicHeightLoaderWrapper" style={{ paddingTop: '100%' }}>
                                            <div className="DynamicHeightLoader layout row align-center justify-center" style={{ paddingTop: '32%' }}>
                                                <img src={Celebratorybanner4} alt="logo" className='img-resp DynamicHeightLoaderImage' style={{ padding: '0px' }} />
                                            </div>
                                            {/* <div className="animated-bg-placeholder"></div> */}
                                        </div>
                                        {/* <div className="image-gradient"></div> */}
                                        <div className="ImageTextDetail CategoryImageTextDetail">
                                            <label className="h4 ImageTextLabelTop m-t-5 demi-bold"> FUSION STYLES </label>
                                            <label class="h6 ellipsis ImageTextLabelBottom block font-normal">UNDER Rs. 50,000</label>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="flex GridSection xs6 sm4 p-sm-0">
                                <div className="prel Gutter">
                                    <a href="">
                                        <div className="DynamicHeightLoaderWrapper" style={{ paddingTop: '100%' }}>
                                            <div className="DynamicHeightLoader layout row align-center justify-center" style={{ paddingTop: '32%' }}>
                                                <img src={Celebratorybanner5} alt="logo" className='img-resp DynamicHeightLoaderImage' style={{ padding: '0px' }} />
                                            </div>
                                            {/* <div className="animated-bg-placeholder"></div> */}
                                        </div>
                                        {/* <div className="image-gradient"></div> */}
                                        <div className="ImageTextDetail CategoryImageTextDetail">
                                            <label className="h4 ImageTextLabelTop m-t-5 demi-bold"> SHERWANIS </label>
                                            <label class="h6 ellipsis ImageTextLabelBottom block font-normal">UNDER Rs. 75,000</label>
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

export default celebratory