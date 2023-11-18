import React from 'react';


const Drawer = ({items =[],onClose,onRemove}) => {
    return (
        <div className="overlay">
        <div className="drawer">
            <h2 className="mb-40 d-flex justify-between ">Корзина<img onClick={onClose} className="removeBtn cu-p" src="/img/remove.svg" alt="remove"/></h2>


            <div className="items">
                {items.map((obj)=>(
                    <div className="cartItem mb-20 d-flex align-center">
                        <div className="cartItemImg">
<img width={70} height={70} src={obj.imgUrl} alt=""/>
                        </div>
                        <div className="mr-20 flex">
                            <p className="mb-5">{obj.title}
                            </p>
                            <b>{obj.price} руб.</b>
                        </div>
                        <img onClick={()=>{onRemove(obj.id)}} className="removeBtn" src="/img/remove.svg" alt="remove"/>
                    </div>

                ))}
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