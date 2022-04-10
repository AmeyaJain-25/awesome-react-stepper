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
          <a
            className="github-button"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/AmeyaJain-25/React-Multi-Stepper"
            // data-color-scheme="no-preference: light; light: light; dark: dark;"
            data-size="large"
            data-show-count="true"
            aria-label="Star AmeyaJain-25/React-Multi-Stepper on GitHub"
          >
            Star
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
