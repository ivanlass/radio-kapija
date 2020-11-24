import React from "react";
import '../App.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Raspored from "../components/Raspored";
import { isBrowser } from "react-device-detect";
import ad from '../photos/ad.jpg'
import adHorizontal from '../photos/ad-horizontal.jpg'
import adHorizontalMob from '../photos/adHorizontalMob.png'
import Hero from "../components/Hero";
import Ad from "../components/Ad";


function Home() {
    return (
        <div className="home-component">
            <Hero />
            <Container fluid className="hero-container">
                <Row>
                    {isBrowser ?
                        <>
                            <Col>
                                <Ad ad={adHorizontal} />
                            </Col>
                        </>

                        :

                        <>
                            <Col >
                                <Ad ad={adHorizontalMob} />
                            </Col>
                        </>
                    }
                </Row>
            </Container>

            <Container fluid>
                <Row>
                    <Col>
                        {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/neV3EPgvZ3g" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
                    </Col>
                </Row>
                <Row>
                    <Col xl={9}>

                        <Raspored />
                    </Col>
                    <Col xl={3} className="side-ad-col">
                        <Ad ad={ad} />
                    </Col>
                </Row>

            </Container>
        </div>
    );
}

export default Home;
