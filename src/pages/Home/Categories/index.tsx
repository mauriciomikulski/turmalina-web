import './style.scss'
import categories from '../../../assets/img/categories'
import { CategoryCard } from './CategoryCard'

const Categories = () => {
  return (
    <div className="categories">
      {
        Object.values(categories).map(key => { return <CategoryCard name={key.name} image={key.img} /> })
      }
    </div>
  )
}

export default Categories;