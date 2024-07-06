import React from 'react'
import { Appstore, Bag, Bridal, Play, Razorpay, S, Shape22, Shape23, Shape24, Shape25, Telephone, Videoicon, Visa, Whatsapp, Whatsapp1, sale } from '../image'
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
import Accordion from 'react-bootstrap/Accordion';
import { MdOutlineMail } from "react-icons/md";
import { LiaPhoneVolumeSolid } from "react-icons/lia";
import { RiScissorsCutLine } from "react-icons/ri";

function mobilefooter() {
    return (
        <div className='App d_none d_sm_block'>
            <div id='footerContainer' className="Footer">
                    <div className="FooterFirstSectionContainer">
                        <div className="BreakPointContainer">
                            <div className="FooterSecondSectionContainer layout align-center mb-3">
                                <div className="FooterSecondSection BreakPointContainer">
                                <div className="layout align-center justify-space-around full-height">
                                        <div className="align-center justify-center DynamicHeightLoaderFallback">
                                            <img src={Shape22} alt="logo" className='mobile_footer_icon' style={{transform: 'translate(10px, 0px)',}}/>
                                        </div>
                                        <div className="align-center justify-center DynamicHeightLoaderFallback">
                                            <img src={Shape23} alt="logo" className='trick'/>
                                        </div>
                                        <div className="align-center justify-center DynamicHeightLoaderFallback">
                                            <img src={Shape24} alt="logo" className='mobile_footer_icon'/>
                                        </div>
                                        <div className="align-center justify-center DynamicHeightLoaderFallback">
                                            {/* <img src={Shape25} alt="logo" className='mobile_footer_icon'/> */}
                                            <RiScissorsCutLine style={{ fontSize: '55px', color: '#000', padding: '0px' }} className='mobile_footer_icon' />
                                        </div>
                                    </div>
                                    <div className="layout align-center justify-space-around full-height">
                                        <div className="icon_and_text">
                                            <div>
                                                <div className="DynamicHeightLoaderWrapper icon">
                                                    {/* <div className="align-center justify-center DynamicHeightLoaderFallback">
                                                        <img src={Shape22} alt="logo" className='mobile_footer_icon'/>
                                                    </div> */}
                                                </div>
                                            </div>
                                            <div>
                                              <h6 class="bold text-uppercase">24X7 <br/> Customer<br/> Support</h6>
                                            </div>
                                        </div>
                                        <div className="icon_and_text">
                                            <div>
                                                <div className="DynamicHeightLoaderWrapper icon">
                                                    {/* <div className="align-center justify-center DynamicHeightLoaderFallback">
                                                       <img src={Shape23} alt="logo" className='trick'/>
                                                    </div> */}
                                                </div>
                                            </div>
                                            <div>
                                                <h6 class="bold">FREE<br/> SHIPPING</h6>
                                            </div>
                                        </div>
                                        <div className="icon_and_text">
                                            <div>
                                                <div className="DynamicHeightLoaderWrapper icon">
                                                    {/* <div className="align-center justify-center DynamicHeightLoaderFallback">
                                                        <img src={Shape24} alt="logo" className='footer_icon_24'/>
                                                    </div> */}
                                                </div>
                                            </div>
                                            <div>
                                               <h6 class="bold">EASY<br/> RETURNS  &<br/> EXCHANGE</h6>
                                            </div>
                                        </div>
                                        <div className="icon_and_text">
                                            <div>
                                                <div className="DynamicHeightLoaderWrapper icon">
                                                    {/* <div className="align-center justify-center DynamicHeightLoaderFallback">
                                                      <img src={Shape25} alt="logo" className='footer_icon_25'/>
                                                    </div> */}
                                                </div>
                                            </div>
                                            <div>
                                              <h6 class="bold">CUSTOM <br/> FITTINGS</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="BreakPointContainer FooterFirstSection layout wrap">
                            <Accordion className='w-100'>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header> ABOUT US </Accordion.Header>
                                        <Accordion.Body className='layout column'>
                                            <a href=""> PURPLE STYLE LABS </a>
                                            <a href=""> PERNIA’S POP UP SHOW </a>
                                            <a href=""> STUDIO LOCATOR </a>
                                            <a href=""> FIRST LOOK </a>
                                        </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>QUICK LINKS</Accordion.Header>
                                    <Accordion.Body className='layout column'>
                                    <a href=""> BESTSELLERS </a>
                                    <a href=""> EXCLUSIVE </a>
                                    <a href=""> SALE </a>
                                    <a href=""> GIFT CARDS </a>
                                    <a href=""> CELEBRITY CLOSET </a>
                                    <a href=""> PERSONAL STYLING </a>
                                    <a href=""> OCCASIONS </a>
                                    <a href=""> CLIENT DIARIES </a>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>CUSTOMER CARE</Accordion.Header>
                                    <Accordion.Body className='layout column'>
                                    <a href=""> SHIPPING INFORMATION </a>
                                    <a href=""> RETURNS & EXCHANGE </a>
                                    <a href=""> TERMS & CONDITIONS </a>
                                    <a href=""> PRIVACY & COOKIE POLICIES </a>
                                    <a href=""> FAQS </a>
                                    <a href=""> SITE MAP </a>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3">
                                    <Accordion.Header>CONTACT US</Accordion.Header>
                                    <Accordion.Body className='layout column'>
                                        <a href="" className='layout link-container'>
                                                <FiPhone style={{ fontSize: '18px', padding: '0px', marginRight: '5px' }} />
                                                <p className='m-b-0'> 1234567890 </p>
                                        </a>
                                        <a href="" className='layout link-container'>
                                                <MdOutlineMail style={{ fontSize: '18px', padding: '0px', marginRight: '5px' }} />
                                                <p className='m-b-0'> demo@gmail.com </p>
                                        </a>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                            <div className="BreakPointContainer">
                                <div className="FooterThirdSectionContainer layout align-center">
                                    <div className="FooterThirdSection BreakPointContainer">
                                        <div className="align-center justify-center">
                                            <div className="layout column align-center justify-center">
                                                <div className="custom-flex layout column align-center justify-center">
                                                    <div className="FooterThirdSectionLeft text-center">
                                                    <h4 class="bold m-b-5">COMPLETELY SAFE AND SECURE PAYMENT <br/> METHOD</h4>
                                                    <p class="bold m-b-10">We accept Netbanking, all major credit cards.<br/> We also accept orders with cash payment</p>
                                                    </div>
                                                        {/* <div className='text-center'>
                                                            <img src={Razorpay} alt="logo" style={{width: '20%'}}/>
                                                        </div> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                                <div className="custom-flex layout column" style={{overflow: 'hidden',}}>
                                    {/* <h4 className='bold'> GET PERNIA’S POP-UP SHOP APP </h4> */}
                                    {/* <p class="m-b-20">We will send you a link on your Email or Phone, open it on your phone and download the App.</p> */}
                                    {/* <div>
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
                                    </div> */}
                                     <div className="m-t-10 text-center">
                                            <h4 class="bold">FOLLOW US</h4>
                                            <div className="layout align-center justify-content-center SocialMediaLinks">
                                                <a href="" className='m-r-5'>
                                                    <FaFacebookSquare style={{ fontSize: '18px', padding: '0px', marginRight: '5px' }} />
                                                </a>
                                                <a href="" className='m-r-5'>
                                                    <FaInstagram style={{ fontSize: '18px', padding: '0px', marginRight: '5px' }} />
                                                </a>
                                                <a href="" className='m-r-5'>
                                                    <FaTwitter style={{ fontSize: '18px', padding: '0px', marginRight: '5px' }} />
                                                </a>
                                            </div>
                                        </div> 
                                        
                                    {/* <div className="layout row m-t-25 align-center justify-content-center">
                                        
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
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
            <div className="BreakPointContainer mb-4">
                <div className="FooterFourSection align-center footer-bottom">
                    <h1> SHOP ONLINE AT ORAT </h1>
                    <p>
                        <span>With all of India’s Leading designers under one roof and the most diverse range of designer clothes, jewellery and accessories, Pernia’s Pop-Up Shop has got every style covered for you whether you're looking for Indian clothing, Western styles, Contemporary clothing or Formal Silhouettes. Discover the latest designer <a title="Designer Menswear" href="#">Designer Menswear</a> and <a title="Designer Womenswear" href="#">Designer Womenswear</a> from Top Luxury <a title="Indian Fashion Designers" href="#">Indian Fashion Designers</a> like <a title="Anamika Khanna" href="#">Anamika Khanna</a>, <a title="Amit Aggarwal" href="#">Amit Aggarwal</a>, <a title="Anushree Reddy" href="#">Anushree Reddy</a>, <a title="Asal by Abu Sandeep" href="#">Asal by Abu Sandeep</a>, <a title="Anatar Agni " href="#">Anatar Agni </a>, <a title="Babita Malkhani" href="#">Babita Malkhani</a>, <a title="Rohit Bal" href="#">Rohit Bal</a>, <a title="Rohit Gandhi &amp; Rahul Khanna" href="#">Rohit Gandhi &amp; Rahul Khanna</a>, <a title="Siddartha Tytler" href="#">Siddartha Tytler</a>, <a title="Tarun Tahiliani" href="#">Tarun Tahiliani</a>, <a title="Dolly J" href="#">Dolly J</a>, <a title="Gauri and Nainika" href="#">Gauri and Nainika</a>, <a title="Jayanti Reddy" href="#">Jayanti Reddy</a>, <a title="Kalista" href="#">Kalista</a>, <a title="Kiran Uttam Ghosh" href="#">Kiran Uttam Ghosh</a>, <a title="Mahima Mahajan" href="#">Mahima Mahajan</a>, <a title="Mishru" href="#">Mishru</a>, <a title="Namrata Joshipura" href="#">Namrata Joshipura</a>, <a title="Nupur Kanoi" href="#">Nupur Kanoi</a>, <a title="Payal Pratap" href="#">Payal Pratap</a>, <a title="Punit Balana" href="#">Punit Balana</a>, <a title="Rajdeep Ranawat" href="#">Rajdeep Ranawat</a>, <a title="Rajesh Pratap Singh" href="#">Rajesh Pratap Singh</a>, <a title="Ridhi Mehra" href="#">Ridhi Mehra</a>, <a title="Ridhima Bhasin" href="#">Ridhima Bhasin</a>, <a title="Ritu Kumar" href="#">Ritu Kumar</a>, <a title="Gaurav Gupta" href="#">Gaurav Gupta</a>, <a title="Masaba" href="#">Masaba</a>, <a title="Falguni Shane Peacock" href="#">Falguni Shane Peacock</a>, <a title="Manish Malhotra" href="#">Manish Malhotra</a>, <a title="Payal Singhal" href="#">Payal Singhal</a>, <a title="Varun Bahl" href="#">Varun Bahl</a>, <a title="Aartivijay Gupta" href="#">Aartivijay Gupta</a>, <a title="Seema Gujral" href="#">Seema Gujral</a>, <a title="Chhavvi Aggarwal" href="#">Chhavvi Aggarwal</a>, <a title="Disha Kahai" href="#">Disha Kahai</a>, <a title="Nakul Sen" href="#">Nakul Sen</a>, <a title="Gopi Vaid" href="#">Gopi Vaid</a>, <a title="Jade By Monica &amp; Karishma" href="#">Jade By Monica &amp; Karishma</a>, <a title="Julie By Julie Shah" href="#">Julie By Julie Shah</a>, <a title="Vvani by Vani Vats" href="#">Vvani by Vani Vats</a>, <a title="Rocky Star" href="#">Rocky Star</a>, <a title="Anita Dongre" href="#">Anita Dongre</a>, <a title="Papa Don" href="#">Papa Don't Preach by Shubhika</a>, <a title="Gaurav Katta" href="#">Gaurav Katta</a>, <a title="Kunal Rawal" href="#">Kunal Rawal</a>, <a title="Payal Singhal" href="#">Payal Singhal</a>, <a title="Zariin" href="#">Zariin</a>, <a title="Nikasha" href="#">Nikasha</a>, and many more whose designs never go wrong and are always up to the mark with fashion. Pernia’s pop up shop is the best luxury clothing website that offers Straight Off the Runway style, <a title="Designer Resort Wear" href="#">Designer Resort Wear</a>, <a title="Designer Bridal Wear" href="#">Designer Bridal Wear</a>, <a title="Designer Wedding Dresses" href="#">Designer Wedding Dresses</a> and Luxury <a title="Occasions Wear" href="#">Occasions Wear</a> like <a title="Ganesh Chaturthi" href="#">Ganesh Chaturthi</a>, also <a title="Fashion Trends" href="#">Fashion Trends</a> carefully curated to provide you with a wholesome experience and choices at the same time. Additional services to extend your luxury shopping experience include booking appointments for personal styling sessions for wedding functions, <a title="Cocktail Parties" href="#">Cocktail Parties</a>, dinner parties as well curating a special <a title="Bridal Trousseau" href="#">Bridal Trousseau</a> for all the brides-to-be.</span>
                    </p>
                </div>
            </div>
            <div className="footer show-footer">
                <div className="footer-content layout row">
                    <button className='active ripplePsl custom-flex'>
                        <img src={Bag} alt="logo" className='iconNew'/>
                        <p> Shop </p>
                    </button>
                    <button className='ripplePsl custom-flex'>
                        <img src={Videoicon} alt="logo" className='iconNew'/>
                        <p> Video Shopping </p>
                    </button>
                    <button className='ripplePsl custom-flex'>
                        <img src={S} alt="logo" className='iconNew'/>
                        <p> explore </p>
                    </button>
                    <button className='ripplePsl custom-flex'>
                        <img src={Whatsapp1} alt="logo" className='iconNew'/>
                        <p> Whatsapp </p>
                    </button>
                    <button className='ripplePsl custom-flex'>
                        <img src={sale} alt="logo" className='iconNew'/>
                        <p> Sale </p>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default mobilefooter