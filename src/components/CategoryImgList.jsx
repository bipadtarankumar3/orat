import React, { useEffect, useState } from 'react'
import { categoryList } from '../services/General-service'
import { getApiUrl } from '../config/apiConfig';
import { Link } from 'react-router-dom';

export default function CategoryImgList() {



    const [categoryArr,setCategoryArr] = useState([]);

    const getCategoryList = () =>{
        categoryList('').then((data) =>{
            console.log(data);
            setCategoryArr(data.data);
            }
            
        ).catch((error)=>{

        })
    }

    useEffect(()=> {
        getCategoryList();
    },[])

  return (
    <div className='categoryimg-div'>
        <ul className='highlight-stock scrolling-wrapper-for-ios'>

            {
                categoryArr.map((data,index) =>(
                    <li>
                        <Link to="/">
                            <div className="layout row align-center justify-center img-small dynamic-img-container prel">
                                <img src={data.icon} alt="logo"/>
                            </div>
                            <p>{data.title} </p>
                        </Link>
                    </li>
                ))
            }

        </ul>
    </div>
  )
}
