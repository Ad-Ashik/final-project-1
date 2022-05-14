import React from 'react';

const InfoCard = ({ img, cardTitle, cardDes, bgColor }) => {
    return (
        <div className={`card lg:card-side bg-base-100 shadow-xl px-8 pt-5 ${bgColor}`}>
            <figure><img src={img} alt="Album" /></figure>
            <div className="card-body text-white">
                <h2 className="card-title">{cardTitle}</h2>
                <p>{cardDes}</p>
            </div>
        </div>
    );
};

export default InfoCard;