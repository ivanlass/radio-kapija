import React, { useState, useEffect, useContext } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import '../App.css'
import About from "../Pages/About";
import Home from "../Pages/Home";
import Marketing from '../Pages/Marketing'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import logo from '../photos/logo.png'
import VideoArhiv from '../Pages/VideoArhiv'
import Thanks from '../Pages/Thanks'
import Schedule from '../Pages/Schedule'
import { Container } from "react-bootstrap";
import { BannersContext } from "../Context/BannersContext";
import radiosvg from '../photos/radio.svg'

export default function Navigation() {
    const [videos, setVideos] = useState('')
    const [banners, setBanners] = useContext(BannersContext)


    useEffect(() => {
        fetch('https://radio-kapija.herokuapp.com/api')
            .then(response => response.json())
            .then(data => {
                const videoData = data[0].data.items
                videoData.shift()
                setVideos(videoData)
            });

        fetch('https://radio-kapija.herokuapp.com/banners')
            .then(response => response.json())
            .then(data => { setBanners(data) });

    }, [])

    const openChat= () => {window.open("http://s1.voscast.com:7470/;",'_blank')}

    return (

        <>
            <Router>
                <Navbar className="navigacija" expand="lg">
                    <img
                        src={logo}
                        width="70"
                        height="60"
                        className="d-inline-block align-top"
                        alt="Radio kapija"
                    />
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Container>
                            <div className="nav-wrapper">
                                <Nav className="nav">
                                    <Nav.Link ><Link to="/" className="nav-link-black">HOME</Link></Nav.Link>
                                    <Nav.Link ><Link to="/schedule" className="nav-link-black">RASPORED</Link></Nav.Link>
                                    <Nav.Link><Link to="/about" className="nav-link-black">O NAMA</Link></Nav.Link>
                                    <Nav.Link ><Link to="/marketing" className="nav-link-black">KONTAKT / MARKETING</Link></Nav.Link>
                                    <Nav.Link><Link to="/video" className="nav-link-black">VIDEO ARHIV</Link></Nav.Link>
                                    <Nav.Link><Link onClick={openChat}  className="nav-link-black"><img src={radiosvg}/></Link></Nav.Link>
                                </Nav>
                            </div>
                        </Container>
                    </Navbar.Collapse>

                </Navbar>




                <Switch>
                <Route path="/thanks">
                        <Thanks />
                    </Route>
                    <Route path="/schedule">
                        <Schedule />
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/marketing">
                        <Marketing />
                    </Route>
                    <Route
                        path='/video'
                        render={(props) => (
                            <VideoArhiv {...props} videos={videos} />
                        )}
                    />
                    <Route exact path="/">
                        <Home />
                    </Route>
                </Switch>
            </Router>
        </>
    );
}