import React, { useState, useEffect } from "react";
import '../App.css';
import cover from '../photos/cover.jpg'

function Ad(props) {
    return (
        <div >
            <img
                width="100%"
                src={props.ad}
                className="d-inline-block align-top img-fluid"
                alt="Radio kapija"
            />
        </div >
    );
}

export default Ad;
