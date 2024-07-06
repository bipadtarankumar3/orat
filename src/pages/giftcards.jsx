import React from 'react'
import { Link } from 'react-router-dom';
import { Gift1 } from '../image';

function giftcards() {
    return (
        <div className='App other-page-top'>
            <div className="BreakPointContainer AppContent">
                <div className="CategoryHeader layout justify-space-between align-center pt-3 pb-3 mb-3 gift-card-heading" style={{borderBottom: '1px solid #212121',}}>
                    <div className="layout align-center">
                        <h4 className="CategoryTitle ellipsis demi-bold">Gift Cards</h4>
                        <p className="CategoryProductCount h7 font-normal">(20 products)</p>
                    </div>
                </div>
                <div className="gift-card-all-div">
                    <div>
                        <Link className="ProductCard ProductGiftCard">
                            <div className="ProductCardImageWrapper">
                                <div className="ProductImageWrapper">
                                    <div className="FirstProductImage">
                                        <div className="DynamicHeightLoaderWrapper" style={{ paddingTop: '100%',}}>
                                            <div className="DynamicHeightLoader layout row align-center justify-center">
                                                <img src={Gift1} alt="logo" className='img-resp DynamicHeightLoaderImage p-0'/>
                                            </div>
                                            {/* <div class="animated-bg-placeholder"></div> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="ProductCardBottom">
                                <h6 className="ProductCardTitle ellipsis demi-bold">Thanksgiving Gift Card</h6>
                                <p className="ProductCardDescription p2 ellipsis-two-line">Make this Thanksgiving extra special</p>
                            </div>
                        </Link>
                    </div>
                    <div>
                        <Link className="ProductCard ProductGiftCard">
                            <div className="ProductCardImageWrapper">
                                <div className="ProductImageWrapper">
                                    <div className="FirstProductImage">
                                        <div className="DynamicHeightLoaderWrapper" style={{ paddingTop: '100%',}}>
                                            <div className="DynamicHeightLoader layout row align-center justify-center">
                                                <img src={Gift1} alt="logo" className='img-resp DynamicHeightLoaderImage p-0'/>
                                            </div>
                                            {/* <div class="animated-bg-placeholder"></div> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="ProductCardBottom">
                                <h6 className="ProductCardTitle ellipsis demi-bold">Thanksgiving Gift Card</h6>
                                <p className="ProductCardDescription p2 ellipsis-two-line">Make this Thanksgiving extra special</p>
                            </div>
                        </Link>
                    </div>
                    <div>
                        <Link className="ProductCard ProductGiftCard">
                            <div className="ProductCardImageWrapper">
                                <div className="ProductImageWrapper">
                                    <div className="FirstProductImage">
                                        <div className="DynamicHeightLoaderWrapper" style={{ paddingTop: '100%',}}>
                                            <div className="DynamicHeightLoader layout row align-center justify-center">
                                                <img src={Gift1} alt="logo" className='img-resp DynamicHeightLoaderImage p-0'/>
                                            </div>
                                            {/* <div class="animated-bg-placeholder"></div> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="ProductCardBottom">
                                <h6 className="ProductCardTitle ellipsis demi-bold">Thanksgiving Gift Card</h6>
                                <p className="ProductCardDescription p2 ellipsis-two-line">Make this Thanksgiving extra special</p>
                            </div>
                        </Link>
                    </div>
                    <div>
                        <Link className="ProductCard ProductGiftCard">
                            <div className="ProductCardImageWrapper">
                                <div className="ProductImageWrapper">
                                    <div className="FirstProductImage">
                                        <div className="DynamicHeightLoaderWrapper" style={{ paddingTop: '100%',}}>
                                            <div className="DynamicHeightLoader layout row align-center justify-center">
                                                <img src={Gift1} alt="logo" className='img-resp DynamicHeightLoaderImage p-0'/>
                                            </div>
                                            {/* <div class="animated-bg-placeholder"></div> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="ProductCardBottom">
                                <h6 className="ProductCardTitle ellipsis demi-bold">Thanksgiving Gift Card</h6>
                                <p className="ProductCardDescription p2 ellipsis-two-line">Make this Thanksgiving extra special</p>
                            </div>
                        </Link>
                    </div>
                    <div>
                        <Link className="ProductCard ProductGiftCard">
                            <div className="ProductCardImageWrapper">
                                <div className="ProductImageWrapper">
                                    <div className="FirstProductImage">
                                        <div className="DynamicHeightLoaderWrapper" style={{ paddingTop: '100%',}}>
                                            <div className="DynamicHeightLoader layout row align-center justify-center">
                                                <img src={Gift1} alt="logo" className='img-resp DynamicHeightLoaderImage p-0'/>
                                            </div>
                                            {/* <div class="animated-bg-placeholder"></div> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="ProductCardBottom">
                                <h6 className="ProductCardTitle ellipsis demi-bold">Thanksgiving Gift Card</h6>
                                <p className="ProductCardDescription p2 ellipsis-two-line">Make this Thanksgiving extra special</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default giftcards