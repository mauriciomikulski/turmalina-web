import './style.scss'

interface Category {
  name: string;
  image: string;
}
export const CategoryCard = ({name, image}: Category) => {
  return (
    <div className="categories__item">
      <img src={image} alt="Categoria" />
      <span className="categorie_title">{name}</span>
    </div>
  );
}