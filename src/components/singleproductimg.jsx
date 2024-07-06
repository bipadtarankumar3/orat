import React, { Component } from 'react';
import ReactImageMagnify from 'react-image-magnify';
import { AAOC0722147, AAOC0722148, AAOC0722149, AAOC0722150, ProductImageSlider1, ProductImageSlider2, ProductImageSlider3, ProductImageSlider4, Stampimage1, Stampimage2, Stampimage3, Stampimage4 } from '../image';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const optionsigel = {
  loop: true,
  // margin: 10,
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


export default class singleproductimg extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeThumbnailIndex: 0
    };
  }
  

  get srcSet() {
    return [
      `${AAOC0722147} 1200w`,
      `${AAOC0722148} 1200w`,
      `${AAOC0722149} 1200w`,
      `${AAOC0722150} 1200w`,
    ].join(', ');
  }

  handleThumbnailClick = (index) => {
    this.setState({ activeThumbnailIndex: index });
  };


  render() {
    const { activeThumbnailIndex } = this.state;
    const thumbnailImages = [Stampimage1, Stampimage2, Stampimage3, Stampimage4];
    const largeImages = [AAOC0722147, AAOC0722148, AAOC0722149, AAOC0722150]; // Change these URLs accordingly

    return (
      <div className="flex xs5 prel">
        <div className="layout align-start ProductImageSlider">
          <div className="ThumbnailImages">
            {thumbnailImages.map((image, index) => (
              <div
                key={index}
                className={index === activeThumbnailIndex ? 'active' : ''}
                onClick={() => this.handleThumbnailClick(index)}
              >
                <div className="dynamicImgContainer prel layout row align-center justify-center">
                  <img src={image} alt="logo" style={{ padding: '0px' }} />
                </div>
              </div>
            ))}
          </div>
          <div className="SelectedImage animated-background prel">
            <ReactImageMagnify
              smallImage={{
                alt: 'Wristwatch by Ted Baker London',
                src: thumbnailImages[activeThumbnailIndex],
                srcSet: this.srcSet,
                width: '438',
                height: '632'
              }}
              largeImage={{
                src: largeImages[activeThumbnailIndex],
                width: 1500,
                height: 1600
              }}
              enlargedImageContainerDimensions={{
                width: '180%',
                height: '100%',
                zIndex: 1,
              }}
            />
          </div>
        </div>
        <div className="ProductImageSlider_mobile">
          <OwlCarousel className='owl-theme' loop nav {...optionsigel}>
                          <div className='item'>
                              <div className="CarouselSection product">
                                  <div className="prel Gutter">
                                      <a href="#">
                                          <div className="DynamicHeightLoaderWrapper" style={{ paddingTop: '130%', overflow: 'hidden' }}>
                                              <div className="DynamicHeightLoader layout row align-center justify-center" style={{ paddingTop: '22%' }}>
                                                  <img src={ProductImageSlider1} alt="logo" className='img-resp DynamicHeightLoaderImage' style={{ padding: '0px', bottom: 'inherit' }} />
                                              </div>
                                              {/* <div className="animated-bg-placeholder"></div> */}
                                          </div>
                                          {/* <div className="image-gradient"></div> */}
                                      </a>
                                  </div>
                              </div>
                          </div>
                          <div className='item'>
                              <div className="CarouselSection product">
                                  <div className="prel Gutter">
                                      <a href="#">
                                          <div className="DynamicHeightLoaderWrapper" style={{ paddingTop: '130%', overflow: 'hidden' }}>
                                              <div className="DynamicHeightLoader layout row align-center justify-center" style={{ paddingTop: '22%' }}>
                                                  <img src={ProductImageSlider2} alt="logo" className='img-resp DynamicHeightLoaderImage' style={{ padding: '0px', bottom: 'inherit' }} />
                                              </div>
                                              {/* <div className="animated-bg-placeholder"></div> */}
                                          </div>
                                          {/* <div className="image-gradient"></div> */}
                                      </a>
                                  </div>
                              </div>
                          </div>
                          <div className='item'>
                              <div className="CarouselSection product">
                                  <div className="prel Gutter">
                                      <a href="#">
                                          <div className="DynamicHeightLoaderWrapper" style={{ paddingTop: '130%', overflow: 'hidden' }}>
                                              <div className="DynamicHeightLoader layout row align-center justify-center" style={{ paddingTop: '22%' }}>
                                                  <img src={ProductImageSlider3} alt="logo" className='img-resp DynamicHeightLoaderImage' style={{ padding: '0px', bottom: 'inherit' }} />
                                              </div>
                                              {/* <div className="animated-bg-placeholder"></div> */}
                                          </div>
                                          {/* <div className="image-gradient"></div> */}
                                      </a>
                                  </div>
                              </div>
                          </div>
                          <div className='item'>
                              <div className="CarouselSection product">
                                  <div className="prel Gutter">
                                      <a href="#">
                                          <div className="DynamicHeightLoaderWrapper" style={{ paddingTop: '130%', overflow: 'hidden' }}>
                                              <div className="DynamicHeightLoader layout row align-center justify-center" style={{ paddingTop: '22%' }}>
                                                  <img src={ProductImageSlider4} alt="logo" className='img-resp DynamicHeightLoaderImage' style={{ padding: '0px', bottom: 'inherit' }} />
                                              </div>
                                              {/* <div className="animated-bg-placeholder"></div> */}
                                          </div>
                                          {/* <div className="image-gradient"></div> */}
                                      </a>
                                  </div>
                              </div>
                          </div>

          </OwlCarousel>
        </div>
      </div>
    );
  }
}
