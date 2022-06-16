import './style.css';
import InputSearch from './InputSearch';
import { CgProfile } from 'react-icons/cg';
import { TiShoppingCart } from 'react-icons/ti';
import logo from "../../../assets/img/logo_turmalina.png";
import {Route} from 'react-router-dom';
import SwitchTheme from '../SwitchTheme';


const NavBar = () => {
  return (
    <div className="nav">
      <div className="nav-up">
        <span className="logo"><img src={logo}/></span>
        <InputSearch />
        <span className="profile"><CgProfile /></span>
        <span className="cart"><TiShoppingCart/></span>
      </div>      
      <div className="nav-down">
        <ul className="list-menu">
          <li>LANÇAMENTOS</li>
          <li>ANEIS</li>
          <li>PULSEIRAS</li>
          <li>BRINCOS</li>
          <li>GARGANTILHAS</li>
          <li>CONJUNTOS</li>
          <li>OFERTAS</li>
          <li>CONTATO</li>
        </ul>
      </div>      
    </div>
  );
}

export default NavBar;