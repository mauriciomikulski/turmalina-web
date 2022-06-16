import './style.css';

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-up">
        <h1>Contato</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Pellentesque euismod, nisi eu consectetur consectetur,
          nisl nisl consectetur nisl, eu consectetur nisl nisl euismod
          nisl.
        </p>
      </div>
      <div className="contact-down">
        <div className="contact-down-left">
          <h2>Endereço</h2>
          <p>

            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque euismod, nisi eu consectetur consectetur,
            nisl nisl consectetur nisl, eu consectetur nisl nisl euismod
            nisl.
          </p>
        </div>
        <div className="contact-down-right">
          <h2>Telefone</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque euismod, nisi eu consectetur consectetur,
            nisl nisl consectetur nisl, eu consectetur nisl nisl euismod
            nisl.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;