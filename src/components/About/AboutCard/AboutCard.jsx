import React from 'react';

// Utils
import {fadeIn} from '../../../utils/animateCss/index';

    export default function AboutCard({name, text, social1, social2, social3}){
    return (
        <div className={`AboutCard ${fadeIn}`}> 
                <div className="AboutCard__image">
                <img src='https://picsum.photos/100' className="AboutCard__image-img"></img>
                </div>
                <div className="AboutCard__text">
                    <h2 className="AboutCard__text-title">{name}</h2>
                    <p>{text}</p>
                </div>
                <div>
                <a href={social1} className="AboutCard__social"><i className="fab fa-linkedin-in"></i></a>
                <a href={social2} className="AboutCard__social"><i className="fab fa-github"></i></a>
                <a href={social3} className="AboutCard__social"><i className="fas fa-user-plus"></i></a>
                </div>
        </div>
    )
}


