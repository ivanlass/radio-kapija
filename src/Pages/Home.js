import React, { useEffect, useState } from "react";
import '../App.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Raspored from "../components/Raspored";
import { isBrowser } from "react-device-detect";
import Hero from "../components/Hero";
import Ad from "../components/Ad";


function Home() {
    const [live, setLive] = useState("")

    useEffect(() => {
        fetch('https://radio-kapija.herokuapp.com/live')
            .then(response => response.json())
            .then(data => setLive(data));

    }, [])

    function createMarkup() {
        return {
            __html: live[0] && live[0].url
        };
    };
    console.log(live)
    return (
        <div className="home-component">
            <Hero />
            <Container fluid className="hero-container">
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
                    <Col>
                        {live && <div dangerouslySetInnerHTML={createMarkup()}></div>}
                    </Col>
                </Row>
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

export default Home;
