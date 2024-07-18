import React, { useEffect, useState } from 'react'
import { Bestsellingbanner1, Bestsellingbanner2, Bestsellingbanner3, Bestsellingbanner4, Bestsellingbanner5, Bestsellingbanner6, Bestsellingbanner7 } from '../image'
import { Link } from 'react-router-dom';
import { designerList } from '../services/General-service';
import { getApiUrl } from '../config/apiConfig';


function Bestselling() {

    const [designerArr,setDesignerArr] = useState([]);

    const getDesignerList = () =>{
        var arr_data = {
            limit:7
        };
        designerList(arr_data).then((data) =>{
            console.log(data);
            setDesignerArr(data.data);
            }
            
        ).catch((error)=>{

        })
    }

    useEffect(()=> {
        getDesignerList();
    },[])


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

                        {
                            designerArr.map((data,index) =>(
                                index === 4 ? (
                                    <div className="flex GridSection xs12 sm6 p-sm-0" key={index}>
                                        <div className="prel Gutter">
                                            <a href="">
                                                <div className="DynamicHeightLoaderWrapper" style={{ paddingTop: '40%' }}>
                                                    <div className="DynamicHeightLoader layout row align-center justify-center" style={{ paddingTop: '30%' }}>
                                                        <img src={data.designer_cover} alt="logo" className='img-resp DynamicHeightLoaderImage' style={{ padding: '0px' }} />
                                                    </div>
                                                </div>
                                                <div className="ImageTextDetail CategoryImageTextDetail">
                                                    <label className="h4 ImageTextLabelTop m-t-5 demi-bold"> {data.designer_name}</label>
                                                    <label className="h6 ellipsis ImageTextLabelBottom block font-normal">SHOP NOW</label>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="flex GridSection xs6 sm3 p-sm-0" key={index}>
                                        <div className="prel Gutter">
                                            <a href="">
                                                <div className="DynamicHeightLoaderWrapper" style={{ paddingTop: '112%' }}>
                                                    <div className="DynamicHeightLoader layout row align-center justify-center" style={{ paddingTop: '32%' }}>
                                                        <img src={data.designer_thumbnail} alt="logo" className='img-resp DynamicHeightLoaderImage' style={{ padding: '0px' }} />
                                                    </div>
                                                </div>
                                                <div className="ImageTextDetail CategoryImageTextDetail">
                                                    <label className="h4 ImageTextLabelTop m-t-5 demi-bold"> {data.designer_name}</label>
                                                    <label className="h6 ellipsis ImageTextLabelBottom block font-normal">SHOP NOW</label>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                )
                            ))
                        }

                        
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bestselling