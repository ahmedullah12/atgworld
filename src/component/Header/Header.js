import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/logo.png'
import { Form, FormControl, InputGroup } from 'react-bootstrap';
import { IoMdArrowDropdown, IoMdSearch } from "react-icons/io";
import { TbTriangleInvertedFilled } from "react-icons/tb";
import { FaCircle } from "react-icons/fa6";
import { PiRectangleFill } from "react-icons/pi";
import { useState } from 'react';
import SignInModal from '../SignInModal/SignInModal';
import SignUpModal from '../SignUpModal/SignUpModal';

function Header() {
  const [modalShow, setModalShow] = useState(false);
  const [registerModalShow, setRegisterModalShow] = useState(false);
  return (
    <Navbar className="bg-white ">
      <Container className='d-none d-md-flex'>
        <Navbar.Brand href="#home">
          <img src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-center mt-2">
          <Form className="d-flex" style={{ width: '360px' }}>
            <InputGroup style={{position: "relative"}}>
            
                <FormControl
                  placeholder="Search for your favorite groups in ATG"
                  aria-label="Search"
                  aria-describedby="basic-addon1"
                  style={{width: "360px", height: "42px",borderRadius: "21px", paddingLeft: "40px", backgroundColor: "#F2F2F2"}}
                />
                <IoMdSearch style={{position: "absolute", top: "10px", left: "10px"}} size={25}></IoMdSearch>
            </InputGroup>
          </Form>
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end" style={{ maxWidth: '200px' }}>
          <Navbar.Text onClick={() => setModalShow(true)} className='text-black' style={{cursor: "pointer"}}>
            Create Account. <span className='text-primary'>Its Free <IoMdArrowDropdown/></span>
          </Navbar.Text>
        </Navbar.Collapse>
        <SignInModal show={modalShow} onHide={() => setModalShow(false)}/>
      </Container>
      <div className='d-flex align-items-center d-md-none ms-auto me-2' style={{gap: "10px"}}>
        <p className='m-0' onClick={() => setModalShow(true)}> Sign In</p>
        <p className='m-0' onClick={() => setRegisterModalShow(true)}> Sign Up</p>
        <SignUpModal show={registerModalShow} onHide={() => setRegisterModalShow(false)}></SignUpModal>
        <SignInModal show={modalShow} onHide={() => setModalShow(false)}/>
        <PiRectangleFill size={20} style={{color: "#868E96"}}/>
        <FaCircle  style={{color: "#868E96"}}/>
        <TbTriangleInvertedFilled style={{color: "#868E96"}}/>
      </div>
    </Navbar>
  );
}

export default Header;