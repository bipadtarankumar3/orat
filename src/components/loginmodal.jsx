import { useState } from 'react';
// import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FaGooglePlusG } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

function LoginModal(props) {
    // const [smShow, setSmShow] = useState(false);
    const [lgShow, setLgShow] = useState(false);

    return (
        <div>
            <Modal
                {...props}
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
                                    <form action="" method="get">
                                        <div className="input-container">
                                            <input name="email" type="email" placeholder="Email" value="" />
                                        </div>
                                        <div className="input-container">
                                            <input name="password" type="password" placeholder="Password" value="" />
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
                            <div onClick={props.onHide} style={{ cursor: 'pointer' }}>
                                <IoClose style={{ width: '30px', height: '32px' }} />
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
       
        </div>
    )
}

export default LoginModal