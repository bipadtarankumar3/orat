import React, { useEffect ,useState} from 'react'
import { useDispatch, useSelector } from "react-redux";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Eidbanner1, Eidbanner10, Eidbanner2, Eidbanner3, Eidbanner4, Eidbanner5, Eidbanner6, Eidbanner7, Eidbanner8, Eidbanner9 } from '../image';
import { Link } from 'react-router-dom';
import { fetchProductsByCategory, setCategory } from '../Redux/features/ProductFilter/FilterSlice';



const optioneid = {
    loop: true,
    // margin: 10,
    nav: true,
    dots: false,
    responsive: {
        0: {
            items: 2.2
        },
        600: {
            items: 3
        },
        1000: {
            items: 5
        }
    }
};


function Eid() {

    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();
    const products = useSelector((state) => Array.isArray(state.filterProduct.products) ? state.filterProduct.products : []);
    const status = useSelector((state) => state.filterProduct.status);
    const error = useSelector((state) => state.filterProduct.error);
    console.log(products);
    // Set the static category here
    useEffect(() => {
      const staticCategory = "electronics"; // Set your desired static category here
      dispatch(setCategory(staticCategory));
      dispatch(fetchProductsByCategory(staticCategory));
      setLoading(false);
    }, [dispatch]);

    return (
        <div>
            <div className='App'>
                <div className="BreakPointContainer">
                    <div className="layout row justify-space-between align-center text-left SectionTitle">
                        <h1 className='m-t-0 m-b-0 w-auto'> EID PICKS </h1>
                        <Link to="/category" className='ViewAllUrlsLink pernia-color-hover h5 demi-bold w-auto'>VIEW ALL</Link>
                       
      
                    </div>
                    


                    {status === "succeeded" && (
                        <OwlCarousel className='owl-theme' loop nav {...optioneid}>
                            {
                                
                        
                                Object.values(products).map((product) => 
                                                        
                                <div className='item' key={product.id}>
                                    <div className="CarouselSection product">
                                        <div className="prel Gutter">
                                            <a href="#">
                                                <div className="DynamicHeightLoaderWrapper" style={{ paddingTop: '130%', overflow: 'hidden' }}>
                                                    <div className="DynamicHeightLoader layout row align-center justify-center" style={{ paddingTop: '22%' }}>
                                                        <img src={product.product_thumbail} alt="logo" className='img-resp DynamicHeightLoaderImage' style={{ padding: '0px', bottom: 'inherit' }} />
                                                    </div>
                                                    {/* <div className="animated-bg-placeholder"></div> */}
                                                </div>
                                                {/* <div className="image-gradient"></div> */}
                                                <div className="ImageTextDetail ProductImageTextDetail">
                                                    <label className="ellipsis h5 ImageTextLabelTop m-t-5 demi-bold"> {product.product_title}</label>
                                                    <label class="h6 ellipsis-two-line font-normal ImageTextLabelBottom block font-normal">{product.product_short_description}</label>
                                                    <div className="ProductPrice layout row wrap">
                                                        <span className='SpecialPrice p2 demi-bold w-auto p-0' style={{ marginLeft: '4%' }}> ₹ 15,600 </span>
                                                        <span className='InitialPrice p3 w-auto p-0'> ₹ 19,500 </span>
                                                        <span className='DiscountPriceRound p3 w-auto p-0'> ₹ 20% OFF </span>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>


                                )
                            }
                        
                        </OwlCarousel>
                    )}
                        
                    
                    {status === "failed" && <p>Failed to load products: {error}</p>}

                        

                </div>
            </div>
        </div>
    )
}

export default Eid