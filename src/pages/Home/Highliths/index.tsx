import './style.scss';
import products from '../../../assets/img/products';
import { HighlithsCard } from './HighligthCard';

const Highliths = () => {
  return (
    <div className="highlights">
      {
        Object.values(products).map(product => (
          <HighlithsCard
            name={product.name}
            oldprice={Number(product.oldprice)}
            price={Number(product.newprice)}
            image={product.image}
          />
        ))
      }
    </div>
  );
}

export default Highliths;