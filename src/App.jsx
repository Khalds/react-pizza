import Categories from './components/Categories';
import Header from './components/Header';
import PizzaBlock from './components/PizzaBlock/PizzaBlock';
import Sort from './components/Sort';
import { useEffect, useState } from 'react';
import './scss/app.scss';
import Skeleton from './components/PizzaBlock/Skeleton';

function App() {
  const [pizzas, setPizzas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('https://645e3f4912e0a87ac0eb6446.mockapi.io/items')
      .then((res) => res.json())
      .then((data) => {
        setPizzas(data);
        setIsLoading(false);
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
            {pizzas.map((pizza) =>
              isLoading ? (
                <Skeleton {...pizza} key={pizza.id} />
              ) : (
                <PizzaBlock {...pizza} key={pizza.id} />
              ),
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
