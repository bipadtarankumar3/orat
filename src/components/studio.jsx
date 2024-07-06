import React from 'react'
import { Studio1, Studio2, Studio3, Studio4, Studio5, lookimg1, lookimg2, lookimg3, lookimg4 } from '../image'

function studio() {
    return (
        <div>
            <div className='App BlogBannerContainer'>
                <div className="BreakPointContainer d_sm_none">
                    <div className="flex xs8">
                        <div className="m-r-25 layout column align-start">
                            <a href="#" className='full-width mb-4'>
                                <div className="DynamicHeightLoaderWrapper" style={{ paddingTop: '5%' }}>
                                    <div className="DynamicHeightLoader layout row align-center justify-center" style={{ paddingTop: '43%' }}>
                                        <img src={lookimg1} alt="logo" className='img-resp DynamicHeightLoaderImage' style={{ margin: '0px',padding:'0px' }}/>
                                    </div>
                                </div>
                            </a>
                            <div className="full-width">
                                <a href="" className='full-width'>
                                    <div className="DynamicHeightLoaderWrapper" style={{ paddingTop: '0%' }}>
                                        <div className="DynamicHeightLoader layout row align-center justify-center" style={{ paddingTop: '18%' }}>
                                            <img src={Studio2} alt="logo" className='img-resp DynamicHeightLoaderImage' style={{padding:'0px' }}/>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="flex xs4 layout column">
                        <div className="BlogSectionContainer HomeSection layout column">
                            <div class="SectionTitle">
                                <h1 class="m-t-0 m-b-15 text-left demi-bold">FIRST LOOK ARTICLES</h1>
                            </div>
                            <div className="layout column align-center">
                                <div className="layout column justify-space-evenly BlogListWrap align-center">
                                    <div className="EachBlogWapper">
                                        <a href="" className='layout row align-stretch'>
                                            <div className="flex xs5">
                                                <div className="DynamicHeightLoaderWrapper icon">
                                                    <div className="DynamicHeightLoader layout DynamicHeightLoaderFallback" style={{ paddingTop: '0%' }}>
                                                        <img src={lookimg2} alt="logo" className='img-resp DynamicHeightLoaderImage' />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex xs7 layout column justify-space-between align-stretch">
                                                <div class="h5 text-left ellipsis-two-line demi-bold">Brushstrokes of Brilliance</div>
                                                <div class="p2 text-left BlogdetailText ellipsis-three-line m-t-5 demi-bold"><p>Unveiling experimental bridal beauty with tints and twists for the new-age brides. For<span class="demi-bold p4 "> ...Read More</span></p></div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="EachBlogWapper">
                                        <a href="" className='layout row align-stretch'>
                                            <div className="flex xs5">
                                                <div className="DynamicHeightLoaderWrapper icon">
                                                    <div className="DynamicHeightLoader layout DynamicHeightLoaderFallback">
                                                        <img src={lookimg3} alt="logo" className='img-resp DynamicHeightLoaderImage' />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex xs7 layout column justify-space-between align-stretch">
                                                <div class="h5 text-left ellipsis-two-line demi-bold">Brushstrokes of Brilliance</div>
                                                <div class="p2 text-left BlogdetailText ellipsis-three-line m-t-5 demi-bold"><p>Unveiling experimental bridal beauty with tints and twists for the new-age brides. For<span class="demi-bold p4 "> ...Read More</span></p></div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="EachBlogWapper">
                                        <a href="" className='layout row align-stretch'>
                                            <div className="flex xs5">
                                                <div className="DynamicHeightLoaderWrapper icon">
                                                    <div className="DynamicHeightLoader layout DynamicHeightLoaderFallback">
                                                        <img src={lookimg4} alt="logo" className='img-resp DynamicHeightLoaderImage' />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex xs7 layout column justify-space-between align-stretch">
                                                <div class="h5 text-left ellipsis-two-line demi-bold">Brushstrokes of Brilliance</div>
                                                <div class="p2 text-left BlogdetailText ellipsis-three-line m-t-5 demi-bold"><p>Unveiling experimental bridal beauty with tints and twists for the new-age brides. For<span class="demi-bold p4 "> ...Read More</span></p></div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <a href="" className='p4 btn btn-pernia-primary viewAllBlogLink bold'> VIEW ALL BLOG POSTS </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default studio