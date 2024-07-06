import React, { useState, useEffect } from 'react';
import { Appstore, Backtotop, Chaticon, Play, Razorpay, Shape22, Shape23, Shape24, Shape25, Telephone, Visa, Whatsapp } from '../image'
import { FiPhone } from "react-icons/fi";
import { RiWhatsappFill } from "react-icons/ri";
import { MdOutlineEmail } from "react-icons/md";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { RiMessage2Line } from "react-icons/ri";
import { TbHanger } from "react-icons/tb";
import { TiPlaneOutline } from "react-icons/ti";
import { LiaPhoneVolumeSolid } from "react-icons/lia";
import { Link } from 'react-router-dom';
import { RiScissorsCutLine } from "react-icons/ri";

const Footer = () => {
const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);


    return (
        <div className='App d_none d_lg_block'>
            <div id='footerContainer' className="Footer">
                <div className="FooterFirstSectionContainer">
                    <div className="BreakPointContainer">
                        <div className="BreakPointContainer FooterFirstSection layout wrap">
                            <div className="custom-flex layout column">
                                <h4 className='bold'> ABOUT US </h4>
                                <a href=""> PURPLE STYLE LABS </a>
                                <a href=""> PERNIA’S POP UP SHOW </a>
                                <a href=""> STUDIO LOCATOR </a>
                                <a href=""> FIRST LOOK </a>
                            </div>
                            <div className="custom-flex layout column">
                                <h4 className='bold'> QUICK LINKS </h4>
                                <a href=""> BESTSELLERS </a>
                                <a href=""> EXCLUSIVE </a>
                                <a href=""> SALE </a>
                                <Link to="/giftcards"> GIFT CARDS </Link>
                                <a href=""> CELEBRITY CLOSET </a>
                                <a href=""> PERSONAL STYLING </a>
                                <a href=""> OCCASIONS </a>
                                <a href=""> CLIENT DIARIES </a>
                            </div>
                            <div className="custom-flex layout column">
                                <h4 className='bold'> CUSTOMER CARE </h4>
                                <a href=""> SHIPPING INFORMATION </a>
                                <a href=""> RETURNS & EXCHANGE </a>
                                <a href=""> TERMS & CONDITIONS </a>
                                <a href=""> PRIVACY & COOKIE POLICIES </a>
                                <a href=""> FAQS </a>
                                <a href=""> SITE MAP </a>
                            </div>
                            <div className="custom-flex layout column">
                                <h4 className='bold'> CONTACT US </h4>
                                <div>
                                    <a href="" className='layout link-container'>
                                        {/* <div className="DynamicHeightLoaderWrapper icon">
                                            <div className="DynamicHeightLoader layout row align-center justify-center DynamicHeightLoaderFallback">
                                                <img src={Telephone} alt="logo" className='contact-icons DynamicHeightLoaderImage'/>
                                                <FiPhone style={{ fontSize: '37px',padding: '0px' }} />
                                            </div>
                                        </div> */}
                                        <FiPhone style={{ fontSize: '18px', padding: '0px', marginRight: '5px' }} />
                                        <p className='m-b-0'> 1234567890 </p>
                                    </a>
                                    <a href="" className='layout link-container'>
                                        {/* <div className="DynamicHeightLoaderWrapper icon">
                                            <div className="DynamicHeightLoader layout row align-center justify-center DynamicHeightLoaderFallback">
                                                <img src={Whatsapp} alt="logo" className='contact-icons DynamicHeightLoaderImage'/>
                                            </div>
                                        </div> */}
                                        <RiWhatsappFill style={{ fontSize: '20px', padding: '0px', marginRight: '5px', color: '#2AB13F' }} />
                                        <p className='m-b-0'> Whatsapp us on +91 234567890 </p>
                                    </a>
                                    <a href="" className='layout link-container'>
                                        {/* <div className="DynamicHeightLoaderWrapper icon">
                                            <div className="DynamicHeightLoader layout row align-center justify-center DynamicHeightLoaderFallback">
                                                <img src={Whatsapp} alt="logo" className='contact-icons DynamicHeightLoaderImage'/>
                                            </div>
                                        </div> */}
                                        <MdOutlineEmail style={{ fontSize: '18px', padding: '0px', marginRight: '5px' }} />
                                        <p className='m-b-0'> Whatsapp us on +91 234567890 </p>
                                    </a>
                                    <div className="m-t-10">
                                        <h4 class="bold">FOLLOW US</h4>
                                        <div className="layout align-center SocialMediaLinks">
                                            <a href="" className='m-r-5'>
                                                <FaFacebookSquare style={{ fontSize: '18px', padding: '0px', marginRight: '5px' }} />
                                            </a>
                                            <a href="" className='m-r-5'>
                                                <FaInstagram style={{ fontSize: '18px', padding: '0px', marginRight: '5px' }} />
                                            </a>
                                            <a href="" className='m-r-5'>
                                                <FaTwitter style={{ fontSize: '18px', padding: '0px', marginRight: '5px' }} />
                                            </a>
                                            {/* <a href="" className='m-r-5'>
                                                <FaPinterestP style={{ fontSize: '18px', padding: '0px', marginRight: '5px' }} />
                                            </a> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="custom-flex layout column">
                                    <h4 className='bold'> GET PERNIA’S POP-UP SHOP APP </h4>
                                    <p class="m-b-20">We will send you a link on your Email or Phone, open it on your phone and download the App.</p>
                                    <div>
                                            <form>
                                                <div class="radio m-b-20">
                                                    <label class="m-r-15">
                                                        <input type="radio" name="gender" value="email" checked/> Email
                                                        <span></span>
                                                    </label>
                                                        <label>
                                                            <input type="radio" name="gender" value="phone"/>  Phone
                                                        </label>
                                                </div>
                                                <div class="layout justify-space-between AppShareForm">
                                                    <div class="flex">
                                                        <input type="email" value="" required="" class="su-inputBox" placeholder="Email Address"/>
                                                    </div>
                                                    <button type="submit" class="su-btn btn-pernia-primary flex bold">SHARE APP LINK</button>
                                                </div>
                                            </form>
                                    </div>
                                    <div className="layout row m-t-25">
                                        <a href="" className="w-auto" target='_blank' style={{padding: '0px', marginLeft: '20px'}}>
                                            <div className="DynamicHeightLoaderWrapper icon">
                                                <div className="DynamicHeightLoader layout row align-center justify-center DynamicHeightLoaderFallback">
                                                    <img src={Appstore} alt="logo" className='AppStoreImage DynamicHeightLoaderImage' style={{width: '100%', padding: '0px'}}/>
                                                </div>
                                            </div>
                                            
                                        </a>
                                        <a href="" className="m-r-8 w-auto" target='_blank'>
                                        <div className="DynamicHeightLoaderWrapper icon">
                                                <div className="DynamicHeightLoader layout row align-center justify-center DynamicHeightLoaderFallback">
                                                    <img src={Play} alt="logo" className='AppStoreImage DynamicHeightLoaderImage' style={{width: '100%', padding: '0px'}}/>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div> */}
                        </div>
                    </div>
                </div>
                <div className="BreakPointContainer">
                    <div className="FooterSecondSectionContainer layout align-center">
                        <div className="FooterSecondSection BreakPointContainer">
                            <div className="layout align-center justify-space-around full-height">
                                <div className="flex layout align-center justify-center">
                                    <div>
                                        <div className="DynamicHeightLoaderWrapper icon">
                                            <div className="layout row align-center justify-center DynamicHeightLoaderFallback">
                                                {/* <LiaPhoneVolumeSolid  style={{ fontSize: '55px', color: '#000', padding: '0px' }} /> */}
                                                <img src={Shape22} alt="logo" className='footer_icon'/>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <h6 class="bold text-uppercase">24X7 Customer Support</h6>
                                    </div>
                                </div>
                                <div className="flex layout align-center justify-center">
                                    <div>
                                        <div className="DynamicHeightLoaderWrapper icon">
                                            <div className="align-center justify-center DynamicHeightLoaderFallback">
                                                {/* <i class="fa-solid fa-truck-fast" style={{ fontSize: '22px', color: '#000', padding: '0px' , marginRight: '10px'}}></i> */}
                                                <img src={Shape23} alt="logo" className='footer_icon'/>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <h6 class="bold">FREE SHIPPING</h6>
                                    </div>
                                </div>
                                <div className="flex layout align-center justify-center">
                                    <div>
                                        <div className="DynamicHeightLoaderWrapper icon">
                                            <div className="align-center justify-center DynamicHeightLoaderFallback">
                                                {/* <i class="fa-solid fa-rotate" style={{ fontSize: '22px', color: '#000', padding: '0px', marginRight: '10px' }}></i> */}
                                                <img src={Shape24} alt="logo" className='footer_icon_24'/>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <h6 class="bold">EASY RETURNS & EXCHANGE</h6>
                                    </div>
                                </div>
                                <div className="flex layout align-center justify-center">
                                    <div>
                                        <div className="DynamicHeightLoaderWrapper icon">
                                            <div className="align-center justify-center DynamicHeightLoaderFallback">
                                                {/* <i class="fa-solid fa-scissors" style={{ fontSize: '22px', color: '#000', padding: '0px', marginRight: '10px' }}></i> */}
                                                {/* <img src={Shape25} alt="logo" className='footer_icon_25'/> */}
                                                <RiScissorsCutLine  style={{ fontSize: '30px', color: '#000', padding: '0px',marginRight: '10px' }}/>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <h6 class="bold">CUSTOM FITTINGS</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="FooterThirdSectionContainer layout align-center">
                        <div className="FooterThirdSection BreakPointContainer">
                            <div className="layout row align-center justify-center">
                                <div className="custom-flex layout column align-center justify-center">
                                    <div className="custom-flex layout column align-center justify-center">
                                        <div className="FooterThirdSectionLeft">
                                            <h4 class="bold m-b-5">COMPLETELY SAFE AND SECURE PAYMENT METHOD</h4>
                                            <p class="bold m-b-10">We accept Netbanking, all major credit cards. We also accept orders with cash payment</p>
                                        </div>
                                        {/* <div className='text-center'>
                                            <img src={Razorpay} alt="logo" style={{ width: '20%' }} />
                                        </div> */}
                                    </div>
                                </div>
                                <div className="custom-flex SignUpSection">
                                    <div className="flex xs9">
                                        <div className="m-l-25 p-l-25">
                                            <p class="bold">Sign up to get exclusive style tips, new arrival updates and a special discount code.</p>
                                            <form class="layout justify-space-between">
                                                <div class="flex">
                                                    <input type="email" value="" required="" class="su-inputBox" placeholder="Here's my Email" />
                                                </div>
                                                <button type="submit" class="su-btn btn-pernia-primary flex bold">Sign Up</button></form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="BreakPointContainer mt-4 mb-4">
                <div className="FooterFourSection align-center footer-bottom">
                    <h1> SHOP ONLINE AT ORAT </h1>
                    <p>
                        <span>With all of India’s Leading designers under one roof and the most diverse range of designer clothes, jewellery and accessories, Pernia’s Pop-Up Shop has got every style covered for you whether you're looking for Indian clothing, Western styles, Contemporary clothing or Formal Silhouettes. Discover the latest designer <a title="Designer Menswear" href="#">Designer Menswear</a> and <a title="Designer Womenswear" href="#">Designer Womenswear</a> from Top Luxury <a title="Indian Fashion Designers" href="#">Indian Fashion Designers</a> like <a title="Anamika Khanna" href="#">Anamika Khanna</a>, <a title="Amit Aggarwal" href="#">Amit Aggarwal</a>, <a title="Anushree Reddy" href="#">Anushree Reddy</a>, <a title="Asal by Abu Sandeep" href="#">Asal by Abu Sandeep</a>, <a title="Anatar Agni " href="#">Anatar Agni </a>, <a title="Babita Malkhani" href="#">Babita Malkhani</a>, <a title="Rohit Bal" href="#">Rohit Bal</a>, <a title="Rohit Gandhi &amp; Rahul Khanna" href="#">Rohit Gandhi &amp; Rahul Khanna</a>, <a title="Siddartha Tytler" href="#">Siddartha Tytler</a>, <a title="Tarun Tahiliani" href="#">Tarun Tahiliani</a>, <a title="Dolly J" href="#">Dolly J</a>, <a title="Gauri and Nainika" href="#">Gauri and Nainika</a>, <a title="Jayanti Reddy" href="#">Jayanti Reddy</a>, <a title="Kalista" href="#">Kalista</a>, <a title="Kiran Uttam Ghosh" href="#">Kiran Uttam Ghosh</a>, <a title="Mahima Mahajan" href="#">Mahima Mahajan</a>, <a title="Mishru" href="#">Mishru</a>, <a title="Namrata Joshipura" href="#">Namrata Joshipura</a>, <a title="Nupur Kanoi" href="#">Nupur Kanoi</a>, <a title="Payal Pratap" href="#">Payal Pratap</a>, <a title="Punit Balana" href="#">Punit Balana</a>, <a title="Rajdeep Ranawat" href="#">Rajdeep Ranawat</a>, <a title="Rajesh Pratap Singh" href="#">Rajesh Pratap Singh</a>, <a title="Ridhi Mehra" href="#">Ridhi Mehra</a>, <a title="Ridhima Bhasin" href="#">Ridhima Bhasin</a>, <a title="Ritu Kumar" href="#">Ritu Kumar</a>, <a title="Gaurav Gupta" href="#">Gaurav Gupta</a>, <a title="Masaba" href="#">Masaba</a>, <a title="Falguni Shane Peacock" href="#">Falguni Shane Peacock</a>, <a title="Manish Malhotra" href="#">Manish Malhotra</a>, <a title="Payal Singhal" href="#">Payal Singhal</a>, <a title="Varun Bahl" href="#">Varun Bahl</a>, <a title="Aartivijay Gupta" href="#">Aartivijay Gupta</a>, <a title="Seema Gujral" href="#">Seema Gujral</a>, <a title="Chhavvi Aggarwal" href="#">Chhavvi Aggarwal</a>, <a title="Disha Kahai" href="#">Disha Kahai</a>, <a title="Nakul Sen" href="#">Nakul Sen</a>, <a title="Gopi Vaid" href="#">Gopi Vaid</a>, <a title="Jade By Monica &amp; Karishma" href="#">Jade By Monica &amp; Karishma</a>, <a title="Julie By Julie Shah" href="#">Julie By Julie Shah</a>, <a title="Vvani by Vani Vats" href="#">Vvani by Vani Vats</a>, <a title="Rocky Star" href="#">Rocky Star</a>, <a title="Anita Dongre" href="#">Anita Dongre</a>, <a title="Papa Don" href="#">Papa Don't Preach by Shubhika</a>, <a title="Gaurav Katta" href="#">Gaurav Katta</a>, <a title="Kunal Rawal" href="#">Kunal Rawal</a>, <a title="Payal Singhal" href="#">Payal Singhal</a>, <a title="Zariin" href="#">Zariin</a>, <a title="Nikasha" href="#">Nikasha</a>, and many more whose designs never go wrong and are always up to the mark with fashion. Pernia’s pop up shop is the best luxury clothing website that offers Straight Off the Runway style, <a title="Designer Resort Wear" href="#">Designer Resort Wear</a>, <a title="Designer Bridal Wear" href="#">Designer Bridal Wear</a>, <a title="Designer Wedding Dresses" href="#">Designer Wedding Dresses</a> and Luxury <a title="Occasions Wear" href="#">Occasions Wear</a> like <a title="Ganesh Chaturthi" href="#">Ganesh Chaturthi</a>, also <a title="Fashion Trends" href="#">Fashion Trends</a> carefully curated to provide you with a wholesome experience and choices at the same time. Additional services to extend your luxury shopping experience include booking appointments for personal styling sessions for wedding functions, <a title="Cocktail Parties" href="#">Cocktail Parties</a>, dinner parties as well curating a special <a title="Bridal Trousseau" href="#">Bridal Trousseau</a> for all the brides-to-be.</span>
                    </p>
                </div>
            </div>
            {/* <div className="BackToTop">
                <img src={Backtotop} alt="logo" />
            </div> */}
            <div className="back-to-top">
                {isVisible && (
                    <div onClick={scrollToTop} className="back-to-top-button">
                    <img src={Backtotop} alt="Go to top" />
                    </div>
                )}
            </div>
            <div className="Chatdiv">
                <img src={Chaticon} alt="logo"/>
            </div>
        </div>
    )
}

export default Footer