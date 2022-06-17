import './style.css'
import categories from '../../../assets/img/categories'
const Categories = () => {
  return (
    <div className="categories">
      <div className="categories__item">
        <img src={categories[0]} alt=""/>
        <span className="categorie_title">GARGANTILHAS</span>
      </div>
      <div className="categories__item">
        <img src={categories[1]} alt=""/>
        <span className="categorie_title">BRINCOS</span>
      </div>
      <div className="categories__item">
        <img src={categories[2]} alt=""/>
        <span className="categorie_title">PULSEIRAS</span>
      </div>
      <div className="categories__item">
        <img src={categories[3]} alt=""/>
        <span className="categorie_title">RELOGIOS</span>
      </div>
      <div className="categories__item">
        <img src={categories[4]} alt=""/>
        <span className="categorie_title">INFANTIL</span>
      </div>
      <div className="categories__item">
        <img src={categories[5]} alt=""/>
        <span className="categorie_title">MASCULINO</span>
      </div>
    </div>
  )
}

export default Categories;