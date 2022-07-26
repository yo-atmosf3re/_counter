import React from 'react';

export type DisplayType = {
   counterValue: number;
   maxValue: number;
   startValue: number;
}

export function Display(props: DisplayType) {
   const screen = {
      color: props.counterValue === props.maxValue ? 'red' : 'white',
   }
   const displayCondition =
      props.startValue > props.maxValue ? 'startValue more than maxValue' : props.counterValue > props.maxValue ? 'counterValue more than maxValue' : props.startValue;

   return (
      <span className='screen' style={screen}>{displayCondition}</span>
   );
}