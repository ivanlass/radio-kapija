import React, { useState, useEffect } from "react";
import '../App.css';
import cover from '../photos/cover.jpg'

function Hero() {
    return (
        <div >
            <img
                src={cover}
                height="100%"
                className="d-inline-block align-top img-fluid"
                alt="Radio kapija"
            />
        </div >
    );
}

export default Hero;
