import React from 'react';
import { BsPen, BsGeoAlt } from 'react-icons/bs';
import { AiOutlineExclamationCircle } from 'react-icons/ai';
import { FaRegThumbsUp } from 'react-icons/fa';
import g1 from '../../assets/g1.png';
import g2 from '../../assets/g2.png';
import g3 from '../../assets/g3.png';
import g4 from '../../assets/g4.png';

const LocationSection = () => {
  const groupNameStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    width: '120px', // Set a fixed width for the group name container
  };

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', position: 'relative', marginBottom: '20px', marginLeft: '30px' }}>
        <BsGeoAlt size={20} style={{ position: 'absolute', top: '50%', left: '0%', transform: 'translateY(-50%)' }} />
        <input
          className='border-bottom border-0 ps-4 py-2'
          type='text'
          placeholder='Enter Your Location'
          style={{
            width: '65%',
            outline: 'none',
            paddingLeft: '30px', // Adjust as needed based on the icon size
          }}
        />
        <BsPen size={20} style={{ position: 'absolute', top: '50%', left: '59%', transform: 'translateY(-50%)' }} />
      </div>

      <div style={{ width: '75%', marginLeft: '25px' }}>
        <p style={{ color: '#5C5C5C' }}>
          <AiOutlineExclamationCircle /> Your location will help us serve better and extend a personalised experience.
        </p>
      </div>

      <div>
        <p className='text-uppercase'>
          <FaRegThumbsUp className='mb-1' /> Recommended Groups
        </p>

        <div className='d-flex align-items-center' style={{ gap: '80px' }}>
          <div style={groupNameStyle}>
            <img src={g1} alt='' />
            <p className='ms-2 mt-2 p-0'>Leisure</p>
          </div>
          <button style={{ fontSize: '12px' }} className='border-0 rounded py-1 px-2 me-0'>
            Follow
          </button>
        </div>

        <div className='d-flex align-items-center' style={{ gap: '80px' }}>
          <div style={groupNameStyle}>
            <img src={g2} alt='' />
            <p className='ms-2 mt-2 p-0'>Activism</p>
          </div>
          <button style={{ fontSize: '12px' }} className='border-0 rounded py-1 px-2 me-0'>
            Follow
          </button>
        </div>

        <div className='d-flex align-items-center' style={{ gap: '80px' }}>
          <div style={groupNameStyle}>
            <img src={g3} alt='' />
            <p className='ms-2 mt-2 p-0'>MBA</p>
          </div>
          <button style={{ fontSize: '12px' }} className='border-0 rounded py-1 px-2 me-5'>
            Follow
          </button>
        </div>

        <div className='d-flex align-items-center' style={{ gap: '80px' }}>
          <div style={groupNameStyle}>
            <img src={g4} alt='' />
            <p className='ms-2 mt-2 p-0'>Philosophy</p>
          </div>
          <button style={{ fontSize: '12px' }} className='border-0 rounded py-1 px-2 me-5'>
            Follow
          </button>
        </div>
      </div>
    </div>
  );
};

export default LocationSection;
