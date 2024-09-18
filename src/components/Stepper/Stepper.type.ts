import { FC } from 'react';

export type StepFragmentComponent = FC<{}>; /** React.FC<> */

export interface StepperProps {
  /** <Stepper.Step /> components */ children: React.ReactNode;

  /** Called when step is clicked */
  onStepClick?: (stepIndex: number) => void;

  /** Index of the active step */
  active: number;

  /** Step icon, default value is step index + 1 */
  icon?: React.ReactNode | StepFragmentComponent;

  /** Step icon displayed when step is completed, check icon by default */
  completedIcon?: React.ReactNode | StepFragmentComponent;

  /** Step icon displayed when step is in progress, default value is step index + 1 */
  progressIcon?: React.ReactNode | StepFragmentComponent;

  /** Key of `theme.colors` or any valid CSS color, controls colors of active and progress steps, `theme.primaryColor` by default */
  color?: string;

  /** Controls size of the step icon, by default icon size is inferred from `size` prop */
  iconSize?: number | string;

  /** Key of `theme.spacing` or any valid CSS value to set `padding-top` of the content */
  //   contentPadding?: MantineSpacing;

  /** Icon position relative to the step body, `'left'` by default */
  iconPosition?: 'right' | 'left';

  /** Controls size of various Stepper elements */
  size?: number | string;

  /** Any valid CSS value to set steps border-radius, `"50%"` by default */
  radius?: string;

  /** Determines whether next unvisited steps can be clicked, `true` by default **/
  allowUnvisitedStepsClick?: boolean;

  /** Determines whether steps should wrap to the next line if no space is available, `true` by default */
  wrap?: boolean;
}
