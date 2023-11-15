import React from 'react';

const Card = ({title,price}) => {
    return (
        <div className="card">
            <div className="favorite">
                <img src="/img/unlike.svg" alt="unliked"/>
            </div>
            <img width={133} height={112} src="/img/sneakers/image%201.jpg" alt="sneakers"/>
            <h5>{title}</h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span>Цена</span>
                    <b>{price}</b>
                </div>
                <button className="button">
                    <img width={11} height={11} src="/img/plusBtn.svg" alt="sneakers"/>
                </button>
            </div>
        </div>
    );
};

export default Card;