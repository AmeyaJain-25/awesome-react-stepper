import footerCss from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={footerCss.footerComponent}>
      <p className={footerCss.developedText}>
        Developed by{" "}
        <a
          href="https://github.com/AmeyaJain-25/"
          target="_blank"
          rel="noreferrer"
        >
          Ameya Jain
        </a>
      </p>
      <iframe
        src={`https://ghbtns.com/github-btn.html?user=AmeyaJain-25&repo=Awesome-React-Stepper&type=star&count=true&size=large`}
        scrolling="0"
        width="170"
        height="30"
        title="GitHub"
      ></iframe>
    </div>
  );
};

export default Footer;
