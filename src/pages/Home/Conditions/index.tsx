import './style.scss'
const Conditions = () => {
  return (
    <div className="conditions">
      <div className="container">
        <div className="conditions_content">
          <span className="conditions-title">FRETE GRÁTIS</span>
          <p className="conditions-description">
            Entrega grátis em salvador para compras acima de R$ 100,00.
          </p>
        </div>
        <div className="conditions_content">
          <span className="conditions-title">PARCELAMENTO</span>
          <p className="conditions-description">
            Parcele em até 10x sem juros*
            (parcela mínima de R$50)
          </p>
        </div>
        <div className="conditions_content">
          <span className="conditions-title">TROCA GRÁTIS</span>
          <p className="conditions-description">
            Troque ou devolva suas compras
            com facilidade no site
          </p>
        </div>
      </div>
    </div>
  );
}

export default Conditions;