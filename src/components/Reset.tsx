import React from 'react';
import { CounterPropsType } from '../App';

export function Reset(props: CounterPropsType) {
   const initialValue = {
      pointerEvents: 'none',
      cursor: 'default',
      opacity: '0.5',
   }
   const normButton = {}
   return (
      <button style={props.counterValue == 0 ? initialValue : normButton} className='button' onClick={() => { props.setCounterValue(0) }}>
         Res
      </button>
   );
}