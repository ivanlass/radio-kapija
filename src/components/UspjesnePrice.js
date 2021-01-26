import React from "react";
import '../App.css';
import uspjesne from '../photos/uspjesne-price.jpg'

function UspjesnePrice() {
    
    
    return (
    <div className="wants">
        <h2 className="success-title">Uspješne Priče</h2>
        <img
        className="d-inline-block align-top img-fluid"
        src={uspjesne}
        alt="Kapija wants you"
        />
        <p className="success-story-txt"> 
<strong >
Vlasnik ste uspješne firme?
        <br />
          Profesionalni ste sportista?  
          <br />
          Želite podijeliti Vaš akademski uspjeh?
          <br />
Medijske ličnosti, glumci/glumice, inovatori, umjetnici, komičari i ostali ...
</strong>

<br />
<br />
Javite nam se na e-mail <strong>Radio@RadioKapija.com</strong> i podijelite sa nama Vašu upsješnu priču koju ćemo emitovati u našem radio programu.
        </p>
    </div >
    );
}

export default UspjesnePrice;


