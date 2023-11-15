import './style/index.scss';
import Card from "./components/card";
import Header from "./components/Header";
import Search from "./components/Search";
import Drawer from "./components/Drawer";
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
  <Card title={'Мужские Кроссовки Nike Blazer Mid Suede'} price={'12 999'}/>
</div>
      </div>
    </div>
  );
}

export default App;
