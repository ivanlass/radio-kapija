import React, { useState, useEffect } from "react";
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
import { Container } from "react-bootstrap";

export default function Navigation() {
    const [videos, setVideos] = useState('')
    useEffect(() => {
        fetch('https://radio-kapija.herokuapp.com/api')
            .then(response => response.json())
            .then(data => {
                const videoData = data[0].data.items
                videoData.shift()
                setVideos(videoData)
            });

    }, [])

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
                                    <Nav.Link><Link to="/about" className="nav-link-black">O NAMA</Link></Nav.Link>
                                    <Nav.Link ><Link to="/marketing" className="nav-link-black">KONTAKT / MARKETING</Link></Nav.Link>
                                    <Nav.Link><Link to="/video" className="nav-link-black">VIDEO ARHIV</Link></Nav.Link>
                                </Nav>
                            </div>
                        </Container>
                    </Navbar.Collapse>

                </Navbar>




                <Switch>
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