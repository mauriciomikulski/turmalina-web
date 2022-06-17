import './style.css';
import collection from '../../../assets/img/collection.png';

const Collection = () => {
  return (
    <div className="collection">
      <div className="container">
        <span className="collection_title">COLEÇÃO GRACE</span>
        <p className="collection_description">
          Já conferiu as novidades da Coleção
          Grace? Aproveite a promoção especial
          de Dia das Mães para garantir seu
          conjunto favorito! São joias em Prata
          925 e Pérolas com design clássico e
          atemporal. Perfeitas para presentear!
        </p>
        <button className="collection_button">CONFIRA</button>
      </div>
      <img src={collection} alt="collection" />
    </div>
  );
}

export default Collection;