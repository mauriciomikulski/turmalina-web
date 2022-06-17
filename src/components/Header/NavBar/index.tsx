import './style.css';
import InputSearch from './InputSearch';
import { CgProfile } from 'react-icons/cg';
import { TiShoppingCart } from 'react-icons/ti';
import logo from "../../../assets/img/logo_turmalina.png";
import SwitchTheme from '../SwitchTheme';


const NavBar = () => {
  return (
    <div className="nav">
      <div className="nav-up">
        <span className="logo"><a href='/'><img src={logo} /></a></span>
        <InputSearch />
        <span className="profile"><CgProfile /></span>
        <span className="cart"><TiShoppingCart /></span>
      </div>
      <div className="nav-down">
        <ul className="list-menu">
          <li><a href='/launches'>LANÇAMENTOS</a></li>
          <li><a href='/rings'>ANEIS</a></li>
          <li><a href='/bracelets'>PULSEIRAS</a></li>
          <li><a href='/earrings'>BRINCOS</a></li>
          <li><a href='/nackles'>GARGANTILHAS</a></li>
          <li><a href='/sets'>CONJUNTOS</a></li>
          <li><a href='/offer'>OFERTAS</a></li>
          <li><a href='/contact'>CONTATO</a></li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;