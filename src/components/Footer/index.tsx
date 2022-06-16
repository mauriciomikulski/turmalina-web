import './style.css'
import { socials } from '../../enums'
import bandeiras from '../../assets/img/bandeiras'
import security from '../../assets/img/security.gif'
import { GrFacebook, GrInstagram, GrYoutube } from 'react-icons/gr'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-up">
        <div className="footer-up-left">
          <span className="footer-title">Atendimento</span>
          <p className="footer-up-item">
            <span>Whatsapp:</span>
            <span className="footer-phone"> +55 11 98888-8888</span>
          </p>
          <p className="footer-up-item">
            <span>Telefone:</span>
            <span className="footer-phone"> +55 11 98888-8888</span>
          </p>
          <p className="footer-up-item">
            <span>E=mail:</span>
            <span className="footer-phone"> contato@turmalinajoias.com.br</span>
          </p>
          <span className="operation">
            Atendimento de Segunda a Sexta, das 09h às 19h -
            Sábado das 09h às 12h
          </span>
          <ul className="footer-up-social">
            <li>
              <a href={socials.Facebook.link}>
                <GrFacebook />
              </a>
            </li>
            <li>
              <a href={socials.Instagram.link}>
                <GrInstagram />
              </a>
            </li>
            <li>
              <a href={socials.Youtube.link}>
                <GrYoutube />
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-up-middle">
          <span className="footer-title">Pagamento</span>
          <p className="footer-up-item-middle">
            {bandeiras.map((item) => {
              return (
                <img src={item} alt="bandeira" />
              )              
            }
            )}
          </p>
        </div>
        <div className="footer-up-right">
          <span className="footer-title">Segurança</span>
          <p className="footer-up-item">
            <img src={security} />
          </p>
        </div>
      </div>
      <div className="footer-down">
        <span className="copyright">
          Copyright © 2021 - turmalinajoias.com.br. Todos os direitos reservados.
          Os preços, promoções, condições de pagamento, frete e produtos são válidos
          exclusivamente para compras realizadas via internet.
        </span>
      </div>
    </div>
  );
}

export default Footer;