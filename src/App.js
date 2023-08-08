import './App.css';
import './custom.scss';
import 'bootstrap/dist/js/bootstrap.min.js';
import React from 'react';
import Helmet from 'helmet';
import Header from "./components/Header";
import DonateApp from "./screens/DonateApp";
import {GoogleOAuthProvider} from "@react-oauth/google";
import {MemoryRouter, Route, Routes} from "react-router-dom";
import AboutUs from "./screens/AboutUs";
import Partners from "./screens/Partners";
import JoinJourney from "./screens/JoinJourney";
import Contact from "./screens/Contact";
import {LinkContainer} from "react-router-bootstrap";
import Nav from "react-bootstrap/Nav";
import {Button} from "react-bootstrap";
import Home from "./screens/Home";

function App() {
    return (
        <div>
            <Helmet>
                <script
                    src="https://maps.googleapis.com/maps/api/js?key=&libraries=places&callback=initMap"
                    type="text/javascript"/>
            </Helmet>
            <GoogleOAuthProvider clientId="386932037035-k8v833noqjk7m4***********.apps.googleusercontent.com">
                <React.StrictMode>
                    <div>
                        <MemoryRouter>
                            <div>
                                <Header></Header>
                                {/*<LinkContainer to="/"><Button>Home</Button></LinkContainer>
                                <LinkContainer to="/about"><Button> About Us</Button></LinkContainer>
                                <LinkContainer to="/partners"><Button>Our partner NGO’s</Button></LinkContainer>
                                <LinkContainer to="/join-journey"><Button>Be a part of the
                                    journey</Button></LinkContainer>
                                <LinkContainer to="/contact"><Button>Contact</Button></LinkContainer>
                                <LinkContainer to="/donate"><Button>Donate</Button></LinkContainer>*/}
                                <Routes>
                                    <Route path="/" element={<Home/>}/>
                                    <Route path="about" element={<AboutUs/>}/>
                                    <Route path="partners" element={<Partners/>}/>
                                    <Route path="join-journey" element={<JoinJourney/>}/>
                                    <Route path="contact" element={<Contact/>}/>
                                    <Route path="donate" element={<DonateApp/>}/>
                                </Routes>
                            </div>
                        </MemoryRouter>
                    </div>
                </React.StrictMode>
            </GoogleOAuthProvider>
        </div>
    );
}

export default App;
