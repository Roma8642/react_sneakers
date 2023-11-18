import './style/index.scss';
import Card from "./components/card/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import React, {useEffect, useState} from "react";
import axios from "axios";


function App() {
    const [cartOpen,setCartOpen]=useState(false)
    const [searchVal,setSearchVal]=useState('')
    const [items,setItems]=useState([])
    const [carItems,setCartItems]=useState([])
    useEffect(() => {
        axios.get('https://65563edb84b36e3a431f6fa9.mockapi.io/items').then(res=>{
setItems(res.data)
        })
        axios.get('https://65563edb84b36e3a431f6fa9.mockapi.io/cart').then(res=>{
            setCartItems(res.data)
        })
    }, []);
    const onAddToCart=(obj)=>{
        axios.post('https://65563edb84b36e3a431f6fa9.mockapi.io/cart',obj)
        setCartItems(prev=>[...prev,obj])

    }
const onChangeInput=(event)=>{
    setSearchVal(event.target.value)

}
    const onRemoveItem=(id)=>{
        axios.delete(`https://65563edb84b36e3a431f6fa9.mockapi.io/cart/${id}`)
        setCartItems((prev)=>prev.filter(item=>item.id !== id))
    }
    return (
    <div className="wrapper clear">

        {cartOpen&&<Drawer items={carItems} onRemove={onRemoveItem} onClose={()=>setCartOpen(false)}/>}

<Header onClickCart={()=>setCartOpen(true)} />
      <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
            <h1>{searchVal?`Результаты по запросу"${searchVal}"`:'Все кроссовки'}</h1>
            <div className="search-block">
                <img src="/img/search.svg" alt="search"/>
                {searchVal && <img onClick={()=>{setSearchVal('')}} className="clear cu-p" src="/img/remove.svg" alt="remove"/>}
                <input onChange={onChangeInput} value={searchVal} placeholder="Поиск..."/>
            </div>
        </div>

<div className="d-flex flex-wrap">
    {items.filter(item=>item.title.toLowerCase().includes(searchVal.toLowerCase() )).map((item,index)=>(
        <Card
            key={index}
            title={item.title}
            price={item.price}
            imgUrl={item.imgUrl}
            onPlus={(obj)=>{onAddToCart(obj)

            }}
        />
    ))}
</div>
      </div>
    </div>
  );
}


export default App;
