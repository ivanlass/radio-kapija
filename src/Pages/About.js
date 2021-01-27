import React from "react";
import '../App.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { isBrowser } from "react-device-detect";
import Hero from "../components/Hero";
import Ad from "../components/Ad";

function About() {
    return (
        <div className="home-component">
            <Hero />
            <Container fluid className="hero-container">
            <br/>
                <Row>
                    {isBrowser ?
                        <>
                            <Col>
                                <Ad placement="top" />
                            </Col>
                        </>

                        :

                        <>
                            <Col >
                                <Ad placement="mobile" />
                            </Col>
                        </>
                    }
                </Row>
            </Container>

            <Container fluid>
                <Row>
                    <Col xl={9}>
                        <div className="about-section">
                            <h1 className="big-title">Tko smo mi?</h1>
                            <p className="about-body">
                                Radio Kapija je osnovana u februaru 2012. godine sa sjedištem u Orange County, California pod sloganom <br /> ” Upali BA radio!”.
                                <br />
                                Naš glavni cilj je da se svi ljudi dobre volje opuste i uživaju u muzici južno-slavenskog govornog područja.  U našem programu možete prvenstveno čuti muziku naše i vaše mladosti.
                                <br />
                                Radio Kapija je nezavisni medij i nije informativno-političkog karaktera.
                            </p>
                        </div>

                    </Col>
                    <Col xl={3} className="side-ad-col">
                        <Ad placement="side" />
                    </Col>
                </Row>

            </Container>
        </div>
    );
}

export default About;
