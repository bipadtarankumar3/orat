import React, { useRef } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Bannerimg1, Bannerimg2, Bannerimg3, Videoimg } from '../image';
import Tiktok1 from '../video/video1.mp4';
import Tiktok2 from '../video/video2.mp4';
import Tiktok3 from '../video/video3.mp4';
import Tiktok4 from '../video/video4.mp4';
import Tiktok5 from '../video/video5.mp4';
import { Link } from 'react-router-dom';
import { FaEye } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";

const videoslider = {
  loop: true,
  margin: 25,
  nav: true,
  dots: false,
  responsive: {
    0: {
      items: 1.4
    },
    600: {
      items: 3
    },
    1000: {
      items: 5
    }
  }
};

function ImageSlider() {
  const videoRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null)
  ];

  const handleVideoEnd = (index) => {
    const video = videoRefs[index].current;
    if (video) {
      video.currentTime = 0;
      video.play();
    }
  };

  return (
    <div className='App'>
      <div className="BreakPointContainer">
        <div className="CarouselSectionContainer">
          <div className="layout row justify-space-between align-center text-left SectionTitle">
            <h1 className='m-t-0 m-b-0 demi-bold w-auto'> WATCH AND SHOP </h1>
            <Link to="/category" className='ViewAllUrlsLink pernia-color-hover h5 demi-bold w-auto'>VIEW ALL</Link>
          </div>
          <div className="layout">
            <OwlCarousel className='owl-theme' loop margin={10} nav {...videoslider}>
              {[
                { src: Tiktok1, index: 0 },
                { src: Tiktok2, index: 1 },
                { src: Tiktok3, index: 2 },
                { src: Tiktok4, index: 3 },
                { src: Tiktok5, index: 4 }
              ].map(({ src, index }) => (
                <div className='item' key={index}>
                  <div className="video_sec">
                    <div className="video-div">
                      <video ref={videoRefs[index]} autoPlay muted playsInline onEnded={() => handleVideoEnd(index)}>
                        <source src={src} type="video/mp4" />
                      </video>
                    </div>
                    <div className="other-div">
                      <div className="view-div">
                        <FaEye />
                        2L
                      </div>
                      <div className="play_icon">
                        <FaPlay />
                      </div>
                      <div className="description_div">
                        <div className="description-div">
                          <div className="img-div">
                            <img src={Videoimg} alt="logo" />
                          </div>
                          <div className="text-div">
                            <p> Maroon Blush Embroidered Georgette Suit Set </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </OwlCarousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
