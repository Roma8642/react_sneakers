import './style/index.scss';
import Card from "./components/card/Card";
import Header from "./components/Header";
import Search from "./components/Search";
import Drawer from "./components/Drawer";
import {useEffect, useState} from "react";


function App() {
    const [cartOpen,setCartOpen]=useState(false)
    const [items,setItems]=useState([])
    const [carItems,setCartItems]=useState([])
    useEffect(() => {
        fetch('https://65563edb84b36e3a431f6fa9.mockapi.io/items')
            .then((res)=>{
                return res.json()
            })
            .then((json)=>{
                setItems(json)
            })
    }, []);
    const onAddToCart=(obj)=>{
        setCartItems(prev=>[...prev,obj])
    }
  return (
    <div className="wrapper clear">

        {cartOpen&&<Drawer items={carItems} onClose={()=>setCartOpen(false)}/>}

<Header onClickCart={()=>setCartOpen(true)} />
      <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
            <h1>Все кроссовки</h1>
           <Search/>
        </div>

<div className="d-flex flex-wrap">
    {items.map((item)=>(
        <Card
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
