import React from 'react';
import { CounterPropsType } from '../App';


export function Increment(props: CounterPropsType) {
   let changeCounterValue = () => {
      props.setCounterValue(props.counterValue < props.maxValue ? props.counterValue + 1 : props.maxValue)
   }

   return (
      <button className='button' onClick={changeCounterValue}>
         Inc
      </button>
   );
}