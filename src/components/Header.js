import NavLinks from "./NavLinks";
import logo from "../images/Y.png";

const Header = () => {
  return (
    <header className="header">
      <img className="logo" src={logo} alt="Yasa' Y" />
      <NavLinks />
    </header>
  );
};

export default Header;
