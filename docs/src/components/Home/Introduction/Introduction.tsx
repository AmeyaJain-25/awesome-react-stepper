import { useNavigate } from "react-router-dom";
import introductionCss from "./Introduction.module.css";

const Introduction = () => {
  const navigate = useNavigate();

  return (
    <div className={introductionCss.introComponentParent}>
      <div className={introductionCss.introComponent}>
        <h1 className={introductionCss.headingSubtitle}>
          Highly Customizable Multi Stepper Component for React
        </h1>
        <div className={introductionCss.buttonsDiv}>
          <button
            className={introductionCss.introBtn}
            onClick={() => {
              navigate("/demo");
            }}
          >
            Try it
          </button>
          <button
            className={introductionCss.introBtn}
            onClick={() => {
              document
                .getElementById("getStarted")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
