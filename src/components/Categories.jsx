import { useState } from 'react';

function Categories() {
  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="categories">
      <ul>
        {categories.map((category, index) => (
          <li
            onClick={() => setActiveIndex(index)}
            className={activeIndex === index ? 'active' : ''}
            key={index}>
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Categories;
