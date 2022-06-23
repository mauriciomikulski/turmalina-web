// import SwitchTheme from '../SwitchTheme';
import './style.scss';
import InputSearch from './InputSearch';
import { TiShoppingCart } from 'react-icons/ti';
import { FiMenu } from 'react-icons/fi';
import { AiOutlineClose } from 'react-icons/ai';
import logo from "../../../assets/img/logo_turmalina.png";


const NavBar = () => {

  const toogleOpen = () => {
    const menu = document.querySelector('.nav-down-415');
    menu?.classList.remove('active');
  }

  const toogleClose = () => {
    const menu = document.querySelector('.nav-down-415');
    menu?.classList.add('active');
  }

  const onMouseOver = () => {
    const menu = document.querySelector('.login-box');
    menu?.classList.remove('hidden');
  }

  const onMouseOut = () => {
    const menu = document.querySelector('.login-box');
    menu?.classList.add('hidden');
  }

  const onFocusIn = () => {
    const menu = document.querySelector('.login-box');
    menu?.classList.remove('hidden');
  }
  const onFocusOut = () => {
    const menu = document.querySelector('.login-box');
    menu?.classList.add('hidden');
  }

  return (
    <div className="nav">
      <div className="nav-up">
        <div className="nav-up-logo">
          <span className="logo"><a href='/'><img src={logo} /></a></span>
        </div>
        <div className="nav-up-search">
          <InputSearch />
        </div>
        <div className="nav-up-cart">
          <span className="profile" onMouseOver={onMouseOver} onMouseOut={onMouseOut}>Minha Conta</span>
          <span className="cart"><span className="badge">2</span><TiShoppingCart/></span>
          <div className="login-box hidden" onMouseOver={onFocusIn} onMouseOut={onFocusOut}>
            <span className="login">Entrar</span>
            <span className="separator">OU</span>
            <span className="signup">Castre-se</span>
          </div>
        </div>
        <span id='toogle-menu' className="toogle-menu" onClick={toogleOpen}><FiMenu /></span>
      </div>
      <div id="nav-toogle" className="nav-down">
        <ul className="list-menu">
          <a className="toogle-close" onClick={toogleClose}><AiOutlineClose /></a>
          <li><a href='/rings'>ANEIS</a></li>
          <li><a href='/earrings'>BRINCOS</a></li>
          <li><a href='/nackles'>COLARES</a></li>
          <li><a href='/bracelets'>CORRENTES</a></li>
          <li><a href='/sets'>PULSEIRAS</a></li>
          <li><a href='/launches'>PINGENTES</a></li>
          <li><a href='/offer'>INFANTIL</a></li>
          <li><a href='/contact'>MASCULINO</a></li>
        </ul>
      </div>
      <div id="nav-toogle" className="nav-down-415 active">
        <div className="profile-415">
          <span className="avatar"><img src={logo} /></span>
          <span className="login-415">Minha Conta</span>
        </div>
        <ul className="list-menu">
          <a className="toogle-close" onClick={toogleClose}><AiOutlineClose /></a>
          <li><a href='/rings'>ANEIS</a></li>
          <li><a href='/earrings'>BRINCOS</a></li>
          <li><a href='/nackles'>COLARES</a></li>
          <li><a href='/bracelets'>CORRENTES</a></li>
          <li><a href='/sets'>PULSEIRAS</a></li>
          <li><a href='/launches'>PINGENTES</a></li>
          <li><a href='/offer'>INFANTIL</a></li>
          <li><a href='/contact'>MASCULINO</a></li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;