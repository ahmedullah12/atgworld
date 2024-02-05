import React from 'react';
import bgImage from '../../assets/group-banner.png'
import { Container } from 'react-bootstrap';


const GroupBanner = () => {
    return (
        <div className='w-full mt-2 position-relative mb-3' style={{backgroundImage: `url(${bgImage})`, height: "420px"}}>
            <div
             className='position-absolute inset-0'
             style={{
             background: 'linear-gradient(rgba(0, 0, 0, 0.45) 45%, rgba(0, 0, 0, 0.6) 60%)',
             height: '100%',
             width: "100%"
             }}
            ></div>
            <Container>
            <div style={{top: "65%"}} className='position-absolute  left-0 ps-5'>
                <h3 style={{fontSize: "36px", }} className='text-white'>Computer Engineering</h3>
                <p style={{fontSize: "18px"}} className='text-white'>142,765 Computer Engineers follow this</p>
            </div>
            </Container>
        </div>
    );
};

export default GroupBanner;