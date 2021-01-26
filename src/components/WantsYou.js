import React from "react";
import '../App.css';
import kapijaWantsYouImg from '../photos/kapija-wants.png'

function WantsYou() {
    
    
    return (
    <div className="wants">
        <img
        className="d-inline-block align-top img-fluid"
        src={kapijaWantsYouImg}
        alt="Kapija wants you"
        />
        <p className="wants-txt"> 
            Tim Radio Kapije čini ekipa mladih i motivisanih ljudi koji strastveno uživaju i vole ono što rade.
            Ako misliš da imaš dobar glas i/ili ideju za radio emisiju, kontaktiraj ekipu našeg radija.  
            Pozivamo sve zainteresovane i motivisane koji žele uzeti aktivno učešće u realizaciji radio programa i 
            web stranice Radio Kapije da nam se jave na e-mail Radio@RadioKapija.com.
        </p>
    </div >
    );
}

export default WantsYou;


