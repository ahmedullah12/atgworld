import React from 'react';
import { Button, Container, Navbar } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import joinIcon from '../../assets/join-icon.png';
import { IoMdArrowDropdown } from "react-icons/io";
import GroupPosts from './GroupPosts';

const GroupPostsSection = () => {
    return (
        <Container>
            <div className='ps-5 position-relative'>
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
            <div className='row ps-5 mt-4'>
                <div className="col-md-8">
                    <GroupPosts></GroupPosts>
                </div>
                <div className="col-md-4">Location</div>
            </div>
        </Container>
    );
};

export default GroupPostsSection;