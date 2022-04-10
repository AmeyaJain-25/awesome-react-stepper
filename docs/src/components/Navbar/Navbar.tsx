import { Link, useNavigate } from "react-router-dom";
import navbarCss from "./Navbar.module.css";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className={navbarCss.navbarComponent}>
      <div className={navbarCss.mainNavbar}>
        <Link to="/">
          <h1>React Multi Stepper</h1>
        </Link>
        <div className={navbarCss.rightPanel}>
          <Link to="/demo">DEMO</Link>
          <p
            className={navbarCss.linkElem}
            onClick={async () => {
              await navigate("/");
              document
                .getElementById("api")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            DOC API
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
