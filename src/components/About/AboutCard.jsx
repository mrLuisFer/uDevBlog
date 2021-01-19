import React from 'react'

// Utils
import {fadeIn} from '../../utils/animateCss/index';

    export default function AboutCard(props){
    return (
        <div className={fadeIn + 'AboutCard'}>
            <div className="AboutCard__container">
                <div className="AboutCard__image">
                <img src='https://picsum.photos/100' className="AboutCard__image-img"></img>
                </div>
                <div className="AboutCard__text">
                    <h2 className="AboutCard__text-title">{props.name}</h2>
                    <p>Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño.</p>
                </div>
                <div>
                <a href={props.linkedin} className="AboutCard__social"><i className="fab fa-linkedin-in"></i></a>
                <a href={props.instagram} className="AboutCard__social"><i className="fab fa-linkedin-in"></i></a>
                <a href="#" className="AboutCard__social"><i className="fab fa-linkedin-in"></i></a>
                </div>
            </div>
        </div>
    )
}


