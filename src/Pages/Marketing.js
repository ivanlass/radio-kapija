import React from "react";
import '../App.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { isBrowser } from "react-device-detect";
import Hero from '../components/Hero'

import Ad from "../components/Ad";

function Marketing() {
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
                    <Col xl={9}>
                        <div className="about-section">
                            <h2 className="big-title">CJENOVNIK MARKETING USLUGA</h2>
                            <p className="about-body">Oglašavajte i reklamirajte se u našem programu, na web stranici i društvenim mrežama.</p>
                            <div className="price-section">
                                <h3 className="sm-title">Radio Reklama (do 60 sekundi)</h3>
                                <ul>
                                    <li className="item">
                                        <span className="price-item">30 dana – 12 emitovanja dnevno $300*</span>
                                        <div className="paypal-form">
                                            <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                                                <input type="hidden" name="cmd" value="_s-xclick" />
                                                <input type="hidden" name="hosted_button_id" value="NZ3DGXC2T9RBL" />
                                                <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_paynow_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
                                                <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
                                            </form>
                                        </div>
                                    </li>
                                    <li className="item">
                                        <span className="price-item">60 dana – 12 emitovanja dnevno $550**</span>
                                        <br />
                                        <div className="paypal-form">
                                            <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                                                <input type="hidden" name="cmd" value="_s-xclick" />
                                                <input type="hidden" name="hosted_button_id" value="NZ3DGXC2T9RBL" />
                                                <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_paynow_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
                                                <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
                                            </form>
                                        </div>
                                    </li>
                                    <li className="item">
                                        <span className="price-item">90 dana – 12 emitovanja dnevno $700**</span>
                                        <div className="paypal-form">
                                            <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                                                <input type="hidden" name="cmd" value="_s-xclick" />
                                                <input type="hidden" name="hosted_button_id" value="NZ3DGXC2T9RBL" />
                                                <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_paynow_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
                                                <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
                                            </form>
                                        </div>

                                    </li>
                                </ul>
                                <p>* U cijenu nije uračunato snimanje reklame od $50.</p>
                                <p>** Besplatno snimanje reklame.</p>
                            </div>


                            <div className="price-section">
                                <h3 className="sm-title">Sponzor Emisije</h3>
                                <ul>
                                    <li className="item">
                                        <span className="price-item">3 objave u toku emisije (najava, sredina, odjava) $50</span>
                                        <div className="paypal-form">
                                            <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                                                <input type="hidden" name="cmd" value="_s-xclick" />
                                                <input type="hidden" name="hosted_button_id" value="NZ3DGXC2T9RBL" />
                                                <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_paynow_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
                                                <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
                                            </form>
                                        </div>
                                    </li>
                                    <li className="item">
                                        <span className="price-item">1 objava u toku emisije (najava) $25</span>
                                        <br />
                                        <div className="paypal-form">
                                            <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                                                <input type="hidden" name="cmd" value="_s-xclick" />
                                                <input type="hidden" name="hosted_button_id" value="NZ3DGXC2T9RBL" />
                                                <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_paynow_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
                                                <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
                                            </form>
                                        </div>
                                    </li>
                                </ul>
                            </div>


                            <div className="price-section">
                                <h3 className="sm-title">Oglasi i Obavještenja (do 50 riječi)</h3>
                                <ul>
                                    <li className="item">
                                        <span className="price-item">Čitanje oglasa $10</span>
                                        <div className="paypal-form">
                                            <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                                                <input type="hidden" name="cmd" value="_s-xclick" />
                                                <input type="hidden" name="hosted_button_id" value="NZ3DGXC2T9RBL" />
                                                <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_paynow_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
                                                <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
                                            </form>
                                        </div>
                                    </li>
                                    <li className="item">
                                        <span className="price-item">Čitanje oglasa – 12 puta dnevno / 7 dana $150</span>
                                        <br />
                                        <div className="paypal-form">
                                            <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                                                <input type="hidden" name="cmd" value="_s-xclick" />
                                                <input type="hidden" name="hosted_button_id" value="NZ3DGXC2T9RBL" />
                                                <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_paynow_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
                                                <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
                                            </form>
                                        </div>
                                    </li>
                                </ul>
                            </div>



                            <div className="price-section">
                                <h3 className="sm-title">Website Promocija</h3>
                                <ul>
                                    <li className="item">
                                        <span className="price-item">15 dana – Sekcija Marketing $75</span>
                                        <div className="paypal-form">
                                            <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                                                <input type="hidden" name="cmd" value="_s-xclick" />
                                                <input type="hidden" name="hosted_button_id" value="NZ3DGXC2T9RBL" />
                                                <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_paynow_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
                                                <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
                                            </form>
                                        </div>
                                    </li>
                                    <li className="item">
                                        <span className="price-item">30 dana – Sekcija Marketing $100</span>
                                        <br />
                                        <div className="paypal-form">
                                            <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                                                <input type="hidden" name="cmd" value="_s-xclick" />
                                                <input type="hidden" name="hosted_button_id" value="NZ3DGXC2T9RBL" />
                                                <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_paynow_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
                                                <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
                                            </form>
                                        </div>
                                    </li>

                                    <li className="item">
                                        <span className="price-item">60 dana – Sekcija Marketing $175</span>
                                        <br />
                                        <div className="paypal-form">
                                            <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                                                <input type="hidden" name="cmd" value="_s-xclick" />
                                                <input type="hidden" name="hosted_button_id" value="NZ3DGXC2T9RBL" />
                                                <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_paynow_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
                                                <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
                                            </form>
                                        </div>
                                    </li>

                                    <li className="item">
                                        <span className="price-item">90 dana – Sekcija Marketing $250</span>
                                        <br />
                                        <div className="paypal-form">
                                            <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                                                <input type="hidden" name="cmd" value="_s-xclick" />
                                                <input type="hidden" name="hosted_button_id" value="NZ3DGXC2T9RBL" />
                                                <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_paynow_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
                                                <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
                                            </form>
                                        </div>
                                    </li>
                                </ul>
                            </div>




                            <div className="price-section">
                                <h3 className="sm-title">Društvene Mreže</h3>
                                <ul>
                                    <li className="item">
                                        <span className="price-item">Facebook: 1 objava sa promocijom od 7 dana $100</span>
                                        <div className="paypal-form">
                                            <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                                                <input type="hidden" name="cmd" value="_s-xclick" />
                                                <input type="hidden" name="hosted_button_id" value="NZ3DGXC2T9RBL" />
                                                <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_paynow_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
                                                <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
                                            </form>
                                        </div>
                                    </li>
                                    <li className="item">
                                        <span className="price-item">Instagram: 1 objava sa promocijom od 7 dana $75</span>
                                        <br />
                                        <div className="paypal-form">
                                            <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                                                <input type="hidden" name="cmd" value="_s-xclick" />
                                                <input type="hidden" name="hosted_button_id" value="NZ3DGXC2T9RBL" />
                                                <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_paynow_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
                                                <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
                                            </form>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <p>Za ostale marketing opcije kontaktirajte nas na tel: 949-216-0035 ili e-mail: Radio@RadioKapija.com</p>
                        </div>

                    </Col>
                    <Col xl={3} className="side-ad-col">
                        <Ad placement="side" />
                        <div className="contact-wrapper">
                            <p className="contact">
                                Radio Kapija Los Angeles
                            <br />
                                <br />
                            Tel:<br /> 714-643-2647
                            <br />
                                <br />
                            Marketing:<br /> 949-216-0035
                            <br />
                                <br />
                            E-mail: Radio@RadioKapija.com
</p>
                        </div>

                    </Col>
                </Row>

            </Container>
        </div>
    );
}

export default Marketing;
