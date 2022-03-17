import { Link } from "react-router-dom";
import navbarCss from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={navbarCss.navbarComponent}>
      <div className={navbarCss.mainNavbar}>
        <Link to="/">
          <h1>React Multi Stepper</h1>
        </Link>
        <div className={navbarCss.rightPanel}>
          <Link to="/demo">Demo</Link>
          <p>Star</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
