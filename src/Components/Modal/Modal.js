import React from 'react';
import './Modal.css';

import PricingRow from '../PricingRow';
import camp1 from "../../assets/80.png";
import camp2 from "../../assets/camp2.png";
import camp3 from "../../assets/camp3.png";
import camp4 from "../../assets/camp4.png";
import camp5 from "../../assets/camp5.png";
import camp6 from "../../assets/camp6.png";
import camp7 from "../../assets/camp7.png";
import camp8 from "../../assets/camp8.png";
const imageConfig = {
    camp1,
    camp2,
    camp3,
    camp4,
    camp5,
    camp6,
    camp7,
    camp8
}
const Modal = ({ modalData, close, lang }) => {
    const { imageKey, name, region, price } = modalData;
    return <div className="modal">
        <div className="modal-content">
            <div className="modal-top">
                <div className="modal-image">
                    <img src={imageConfig[imageKey]} alt="modal" />
                </div>
                <div className="modal-text">
                    <span className="game-text">{name}</span>
                    <span className="region-text">{region}</span>
                </div>
            </div>
            <h2 className="pricing-heading">{lang ? 'fijación de precios':'Pricing'}</h2>
            {price && price.map((priceItem, index) => 
            <PricingRow lang={lang} key={index} durationText={priceItem.durationText} durationAmount={priceItem.durationAmount} />
            )}
            <button onClick={close} className="close">{lang ? 'CERRAR':'CLOSE'}</button>
        </div>
    </div>
}

export default Modal;