import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "../styles/multiStepForm.css";

const MultiStepForm = (props) => {
  const {
    defaultActiveStep = 1,
    children = <div></div>,
    showProgressBar = true,
    backBtn,
    continueBtn,
    submitBtn,
    onContinue = () => {},
    onPrev = () => {},
    onSubmit = () => {},
    btnPos = "space-between",
    barWidth = "200px",
    strokeColor = "#cdd3d8",
    fillStroke = "#3a4047",
    stroke = 2,
    activeColor = "#3A4047",
    activeProgressBorder = "2px solid #f3f4f5",
    progressBarClassName,
    contentBoxClassName,
    allowClickControl = true,
  } = props;

  const [active, setActive] = useState(0);

  useEffect(() => {
    if (defaultActiveStep <= children.length && defaultActiveStep > 0) {
      progress(defaultActiveStep - 1);
      setActive(defaultActiveStep);
    } else {
      progress(0);
      setActive(1);
    }
  }, []);

  useEffect(() => {
    if (children.length > 1 && showProgressBar) {
      //Progress Bar Width
      document.getElementsByClassName("steps")[0].style.width = barWidth;

      //Progress Circle Border & Background Color
      console.log(children);
      children.map((children, ind) => {
        const element = document.getElementById(`input_${ind}`);
        if (element.classList.length > 1) {
          element.style.background = activeColor;
          element.style.border = activeProgressBorder;
        } else {
          element.style.background = "#fff";
          element.style.border = "2px solid #3A4047";
        }
      });
    }
  }, [active]);

  const previousStep = () => {
    if (!active || active <= 1) {
      return;
    }
    progress(active - 2);
    setActive((prev) => prev - 1);
    onPrev();
  };

  const nextStep = () => {
    if (!active || active >= children.length) {
      return;
    }
    progress(active);
    setActive((prev) => prev + 1);
    onContinue();
  };

  const progressClick = (ind) => {
    if (!allowClickControl) return;
    setActive(ind + 1);
    progress(ind);
  };

  const progress = (stepNum) => {
    if (children.length > 1 && showProgressBar) {
      let p = (stepNum / (children.length - 1)) * 100;
      document.getElementsByClassName("percent")[0].style.width = `${p}%`;
    }

    if (children.length > 1 && showProgressBar) {
      for (let index = 0; index < children.length; index++) {
        const e = document.getElementById(`input_${index}`);
        if (e.id.split("_")[1] === stepNum) {
          e.classList.add("selected");
          e.classList.remove("completed");
        }
        if (e.id.split("_")[1] <= stepNum) {
          e.classList.add("completed");
        }
        if (e.id.split("_")[1] > stepNum) {
          e.classList.remove("selected", "completed");
        }
      }
    }
  };

  return (
    <div>
      {children.length > 1 && showProgressBar && (
        <div className={`${"progressBarDiv"} ${progressBarClassName}`}>
          <div className={"container"}>
            <div
              className={"progress"}
              style={{ borderBottom: `${stroke}px solid ${strokeColor}` }}
            >
              <div
                className={"percent"}
                style={{ borderBottom: `${stroke}px solid ${fillStroke}` }}
              ></div>
            </div>
            <div className={"steps"}>
              {children.map((chl, ind) => {
                return (
                  <div
                    key={ind}
                    className={"step"}
                    id={`input_${ind}`}
                    onClick={() => progressClick(ind)}
                  ></div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      <div className={contentBoxClassName}>
        {children.length > 1
          ? children.map((child, index) => {
              return active === index + 1 && child;
            })
          : children}

        <div
          style={{
            display: "flex",
            justifyContent: btnPos,
            marginTop: "20px",
          }}
        >
          {active > 1 ? (
            backBtn ? (
              <span onClick={previousStep} style={{ marginRight: "20px" }}>
                {backBtn}
              </span>
            ) : (
              <button
                className={"defaultBtn"}
                onClick={previousStep}
                style={{ marginRight: "20px" }}
              >
                Go Back
              </button>
            )
          ) : (
            <span></span>
          )}
          {active < children.length ? (
            continueBtn ? (
              <span onClick={() => nextStep()}>{continueBtn}</span>
            ) : (
              <button className={"defaultBtn"} onClick={() => nextStep()}>
                Continue
              </button>
            )
          ) : submitBtn ? (
            <span onClick={onSubmit}>{submitBtn}</span>
          ) : (
            <button className={"defaultBtn"} onClick={onSubmit}>
              Submit
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MultiStepForm;
