import { FC } from 'react';

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { CartItem, addItem, selectCartItemById } from '../../redux/slices/cartSlice';
import { Link } from 'react-router-dom';

const pizzaTypeName = ['тонкое', 'традиционное'];

type PizzaBlockProps = {
  id: string;
  title: string;
  types: string[];
  sizes: number[];
  price: number;
  imageUrl: string;
};

const PizzaBlock: FC<PizzaBlockProps> = ({ id, title, types, sizes, price, imageUrl }) => {
  const cartItem = useSelector(selectCartItemById(id));

  const dispatch = useDispatch();

  const [pizzaActiveSize, setPizzaActiveSize] = useState(0);
  const [pizzaActiveType, setPizzaActiveType] = useState(0);

  const addedCount = cartItem ? cartItem.count : 0;

  const onclickAddItem = () => {
    const item: CartItem = {
      id,
      title,
      price,
      imageUrl,
      type: pizzaTypeName[pizzaActiveType],
      size: sizes[pizzaActiveSize],
      count: 0,
    };
    dispatch(addItem(item));
  };

  return (
    <div className="pizza-block-wrapper">
      <div className="pizza-block">
        <Link to={`/pizza/${id}`}>
          <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
          <h4 className="pizza-block__title">{title}</h4>
        </Link>
        <div className="pizza-block__selector">
          <ul>
            {types.map((_, typeId) => (
              <li
                className={pizzaActiveType === typeId ? 'active' : ''}
                onClick={() => setPizzaActiveType(typeId)}
                key={typeId}>
                {pizzaTypeName[typeId]}
              </li>
            ))}
          </ul>
          <ul>
            {sizes.map((size, index) => (
              <li
                onClick={() => setPizzaActiveSize(index)}
                className={pizzaActiveSize === index ? 'active' : ''}
                key={index}>
                {size} см.
              </li>
            ))}
          </ul>
        </div>
        <div className="pizza-block__bottom">
          <Link to={`/pizza/${id}`}>
            <div className="pizza-block__price">от {price} ₽</div>
          </Link>
          <button onClick={onclickAddItem} className="button button--outline button--add">
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                fill="white"
              />
            </svg>
            <span>Добавить</span>
            {addedCount > 0 && <i>{addedCount}</i>}
          </button>
        </div>
      </div>
    </div>
  );
};
export default PizzaBlock;
