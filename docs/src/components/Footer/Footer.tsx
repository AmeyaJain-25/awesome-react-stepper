import footerCss from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={footerCss.footerComponent}>
      <p className={footerCss.developedText}>Developed by Ameya Jain</p>
    </div>
  );
};

export default Footer;
