import React from 'react';


const Drawer = ({items =[],onClose,onRemove}) => {
    return (
        <div className="overlay">
            <div className="drawer">
                <h2 className="mb-40 d-flex justify-between ">Корзина<img onClick={onClose} className="removeBtn cu-p" src="/img/remove.svg" alt="remove"/></h2>

                {items.length>0 ?
                    <div><div className="items">
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
                    :
                    <div className="cartEmpty d-flex align-center justify-center flex-column flex">
                        <img className="mb-20" width={120} height={120} src="/img/empty.jpg" alt="cartEmpty"/>
                        <h2 className="mb-10">Корзина Пустая</h2>
                        <p className="opacity-6 mb-40">Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
                        <button onClick={onClose} className="greenButton">
                            <img src="/img/arrowRev.svg" alt="arrow"/>
                            Вернуться назад
                        </button>
                    </div>


                }



            </div>
        </div>
    );
};

export default Drawer;