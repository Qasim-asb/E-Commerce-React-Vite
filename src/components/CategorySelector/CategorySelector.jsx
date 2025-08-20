import styles from './CategorySelector.module.css';

const CategorySelector = ({ categories, onSelectCategory }) => {
  return (
    <div className={styles.catagorySection}>
      {categories.map(item => (
        <div
          className={styles.catagoryCard}
          key={item.id}
          onClick={() => onSelectCategory(item.name)}
        >
          <img src={item.images} alt={item.name} />
          <span>{item.name}</span>
        </div>
      ))}
    </div>
  );
};

export default CategorySelector;