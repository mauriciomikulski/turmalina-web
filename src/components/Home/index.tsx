import Banner from './Banner';
import Categories from './Categories';
import Collection from './Collection';
import Conditions from './Conditions';
import Highliths from './Highliths';
import './style.css';
const Home = () => {
  return (
    <div className="home">
      <Banner />
      <Conditions />
      <Categories />
      <Collection />
      <Highliths />
    </div>
  );
}

export default Home;