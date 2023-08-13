import axios from 'axios';
import { FC, useState } from 'react';
import { useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

const FullPizza: FC = () => {
  const [pizza, setPizza] = useState<{
    imageUrl: string;
    title: string;
    price: string;
  }>();

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get(`https://645e3f4912e0a87ac0eb6446.mockapi.io/items/${id}`);
        setPizza(data);
      } catch (err) {
        alert('Ошибка при получении пиццы');
        navigate('/');
      }
    }
    fetchPizza();
  }, []);

  if (!pizza) {
    return 'Loading...';
  }

  return (
    <div className="container ">
      <div className="full-pizza">
        <img src={pizza.imageUrl} alt="pizza" />
        <div className="pizza-info">
          <h2>{pizza.title}</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quia, temporibus harum
            accusantium tenetur, iusto commodi ex, eius voluptatibus beatae placeat perferendis
            minima dolores? Possimus ipsa, architecto placeat tempore porro soluta! Ab eaque a,
            deleniti provident nihil nam omnis fugiat aliquam, illo et consequuntur nesciunt in quo
            praesentium quam totam ipsa sint vitae optio! Deserunt voluptate aliquid doloremque
            alias mollitia?
          </p>
          <div className="pizza-low-info">
            <h2>от {pizza.price} ₽</h2>
          </div>
        </div>
      </div>
      <div className="cart__bottom-buttons">
        <Link to="/" className="button button--outline button--add go-back-btn">
          <svg
            width="8"
            height="14"
            viewBox="0 0 8 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M7 13L1 6.93015L6.86175 1"
              stroke="#D3D3D3"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <span>Вернуться назад</span>
        </Link>
      </div>
    </div>
  );
};
export default FullPizza;
