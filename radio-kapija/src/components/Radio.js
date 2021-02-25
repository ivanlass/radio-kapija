import React, { useState, useEffect } from "react";
import '../App.css';


function Radio() {
    const [play, setPlay] = useState(true)
    const [range, setRange] = useState(10)
    const [song, setSong] = useState('')


    useEffect(() => {
        fetch('https://radio-kapija.herokuapp.com/')
            .then(response => response.json())
            .then(data => setSong(data.songtitle));

    }, [])


    setInterval(function () {
        fetch('https://radio-kapija.herokuapp.com/')
            .then(response => response.json())
            .then(data => {
                setSong(data.songtitle)
                document.title = data.songtitle
            });

    }, 40000);

    //volume handler
    const handleChange = (e) => {
        setRange(e.target.value)
        //divide by 10 because input range is 0-10 and volume expect values from 0-1
        document.getElementById('PlayStream').volume = e.target.value / 10
    }

    console.log(song)

    return (

        <div className="radio-wrapper">
            <div className="radio-title-wrapper">
                <p className="radio-title">Radio Kapija</p>
                <p className="radio-title-song">{song}</p>
            </div>
            {play && <audio id="PlayStream" loop={true} autoPlay={true} src="http://s1.voscast.com:7470/;"></audio>}

            <button onClick={() => setPlay(!play)} className="play-btn">
                {play ?
                    <svg width="22" height="30" viewBox="0 0 22 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="8" height="30" rx="1" fill="#E2E2E2" />
                        <rect x="14" width="8" height="30" rx="1" fill="#E2E2E2" />
                    </svg>
                    :
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.34386 7.02717V31.4611C1.34386 32.1127 31.4264 18.2668 31.2768 16.9636C31.1271 15.6605 1.49353 1.16302 1.34386 1.48881C1.1942 1.81459 1.34386 7.02717 1.34386 7.02717Z" fill="#E2E2E2" />
                        <path d="M1.34386 7.02717C1.34386 7.02717 1.34386 30.8095 1.34386 31.4611M1.34386 7.02717C1.34386 7.02717 1.1942 1.81459 1.34386 1.48881C1.49353 1.16302 31.1271 15.6605 31.2768 16.9636C31.4264 18.2668 1.34386 32.1127 1.34386 31.4611M1.34386 7.02717V31.4611" stroke="#E2E2E2" />
                    </svg>
                }
            </button>

            <input className="slider" type="range" min="0" max="10" value={range} onChange={handleChange}></input>
        </div>
    );
}
export default Radio;
