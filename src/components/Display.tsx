import React from 'react';

export type DisplayType = {
   counterValue: number;
   maxValue: number;
}

export function Display(props: DisplayType) {
   const screen = {
      color: props.counterValue === props.maxValue ? 'red' : 'white',
   }

   return (
      <span className='screen' style={screen}>{props.counterValue}</span>
   );
}