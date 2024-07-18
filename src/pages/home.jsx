import React from 'react'
import Banner from '../components/banner';
import Flash_sale from '../components/flash_sale';
import Shipped from '../components/shipped';
import Recently from '../components/recently';
import Wedding from '../components/wedding';
import Designers from '../components/designers';
import Wendell from '../components/wendell';
import Celebrating from '../components/celebrating';
import Handpicked from '../components/handpicked';
import Occasion from '../components/occasion';
import Eid from '../components/Eid';
import Hidden from '../components/hidden';
import Jewel from '../components/jewel';
import Decor from '../components/decor';
import Junior from '../components/junior';
import Gentlemen from '../components/gentlemen';
import Bestselling from '../components/Bestselling';
import Celebratory from '../components/Celebratory';
import Celebriy from '../components/celebriy';
import Stores from '../components/stores';
import Studio from '../components/studio';
import ImageSlider from '../components/imageSlider';
import CategoryImgList from '../components/CategoryImgList';


function home() {
  return (
    <div>
      <div className='BreakPointContainer AppContent'>
        <div className='HomeSection'>
          <CategoryImgList/>
          <Banner />
          <Flash_sale />
          <Shipped/>
          <Recently/>
          <Wedding/>
          <Designers/>
          <Wendell/>
          <ImageSlider/>
          <Celebrating/>
          <Occasion/>
          <Eid/>
          <Handpicked/>
          <Jewel/>
          <Decor/>
          <Junior/>
          <Hidden/>
          {/* <Gentlemen/> */}
          <Bestselling/>
          <Celebratory/>
          <Celebriy/>
          <Stores/>
          <Studio/>
        </div>
      </div>
    </div>
  )
}

export default home