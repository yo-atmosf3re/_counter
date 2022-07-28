import React from 'react';

export type DisplayType = {
   counterValue: number;
   maxValue: number;
   startValue: number;
}

export function Display(props: DisplayType) {

   const displayCondition =
      props.startValue < 0 ? 'startValue cannot be 0' : props.startValue > props.maxValue ? 'startValue more than maxValue' : props.counterValue > props.maxValue ? 'counterValue more than maxValue' : props.startValue;

   return (
      <span className='screen'>{displayCondition}</span>
   );
}