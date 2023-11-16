import './style/index.scss';
import Card from "./components/Card";
import Header from "./components/Header";
import Search from "./components/Search";
import Drawer from "./components/Drawer";
const crossList=[{
    title:'Мужские Кроссовки Nike Blazer Mid Suede',
    price:12999,
    imgUrl:'/img/sneakers/image 1.jpg'
},{
    title:'Мужские Кроссовки Nike Air Max 270',
    price:12999,
    imgUrl:'/img/sneakers/image 2.jpg'
},{
    title:'Мужские Кроссовки Nike Blazer Mid Suede',
    price:8499,
    imgUrl:'/img/sneakers/image 3.jpg'
},{
    title:'Мужские Кроссовки Nike Blazer Mid Suede',
    price:8499,
    imgUrl:'/img/sneakers/image 4.jpg'
},
]
function App() {
  return (
    <div className="wrapper clear">

         <Drawer/>

<Header/>
      <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
            <h1>Все кроссовки</h1>
           <Search/>
        </div>

<div className="d-flex">
    {crossList.map((obj)=>(
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
