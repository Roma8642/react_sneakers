import React from 'react';

const Drawer = () => {
    return (
        <div style={{display:"none"}} className="overlay">
        <div className="drawer">
            <h2 className="mb-40 d-flex justify-between ">Корзина     <img className="removeBtn cu-p" src="/img/remove.svg" alt="remove"/></h2>


            <div className="items">
                <div className="cartItem mb-20 d-flex align-center">
                    <div style={{backgroundImage:'url(/img/sneakers/image%207.jpg)'}} className="cartItemImg"></div>
                    <div className="mr-20 flex">
                        <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                        <b>12 999 руб.</b>
                    </div>
                    <img className="removeBtn" src="/img/remove.svg" alt="remove"/>
                </div>
            </div>
            <div className="cartTotalBlock">
                <ul>
                    <li>
            <span>Итого
                :</span>
                        <div></div>
                        <b>21 498 руб. </b>
                    </li>
                    <li className="d-flex">
                        <span>Налог 5%: </span>
                        <div></div>
                        <b>1074 руб. </b>
                    </li>

                </ul>
                <button className="greenButton">Оформить заказ <img src="/img/arrow.svg" alt="arrow"/></button>
            </div>

        </div>
        </div>
    );
};

export default Drawer;