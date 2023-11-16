import './style/index.scss';
import Card from "./components/Card";
import Header from "./components/Header";
import Search from "./components/Search";
import Drawer from "./components/Drawer";
import {useEffect, useState} from "react";


function App() {
    const [cartOpen,setCartOpen]=useState(false)
    const [items,setItems]=useState([])

    useEffect(() => {
        fetch('https://65563edb84b36e3a431f6fa9.mockapi.io/items')
            .then((res)=>{
                return res.json()
            })
            .then((json)=>{
                setItems(json)
            })
    }, []);
  return (
    <div className="wrapper clear">

        {cartOpen&&<Drawer onClose={()=>setCartOpen(false)}/>}

<Header onClickCart={()=>setCartOpen(true)} />
      <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
            <h1>Все кроссовки</h1>
           <Search/>
        </div>

<div className="d-flex flex-wrap">
    {items.map((obj)=>(
        <Card
            title={obj.title}
            price={obj.price}
            imgUrl={obj.imgUrl}
        />
    ))}
</div>
      </div>
    </div>
  );
}

export default App;
