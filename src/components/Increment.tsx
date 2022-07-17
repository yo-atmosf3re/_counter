import React from 'react';
import { CounterPropsType } from '../App';


export function Increment(props: CounterPropsType) {
   let changeCounterValue = () => {
      props.setCounterValue(props.counterValue < props.maxValue ? props.counterValue + 1 : props.maxValue)
   }
   const disButton = {
      pointerEvents: 'none',
      cursor: 'default',
      opacity: '0.3',
   }
   const normButton = {}

   return (
      <button style={props.counterValue == props.maxValue ? disButton : normButton} className='button' onClick={changeCounterValue}>
         Inc
      </button>
   );
}