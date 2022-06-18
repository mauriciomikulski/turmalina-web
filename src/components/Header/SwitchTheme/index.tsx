import './style.scss';
import {ReactSwitchProps} from 'react-switch';

const SwitchTheme = () => {
  return (
    <div className="switch-theme">      
      <div className="switch-theme-icon">
        <span className="switch-theme-icon-light"></span>        
        <span className="switch-theme-icon-dark"></span>
      </div>
    </div>
  );
}

export default SwitchTheme;