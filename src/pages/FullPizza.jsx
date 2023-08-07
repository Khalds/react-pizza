import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const FullPizza = () => {
  const [pizza, setPizza] = useState();
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
    <div className="container">
      <img src={pizza.imageUrl} alt="pizza" />
      <h2>{pizza.title}</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quia, temporibus harum
        accusantium tenetur, iusto commodi ex, eius voluptatibus beatae placeat perferendis minima
        dolores? Possimus ipsa, architecto placeat tempore porro soluta! Ab eaque a, deleniti
        provident nihil nam omnis fugiat aliquam, illo et consequuntur nesciunt in quo praesentium
        quam totam ipsa sint vitae optio! Deserunt voluptate aliquid doloremque alias mollitia?
      </p>
      <h4>{pizza.price} ₽</h4>
    </div>
  );
};
export default FullPizza;
