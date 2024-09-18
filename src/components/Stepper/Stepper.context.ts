import { createContext, useContext } from 'react';

interface StepperContextValue {}

const StepperContext = createContext<StepperContextValue>({});
StepperContext.displayName = 'StepperContext';

const StepperProvider = StepperContext.Provider;

const useStepperContext = () => useContext(StepperContext);

export { useStepperContext, StepperProvider };
