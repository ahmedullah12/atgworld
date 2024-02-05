import React from 'react';
import './GroupBanner.css'
import { FaArrowLeft } from 'react-icons/fa';


const GroupBanner = () => {
    return (
        <div className='w-full mt-2 position-relative mb-3 banner-bg' 

        >
            <div
             className='position-absolute inset-0'
             style={{
             background: 'linear-gradient(rgba(0, 0, 0, 0.45) 45%, rgba(0, 0, 0, 0.6) 60%)',
             height: '100%',
             width: "100%"
             }}
            ></div>
            <div className='container-fluid container-md'>
                <div style={{top: "65%"}} className='position-absolute  left-0 ps-0 ps-md-5'>
                    <h3  className='text-white banner-title'>Computer Engineering</h3>
                    <p  className='text-white banner-text'>142,765 Computer Engineers follow this</p>
                </div>
                <FaArrowLeft
          className='d-block d-md-none position-absolute top-0 start-0 m-3 text-white'
          style={{ fontSize: '24px', cursor: 'pointer' }}
        />
        <button
          className='d-block d-md-none position-absolute top-0 end-0 m-3 btn btn-outline-light'
        >
          Join Group
        </button>
            </div>
        </div>
    );
};

export default GroupBanner;