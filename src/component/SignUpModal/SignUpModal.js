import React from 'react';
import Modal from 'react-bootstrap/Modal';
import authImage from "../../assets/authImage.png"
import fblogo from '../../assets/fblogo.png'
import googlelogo from '../../assets/googlelogo.png';
import { RxCross1 } from "react-icons/rx";


const SignUpModal = (props) => {
  return (
    <div className='position-relative'>
        <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      
    >
        <RxCross1 onClick={props.onHide} size={20} className='position-absolute' style={{color: "white", top: "-6%", right: "0", cursor: 'pointer'}}/>
      <div  style={{ backgroundColor: '#EFFFF4', color: '#008A45', fontSize: '14px', textAlign: "center", paddingTop: "10px" }}>
        <p id="contained-modal-title-vcenter">
        Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼
        </p>
      </div>
      <Modal.Body>
        <div className='d-flex' style={{gap: "40px"}}>
            <div>
                <form action="">
                    <p className='fs-3 fw-bold'>Create Account</p>
                    <input placeholder='First Name' style={{width: '160px', height: "46px", backgroundColor: "#F7F8FA", border: "1px solid #D9D9DB", padding: "10px"}} type="text" name="" id="" />
                    <input placeholder='Last Name' style={{width: '160px', height: "46px", backgroundColor: "#F7F8FA", border: "1px solid #D9D9DB", padding: "10px"}} type="text" name="" id="" /><br />
                    <input placeholder='Email' style={{width: '320px', height: "46px", backgroundColor: "#F7F8FA", border: "1px solid #D9D9DB", padding: "10px"}} type="text" name="" id="" /><br />
                    <input placeholder='Password' style={{width: '320px', height: "46px", backgroundColor: "#F7F8FA", border: "1px solid #D9D9DB", padding: "10px"}} type="text" name="" id="" /><br />
                    <input placeholder='Confirm Password' style={{width: '320px', height: "46px", backgroundColor: "#F7F8FA", border: "1px solid #D9D9DB", padding: "10px"}} type="text" name="" id="" /><br />
                    <button style={{width: "100%", borderRadius: "30px"}} className='btn btn-primary mt-3 mb-4'>Create Account</button>

                    <button style={{width: "100%", backgroundColor: "white", border: "1px solid #D9D9DB", padding: "10px 0px", marginBottom: "10px"}}> <img className='me-2' src={fblogo} alt="" />Sign in with Facebook</button>
                    <button style={{width: "100%", backgroundColor: "white", border: "1px solid #D9D9DB", padding: "10px 0px"}}> <img className='me-2' src={googlelogo} alt="" />Sign in with Google</button>

                </form>
            </div>
            <div>
                <p>Already Have an Account? <span className='text-primary'>Sign In</span></p>
                <img src={authImage} alt="" />
            </div>
        </div>
      </Modal.Body>
      
    </Modal>
    </div>
  );
};

export default SignUpModal;
