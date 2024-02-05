import React from 'react';
import { Button, Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import joinIcon from '../../assets/join-icon.png';
import { IoMdArrowDropdown } from "react-icons/io";
import GroupPosts from './GroupPosts';
import LocationSection from './LocationSection';
import './GroupPostsSection.css'
import { BsFilter } from 'react-icons/bs';

const GroupPostsSection = () => {
    return (
        <div className='container-fluid container-md'>
            <div className="d-block d-md-none d-flex justify-content-between align-items-center p-3">
                <div className="text-start">
                    <p className="m-0 fw-bold">Posts(368)</p>
                </div>

                <div className="text-end">
                    <Button variant="secondary">Filter: All <IoMdArrowDropdown/></Button>
                </div>
            </div>
            <div className='d-none d-md-block ps-0 ps-md-5 position-relative'>
                <Nav  variant="underline" defaultActiveKey="/home">
                    <Nav.Item style={{zIndex: "100"}}>
                        <Nav.Link  href="/home">All Posts(32)</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link  className='text-secondary' eventKey="link-1">Article</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className='text-secondary' eventKey="link-2">Event</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className='text-secondary' eventKey="link-3">Education</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className='text-secondary' eventKey="link-4">Job</Nav.Link>
                    </Nav.Item>
                    <div style={{marginRight: "7%"}} className="ms-auto">
                        <Button className='me-4' variant="secondary">Write a Post <IoMdArrowDropdown/></Button>
                        <Button variant="primary">
                        <img src={joinIcon} alt="Join Icon" className="me-2" />
                            Join Group</Button>
                    </div>
                </Nav>
                <div style={{width: "100%", position: "absolute", bottom: "0", zIndex: "0"}}>
                    <div  style={{height: "1px", width: "90%", backgroundColor: "#E0E0E0"}}></div>
                </div>

                
            </div>
                {/* posts */}
            <div className='row ps-0 ps-md-5 mt-4'>
                <div className="p-0 col-md-8">
                    <GroupPosts></GroupPosts>
                </div>
                <div className="col-md-4 d-none d-md-block"><LocationSection></LocationSection></div>
            </div>
        </div>
    );
};

export default GroupPostsSection;