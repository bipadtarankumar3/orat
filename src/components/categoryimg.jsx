import React from 'react'
import Categoryimg1 from '../image/img1.jpg'
import Categoryimg2 from '../image/img2.jpg'
import Categoryimg3 from '../image/img3.jpg'
import Categoryimg4 from '../image/img4.jpg'
import Categoryimg5 from '../image/img5.jpg'
import Categoryimg6 from '../image/img6.jpg'
import Categoryimg7 from '../image/img7.jpg'
import Categoryimg8 from '../image/img8.jpg'
import Categoryimg9 from '../image/img9.jpg'
import { Link } from 'react-router-dom'
import { Women1, Women2, Women3, Women4, Women5, Women6, Women7, Women8, Women9 } from '../image'

function categoryimg() {
  return (
    <div className='categoryimg-div'>
        <ul className='highlight-stock scrolling-wrapper-for-ios'>
            <li>
                <Link to="/">
                    <div className="layout row align-center justify-center img-small dynamic-img-container prel">
                        <img src={Women1} alt="logo"/>
                    </div>
                    <p>  Tyohaar Collection </p>
                </Link>
            </li>
            <li>
                <Link to="/">
                    <div className="layout row align-center justify-center img-small dynamic-img-container prel">
                        <img src={Women2} alt="logo"/>
                    </div>
                    <p>  Sanjana X Aachho </p>
                </Link>
            </li>
            <li>
                <Link to="/">
                    <div className="layout row align-center justify-center img-small dynamic-img-container prel">
                        <img src={Women3} alt="logo"/>
                    </div>
                    <p>  Celebrity in Aachho </p>
                </Link>
            </li>
            <li>
                <Link to="/">
                    <div className="layout row align-center justify-center img-small dynamic-img-container prel">
                        <img src={Women4} alt="logo"/>
                    </div>
                    <p>  Trending Now </p>
                </Link>
            </li>
            <li>
                <Link to="/">
                    <div className="layout row align-center justify-center img-small dynamic-img-container prel">
                        <img src={Women5} alt="logo"/>
                    </div>
                    <p>  Fusionwear Sets </p>
                </Link>
            </li>
            <li>
                <Link to="/">
                    <div className="layout row align-center justify-center img-small dynamic-img-container prel">
                        <img src={Women6} alt="logo"/>
                    </div>
                    <p>  Anarkali Suits </p>
                </Link>
            </li>
            <li>
                <Link to="/">
                    <div className="layout row align-center justify-center img-small dynamic-img-container prel">
                        <img src={Women7} alt="logo"/>
                    </div>
                    <p>  Tropical Prints </p>
                </Link>
            </li>
            <li>
                <Link to="/">
                    <div className="layout row align-center justify-center img-small dynamic-img-container prel">
                        <img src={Women8} alt="logo"/>
                    </div>
                    <p>  Floral Affair </p>
                </Link>
            </li>
            <li>
                <Link to="/">
                    <div className="layout row align-center justify-center img-small dynamic-img-container prel">
                        <img src={Women9} alt="logo"/>
                    </div>
                    <p>  Aachho Store </p>
                </Link>
            </li>
        </ul>
    </div>
  )
}

export default categoryimg