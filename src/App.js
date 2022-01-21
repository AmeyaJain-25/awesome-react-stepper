import "./App.css";
import MultiStepForm from "./lib/components/MultiStepForm";
import MultiContainer from "./lib/components/MultiContainer";

// previous={<img src={prev} width="60" height="60"/>} next={<img src={next} width="60" height="60"/>}
// previous={<button>Prev</button>} next={<button>Next</button>}

const App = () => {
  return (
    <div
      className="App"
      style={{
        // width: '400px',
        display: "flex",
        justifyContent: "center",
      }}
    >
      <MultiContainer>
        <MultiStepForm>
          <div>Step 1</div>
          <div>Step 2</div>
          <div>Step 3</div>
        </MultiStepForm>
      </MultiContainer>
      {/* <MultiContainer contentBoxClassName="nice">
        <h1>hi</h1>
        <MultiStepForm
          showProgressBar
          progressBarClassName="nice"
          contentStyle={{
            background: "tomato",
            padding: "20px",
            borderRadius: "4px",
            border: "1px solid black",
          }}
          barWidth="40vw"
          strokeColor="gray"
          stroke={2}
          fillStroke={"red"}
          activeColor="orange"
          activeProgressBorder="2px solid red"
          backBtn={<button>Prev</button>}
          continueBtn={<button>Next</button>}
          submitBtn={<button>Submit</button>}
          onSubmit={finalSubmitCall}
          btnPos="flex-end"
          onContinue = () => {},
          onPrev = () => {},
        >
          <div>Hello</div>
          <div>World</div>
          <div>Fine</div>
        <div>Let's</div>
          <div>See</div>
        </MultiStepForm>
      </MultiContainer> */}
    </div>
  );
};

export default App;
