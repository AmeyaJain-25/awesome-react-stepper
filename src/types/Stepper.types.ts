export declare type StepperProps = {
  children: React.ReactElement | React.ReactElement[];
  showProgressBar?: boolean;
  defaultActiveStep?: number;
  backBtn?: React.ReactNode;
  continueBtn?: React.ReactNode;
  submitBtn?: React.ReactNode;
  onContinue?: (step: number) => void;
  onPrev?: (step: number) => void;
  onSubmit?: (step: number) => void;
  btnPos?:
    | 'center'
    | 'end'
    | 'flex-end'
    | 'flex-start'
    | 'inherit'
    | 'initial'
    | 'left'
    | 'normal'
    | 'revert'
    | 'right'
    | 'space-around'
    | 'space-between'
    | 'space-evenly'
    | 'start'
    | 'stretch'
    | 'unset';
  barWidth?: string;
  strokeColor?: string;
  fillStroke?: string;
  stroke?: number;
  activeColor?: string;
  activeProgressBorder?: string;
  progressBarClassName?: string;
  contentBoxClassName?: string;
  allowClickControl?: boolean;
};
