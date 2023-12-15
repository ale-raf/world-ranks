import { Link } from "react-router-dom";
import logo from "../assets/Logo.svg";

const Header = () => {
  return (
    <header className="flex justify-center items-center h-[300px] w-full bg-center bg-[url('src/assets/hero-image-wr.jpg')]">
      <Link to="/">
        <img src={logo} alt="" />
      </Link>
    </header>
  );
};

export default Header;
