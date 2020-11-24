import React from "react";
import '../App.css';
import Hero from '../components/Hero'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ad from '../photos/ad.jpg'
import adHorizontal from '../photos/ad-horizontal.jpg'
import adHorizontalMob from '../photos/adHorizontalMob.png'
import Ad from "../components/Ad";
import { isBrowser } from "react-device-detect";

function VideoArhiv({ videos }) {


    return (
        <>
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
                    <Col xl={9}>
                        <div className="video-section">
                            {videos && videos.map(video => {
                                return (
                                    <div className="video" key={video.id.videoId}>
                                        <p className="video-title" dangerouslySetInnerHTML={{ __html: video.snippet.title }} />
                                        <iframe width="100%" height="200"
                                            src={`https://www.youtube.com/embed/${video.id.videoId}`}>
                                        </iframe>
                                    </div>
                                )
                            })}


                        </div >
                    </Col>
                    <Col xl={3} className="side-ad-col">
                        <Ad ad={ad} />
                    </Col>
                </Row>
            </Container>

        </>
    );
}

export default VideoArhiv;
