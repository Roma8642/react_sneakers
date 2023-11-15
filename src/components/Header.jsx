import React from 'react';

const Header = ({cartSum =12005}) => {
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
                <li className="mr-30"> <img src ="/img/cart.svg" alt="logo"/><span>{cartSum} руб.</span></li>
                <li>
                    <img src ="/img/user.svg" alt="logo"/>
                </li>
            </ul>
        </header>
    );
};

export default Header;