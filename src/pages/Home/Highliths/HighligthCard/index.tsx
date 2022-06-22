import './style.scss'

interface Highliths {
  name: string;
  oldprice: number;
  price: number;
  image: string;
}

export const HighlithsCard = ({name, oldprice, price, image}: Highliths ) => {
  return (
    <div className="highlights_item">
        <img src={image} alt="icon" />
        <span className="highlights_title">{name}</span>
        <span className="highlights_separator"></span>
        <span className="highlights_oldprice">R$ {oldprice}</span>
        <span className="highlights_price">R$ {price} <br/> 3x R$ {(price/3)} sem juros</span>
      </div>
  )
}