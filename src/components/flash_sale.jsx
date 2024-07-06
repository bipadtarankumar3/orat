import React from 'react'
import { Salebanner } from '../image'

function flash_sale() {
    return (
        <div className="StaticSection App">
            <div className='Content layout BreakPointContainer'>
                <a href="">
                    <div className="prel">
                        {/* <div className="timerPosition layout align-center justify-center d-none d-lg-block" style={{
                            "--timer-font-size": "45px",
                            "--timer-count-size": "45px",
                            "--timer-small-size": "45px",
                            "--timer-font-family": "greycliff",
                            "--timer-width": "36%",
                        }}>

                            <div className="timer-banner-container">
                                <div className="layout align-center justify-center full-height">
                                    <div className="timer-count m-b-10">  12 PM TO 6 PM </div>
                                    <div style={{color:'#fff'}}> EVERY DAY </div>
                                </div>
                            </div>
                        </div> */}
                        <div className="DynamicHeightLoaderWrapper">
                            <div className="layout row align-center justify-center">
                                <img src={Salebanner} alt="logo" className='img-resp DynamicHeightLoaderImage' style={{ padding: '0% 2%' }}/>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default flash_sale