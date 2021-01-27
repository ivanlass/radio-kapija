import React from "react";
import '../App.css';
import android from '../photos/android.JPG'
import ios from '../photos/ios.JPG'

function MobileApps() {
    return (
    
    <div className="apps">
        <h5>Preuzmite našu aplikaciju</h5>
        <a href="https://play.google.com/store/apps/details?id=com.ebprogramming.radiokapija">Android</a>
        <img
        className="d-inline-block align-top img-fluid"
        src={android}
        alt="android"
        />
        <br/>
        <br/>

<a href="https://apps.apple.com/us/app/radio-kapija/id599324788">iOS</a>
        <img
        className="d-inline-block align-top img-fluid"
        src={ios}
        alt="iOS"
        />
    </div>
    );
}
export default MobileApps;
