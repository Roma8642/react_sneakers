import React, {useState} from 'react';

const Header = (props) => {

    return (
        <header className="d-flex justify-between align-center">
            <div className="d-flex align-center">
                <img src ="/img/logo.svg" alt="logo"/>
                <div>
                    <h3 className="text-uppercase">REACT SNEAKERS</h3>
                    <p className="opacity-5">Магазин лучших кроссовок</p>
                </div>
            </div>
            <ul className="d-flex">
                <li onClick={props.onClickCart} className="mr-30 cu-p"> <img src ="/img/cart.svg" alt="logo"/><span>12005 руб.</span></li>
                <li>
                    <img src ="/img/user.svg" alt="logo"/>
                </li>
            </ul>
        </header>
    );
};

export default Header;