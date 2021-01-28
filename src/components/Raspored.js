import React from "react";
import '../App.css';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import muzicki from '../photos/Muzicki-Program.jpg'
import vikend from '../photos/vikend.jpg'
import sevdahImg from '../photos/sevdah.jpg'
import amaricaImg from '../photos/amarica.jpg'
import folk from '../photos/folk.jpg'

function Raspored() {
    return (
        <div className="schedule">
            <h1 className="big-title">Raspored</h1>
            <Tabs defaultActiveKey="Ponedjeljak" id="uncontrolled-tab-example" >
                <Tab className="tab-link" eventKey="Ponedjeljak" title="Ponedjeljak">
                    <Container>
                        <div className="schedule-item">
                            <Row>
                                <Col>
                                    <p className="schedule-item-title">Muzički Program</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <img
                                        src={muzicki}
                                        width="200"
                                        height="100"
                                        className="d-inline-block align-top schedule-img"
                                        alt="Radio kapija"
                                    />
                                </Col>
                                <Col xl={6} className="schedule-txt">Najveći hitovi zabavne muzike protkani zanimljivostima i vicevima.</Col>
                                <Col>
                                    <p className="time">00:00</p>
                                    <p className="time">06:00</p>
                                </Col>
                            </Row>
                        </div>

                        <div className="schedule-item">
                            <Row>
                                <Col>
                                    <p className="schedule-item-title">Folk Blok</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <img
                                        src={folk}
                                        width="200"
                                        height="100"
                                        className="d-inline-block align-top schedule-img"
                                        alt="Radio kapija"
                                    />
                                </Col>
                                <Col xl={6} className="schedule-txt">Najveći hitovi narodne muzike.
                            </Col>
                                <Col>
                                    <p className="time">06:00</p>
                                    <p className="time">07:00</p>
                                </Col>
                            
                            </Row>
                        </div>

                        <div className="schedule-item">
                            <Row>
                                <Col>
                                    <p className="schedule-item-title">Muzički Program</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <img
                                        src={muzicki}
                                        width="200"
                                        height="100"
                                        className="d-inline-block align-top schedule-img"
                                        alt="Radio kapija"
                                    />
                                </Col>
                                <Col xl={6} className="schedule-txt">Najveći hitovi zabavne muzike protkani zanimljivostima i vicevima.
                            </Col>
                                <Col>
                                    <p className="time">07:00</p>
                                    <p className="time">13:00</p>
                                </Col>
                            
                            </Row>
                        </div>

                        <div className="schedule-item">
                            <Row>
                                <Col>
                                    <p className="schedule-item-title">Sevdah Time</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <img
                                        src={sevdahImg}
                                        width="200"
                                        height="100"
                                        className="d-inline-block align-top schedule-img"
                                        alt="Radio kapija"
                                    />
                                </Col>
                                <Col xl={6} className="schedule-txt">Najljepse sevdalinke
                            </Col>
                                <Col>
                                    <p className="time">13:00</p>
                                    <p className="time">13:30</p>
                                </Col>
                            
                            </Row>
                        </div>

                        <div className="schedule-item">
                            <Row>
                                <Col>
                                    <p className="schedule-item-title">Muzički Program</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <img
                                        src={muzicki}
                                        width="200"
                                        height="100"
                                        className="d-inline-block align-top schedule-img"
                                        alt="Radio kapija"
                                    />
                                </Col>
                                <Col xl={6} className="schedule-txt">Najveći hitovi zabavne muzike protkani zanimljivostima i vicevima.
                            </Col>
                                <Col>
                                    <p className="time">13:30</p>
                                    <p className="time">20:00</p>
                                </Col>
                            
                            </Row>
                        </div>


                        <div className="schedule-item">
                            <Row>
                                <Col>
                                    <p className="schedule-item-title">Folk Blok</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <img
                                        src={folk}
                                        width="200"
                                        height="100"
                                        className="d-inline-block align-top schedule-img"
                                        alt="Radio kapija"
                                    />
                                </Col>
                                <Col xl={6} className="schedule-txt">Najveći hitovi narodne muzike.
                            </Col>
                                <Col>
                                    <p className="time">20:00</p>
                                    <p className="time">21:00</p>
                                </Col>
                            </Row>
                        </div>


                        <div className="schedule-item">
                            <Row>
                                <Col>
                                    <p className="schedule-item-title">Muzički Program</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <img
                                        src={muzicki}
                                        width="200"
                                        height="100"
                                        className="d-inline-block align-top schedule-img"
                                        alt="Radio kapija"
                                    />
                                </Col>
                                <Col xl={6} className="schedule-txt">Najveći hitovi zabavne muzike protkani zanimljivostima i vicevima.
                            </Col>
                                <Col>
                                    <p className="time">21:00</p>
                                    <p className="time">23:00</p>
                                </Col>
                            </Row>
                        </div>


                        <div className="schedule-item">
                            <Row>
                                <Col>
                                    <p className="schedule-item-title">Sevdah Time</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <img
                                        src={sevdahImg}
                                        width="200"
                                        height="100"
                                        className="d-inline-block align-top schedule-img"
                                        alt="Radio kapija"
                                    />
                                </Col>
                                <Col xl={6} className="schedule-txt">Najljepse sevdalinke
                            </Col>
                                <Col>
                                    <p className="time">23:00</p>
                                    <p className="time">23:30</p>
                                </Col>
                            
                            </Row>
                        </div>


                        
                        <div className="schedule-item">
                            <Row>
                                <Col>
                                    <p className="schedule-item-title">Muzički Program</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <img
                                        src={muzicki}
                                        width="200"
                                        height="100"
                                        className="d-inline-block align-top schedule-img"
                                        alt="Radio kapija"
                                    />
                                </Col>
                                <Col xl={6} className="schedule-txt">Najveći hitovi zabavne muzike protkani zanimljivostima i vicevima.
                            </Col>
                                <Col>
                                    <p className="time">23:30</p>
                                    <p className="time">24:00</p>
                                </Col>
                            </Row>
                        </div>
                        



                    </Container>


























                </Tab>
                <Tab className="tab-link" eventKey="Utorak" title="Utorak">
                    <Container>

                        <div className="schedule-item">
                            <Row>
                                <Col>
                                    <p className="schedule-item-title">Muzički Program</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <img
                                        src={muzicki}
                                        width="200"
                                        height="100"
                                        className="d-inline-block align-top schedule-img"
                                        alt="Radio kapija"
                                    />
                                </Col>
                                <Col xl={6} className="schedule-txt">Najveći hitovi zabavne muzike protkani zanimljivostima i vicevima.</Col>
                                <Col>
                                    <p className="time">00:00</p>
                                    <p className="time">06:00</p>
                                </Col>
                            </Row>
                        </div>



                        <div className="schedule-item">
                            <Row>
                                <Col>
                                    <p className="schedule-item-title">Folk Blok</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <img
                                        src={folk}
                                        width="200"
                                        height="100"
                                        className="d-inline-block align-top schedule-img"
                                        alt="Radio kapija"
                                    />
                                </Col>
                                <Col xl={6} className="schedule-txt">Najveći hitovi narodne muzike.
                            </Col>
                                <Col>
                                    <p className="time">06:00</p>
                                    <p className="time">07:00</p>
                                </Col>
                            </Row>
                        </div>
                
                        <div className="schedule-item">
                            <Row>
                                <Col>
                                    <p className="schedule-item-title">Muzički Program</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <img
                                        src={muzicki}
                                        width="200"
                                        height="100"
                                        className="d-inline-block align-top schedule-img"
                                        alt="Radio kapija"
                                    />
                                </Col>
                                <Col xl={6} className="schedule-txt">Najveći hitovi zabavne muzike protkani zanimljivostima i vicevima.</Col>
                                <Col>
                                    <p className="time">07:00</p>
                                    <p className="time">13:00</p>
                                </Col>
                            </Row>
                        </div>


                        <div className="schedule-item">
                            <Row>
                                <Col>
                                    <p className="schedule-item-title">Sevdah Time</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <img
                                        src={sevdahImg}
                                        width="200"
                                        height="100"
                                        className="d-inline-block align-top schedule-img"
                                        alt="Radio kapija"
                                    />
                                </Col>
                                <Col xl={6} className="schedule-txt">Najljepse sevdalinke
                            </Col>
                                <Col>
                                    <p className="time">13:00</p>
                                    <p className="time">13:30</p>
                                </Col>
                            
                            </Row>
                        </div>



        




                    <div className="schedule-item">
                            <Row>
                                <Col>
                                    <p className="schedule-item-title">Muzički Program</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <img
                                        src={muzicki}
                                        width="200"
                                        height="100"
                                        className="d-inline-block align-top schedule-img"
                                        alt="Radio kapija"
                                    />
                                </Col>
                                <Col xl={6} className="schedule-txt">Najveći hitovi zabavne muzike protkani zanimljivostima i vicevima.</Col>
                                <Col>
                                    <p className="time">13:30</p>
                                    <p className="time">20:00</p>
                                </Col>
                            </Row>
                        </div>


                        <div className="schedule-item">
                            <Row>
                                <Col>
                                    <p className="schedule-item-title">Folk Blok</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <img
                                        src={folk}
                                        width="200"
                                        height="100"
                                        className="d-inline-block align-top schedule-img"
                                        alt="Radio kapija"
                                    />
                                </Col>
                                <Col xl={6} className="schedule-txt">Najveći hitovi narodne muzike.
                            </Col>
                                <Col>
                                    <p className="time">20:00</p>
                                    <p className="time">21:00</p>
                                </Col>
                            </Row>
                        </div>



                        <div className="schedule-item">
                            <Row>
                                <Col>
                                    <p className="schedule-item-title">Muzički Program</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <img
                                        src={muzicki}
                                        width="200"
                                        height="100"
                                        className="d-inline-block align-top schedule-img"
                                        alt="Radio kapija"
                                    />
                                </Col>
                                <Col xl={6} className="schedule-txt">Najveći hitovi zabavne muzike protkani zanimljivostima i vicevima.</Col>
                                <Col>
                                    <p className="time">21:00</p>
                                    <p className="time">23:00</p>
                                </Col>
                            </Row>
                        </div>





                        <div className="schedule-item">
                            <Row>
                                <Col>
                                    <p className="schedule-item-title">Sevdah Time</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <img
                                        src={sevdahImg}
                                        width="200"
                                        height="100"
                                        className="d-inline-block align-top schedule-img"
                                        alt="Radio kapija"
                                    />
                                </Col>
                                <Col xl={6} className="schedule-txt">Najljepse sevdalinke
                            </Col>
                                <Col>
                                    <p className="time">23:00</p>
                                    <p className="time">23:30</p>
                                </Col>
                            
                            </Row>
                        </div>



                        <div className="schedule-item">
                            <Row>
                                <Col>
                                    <p className="schedule-item-title">Muzički Program</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <img
                                        src={muzicki}
                                        width="200"
                                        height="100"
                                        className="d-inline-block align-top schedule-img"
                                        alt="Radio kapija"
                                    />
                                </Col>
                                <Col xl={6} className="schedule-txt">Najveći hitovi zabavne muzike protkani zanimljivostima i vicevima.</Col>
                                <Col>
                                    <p className="time">23:30</p>
                                    <p className="time">24:00</p>
                                </Col>
                            </Row>
                        </div>


                </Container>











                </Tab>
                <Tab className="tab-link" eventKey="Srijeda" title="Srijeda">
                    <Container>

                    <div className="schedule-item">
                            <Row>
                                <Col>
                                    <p className="schedule-item-title">Muzički Program</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <img
                                        src={muzicki}
                                        width="200"
                                        height="100"
                                        className="d-inline-block align-top schedule-img"
                                        alt="Radio kapija"
                                    />
                                </Col>
                                <Col xl={6} className="schedule-txt">Najveći hitovi zabavne muzike protkani zanimljivostima i vicevima.</Col>
                                <Col>
                                    <p className="time">00:00</p>
                                    <p className="time">06:00</p>
                                </Col>
                            </Row>
                        </div>

                        <div className="schedule-item">
                            <Row>
                                <Col>
                                    <p className="schedule-item-title">Folk Blok</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <img
                                        src={folk}
                                        width="200"
                                        height="100"
                                        className="d-inline-block align-top schedule-img"
                                        alt="Radio kapija"
                                    />
                                </Col>
                                <Col xl={6} className="schedule-txt">Najveći hitovi narodne muzike.
                            </Col>
                                <Col>
                                    <p className="time">06:00</p>
                                    <p className="time">07:00</p>
                                </Col>
                            </Row>
                        </div>

                        <div className="schedule-item">
                            <Row>
                                <Col>
                                    <p className="schedule-item-title">Muzički Program</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <img
                                        src={muzicki}
                                        width="200"
                                        height="100"
                                        className="d-inline-block align-top schedule-img"
                                        alt="Radio kapija"
                                    />
                                </Col>
                                <Col xl={6} className="schedule-txt">Najveći hitovi zabavne muzike protkani zanimljivostima i vicevima.</Col>
                                <Col>
                                    <p className="time">07:00</p>
                                    <p className="time">13:00</p>
                                </Col>
                            </Row>
                        </div>

                        <div className="schedule-item">
                            <Row>
                                <Col>
                                    <p className="schedule-item-title">Sevdah Time</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <img
                                        src={sevdahImg}
                                        width="200"
                                        height="100"
                                        className="d-inline-block align-top schedule-img"
                                        alt="Radio kapija"
                                    />
                                </Col>
                                <Col xl={6} className="schedule-txt">Najljepse sevdalinke
                            </Col>
                                <Col>
                                    <p className="time">13:00</p>
                                    <p className="time">13:30</p>
                                </Col>
                            
                            </Row>
                        </div>


                        <div className="schedule-item">
                            <Row>
                                <Col>
                                    <p className="schedule-item-title">Muzički Program</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <img
                                        src={muzicki}
                                        width="200"
                                        height="100"
                                        className="d-inline-block align-top schedule-img"
                                        alt="Radio kapija"
                                    />
                                </Col>
                                <Col xl={6} className="schedule-txt">Najveći hitovi zabavne muzike protkani zanimljivostima i vicevima.</Col>
                                <Col>
                                    <p className="time">13:30</p>
                                    <p className="time">16:00</p>
                                </Col>
                            </Row>
                        </div>



                        <div className="schedule-item">
                            <Row>
                                <Col>
                                    <p className="schedule-item-title">Balkan in Amarica</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <img
                                        src={amaricaImg}
                                        width="200"
                                        height="100"
                                        className="d-inline-block align-top schedule-img"
                                        alt="Radio kapija"
                                    />
                                </Col>
                                <Col xl={6} className="schedule-txt">Trenutno najslušaniji hitovi sa Balkana.</Col>
                                <Col>
                                    <p className="time">16:00</p>
                                    <p className="time">17:00</p>
                                </Col>
                            </Row>
                        </div>


                        <div className="schedule-item">
                            <Row>
                                <Col>
                                    <p className="schedule-item-title">Muzički Program</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <img
                                        src={muzicki}
                                        width="200"
                                        height="100"
                                        className="d-inline-block align-top schedule-img"
                                        alt="Radio kapija"
                                    />
                                </Col>
                                <Col xl={6} className="schedule-txt">Najveći hitovi zabavne muzike protkani zanimljivostima i vicevima.</Col>
                                <Col>
                                    <p className="time">17:00</p>
                                    <p className="time">20:00</p>
                                </Col>
                            </Row>
                        </div>

                        <div className="schedule-item">
                            <Row>
                                <Col>
                                    <p className="schedule-item-title">Folk Blok</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <img
                                        src={folk}
                                        width="200"
                                        height="100"
                                        className="d-inline-block align-top schedule-img"
                                        alt="Radio kapija"
                                    />
                                </Col>
                                <Col xl={6} className="schedule-txt">Najveći hitovi narodne muzike.
                            </Col>
                                <Col>
                                    <p className="time">20:00</p>
                                    <p className="time">21:00</p>
                                </Col>
                            </Row>
                        </div>



                        
                        <div className="schedule-item">
                            <Row>
                                <Col>
                                    <p className="schedule-item-title">Muzički Program</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <img
                                        src={muzicki}
                                        width="200"
                                        height="100"
                                        className="d-inline-block align-top schedule-img"
                                        alt="Radio kapija"
                                    />
                                </Col>
                                <Col xl={6} className="schedule-txt">Najveći hitovi zabavne muzike protkani zanimljivostima i vicevima.</Col>
                                <Col>
                                    <p className="time">21:00</p>
                                    <p className="time">23:00</p>
                                </Col>
                            </Row>
                        </div>



                        <div className="schedule-item">
                            <Row>
                                <Col>
                                    <p className="schedule-item-title">Sevdah Time</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <img
                                        src={sevdahImg}
                                        width="200"
                                        height="100"
                                        className="d-inline-block align-top schedule-img"
                                        alt="Radio kapija"
                                    />
                                </Col>
                                <Col xl={6} className="schedule-txt">Najljepse sevdalinke
                            </Col>
                                <Col>
                                    <p className="time">23:00</p>
                                    <p className="time">23:30</p>
                                </Col>
                            
                            </Row>
                        </div>


                        <div className="schedule-item">
                            <Row>
                                <Col>
                                    <p className="schedule-item-title">Muzički Program</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <img
                                        src={muzicki}
                                        width="200"
                                        height="100"
                                        className="d-inline-block align-top schedule-img"
                                        alt="Radio kapija"
                                    />
                                </Col>
                                <Col xl={6} className="schedule-txt">Najveći hitovi zabavne muzike protkani zanimljivostima i vicevima.</Col>
                                <Col>
                                    <p className="time">23:30</p>
                                    <p className="time">24:00</p>
                                </Col>
                            </Row>
                        </div>


                    </Container>
                </Tab>






















                <Tab className="tab-link" eventKey="Cetvrtak" title="Četvrtak">
                    <Container>

                    <div className="schedule-item">
                            <Row>
                                <Col>
                                    <p className="schedule-item-title">Muzički Program</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <img
                                        src={muzicki}
                                        width="200"
                                        height="100"
                                        className="d-inline-block align-top schedule-img"
                                        alt="Radio kapija"
                                    />
                                </Col>
                                <Col xl={6} className="schedule-txt">Najveći hitovi zabavne muzike protkani zanimljivostima i vicevima.</Col>
                                <Col>
                                    <p className="time">00:00</p>
                                    <p className="time">06:00</p>
                                </Col>
                            </Row>
                        </div>

                        <div className="schedule-item">
                            <Row>
                                <Col>
                                    <p className="schedule-item-title">Folk Blok</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <img
                                        src={folk}
                                        width="200"
                                        height="100"
                                        className="d-inline-block align-top schedule-img"
                                        alt="Radio kapija"
                                    />
                                </Col>
                                <Col xl={6} className="schedule-txt">Najveći hitovi narodne muzike.
                            </Col>
                                <Col>
                                    <p className="time">06:00</p>
                                    <p className="time">07:00</p>
                                </Col>
                            </Row>
                        </div>

                        <div className="schedule-item">
                            <Row>
                                <Col>
                                    <p className="schedule-item-title">Muzički Program</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <img
                                        src={muzicki}
                                        width="200"
                                        height="100"
                                        className="d-inline-block align-top schedule-img"
                                        alt="Radio kapija"
                                    />
                                </Col>
                                <Col xl={6} className="schedule-txt">Najveći hitovi zabavne muzike protkani zanimljivostima i vicevima.</Col>
                                <Col>
                                    <p className="time">07:00</p>
                                    <p className="time">08:00</p>
                                </Col>
                            </Row>
                        </div>

                        <div className="schedule-item">
                            <Row>
                                <Col>
                                    <p className="schedule-item-title">Balkan in Amarica</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <img
                                        src={amaricaImg}
                                        width="200"
                                        height="100"
                                        className="d-inline-block align-top schedule-img"
                                        alt="Radio kapija"
                                    />
                                </Col>
                                <Col xl={6} className="schedule-txt">Trenutno najslušaniji hitovi sa Balkana.</Col>
                                <Col>
                                    <p className="time">08:00</p>
                                    <p className="time">09:00</p>
                                </Col>
                            </Row>
                        </div>


                        
                        <div className="schedule-item">
                            <Row>
                                <Col>
                                    <p className="schedule-item-title">Muzički Program</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <img
                                        src={muzicki}
                                        width="200"
                                        height="100"
                                        className="d-inline-block align-top schedule-img"
                                        alt="Radio kapija"
                                    />
                                </Col>
                                <Col xl={6} className="schedule-txt">Najveći hitovi zabavne muzike protkani zanimljivostima i vicevima.</Col>
                                <Col>
                                    <p className="time">09:00</p>
                                    <p className="time">13:00</p>
                                </Col>
                            </Row>
                        </div>

                        <div className="schedule-item">
                            <Row>
                                <Col>
                                    <p className="schedule-item-title">Sevdah Time</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <img
                                        src={sevdahImg}
                                        width="200"
                                        height="100"
                                        className="d-inline-block align-top schedule-img"
                                        alt="Radio kapija"
                                    />
                                </Col>
                                <Col xl={6} className="schedule-txt">Najljepse sevdalinke
                            </Col>
                                <Col>
                                    <p className="time">13:00</p>
                                    <p className="time">13:30</p>
                                </Col>
                            
                            </Row>
                        </div>

                        <div className="schedule-item">
                            <Row>
                                <Col>
                                    <p className="schedule-item-title">Muzički Program</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <img
                                        src={muzicki}
                                        width="200"
                                        height="100"
                                        className="d-inline-block align-top schedule-img"
                                        alt="Radio kapija"
                                    />
                                </Col>
                                <Col xl={6} className="schedule-txt">Najveći hitovi zabavne muzike protkani zanimljivostima i vicevima.</Col>
                                <Col>
                                    <p className="time">13:30</p>
                                    <p className="time">16:00</p>
                                </Col>
                            </Row>
                        </div>


                        <div className="schedule-item">
                            <Row>
                                <Col>
                                    <p className="schedule-item-title">Balkan in Amarica</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <img
                                        src={amaricaImg}
                                        width="200"
                                        height="100"
                                        className="d-inline-block align-top schedule-img"
                                        alt="Radio kapija"
                                    />
                                </Col>
                                <Col xl={6} className="schedule-txt">Trenutno najslušaniji hitovi sa Balkana.</Col>
                                <Col>
                                    <p className="time">16:00</p>
                                    <p className="time">17:00</p>
                                </Col>
                            </Row>
                        </div>


                        <div className="schedule-item">
                            <Row>
                                <Col>
                                    <p className="schedule-item-title">Muzički Program</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <img
                                        src={muzicki}
                                        width="200"
                                        height="100"
                                        className="d-inline-block align-top schedule-img"
                                        alt="Radio kapija"
                                    />
                                </Col>
                                <Col xl={6} className="schedule-txt">Najveći hitovi zabavne muzike protkani zanimljivostima i vicevima.</Col>
                                <Col>
                                    <p className="time">17:00</p>
                                    <p className="time">20:00</p>
                                </Col>
                            </Row>
                        </div>

                        <div className="schedule-item">
                            <Row>
                                <Col>
                                    <p className="schedule-item-title">Folk Blok</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <img
                                        src={folk}
                                        width="200"
                                        height="100"
                                        className="d-inline-block align-top schedule-img"
                                        alt="Radio kapija"
                                    />
                                </Col>
                                <Col xl={6} className="schedule-txt">Najveći hitovi narodne muzike.
                            </Col>
                                <Col>
                                    <p className="time">20:00</p>
                                    <p className="time">21:00</p>
                                </Col>
                            </Row>
                        </div>



                        <div className="schedule-item">
                            <Row>
                                <Col>
                                    <p className="schedule-item-title">Muzički Program</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <img
                                        src={muzicki}
                                        width="200"
                                        height="100"
                                        className="d-inline-block align-top schedule-img"
                                        alt="Radio kapija"
                                    />
                                </Col>
                                <Col xl={6} className="schedule-txt">Najveći hitovi zabavne muzike protkani zanimljivostima i vicevima.</Col>
                                <Col>
                                    <p className="time">21:00</p>
                                    <p className="time">23:00</p>
                                </Col>
                            </Row>
                        </div>


                        <div className="schedule-item">
                            <Row>
                                <Col>
                                    <p className="schedule-item-title">Sevdah Time</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <img
                                        src={sevdahImg}
                                        width="200"
                                        height="100"
                                        className="d-inline-block align-top schedule-img"
                                        alt="Radio kapija"
                                    />
                                </Col>
                                <Col xl={6} className="schedule-txt">Najljepse sevdalinke
                            </Col>
                                <Col>
                                    <p className="time">23:00</p>
                                    <p className="time">23:30</p>
                                </Col>
                            
                            </Row>
                        </div>


                        <div className="schedule-item">
                            <Row>
                                <Col>
                                    <p className="schedule-item-title">Muzički Program</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <img
                                        src={muzicki}
                                        width="200"
                                        height="100"
                                        className="d-inline-block align-top schedule-img"
                                        alt="Radio kapija"
                                    />
                                </Col>
                                <Col xl={6} className="schedule-txt">Najveći hitovi zabavne muzike protkani zanimljivostima i vicevima.</Col>
                                <Col>
                                    <p className="time">23:30</p>
                                    <p className="time">24:00</p>
                                </Col>
                            </Row>
                        </div>


                    </Container>
                </Tab>



















                <Tab className="tab-link" eventKey="Petak" title="Petak">
                    <Container>

                    <div className="schedule-item">
                            <Row>
                                <Col>
                                    <p className="schedule-item-title">Muzički Program</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <img
                                        src={muzicki}
                                        width="200"
                                        height="100"
                                        className="d-inline-block align-top schedule-img"
                                        alt="Radio kapija"
                                    />
                                </Col>
                                <Col xl={6} className="schedule-txt">Najveći hitovi zabavne muzike protkani zanimljivostima i vicevima.</Col>
                                <Col>
                                    <p className="time">00:00</p>
                                    <p className="time">04:00</p>
                                </Col>
                            </Row>
                        </div>

                        <div className="schedule-item">
                            <Row>
                                <Col>
                                    <p className="schedule-item-title">Balkan in Amarica</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <img
                                        src={amaricaImg}
                                        width="200"
                                        height="100"
                                        className="d-inline-block align-top schedule-img"
                                        alt="Radio kapija"
                                    />
                                </Col>
                                <Col xl={6} className="schedule-txt">Trenutno najslušaniji hitovi sa Balkana.</Col>
                                <Col>
                                    <p className="time">04:00</p>
                                    <p className="time">05:00</p>
                                </Col>
                            </Row>
                        </div>

                        
                    <div className="schedule-item">
                            <Row>
                                <Col>
                                    <p className="schedule-item-title">Muzički Program</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <img
                                        src={muzicki}
                                        width="200"
                                        height="100"
                                        className="d-inline-block align-top schedule-img"
                                        alt="Radio kapija"
                                    />
                                </Col>
                                <Col xl={6} className="schedule-txt">Najveći hitovi zabavne muzike protkani zanimljivostima i vicevima.</Col>
                                <Col>
                                    <p className="time">05:00</p>
                                    <p className="time">06:00</p>
                                </Col>
                            </Row>
                        </div>


                        <div className="schedule-item">
                            <Row>
                                <Col>
                                    <p className="schedule-item-title">Folk Blok</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <img
                                        src={folk}
                                        width="200"
                                        height="100"
                                        className="d-inline-block align-top schedule-img"
                                        alt="Radio kapija"
                                    />
                                </Col>
                                <Col xl={6} className="schedule-txt">Najveći hitovi narodne muzike.
                            </Col>
                                <Col>
                                    <p className="time">06:00</p>
                                    <p className="time">07:00</p>
                                </Col>
                            </Row>
                        </div>

                        <div className="schedule-item">
                            <Row>
                                <Col>
                                    <p className="schedule-item-title">Muzički Program</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <img
                                        src={muzicki}
                                        width="200"
                                        height="100"
                                        className="d-inline-block align-top schedule-img"
                                        alt="Radio kapija"
                                    />
                                </Col>
                                <Col xl={6} className="schedule-txt">Najveći hitovi zabavne muzike protkani zanimljivostima i vicevima.</Col>
                                <Col>
                                    <p className="time">07:00</p>
                                    <p className="time">12:00</p>
                                </Col>
                            </Row>
                        </div>

                        <div className="schedule-item">
                            <Row>
                                <Col>
                                    <p className="schedule-item-title">Opet vikend</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <img
                                        src={vikend}
                                        width="200"
                                        height="100"
                                        className="d-inline-block align-top schedule-img"
                                        alt="Radio kapija"
                                    />
                                </Col>
                                <Col xl={6} className="schedule-txt">Smijeh, šala i zanimljivosti iz svijeta protkani najvećim hitovima zabavne muzike. Garantujemo vam dobru zabavu!
Emisija je zabavnog karaktera, a sa vama se druže Sanela i Damir.</Col>
                                <Col>
                                    <p className="time">12:00</p>
                                    <p className="time">13:30</p>
                                </Col>
                            </Row>
                        </div>


                        <div className="schedule-item">
                            <Row>
                                <Col>
                                    <p className="schedule-item-title">Muzički Program</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <img
                                        src={muzicki}
                                        width="200"
                                        height="100"
                                        className="d-inline-block align-top schedule-img"
                                        alt="Radio kapija"
                                    />
                                </Col>
                                <Col xl={6} className="schedule-txt">Najveći hitovi zabavne muzike protkani zanimljivostima i vicevima.</Col>
                                <Col>
                                    <p className="time">13:30</p>
                                    <p className="time">16:00</p>
                                </Col>
                            </Row>
                        </div>



                        <div className="schedule-item">
                            <Row>
                                <Col>
                                    <p className="schedule-item-title">Balkan in Amarica</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <img
                                        src={amaricaImg}
                                        width="200"
                                        height="100"
                                        className="d-inline-block align-top schedule-img"
                                        alt="Radio kapija"
                                    />
                                </Col>
                                <Col xl={6} className="schedule-txt">Trenutno najslušaniji hitovi sa Balkana.</Col>
                                <Col>
                                    <p className="time">16:00</p>
                                    <p className="time">17:00</p>
                                </Col>
                            </Row>
                        </div>


                        <div className="schedule-item">
                            <Row>
                                <Col>
                                    <p className="schedule-item-title">Muzički Program</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <img
                                        src={muzicki}
                                        width="200"
                                        height="100"
                                        className="d-inline-block align-top schedule-img"
                                        alt="Radio kapija"
                                    />
                                </Col>
                                <Col xl={6} className="schedule-txt">Najveći hitovi zabavne muzike protkani zanimljivostima i vicevima.</Col>
                                <Col>
                                    <p className="time">17:00</p>
                                    <p className="time">20:00</p>
                                </Col>
                            </Row>
                        </div>


                        <div className="schedule-item">
                            <Row>
                                <Col>
                                    <p className="schedule-item-title">Opet vikend</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <img
                                        src={vikend}
                                        width="200"
                                        height="100"
                                        className="d-inline-block align-top schedule-img"
                                        alt="Radio kapija"
                                    />
                                </Col>
                                <Col xl={6} className="schedule-txt">Smijeh, šala i zanimljivosti iz svijeta protkani najvećim hitovima zabavne muzike. Garantujemo vam dobru zabavu!
Emisija je zabavnog karaktera, a sa vama se druže Sanela i Damir.</Col>
                                <Col>
                                    <p className="time">20:00</p>
                                    <p className="time">21:30</p>
                                </Col>
                            </Row>
                        </div>


                        <div className="schedule-item">
                            <Row>
                                <Col>
                                    <p className="schedule-item-title">Muzički Program</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <img
                                        src={muzicki}
                                        width="200"
                                        height="100"
                                        className="d-inline-block align-top schedule-img"
                                        alt="Radio kapija"
                                    />
                                </Col>
                                <Col xl={6} className="schedule-txt">Najveći hitovi zabavne muzike protkani zanimljivostima i vicevima.</Col>
                                <Col>
                                    <p className="time">21:30</p>
                                    <p className="time">23:00</p>
                                </Col>
                            </Row>
                        </div>

                        <div className="schedule-item">
                            <Row>
                                <Col>
                                    <p className="schedule-item-title">Sevdah Time</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <img
                                        src={sevdahImg}
                                        width="200"
                                        height="100"
                                        className="d-inline-block align-top schedule-img"
                                        alt="Radio kapija"
                                    />
                                </Col>
                                <Col xl={6} className="schedule-txt">Najljepse sevdalinke
                            </Col>
                                <Col>
                                    <p className="time">23:00</p>
                                    <p className="time">23:30</p>
                                </Col>
                            
                            </Row>
                        </div>

                        <div className="schedule-item">
                            <Row>
                                <Col>
                                    <p className="schedule-item-title">Muzički Program</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <img
                                        src={muzicki}
                                        width="200"
                                        height="100"
                                        className="d-inline-block align-top schedule-img"
                                        alt="Radio kapija"
                                    />
                                </Col>
                                <Col xl={6} className="schedule-txt">Najveći hitovi zabavne muzike protkani zanimljivostima i vicevima.</Col>
                                <Col>
                                    <p className="time">23:30</p>
                                    <p className="time">24:00</p>
                                </Col>
                            </Row>
                        </div>
                       
                    </Container>
                </Tab>


















                <Tab className="tab-link" eventKey="Subota" title="Subota">
                    <Container>
                    <div className="schedule-item">
                            <Row>
                                <Col>
                                    <p className="schedule-item-title">Muzički Program</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <img
                                        src={muzicki}
                                        width="200"
                                        height="100"
                                        className="d-inline-block align-top schedule-img"
                                        alt="Radio kapija"
                                    />
                                </Col>
                                <Col xl={6} className="schedule-txt">Najveći hitovi zabavne muzike protkani zanimljivostima i vicevima.</Col>
                                <Col>
                                    <p className="time">00:00</p>
                                    <p className="time">04:00</p>
                                </Col>
                            </Row>
                        </div>

                        <div className="schedule-item">
                            <Row>
                                <Col>
                                    <p className="schedule-item-title">Opet vikend</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <img
                                        src={vikend}
                                        width="200"
                                        height="100"
                                        className="d-inline-block align-top schedule-img"
                                        alt="Radio kapija"
                                    />
                                </Col>
                                <Col xl={6} className="schedule-txt">Smijeh, šala i zanimljivosti iz svijeta protkani najvećim hitovima zabavne muzike. Garantujemo vam dobru zabavu!
Emisija je zabavnog karaktera, a sa vama se druže Sanela i Damir.</Col>
                                <Col>
                                    <p className="time">04:00</p>
                                    <p className="time">05:30</p>
                                </Col>
                            </Row>
                        </div>


                        <div className="schedule-item">
                            <Row>
                                <Col>
                                    <p className="schedule-item-title">Muzički Program</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <img
                                        src={muzicki}
                                        width="200"
                                        height="100"
                                        className="d-inline-block align-top schedule-img"
                                        alt="Radio kapija"
                                    />
                                </Col>
                                <Col xl={6} className="schedule-txt">Najveći hitovi zabavne muzike protkani zanimljivostima i vicevima.</Col>
                                <Col>
                                    <p className="time">05:30</p>
                                    <p className="time">06:00</p>
                                </Col>
                            </Row>
                        </div>


                        <div className="schedule-item">
                            <Row>
                                <Col>
                                    <p className="schedule-item-title">Folk Blok</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <img
                                        src={folk}
                                        width="200"
                                        height="100"
                                        className="d-inline-block align-top schedule-img"
                                        alt="Radio kapija"
                                    />
                                </Col>
                                <Col xl={6} className="schedule-txt">Najveći hitovi narodne muzike.
                            </Col>
                                <Col>
                                    <p className="time">06:00</p>
                                    <p className="time">07:00</p>
                                </Col>
                            </Row>
                        </div>

                        <div className="schedule-item">
                            <Row>
                                <Col>
                                    <p className="schedule-item-title">Muzički Program</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <img
                                        src={muzicki}
                                        width="200"
                                        height="100"
                                        className="d-inline-block align-top schedule-img"
                                        alt="Radio kapija"
                                    />
                                </Col>
                                <Col xl={6} className="schedule-txt">Najveći hitovi zabavne muzike protkani zanimljivostima i vicevima.</Col>
                                <Col>
                                    <p className="time">07:00</p>
                                    <p className="time">13:00</p>
                                </Col>
                            </Row>
                        </div>

                        <div className="schedule-item">
                            <Row>
                                <Col>
                                    <p className="schedule-item-title">Sevdah Time</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <img
                                        src={sevdahImg}
                                        width="200"
                                        height="100"
                                        className="d-inline-block align-top schedule-img"
                                        alt="Radio kapija"
                                    />
                                </Col>
                                <Col xl={6} className="schedule-txt">Najljepse sevdalinke
                            </Col>
                                <Col>
                                    <p className="time">13:00</p>
                                    <p className="time">13:30</p>
                                </Col>
                            
                            </Row>
                        </div>

                        <div className="schedule-item">
                            <Row>
                                <Col>
                                    <p className="schedule-item-title">Muzički Program</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <img
                                        src={muzicki}
                                        width="200"
                                        height="100"
                                        className="d-inline-block align-top schedule-img"
                                        alt="Radio kapija"
                                    />
                                </Col>
                                <Col xl={6} className="schedule-txt">Najveći hitovi zabavne muzike protkani zanimljivostima i vicevima.</Col>
                                <Col>
                                    <p className="time">13:30</p>
                                    <p className="time">15:00</p>
                                </Col>
                            </Row>
                        </div>

                        <div className="schedule-item">
                            <Row>
                                <Col>
                                    <p className="schedule-item-title">Opet vikend</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <img
                                        src={vikend}
                                        width="200"
                                        height="100"
                                        className="d-inline-block align-top schedule-img"
                                        alt="Radio kapija"
                                    />
                                </Col>
                                <Col xl={6} className="schedule-txt">Smijeh, šala i zanimljivosti iz svijeta protkani najvećim hitovima zabavne muzike. Garantujemo vam dobru zabavu!
Emisija je zabavnog karaktera, a sa vama se druže Sanela i Damir.</Col>
                                <Col>
                                    <p className="time">15:00</p>
                                    <p className="time">16:30</p>
                                </Col>
                            </Row>
                        </div>


                        <div className="schedule-item">
                            <Row>
                                <Col>
                                    <p className="schedule-item-title">Muzički Program</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <img
                                        src={muzicki}
                                        width="200"
                                        height="100"
                                        className="d-inline-block align-top schedule-img"
                                        alt="Radio kapija"
                                    />
                                </Col>
                                <Col xl={6} className="schedule-txt">Najveći hitovi zabavne muzike protkani zanimljivostima i vicevima.</Col>
                                <Col>
                                    <p className="time">16:30</p>
                                    <p className="time">20:00</p>
                                </Col>
                            </Row>
                        </div>

                        <div className="schedule-item">
                            <Row>
                                <Col>
                                    <p className="schedule-item-title">Folk Blok</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <img
                                        src={folk}
                                        width="200"
                                        height="100"
                                        className="d-inline-block align-top schedule-img"
                                        alt="Radio kapija"
                                    />
                                </Col>
                                <Col xl={6} className="schedule-txt">Najveći hitovi narodne muzike.
                            </Col>
                                <Col>
                                    <p className="time">20:00</p>
                                    <p className="time">21:00</p>
                                </Col>
                            </Row>
                        </div>

                        <div className="schedule-item">
                            <Row>
                                <Col>
                                    <p className="schedule-item-title">Muzički Program</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <img
                                        src={muzicki}
                                        width="200"
                                        height="100"
                                        className="d-inline-block align-top schedule-img"
                                        alt="Radio kapija"
                                    />
                                </Col>
                                <Col xl={6} className="schedule-txt">Najveći hitovi zabavne muzike protkani zanimljivostima i vicevima.</Col>
                                <Col>
                                    <p className="time">21:00</p>
                                    <p className="time">23:00</p>
                                </Col>
                            </Row>
                        </div>

                        <div className="schedule-item">
                            <Row>
                                <Col>
                                    <p className="schedule-item-title">Sevdah Time</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <img
                                        src={sevdahImg}
                                        width="200"
                                        height="100"
                                        className="d-inline-block align-top schedule-img"
                                        alt="Radio kapija"
                                    />
                                </Col>
                                <Col xl={6} className="schedule-txt">Najljepse sevdalinke
                            </Col>
                                <Col>
                                    <p className="time">23:00</p>
                                    <p className="time">23:30</p>
                                </Col>
                            
                            </Row>
                        </div>

                        <div className="schedule-item">
                            <Row>
                                <Col>
                                    <p className="schedule-item-title">Muzički Program</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <img
                                        src={muzicki}
                                        width="200"
                                        height="100"
                                        className="d-inline-block align-top schedule-img"
                                        alt="Radio kapija"
                                    />
                                </Col>
                                <Col xl={6} className="schedule-txt">Najveći hitovi zabavne muzike protkani zanimljivostima i vicevima.</Col>
                                <Col>
                                    <p className="time">23:30</p>
                                    <p className="time">24:00</p>
                                </Col>
                            </Row>
                        </div>
                        
                    </Container>
                </Tab>




















                <Tab className="tab-link" eventKey="Nedjelja" title="Nedjelja">
                    <Container>
                        
                    <div className="schedule-item">
                            <Row>
                                <Col>
                                    <p className="schedule-item-title">Muzički Program</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <img
                                        src={muzicki}
                                        width="200"
                                        height="100"
                                        className="d-inline-block align-top schedule-img"
                                        alt="Radio kapija"
                                    />
                                </Col>
                                <Col xl={6} className="schedule-txt">Najveći hitovi zabavne muzike protkani zanimljivostima i vicevima.</Col>
                                <Col>
                                    <p className="time">00:00</p>
                                    <p className="time">06:00</p>
                                </Col>
                            </Row>
                        </div>
                       
                    <div className="schedule-item">
                            <Row>
                                <Col>
                                    <p className="schedule-item-title">Folk Blok</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <img
                                        src={folk}
                                        width="200"
                                        height="100"
                                        className="d-inline-block align-top schedule-img"
                                        alt="Radio kapija"
                                    />
                                </Col>
                                <Col xl={6} className="schedule-txt">Najveći hitovi narodne muzike.
                            </Col>
                                <Col>
                                    <p className="time">06:00</p>
                                    <p className="time">07:00</p>
                                </Col>
                            </Row>
                        </div>

                        <div className="schedule-item">
                            <Row>
                                <Col>
                                    <p className="schedule-item-title">Muzički Program</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <img
                                        src={muzicki}
                                        width="200"
                                        height="100"
                                        className="d-inline-block align-top schedule-img"
                                        alt="Radio kapija"
                                    />
                                </Col>
                                <Col xl={6} className="schedule-txt">Najveći hitovi zabavne muzike protkani zanimljivostima i vicevima.</Col>
                                <Col>
                                    <p className="time">07:00</p>
                                    <p className="time">09:00</p>
                                </Col>
                            </Row>
                        </div>

                        
                        <div className="schedule-item">
                            <Row>
                                <Col>
                                    <p className="schedule-item-title">Opet vikend</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <img
                                        src={vikend}
                                        width="200"
                                        height="100"
                                        className="d-inline-block align-top schedule-img"
                                        alt="Radio kapija"
                                    />
                                </Col>
                                <Col xl={6} className="schedule-txt">Smijeh, šala i zanimljivosti iz svijeta protkani najvećim hitovima zabavne muzike. Garantujemo vam dobru zabavu!
Emisija je zabavnog karaktera, a sa vama se druže Sanela i Damir.</Col>
                                <Col>
                                    <p className="time">09:00</p>
                                    <p className="time">10:30</p>
                                </Col>
                            </Row>
                        </div>


                        <div className="schedule-item">
                            <Row>
                                <Col>
                                    <p className="schedule-item-title">Muzički Program</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <img
                                        src={muzicki}
                                        width="200"
                                        height="100"
                                        className="d-inline-block align-top schedule-img"
                                        alt="Radio kapija"
                                    />
                                </Col>
                                <Col xl={6} className="schedule-txt">Najveći hitovi zabavne muzike protkani zanimljivostima i vicevima.</Col>
                                <Col>
                                    <p className="time">10:30</p>
                                    <p className="time">13:00</p>
                                </Col>
                            </Row>
                        </div>




                        <div className="schedule-item">
                            <Row>
                                <Col>
                                    <p className="schedule-item-title">Sevdah Time</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <img
                                        src={sevdahImg}
                                        width="200"
                                        height="100"
                                        className="d-inline-block align-top schedule-img"
                                        alt="Radio kapija"
                                    />
                                </Col>
                                <Col xl={6} className="schedule-txt">Najljepse sevdalinke
                            </Col>
                                <Col>
                                    <p className="time">13:00</p>
                                    <p className="time">13:30</p>
                                </Col>
                            
                            </Row>
                        </div>

                        
                        <div className="schedule-item">
                            <Row>
                                <Col>
                                    <p className="schedule-item-title">Muzički Program</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <img
                                        src={muzicki}
                                        width="200"
                                        height="100"
                                        className="d-inline-block align-top schedule-img"
                                        alt="Radio kapija"
                                    />
                                </Col>
                                <Col xl={6} className="schedule-txt">Najveći hitovi zabavne muzike protkani zanimljivostima i vicevima.</Col>
                                <Col>
                                    <p className="time">13:30</p>
                                    <p className="time">20:00</p>
                                </Col>
                            </Row>
                        </div>
                       
                    <div className="schedule-item">
                            <Row>
                                <Col>
                                    <p className="schedule-item-title">Folk Blok</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <img
                                        src={folk}
                                        width="200"
                                        height="100"
                                        className="d-inline-block align-top schedule-img"
                                        alt="Radio kapija"
                                    />
                                </Col>
                                <Col xl={6} className="schedule-txt">Najveći hitovi narodne muzike.
                            </Col>
                                <Col>
                                    <p className="time">20:00</p>
                                    <p className="time">21:00</p>
                                </Col>
                            </Row>
                        </div>



                        <div className="schedule-item">
                            <Row>
                                <Col>
                                    <p className="schedule-item-title">Muzički Program</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <img
                                        src={muzicki}
                                        width="200"
                                        height="100"
                                        className="d-inline-block align-top schedule-img"
                                        alt="Radio kapija"
                                    />
                                </Col>
                                <Col xl={6} className="schedule-txt">Najveći hitovi zabavne muzike protkani zanimljivostima i vicevima.</Col>
                                <Col>
                                    <p className="time">21:00</p>
                                    <p className="time">23:00</p>
                                </Col>
                            </Row>
                        </div>




                        <div className="schedule-item">
                            <Row>
                                <Col>
                                    <p className="schedule-item-title">Sevdah Time</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <img
                                        src={sevdahImg}
                                        width="200"
                                        height="100"
                                        className="d-inline-block align-top schedule-img"
                                        alt="Radio kapija"
                                    />
                                </Col>
                                <Col xl={6} className="schedule-txt">Najljepse sevdalinke
                            </Col>
                                <Col>
                                    <p className="time">23:00</p>
                                    <p className="time">23:30</p>
                                </Col>
                            
                            </Row>
                        </div>

                        <div className="schedule-item">
                            <Row>
                                <Col>
                                    <p className="schedule-item-title">Muzički Program</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <img
                                        src={muzicki}
                                        width="200"
                                        height="100"
                                        className="d-inline-block align-top schedule-img"
                                        alt="Radio kapija"
                                    />
                                </Col>
                                <Col xl={6} className="schedule-txt">Najveći hitovi zabavne muzike protkani zanimljivostima i vicevima.</Col>
                                <Col>
                                    <p className="time">23:30</p>
                                    <p className="time">24:00</p>
                                </Col>
                            </Row>
                        </div>


                    </Container>
                </Tab>

            </Tabs>
        </div>
    );
}

export default Raspored;
