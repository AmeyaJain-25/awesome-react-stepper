import React, { Children, cloneElement } from 'react';
import { StepperProps } from './Stepper.type';
import StepperClasses from './Stepper.module.css';

const STEP_STATES = {
  IN_PROGRESS: 'in-progress',
  VISITED: 'visited',
  UN_VISITED: 'un-visited',
};

// const SIZES = {
//   X_SMALL: 'xs',
//   SMALL: 'sm',
//   MEDIUM: 'md',
//   LARGE: 'lg',
//   X_LARGE: 'xl',
//   XX_LARGE: 'xxl',
//   XXX_LARGE: 'xxxl',
// };

// TODO: Add set of colors and export for usage
// const COLORS = {};

export const Stepper = (props: StepperProps) => {
  const {
    // classNames,
    // className,
    // style,
    // styles,
    // unstyled,
    // vars,
    children,
    onStepClick,
    active,
    icon,
    completedIcon,
    progressIcon,
    color,
    iconSize,
    // contentPadding,
    size,
    radius,
    allowUnvisitedStepsClick,
    // wrap,
    // ...others
  } = props;

  const sanitizedChildren = Children.toArray(children) as React.ReactElement[];

  const stepperItems = sanitizedChildren.reduce<React.ReactElement[]>(
    (acc, currStepItem, idx) => {
      const _state =
        active === idx
          ? STEP_STATES.IN_PROGRESS
          : active > idx
          ? STEP_STATES.VISITED
          : STEP_STATES.UN_VISITED;

      const isStepClickEnabled = (() => {
        // Overrides parent prop for controlling selection of steps on click.
        if (typeof currStepItem.props.allowStepClick === 'boolean') {
          return currStepItem.props.allowStepClick;
        }

        return _state === STEP_STATES.VISITED || allowUnvisitedStepsClick;
      })();

      // Step custom icon | Parent stepper icon | step count (index display)
      const _icon = currStepItem.props.icon || icon || idx + 1;
      const _completedIcon = currStepItem.props.completedIcon || completedIcon;
      const _progressIcon = currStepItem.props.progressIcon || progressIcon;

      const _iconSize = currStepItem.props.iconSize || iconSize || size;

      const _color = currStepItem.props.color || color;

      const handleClick = () => {
        if (isStepClickEnabled) {
          if (typeof onStepClick === 'function') {
            onStepClick(idx);
          }
        }
      };

      // Using cloneElement to sanitize props and override previous props
      acc.push(
        cloneElement(<div>hi</div>, {
          key: idx,
          step: idx,
          state: _state,
          color: _color,
          icon: _icon,
          radius,
          iconSize: _iconSize,
          completedIcon: _completedIcon,
          progressIcon: _progressIcon,
          onClick: handleClick,
          allowStepClick: isStepClickEnabled,
        })
      );

      if (idx !== sanitizedChildren.length - 1) {
        acc.push(
          <div
            key={`separator-${idx}`}
            data-active={idx < active || undefined}
            className={StepperClasses.separator}
          />
        );
      }

      return acc;
    },
    []
  );

  const activeStepContent = sanitizedChildren[active]?.props?.children;

  return (
    <div className={StepperClasses.root}>
      <div className={StepperClasses.steps}>{stepperItems}</div>
      {activeStepContent ? (
        <div className={StepperClasses.content}>{activeStepContent}</div>
      ) : null}
    </div>
  );
};
