import './style.css';

const SwitchTheme = () => {
  return (
    <div className="switch-theme">
      <span className="switch-theme-text">Tema</span>
      <div className="switch-theme-icon">
        <span className="switch-theme-icon-light"></span>
        <span className="switch-theme-icon-dark"></span>
      </div>
    </div>
  );
}

export default SwitchTheme;