import React from 'react';
import { DisplayType } from '../App';



export function Display(props: DisplayType) {
   const screen = {
      color: props.counterValue === props.maxValue ? 'red' : 'white',
   }

   return (
      <span className='screen' style={screen}>{props.counterValue}</span>
   );
}