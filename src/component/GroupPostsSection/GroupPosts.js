import React from 'react';
import post1 from '../../assets/post1.png';
import post2 from '../../assets/post2.png';
import post3 from '../../assets/post3.png';
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { FaRegEye } from "react-icons/fa";
import { CiShare2 } from "react-icons/ci";
import user1 from '../../assets/user1.png'
import user2 from '../../assets/user2.png'
import user3 from '../../assets/user3.png'
import user4 from '../../assets/user4.png'
import { Dropdown } from 'react-bootstrap';
import { MdDateRange } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { PiBagSimpleLight } from "react-icons/pi";


const GroupPosts = () => {
    return (
        <div>
            {/* post 1 */}
            <div className=' rounded pb-4 mb-3 post'>
                <img src={post1} style={{width: "100%", height: "220px"}} alt="" />
                <h6 style={{fontSize: "18px", margin: "20px 0 10px 20px"}}>Article</h6>
                <div className='row' style={{marginLeft: "20px"}}>
                    <h4 className='col-10 p-0 post-title' >What if famous brands had regular fonts? Meet RegulaBrands!</h4>
                    <Dropdown className='col-2 text-end'>
                        <Dropdown.Toggle 
                            variant="success" 
                                style={{
                                    background: 'none', 
                                    borderColor: 'transparent',
                                    boxShadow: 'none',
                                    padding: "0",
                                }}
                        >
                            <HiOutlineDotsHorizontal style={{color: "black"}} id="dropdown-basic" size={20} />
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Edit</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Report</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Option 3</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                <p className='p-0 post-text' style={{color: "#5C5C5C", marginLeft: "20px"}}>I’ve worked in UX for the better part of a decade. From now on, I plan to rei…</p>
                <div className='row p-0' style={{marginLeft: "20px"}}>
                    <div className='col-8 d-flex align-items-center p-0'>
                        <img  src={user1} alt="" />
                        <div>
                            <p className='ms-2 mt-2 fw-bold mb-0 mb-md-3'>Sarthak Kamra</p>
                            <p className='d-block d-md-none ms-2 p-0 me-5'><FaRegEye /> 1.4k views</p>
                        </div>
                    </div>
                    <div className='col-4 d-flex align-items-center'>
                        <p className='d-none d-md-block ms-2 mt-2 me-5'><FaRegEye /> 1.4k views</p>
                        <button style={{ backgroundColor: "#EDEEF0", border: "0", padding: "7px 10px" }}>
                            <CiShare2 className='pb-1' size={20} />
                        </button>
                    </div>
                </div>
            </div>
            {/* post 2 */}
            <div className='border rounded pb-4 mb-3 post'>
                <img src={post2} style={{width: "100%", height: "220px"}} alt="" />
                <h6 style={{fontSize: "18px", margin: "20px 0 10px 20px"}}>Education</h6>
                <div className='row' style={{marginLeft: "20px"}}>
                    <h4 className='col-10 p-0 post-title' >Tax Benefits for Investment under National Pension Scheme launched by Government</h4>
                    <Dropdown className='col-2 text-end'>
                        <Dropdown.Toggle 
                            variant="success" 
                                style={{
                                    background: 'none', 
                                    borderColor: 'transparent',
                                    boxShadow: 'none',
                                    padding: "0",
                                }}
                        >
                            <HiOutlineDotsHorizontal style={{color: "black"}} id="dropdown-basic" size={20} />
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Edit</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Report</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Option 3</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                <p className='p-0 post-text' style={{ color: "#5C5C5C", marginLeft: "20px"}}>I’ve worked in UX for the better part of a decade. From now on, I plan to rei…</p>
                <div className='row p-0' style={{marginLeft: "20px"}}>
                    <div className='col-8 d-flex align-items-center p-0'>
                        <img  src={user2} alt="" />
                        <div>
                            <p className='ms-2 mt-2 fw-bold mb-0 mb-md-3'>Sarthak Kamra</p>
                            <p className='d-block d-md-none ms-2 p-0 me-5'><FaRegEye /> 1.4k views</p>
                        </div>
                    </div>
                    <div className='col-4 d-flex align-items-center'>
                        <p className='d-none d-md-block ms-2 mt-2 me-5'><FaRegEye /> 1.4k views</p>
                        <button style={{ backgroundColor: "#EDEEF0", border: "0", padding: "7px 10px" }}>
                            <CiShare2 className='pb-1' size={20} />
                        </button>
                    </div>
                </div>
            </div>
            {/* post 3 */}
            <div className='border rounded pb-4 mb-3 post' >
                <img src={post3} style={{width: "100%", height: "220px"}} alt="" />
                <h6 style={{fontSize: "18px", margin: "20px 0 10px 20px"}}>Meetup</h6>
                <div className='row' style={{marginLeft: "20px"}}>
                    <h4 className='col-10 p-0 post-title' >Tax Benefits for Investment under National Pension Scheme launched by Government</h4>
                    <Dropdown className='col-2 text-end'>
                        <Dropdown.Toggle 
                            variant="success" 
                                style={{
                                    background: 'none', 
                                    borderColor: 'transparent',
                                    boxShadow: 'none',
                                    padding: "0",
                                }}
                        >
                            <HiOutlineDotsHorizontal style={{color: "black"}} id="dropdown-basic" size={20} />
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Edit</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Report</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Option 3</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                <div className='d-flex'>
                    <p className='p-0 fw-semibold' style={{fontSize: "15px", color: "black", marginLeft: "20px"}}><MdDateRange className='mb-1'/> Fri, 12 Oct, 2018</p>
                    <p className='p-0 fw-semibold' style={{fontSize: "15px", color: "black", marginLeft: "50px"}}><IoLocationOutline className='mb-1'/> Ahmedabad, India</p>
                </div>
                <div className='d-flex justify-content-center my-3'>
                    <button className='border' style={{width: "90%", padding: "9px 0", borderRadius: "10px", backgroundColor: "white", color: "#E56135"}}>Visit Website</button>
                </div>
                <div className='row p-0' style={{marginLeft: "20px"}}>
                    <div className='col-8 d-flex align-items-center p-0'>
                        <img  src={user3} alt="" />
                        <div>
                            <p className='ms-2 mt-2 fw-bold mb-0 mb-md-3'>Sarthak Kamra</p>
                            <p className='d-block d-md-none ms-2 p-0 me-5'><FaRegEye /> 1.4k views</p>
                        </div>
                    </div>
                    <div className='col-4 d-flex align-items-center'>
                        <p className='d-none d-md-block ms-2 mt-2 me-5'><FaRegEye /> 1.4k views</p>
                        <button style={{ backgroundColor: "#EDEEF0", border: "0", padding: "7px 10px" }}>
                            <CiShare2 className='pb-1' size={20} />
                        </button>
                    </div>
                </div>
            </div>
            <div className='border rounded pb-4 mb-3 post' >
                <h6 style={{fontSize: "18px", margin: "20px 0 10px 20px"}}>Job</h6>
                <div className='row' style={{marginLeft: "20px"}}>
                    <h4 className='col-10 p-0 post-title'>Software Developer</h4>
                    <Dropdown className='col-2 text-end'>
                        <Dropdown.Toggle 
                            variant="success" 
                                style={{
                                    background: 'none', 
                                    borderColor: 'transparent',
                                    boxShadow: 'none',
                                    padding: "0",
                                }}
                        >
                            <HiOutlineDotsHorizontal style={{color: "black"}} id="dropdown-basic" size={20} />
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Edit</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Report</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Option 3</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                <div className='d-flex'>
                    <p className='p-0 fw-semibold' style={{fontSize: "15px", color: "black", marginLeft: "20px"}}><PiBagSimpleLight className='mb-1'/>
                          Innovaccer Analytics Private Ltd.
                    </p>
                    <p className='p-0 fw-semibold' style={{fontSize: "15px", color: "black", marginLeft: "50px"}}><IoLocationOutline className='mb-1'/>Noida, India</p>
                </div>
                <div className='d-flex justify-content-center my-3'>
                    <button className='border' style={{width: "90%", padding: "9px 0", borderRadius: "10px", backgroundColor: "white", color: "#02B875"}}>Apply on Timesjobs</button>
                </div>
                <div className='row p-0' style={{marginLeft: "20px"}}>
                    <div className='col-8 d-flex align-items-center p-0'>
                        <img  src={user4} alt="" />
                        <div>
                            <p className='ms-2 mt-2 fw-bold mb-0 mb-md-3'>Sarthak Kamra</p>
                            <p className='d-block d-md-none ms-2 p-0 me-5'><FaRegEye /> 1.4k views</p>
                        </div>
                    </div>
                    <div className='col-4 d-flex align-items-center'>
                        <p className='d-none d-md-block ms-2 mt-2 me-5'><FaRegEye /> 1.4k views</p>
                        <button style={{ backgroundColor: "#EDEEF0", border: "0", padding: "7px 10px" }}>
                            <CiShare2 className='pb-1' size={20} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GroupPosts;