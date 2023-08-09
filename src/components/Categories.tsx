import { FC } from 'react';

type CategoriesProps = {
  value: number;
  onChangeCategory: any;
};

const Categories: FC<CategoriesProps> = ({ value, onChangeCategory }) => {
  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

  return (
    <div className="categories">
      <ul>
        {categories.map((categoryName, i) => (
          <li onClick={() => onChangeCategory(i)} className={value === i ? 'active' : ''} key={i}>
            {categoryName}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Categories;
