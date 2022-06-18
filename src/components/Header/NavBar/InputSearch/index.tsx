import './style.scss'
import { BsSearch } from 'react-icons/bs';

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  console.log('submit');
}

const InputField = () => {
  return (
    <form className="search-input" onSubmit={handleSubmit}>
      <input type="text" className="input-box" placeholder='Pesquisar...' />
      <button className="search-button" onClick={()=>{}}><BsSearch /></button>
    </form>
  );
}

export default InputField;