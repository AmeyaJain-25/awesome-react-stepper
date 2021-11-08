import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import localClasses from "../styles/multiStepForm.module.css";

const MultiStepForm = (props) => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    progress(0);
    setActive(1);
  }, []);

  const {
    children,
    progressBar,
    previous,
    next,
    submit,
    onFinalSubmit,
    actionPos,
    barWidth,
    barColor,
    barStroke,
    progressColor,
    progressBorder,
    progressStyle,
    compStyle,
  } = props;

  useEffect(() => {
    if (progressBar) {
      //Progress Bar Width
      if (barWidth) {
        document.getElementsByClassName(localClasses.steps)[0].style.width =
          barWidth;
      }

      //Progress Line
      if (progressBorder) {
        document.getElementsByClassName(
          localClasses.percent
        )[0].style.borderBottom = `${progressBorder}`;
      }

      //Progress Circle Border & Background Color
      for (let index = 0; index < children.length; index++) {
        const element = document.getElementById(`input_${index}`);
        if (element.classList.length > 1) {
          if (progressColor) {
            element.style.background = progressColor;
          } else {
            element.style.background = "#3A4047";
          }
          if (progressBorder) {
            element.style.border = progressBorder;
          } else {
            element.style.border = "2px solid #f3f4f5";
          }
        } else {
          element.style.background = "#fff";
          element.style.border = "2px solid #3A4047";
        }
      }
    }
  }, [active]);

  const previousStep = () => {
    if (!active || active <= 1) {
      return;
    }
    progress(active - 2);
    setActive((prev) => prev - 1);
  };

  const nextStep = () => {
    if (!active || active >= children.length) {
      return;
    }
    progress(active);
    setActive((prev) => prev + 1);
  };

  const progressClick = (ind) => {
    setActive(ind + 1);
    progress(ind);
  };

  const progress = (stepNum) => {
    if (children.length > 1 && progressBar) {
      let p = (stepNum / (children.length - 1)) * 100;
      document.getElementsByClassName(
        localClasses.percent
      )[0].style.width = `${p}%`;
    }

    if (children.length > 1 && progressBar) {
      for (let index = 0; index < children.length; index++) {
        const e = document.getElementById(`input_${index}`);
        if (e.id.split("_")[1] === stepNum) {
          e.classList.add(localClasses.selected);
          e.classList.remove(localClasses.completed);
        }
        if (e.id.split("_")[1] <= stepNum) {
          e.classList.add(localClasses.completed);
        }
        if (e.id.split("_")[1] > stepNum) {
          e.classList.remove(localClasses.selected, localClasses.completed);
        }
      }
    }
  };

  return (
    <div>
      {children.length > 1 && progressBar && (
        <div className={localClasses.progressBarDiv} style={progressStyle}>
          <div className={localClasses.container}>
            <div
              className={localClasses.progress}
              style={{ borderBottom: `${barStroke}px solid ${barColor}` }}
            >
              <div className={localClasses.percent}></div>
            </div>
            <div className={localClasses.steps}>
              {children.map((chl, ind) => {
                return (
                  <div
                    key={ind}
                    className={localClasses.step}
                    id={`input_${ind}`}
                    onClick={() => progressClick(ind)}
                  ></div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      <div style={compStyle}>
        {children.length > 1
          ? children.map((child, index) => {
              return active === index + 1 && child;
            })
          : children}

        {children.length > 1 && (
          <div
            style={{
              display: "flex",
              justifyContent: actionPos || "space-between",
              marginTop: "20px",
            }}
          >
            {active > 1 ? (
              previous ? (
                <span
                  onClick={() => previousStep()}
                  style={{ marginRight: "20px" }}
                >
                  {previous}
                </span>
              ) : (
                <button
                  onClick={() => previousStep()}
                  style={{ marginRight: "20px" }}
                >
                  Prev
                </button>
              )
            ) : (
              <span></span>
            )}
            {active < children.length ? (
              next ? (
                <span onClick={() => nextStep()}>{next}</span>
              ) : (
                <button onClick={() => nextStep()}>Next</button>
              )
            ) : submit ? (
              <span onClick={() => onFinalSubmit()}>{submit}</span>
            ) : (
              <button>Submit</button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default MultiStepForm;
