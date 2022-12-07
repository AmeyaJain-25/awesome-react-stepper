import { Link, useNavigate } from 'react-router-dom';
import navbarCss from './Navbar.module.css';
import { ReactComponent as TypescriptSVG } from '../../assets/typescript.svg';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className={navbarCss.navbarComponent}>
      <div className={navbarCss.mainNavbar}>
        <Link to="/" className={navbarCss.logoHeader}>
          <h1>Awesome React Stepper</h1>
          <TypescriptSVG />
        </Link>
        <div className={navbarCss.rightPanel}>
          <a
            href="https://badge.fury.io/js/awesome-react-stepper"
            target={'_blank'}
          >
            <img
              src="https://badge.fury.io/js/awesome-react-stepper.svg"
              alt="npm version"
              height="18"
            />
          </a>
          <Link to="/demo" className={navbarCss.linkElem}>
            DEMO
          </Link>
          <p
            className={navbarCss.linkElem}
            onClick={async () => {
              await navigate('/');
              document
                .getElementById('api')
                ?.scrollIntoView({ behavior: 'smooth' });
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
