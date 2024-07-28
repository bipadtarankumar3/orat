import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../Redux/features/User/userSlice';


import Modal from 'react-bootstrap/Modal';
import { FaGooglePlusG } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

import {  NavLink, useNavigate } from 'react-router-dom';
import ScaleLoader from "react-spinners/ScaleLoader";
import { doTokenLogin,doLogin,getToken } from '../auth/auth';
import { userLogin } from '../services/User-service';


import {ToastContainer,toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';



function LoginModal({showModal,modalHide}) {
    const [smShow, setSmShow] = useState(false);
    const [lgShow, setLgShow] = useState(false);

    const [loginDetails,setLoginDetail] = useState({
        email:'',
        password:''
    });

    
  let [loading, setLoading] = useState(false);
  let [color] = useState("#ffffff");


//     let navigate = useNavigate();

//     const handelChange = (event,field) =>{
//         let actualValue = event.target.value;
//         setLoginDetail({
//             ...loginDetails,
//             [field]:actualValue
//         });
//     }


//     const userFormSubmit = (event) =>{
//         event.preventDefault();

//         // console.log(getToken());return

//         if (loginDetails.email === '') {
   
//                 toast.error("User name is required!!");
//                 return;
//         }
//         if (loginDetails.password === '') {
//                 toast.error("User password is required!!");
//                 return;
//         }

//         setLoading(true);

//         userLogin(loginDetails).then((data)=>{
//             console.log(data);
//             doTokenLogin(data.data,()=>{
//                 console.log('Local daa saved');
//             });
//             doLogin(data.data,()=>{
//                 console.log('Local data saved');
//             });
//             toast.success(data.message);

//             // navigate('otp_confiem');
//             setLoading(false);
//         }).catch(error=>{
//             console.log(error.status);
//             toast.error('Something went wrong');
//         })


//     }

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { userInfo, status, error } = useSelector((state) => state.user);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(loginUser({ email, password }));
        
    };

    useEffect(() => {
        // console.log(userInfo);
        if (userInfo) {
            // dispatch(fetchCart());
            // dispatch(fetchWishlist());
            navigate('/'); // Redirect to the homepage or dashboard after login
            modalHide();
        }
    }, [userInfo, dispatch, navigate]);


    return (
        <div>
            <Modal
                 show={showModal} 
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Body className='CredentialsModal login'>
                    <div className="layout">
                        <div className="flex xs4 offset-xs1">
                            <div className="layout">
                                <div>
                                    <h3 className="demi-bold p-b-20">User Login</h3>
                                    <h4 className="font-normal">For Existing Customers</h4>
                                    <form  onSubmit={handleSubmit}>
                                        <div className="input-container">
                                            <input name="email"  value={email}
            onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" />
                                        </div>
                                        <div className="input-container">
                                            <input name="password"  type="password"  value={password}
            onChange={(e) => setPassword(e.target.value)}  placeholder="Password" />
                                        </div>
                                        <div class="m-b-10">
                                            <button type="button" class="btn-icon ForgotPasswordLink font-normal text-left p-l-0 pernia-color-hover">Forgot your password?</button>
                                        </div>
                                        <div className="layout align-center justify-center p-t-5">
                                            <button className='btn-pernia-primary flex' type='submit'> Login </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="flex xs4 offset-xs1 layout xl5">
                            <div className="SocialLoginLinks layout column justify-start">
                                <div>
                                    <h4 class="font-normal">Log in from Google or Facebook</h4>
                                    <div className="layout">
                                        <button class="btn-pernia-secondry SocialBtnGoogle flex demi-bold">
                                            <FaGooglePlusG className="SocialBtnIcon" style={{ width: '20px', height: '20px', marginRight: '6px' }} />
                                            LOGIN WITH GOOGLE
                                        </button>
                                    </div>
                                    <div className="layout">
                                        <button class="btn-pernia-secondry SocialBtnFacebook flex demi-bold">
                                            <FaFacebookF className="SocialBtnIcon" style={{ width: '20px', height: '16px', marginRight: '5px' }} />
                                            LOGIN WITH FACEBOOK
                                        </button>
                                    </div>
                                </div>
                                <div className="layout OtherActions align-end">
                                    <p>Don’t have an account?</p>
                                    <button class="btn-icon font-normal pernia-color-hover" onClick={() => setLgShow(true)}>Sign Up</button>
                                </div>
                            </div>
                        </div>
                        <div className="flex xs4 offset-xs1">
                            <div onClick={modalHide} style={{ cursor: 'pointer' }}>
                                <IoClose style={{ width: '30px', height: '32px' }} />
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
            <ToastContainer />

                {
                    loading &&  <ScaleLoader
                        color={color}
                        loading={loading}
                        size={250}
                        aria-label="Loading Spinner"
                        data-testid="loader"
                        className='my_spanner'
                    />
                }
        </div>
    )
}

export default LoginModal