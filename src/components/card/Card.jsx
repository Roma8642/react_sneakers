import React, {useState} from 'react';
import styles from './Card.module.scss'

const Card = ({imgUrl,title,price,onPlus}) => {
    const [isAdd, setIsAdd]=useState(false)
    const [isLike, setIsLike]=useState(false)
    function setAdd(){
        onPlus({title,price,imgUrl})
        setIsAdd(!isAdd)
    }function setLike(){
        setIsLike(!isLike)
    }
    return (
        <div className={styles.card}>
            <div className="favorite">
                <img width={25} height={25} src={isLike?"/img/like.svg":"/img/unlike.svg"} onClick={setLike} alt="unliked"/>
            </div>
            <img width={133} height={112} src={imgUrl} alt="sneakers"/>
            <h5>{title}</h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span>Цена</span>
                    <b>{price}</b>
                </div>

                    <img className="cu-p" width={32} height={32}  onClick={setAdd} src={isAdd?"/img/tick.svg":"/img/plusBtn.svg"} alt="sneakers"/>

            </div>
        </div>
    );
};

export default Card;