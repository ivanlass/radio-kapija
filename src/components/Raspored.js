import React from "react";
import '../App.css';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import muzicki from '../photos/Muzicki-Program.jpg'
import udriMuski from '../photos/Udri-Muski.jpg'
import vikend from '../photos/vikend.jpg'

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
                                <Col xl={6}>Najveći hitovi zabavne muzike sa Balkana protkani zanimljivostima i vicevima.</Col>
                                <Col>
                                    <p className="time">00:00</p>
                                    <p className="time">22:00</p>
                                </Col>
                            </Row>
                        </div>

                        <div className="schedule-item">
                            <Row>
                                <Col>
                                    <p className="schedule-item-title">Udri Muški</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <img
                                        src={udriMuski}
                                        width="200"
                                        height="100"
                                        className="d-inline-block align-top schedule-img"
                                        alt="Radio kapija"
                                    />
                                </Col>
                                <Col xl={6}>“Udri Muški” je emisija humorističko-edukativnog tipa u produkciji radija Otvorena Mreža.  Jedinstveni jutarnji show koji prenose 54 radio stanice i televizija TV1.
                                Ekipa našeg radija učestvuje u emisiji sa javljanjima uživo iz našeg studija u Los Angelesu.
                                U programu Radio Kapije od nedjelje do četvrtka sa početkom u 22:00 sata po lokalnom vremenu u Los Angelesu.
                            </Col>
                                <Col>
                                    <p className="time">22:00</p>
                                    <p className="time">00:00</p>
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
                                <Col xl={6}>Najveći hitovi zabavne muzike sa Balkana protkani zanimljivostima i vicevima.</Col>
                                <Col>
                                    <p className="time">00:00</p>
                                    <p className="time">22:00</p>
                                </Col>
                            </Row>
                        </div>

                        <div className="schedule-item">
                            <Row>
                                <Col>
                                    <p className="schedule-item-title">Udri Muški</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <img
                                        src={udriMuski}
                                        width="200"
                                        height="100"
                                        className="d-inline-block align-top schedule-img"
                                        alt="Radio kapija"
                                    />
                                </Col>

                                <Col xl={6}>“Udri Muški” je emisija humorističko-edukativnog tipa u produkciji radija Otvorena Mreža.  Jedinstveni jutarnji show koji prenose 54 radio stanice i televizija TV1.
                                Ekipa našeg radija učestvuje u emisiji sa javljanjima uživo iz našeg studija u Los Angelesu.
                                U programu Radio Kapije od nedjelje do četvrtka sa početkom u 22:00 sata po lokalnom vremenu u Los Angelesu.
                            </Col>
                                <Col>
                                    <p className="time">22:00</p>
                                    <p className="time">00:00</p>
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

                                <Col xl={6}>Najveći hitovi zabavne muzike sa Balkana protkani zanimljivostima i vicevima.</Col>
                                <Col>
                                    <p className="time">00:00</p>
                                    <p className="time">22:00</p>
                                </Col>
                            </Row>
                        </div>

                        <div className="schedule-item">
                            <Row>
                                <Col>
                                    <p className="schedule-item-title">Udri Muški</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <img
                                        src={udriMuski}
                                        width="200"
                                        height="100"
                                        className="d-inline-block align-top schedule-img"
                                        alt="Radio kapija"
                                    />
                                </Col>
                                <Col xl={6}>“Udri Muški” je emisija humorističko-edukativnog tipa u produkciji radija Otvorena Mreža.  Jedinstveni jutarnji show koji prenose 54 radio stanice i televizija TV1.
                                Ekipa našeg radija učestvuje u emisiji sa javljanjima uživo iz našeg studija u Los Angelesu.
                                U programu Radio Kapije od nedjelje do četvrtka sa početkom u 22:00 sata po lokalnom vremenu u Los Angelesu.
                            </Col>
                                <Col>
                                    <p className="time">22:00</p>
                                    <p className="time">00:00</p>
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
                                <Col xl={6}>Najveći hitovi zabavne muzike sa Balkana protkani zanimljivostima i vicevima.</Col>
                                <Col>
                                    <p className="time">00:00</p>
                                    <p className="time">22:00</p>
                                </Col>
                            </Row>
                        </div>

                        <div className="schedule-item">
                            <Row>
                                <Col>
                                    <p className="schedule-item-title">Udri Muški</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <img
                                        src={udriMuski}
                                        width="200"
                                        height="100"
                                        className="d-inline-block align-top schedule-img"
                                        alt="Radio kapija"
                                    />
                                </Col>
                                <Col xl={6}>“Udri Muški” je emisija humorističko-edukativnog tipa u produkciji radija Otvorena Mreža.  Jedinstveni jutarnji show koji prenose 54 radio stanice i televizija TV1.
                                Ekipa našeg radija učestvuje u emisiji sa javljanjima uživo iz našeg studija u Los Angelesu.
                                U programu Radio Kapije od nedjelje do četvrtka sa početkom u 22:00 sata po lokalnom vremenu u Los Angelesu.
                            </Col>
                                <Col>
                                    <p className="time">22:00</p>
                                    <p className="time">00:00</p>
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
                                <Col xl={6}>Najveći hitovi zabavne muzike sa Balkana protkani zanimljivostima i vicevima.</Col>
                                <Col>
                                    <p className="time">00:00</p>
                                    <p className="time">12:00</p>
                                </Col>
                            </Row>
                        </div>

                        <div className="schedule-item">
                            <Row>
                                <Col>
                                    <p className="schedule-item-title">Opet Vikend</p>
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
                                <Col xl={6}>Smijeh, šala i zanimljivosti iz svijeta protkani najvećim hitovima zabavne muzike. Garantujemo vam dobru zabavu!
                                Emisija je zabavnog karaktera, a sa vama se druže Sanela i Damir.
                                Opet Vikend slušajte uživo na www.RadioKapija.com i frekvencijama radija Otvorena Mreža (Sarajevo 106.2 MHz, Mostar 94.0 MHz, Jajce 98.3 MHz, Konjic 98.4 MHz, Banja Luka 101.4 MHz, Tuzla 102.1 MHz, Srebrenica 105.6 MHz, Trebinje 106.4 MHz, Bihać 107.4 MHz) svakog petka tačno u podne po lokalnom vremenu u Los Angelesu.
                            </Col>
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

                                <Col xl={6}>Najveći hitovi zabavne muzike sa Balkana protkani zanimljivostima i vicevima.</Col>
                                <Col>
                                    <p className="time">13:30</p>
                                    <p className="time">20:00</p>
                                </Col>
                            </Row>
                        </div>

                        <div className="schedule-item">
                            <Row>
                                <Col>
                                    <p className="schedule-item-title">Opet Vikend</p>
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
                                <Col xl={6}>Smijeh, šala i zanimljivosti iz svijeta protkani najvećim hitovima zabavne muzike. Garantujemo vam dobru zabavu!
                                Emisija je zabavnog karaktera, a sa vama se druže Sanela i Damir.
                                Opet Vikend slušajte uživo na www.RadioKapija.com i frekvencijama radija Otvorena Mreža (Sarajevo 106.2 MHz, Mostar 94.0 MHz, Jajce 98.3 MHz, Konjic 98.4 MHz, Banja Luka 101.4 MHz, Tuzla 102.1 MHz, Srebrenica 105.6 MHz, Trebinje 106.4 MHz, Bihać 107.4 MHz) svakog petka tačno u podne po lokalnom vremenu u Los Angelesu.
                            </Col>
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
                                <Col xl={6}>Najveći hitovi zabavne muzike sa Balkana protkani zanimljivostima i vicevima.</Col>
                                <Col>
                                    <p className="time">21:30</p>
                                    <p className="time">00:00</p>
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
                                <Col xl={6}>Najveći hitovi zabavne muzike sa Balkana protkani zanimljivostima i vicevima.</Col>
                                <Col>
                                    <p className="time">00:00</p>
                                    <p className="time">04:00</p>
                                </Col>
                            </Row>
                        </div>

                        <div className="schedule-item">
                            <Row>
                                <Col>
                                    <p className="schedule-item-title">Opet Vikend</p>
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
                                <Col xl={6}>Smijeh, šala i zanimljivosti iz svijeta protkani najvećim hitovima zabavne muzike. Garantujemo vam dobru zabavu!
                                Emisija je zabavnog karaktera, a sa vama se druže Sanela i Damir.
                                Opet Vikend slušajte uživo na www.RadioKapija.com i frekvencijama radija Otvorena Mreža (Sarajevo 106.2 MHz, Mostar 94.0 MHz, Jajce 98.3 MHz, Konjic 98.4 MHz, Banja Luka 101.4 MHz, Tuzla 102.1 MHz, Srebrenica 105.6 MHz, Trebinje 106.4 MHz, Bihać 107.4 MHz) svakog petka tačno u podne po lokalnom vremenu u Los Angelesu.
                            </Col>
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

                                <Col xl={6}>Najveći hitovi zabavne muzike sa Balkana protkani zanimljivostima i vicevima.</Col>
                                <Col>
                                    <p className="time">05:30</p>
                                    <p className="time">15:00</p>
                                </Col>
                            </Row>
                        </div>

                        <div className="schedule-item">
                            <Row>
                                <Col>
                                    <p className="schedule-item-title">Opet Vikend</p>
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
                                <Col xl={6}>Smijeh, šala i zanimljivosti iz svijeta protkani najvećim hitovima zabavne muzike. Garantujemo vam dobru zabavu!
                                Emisija je zabavnog karaktera, a sa vama se druže Sanela i Damir.
                                Opet Vikend slušajte uživo na www.RadioKapija.com i frekvencijama radija Otvorena Mreža (Sarajevo 106.2 MHz, Mostar 94.0 MHz, Jajce 98.3 MHz, Konjic 98.4 MHz, Banja Luka 101.4 MHz, Tuzla 102.1 MHz, Srebrenica 105.6 MHz, Trebinje 106.4 MHz, Bihać 107.4 MHz) svakog petka tačno u podne po lokalnom vremenu u Los Angelesu.
                            </Col>
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
                                <Col xl={6}>Najveći hitovi zabavne muzike sa Balkana protkani zanimljivostima i vicevima.</Col>
                                <Col>
                                    <p className="time">16:30</p>
                                    <p className="time">00:00</p>
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
                                <Col xl={6}>Najveći hitovi zabavne muzike sa Balkana protkani zanimljivostima i vicevima.</Col>
                                <Col>
                                    <p className="time">00:00</p>
                                    <p className="time">09:00</p>
                                </Col>
                            </Row>
                        </div>

                        <div className="schedule-item">
                            <Row>
                                <Col>
                                    <p className="schedule-item-title">Opet Vikend</p>
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

                                <Col xl={6}>Smijeh, šala i zanimljivosti iz svijeta protkani najvećim hitovima zabavne muzike. Garantujemo vam dobru zabavu!
                                Emisija je zabavnog karaktera, a sa vama se druže Sanela i Damir.
                                Opet Vikend slušajte uživo na www.RadioKapija.com i frekvencijama radija Otvorena Mreža (Sarajevo 106.2 MHz, Mostar 94.0 MHz, Jajce 98.3 MHz, Konjic 98.4 MHz, Banja Luka 101.4 MHz, Tuzla 102.1 MHz, Srebrenica 105.6 MHz, Trebinje 106.4 MHz, Bihać 107.4 MHz) svakog petka tačno u podne po lokalnom vremenu u Los Angelesu.
                            </Col>
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

                                <Col xl={6}>Najveći hitovi zabavne muzike sa Balkana protkani zanimljivostima i vicevima.</Col>
                                <Col>
                                    <p className="time">10:30</p>
                                    <p className="time">22:00</p>
                                </Col>
                            </Row>
                        </div>

                        <div className="schedule-item">
                            <Row>
                                <Col>
                                    <p className="schedule-item-title">Opet Vikend</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <img
                                        src={udriMuski}
                                        width="200"
                                        height="100"
                                        className="d-inline-block align-top schedule-img"
                                        alt="Radio kapija"
                                    />
                                </Col>
                                <Col xl={6}>Smijeh, šala i zanimljivosti iz svijeta protkani najvećim hitovima zabavne muzike. Garantujemo vam dobru zabavu!
                                Emisija je zabavnog karaktera, a sa vama se druže Sanela i Damir.
                                Opet Vikend slušajte uživo na www.RadioKapija.com i frekvencijama radija Otvorena Mreža (Sarajevo 106.2 MHz, Mostar 94.0 MHz, Jajce 98.3 MHz, Konjic 98.4 MHz, Banja Luka 101.4 MHz, Tuzla 102.1 MHz, Srebrenica 105.6 MHz, Trebinje 106.4 MHz, Bihać 107.4 MHz) svakog petka tačno u podne po lokalnom vremenu u Los Angelesu.
                            </Col>
                                <Col>
                                    <p className="time">22:00</p>
                                    <p className="time">00:00</p>
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
