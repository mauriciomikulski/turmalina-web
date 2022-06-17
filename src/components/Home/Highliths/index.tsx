import './style.css';
import products from '../../../assets/img/products';
const Highliths = () => {
  return (
    <div className="highlights">
      <div className="highlights_item">
        <img src={products[0]} alt="icon" />
        <span className="highlights_title">Colar Smiley Rosa</span>
        <span className="highlights_separator"></span>
        <span className="highlights_oldprice">R$ 450,00</span>
        <span className="highlights_price">R$ 315,00 <br/> 3x R$ 105,00 sem juros</span>
      </div>
      <div className="highlights_item">
        <img src={products[0]} alt="icon" />
        <span className="highlights_title">Colar Smiley Rosa</span>
        <span className="highlights_separator"></span>
        <span className="highlights_oldprice">R$ 450,00</span>
        <span className="highlights_price">R$ 315,00 <br/> 3x R$ 105,00 sem juros</span>
      </div>
      <div className="highlights_item">
        <img src={products[0]} alt="icon" />
        <span className="highlights_title">Colar Smiley Rosa</span>
        <span className="highlights_separator"></span>
        <span className="highlights_oldprice">R$ 450,00</span>
        <span className="highlights_price">R$ 315,00 <br/> 3x R$ 105,00 sem juros</span>
      </div>
    </div>
  );
}

export default Highliths;