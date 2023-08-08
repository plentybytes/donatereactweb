import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {GoogleLogin} from "@react-oauth/google";
import {LinkContainer} from 'react-router-bootstrap'
const style = {
    navText: {
        cursor:'pointer',
        padding:'10px'
    }
}

function Header() {
    const responseMessage = (response) => {
        console.log(response);
    };
    const errorMessage = (error) => {
        console.log(error);
    };
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Navbar.Brand href="#home">Donate</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <div>
                        <LinkContainer to="/"><Navbar.Text style={style.navText}>Home</Navbar.Text></LinkContainer>
                        <LinkContainer to="/about"><Navbar.Text style={style.navText}> About Us</Navbar.Text></LinkContainer>
                        <LinkContainer to="/partners"><Navbar.Text style={style.navText}>Our partner NGO’s</Navbar.Text></LinkContainer>
                        <LinkContainer to="/join-journey"><Navbar.Text style={style.navText}>Be a part of the
                            journey</Navbar.Text></LinkContainer>
                        <LinkContainer to="/contact"><Navbar.Text style={style.navText}>Contact</Navbar.Text></LinkContainer>
                        <LinkContainer to="/donate"><Navbar.Text style={style.navText}>Donate</Navbar.Text></LinkContainer>
                    </div>
                </Nav>
            </Navbar.Collapse>
            <GoogleLogin onSuccess={responseMessage} onError={errorMessage}/>
        </Navbar>

    );
}

export default Header;
