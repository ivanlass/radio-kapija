import React from "react";
import '../App.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { isBrowser } from "react-device-detect";
import Hero from "../components/Hero";
import Ad from "../components/Ad";
import Raspored from "../components/Raspored";

function Schedule() {
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
                        <Raspored />

                    </Col>
                    <Col xl={3} className="side-ad-col">
                        <Ad placement="side" />
                    </Col>
                </Row>

            </Container>
        </div>
    );
}

export default Schedule;
