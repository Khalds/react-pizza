import Categories from './components/Categories';
import Header from './components/Header';
import PizzaBlock from './components/PizzaBlock';
import Sort from './components/Sort';
import { useEffect, useState } from 'react';
import './scss/app.scss';

function App() {
  const [pizzas, setPizzas] = useState([]);
  //https://645e3f4912e0a87ac0eb6446.mockapi.io/items
  useEffect(() => {
    fetch('https://645e3f4912e0a87ac0eb6446.mockapi.io/items')
      .then((res) => res.json())
      .then((data) => {
        setPizzas(data);
      });
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {pizzas.map((pizza) => (
              <PizzaBlock {...pizza} key={pizza.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
