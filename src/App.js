import './style/index.scss';
function App() {
  return (
    <div className="wrapper clear">
<header className="d-flex justify-between align-center">
<div className="d-flex align-center">
 <img src ="/img/logo.svg" alt="logo"/>
  <div>
    <h3 className="text-uppercase">REACT SNEAKERS</h3>
    <p className="opacity-5">Магазин лучших кроссовок</p>
  </div>
</div>
  <ul className="d-flex">
    <li className="mr-30"> <img src ="/img/cart.svg" alt="logo"/><span>1205 руб.</span></li>
    <li>
        <img src ="/img/user.svg" alt="logo"/>
    </li>
  </ul>
</header>
      <div className="content p-40">
        <h1 className="mb-40">Все кроссовки</h1>

<div className="d-flex">
    <div className="card">
        <img width={133} height={112} src="/img/sneakers/image%201.jpg" alt="sneakers"/>
        <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
        <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
                <span>Цена</span>
                <b>12 999 руб.</b>
            </div>
            <button className="button">
                <img width={11} height={11} src="/img/plusBtn.svg" alt="sneakers"/>
            </button>
        </div>
    </div><div className="card">
        <img width={133} height={112} src="/img/sneakers/image%202.jpg" alt="sneakers"/>
        <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
        <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
                <span>Цена</span>
                <b>12 999 руб.</b>
            </div>
            <button className="button">
                <img width={11} height={11} src="/img/plusBtn.svg" alt="sneakers"/>
            </button>
        </div>
    </div><div className="card">
        <img width={133} height={112} src="/img/sneakers/image%203.jpg" alt="sneakers"/>
        <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
        <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
                <span>Цена</span>
                <b>12 999 руб.</b>
            </div>
            <button className="button">
                <img width={11} height={11} src="/img/plusBtn.svg" alt="sneakers"/>
            </button>
        </div>
    </div><div className="card">
        <img width={133} height={112} src="/img/sneakers/image%204.jpg" alt="sneakers"/>
        <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
        <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
                <span>Цена</span>
                <b>12 999 руб.</b>
            </div>
            <button className="button">
                <img width={11} height={11} src="/img/plusBtn.svg" alt="sneakers"/>
            </button>
        </div>
    </div>
</div>
      </div>
    </div>
  );
}

export default App;
