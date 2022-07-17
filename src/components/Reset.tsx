import React from 'react';
import { CounterPropsType } from '../App';

export function Reset(props: CounterPropsType) {
   return (
      <button className='button' onClick={() => { props.setCounterValue(0) }}>
         res
      </button>
   );
}