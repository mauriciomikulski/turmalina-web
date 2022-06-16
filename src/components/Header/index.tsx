import Banner from "./Banner";
import NavBar from "./NavBar";

const Header: React.FC = () => {
  return (
    <div className="header">
      <NavBar />
      <Banner />
    </div>
  );
}

export default Header;