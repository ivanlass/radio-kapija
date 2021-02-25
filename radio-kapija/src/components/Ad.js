import React, { useContext } from "react";
import '../App.css';
import Carousel from 'react-bootstrap/Carousel'
import top from '../photos/ad-horizontal.jpg'
import mobile from '../photos/adHorizontalMob.jpg'
import side from '../photos/ad.jpg'
import { BannersContext } from "../Context/BannersContext";
import { useHistory } from "react-router-dom";

function Ad(props) {
    const [banners, setBanners] = useContext(BannersContext)

    const history = useHistory();

    const pushToMarketing = () => history.push("/marketing");

    return (
        <div >
            {banners.length > 0 ? <Carousel controls={false} indicators={false} interval={8000}>
                {banners && banners.map(banner => {
                    if (banner.placement === props.placement) {
                        return (<Carousel.Item>
                            <a href={banner.link}>
                                <img
                                    className="d-inline-block align-top img-fluid"
                                    src={banner.path.url}
                                    alt={banner.path.url}
                                />
                            </a>
                        </Carousel.Item>
                        )
                    }
                })}

            </Carousel>

        :
                (() => {
                    switch (props.placement) {
                        case "top": return <img
                            onClick={ pushToMarketing}
                            width="100%"
                            src={top}
                            className="d-inline-block align-top img-fluid"
                            alt="Radio kapija"
                        />;
                        case "mobile": return <img
                            onClick={pushToMarketing}
                            width="100%"
                            src={mobile}
                            className="d-inline-block align-top img-fluid"
                            alt="Radio kapija"
                        />;
                        default: return <img
                            onClick={pushToMarketing}
                            width="100%"
                            src={side}
                            className="d-inline-block align-top img-fluid"
                            alt="Radio kapija"
                        />;
                    }
                })()

            }
        </div >
    );
}

export default Ad;


