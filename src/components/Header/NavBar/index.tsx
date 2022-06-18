// import SwitchTheme from '../SwitchTheme';
import './style.scss';
import InputSearch from './InputSearch';
import { CgProfile } from 'react-icons/cg';
import { TiShoppingCart } from 'react-icons/ti';
import { FiMenu } from 'react-icons/fi';
import { AiOutlineClose } from 'react-icons/ai';
import logo from "../../../assets/img/logo_turmalina.png";




const NavBar = () => { 
  
  const toogleOpen = () => {    
    const menu = document.querySelector('.nav-down');    
      menu?.classList.remove('active'); 
  }

  const toogleClose = () => {
    const menu = document.querySelector('.nav-down');
    menu?.classList.add('active');
  }

  return (
    <div className="nav">
      <div className="nav-up">
        <span className="logo"><a href='/'><img src={logo} /></a></span>
        <InputSearch />
        <span className="profile"><CgProfile /></span>
        <span className="cart"><TiShoppingCart /></span>
        <span id='toogle-menu' className="toogle-menu" onClick={toogleOpen}><FiMenu /></span>
      </div>
      <div id="nav-toogle" className="nav-down active">
        <ul className="list-menu">
          <li className="toogle-close" onClick={toogleClose}><AiOutlineClose/></li>
          <li><a href='/launches'><i className="icon-menu"></i>LANÇAMENTOS</a></li>
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