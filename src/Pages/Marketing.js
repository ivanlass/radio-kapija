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
                        <h2 className="big-title">CJENOVNIK MARKETING USLUGA</h2>
                        <p className="about-body">Oglašavajte i reklamirajte se u našem programu, na web stranici i društvenim mrežama.</p>
                        <div className="price-section">
                            <h3 className="sm-title">Radio Reklama</h3>
                            <ul>
                                <li className="item">
                                    <span className="price-item">30 dana – 6 emit $497*</span>
                                    <div className="paypal-form">
                                        <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                                            <input type="hidden" name="cmd" value="_s-xclick" />
                                            <input type="hidden" name="hosted_button_id" value="XP5KKG57KXYXG" />
                                            <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
                                            <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
                                        </form>
                                    </div>
                                </li>
                                <li className="item">
                                    <span className="price-item">60 dana – 8 emit $797**</span>
                                    <br />
                                    <div className="paypal-form">
                                        <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                                            <input type="hidden" name="cmd" value="_s-xclick"/>
                                            <input type="hidden" name="hosted_button_id" value="CKQ6HS7QB3FS6"/>
                                            <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"/>
                                            <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"/>
                                        </form>
                                    </div>
                                </li>
                                <li className="item">
                                    <span className="price-item">90 dana – 10 emit $997**</span>
                                    <div className="paypal-form">
                                        <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                                            <input type="hidden" name="cmd" value="_s-xclick"/>
                                            <input type="hidden" name="hosted_button_id" value="TQFW85QZWZ9B2"/>
                                            <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"/>
                                            <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"/>
                                            </form>
                                    </div>
                                    
                                </li>
                            </ul>
                            <p>* U cijenu nije uračunato snimanje reklame od $197.</p>
                            <p>** Besplatno snimanje reklame.</p>
                        </div>
                        
                        
                        <div className="price-section">
                            <h3 className="sm-title">Sponzor Emisije</h3>
                            <ul>
                                <li className="item">
                                    <span className="price-item">Sponzor Emisije – 3 objave $150</span>
                                    <div className="paypal-form">
                                        <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                                            <input type="hidden" name="cmd" value="_s-xclick"/>
                                            <input type="hidden" name="hosted_button_id" value="RJK4BCVH98XTL"/>
                                            <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"/>
                                            <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"/>
                                            </form>
                                    </div>
                                </li>
                                <li className="item">
                                    <span className="price-item">Sponzor Emisije – 1 objava $100</span>
                                    <br />
                                    <div className="paypal-form">
                                        <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                                            <input type="hidden" name="cmd" value="_s-xclick"/>
                                            <input type="hidden" name="hosted_button_id" value="U68YMLAS8KK8E"/>
                                            <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"/>
                                            <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"/>
                                            </form>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        
                        
                        <div className="price-section">
                            <h3 className="sm-title">Oglasi i Obavještenja (do 60 riječi)</h3>
                            <ul>
                                <li className="item">
                                    <span className="price-item">Oglasi – Čitanje Oglasa 1x $20</span>
                                    <div className="paypal-form">
                                        <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                                            <input type="hidden" name="cmd" value="_s-xclick"/>
                                            <input type="hidden" name="hosted_button_id" value="RZCF5A2W49JXE"/>
                                            <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"/>
                                            <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"/>
                                            </form>
                                    </div>
                                </li>
                                <li className="item">
                                    <span className="price-item">Oglasi – Čitanje Oglasa dva puta dnevno 10 dana $200</span>
                                    <br />
                                    <div className="paypal-form">
                                        <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                                            <input type="hidden" name="cmd" value="_s-xclick"/>
                                            <input type="hidden" name="hosted_button_id" value="3KZCRCUMHSPHG"/>
                                            <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"/>
                                            <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"/>
                                            </form>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        
                        
                        
                        <div className="price-section">
                            <h3 className="sm-title">Website Promocija</h3>
                            <ul>
                                <li className="item">
                                    <span className="price-item">Website Promo – 15 dana $149</span>
                                    <div className="paypal-form">
                                        <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                                            <input type="hidden" name="cmd" value="_s-xclick"/>
                                            <input type="hidden" name="hosted_button_id" value="PZYJQM6Q4AASS"/>
                                            <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"/>
                                            <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"/>
                                            </form>
                                    </div>
                                </li>
                                <li className="item">
                                    <span className="price-item">Website Promo – 30 dana $249</span>
                                    <br />
                                    <div className="paypal-form">
                                        <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                                            <input type="hidden" name="cmd" value="_s-xclick"/>
                                            <input type="hidden" name="hosted_button_id" value="R95P36DUQT68Y"/>
                                            <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"/>
                                            <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"/>
                                            </form>
                                    </div>
                                </li>
                                
                                <li className="item">
                                    <span className="price-item">Website Promo – 60 dana $349</span>
                                    <br />
                                    <div className="paypal-form">
                                        <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                                            <input type="hidden" name="cmd" value="_s-xclick"/>
                                            <input type="hidden" name="hosted_button_id" value="4RZJVS2WCHVSG"/>
                                            <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"/>
                                            <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"/>
                                            </form>
                                    </div>
                                </li>
                                
                                <li className="item">
                                    <span className="price-item">Website Promo – 90 dana $449</span>
                                    <br />
                                    <div className="paypal-form">
                                        <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                                            <input type="hidden" name="cmd" value="_s-xclick"/>
                                            <input type="hidden" name="hosted_button_id" value="RCPVJRLUCTTNQ"/>
                                            <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"/>
                                            <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"/>
                                            </form>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        
                        
                        
                        
                        <div className="price-section">
                            <h3 className="sm-title">Društvene Mreže</h3>
                            <ul>
                                <li className="item">
                                    <span className="price-item">Facebook Promo - $99</span>
                                    <div className="paypal-form">
                                        <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                                            <input type="hidden" name="cmd" value="_s-xclick"/>
                                            <input type="hidden" name="hosted_button_id" value="F64K6BUYF8G4G"/>
                                            <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"/>
                                            <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"/>
                                            </form>
                                    </div>
                                </li>
                                <li className="item">
                                    <span className="price-item">Instagram Promo - $79</span>
                                    <br />
                                    <div className="paypal-form">
                                        <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                                            <input type="hidden" name="cmd" value="_s-xclick"/>
                                            <input type="hidden" name="hosted_button_id" value="9P8FKTPDBMJ62"/>
                                            <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"/>
                                            <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"/>
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
                            <br/>
                            <br/>
                            <a href="https://www.youtube.com/user/RadioKapija" target="_blank">Youtube</a>
                        </p>
                    </div>
                    
                </Col>
            </Row>
            
        </Container>
    </div>
    );
}

export default Marketing;
