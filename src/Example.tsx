import React, { Dispatch, SetStateAction } from 'react';

export type CounterType = 0 | 1 | 2 | 3 | 4 | 5;

export type CounterPropsType = {
   setCounterValue: Dispatch<SetStateAction<number>>
   counterValue: number;
   value: number;
}

export function Example(props: CounterPropsType) {

   let maxValue: CounterType = 5;

   return (
      <div>
         <span>{props.counterValue}</span>
         <button onClick={() => { props.setCounterValue(props.counterValue < maxValue ? props.counterValue + 1 : maxValue) }}>inc</button>
         <button onClick={() => { props.setCounterValue(0) }}>res</button>
      </div >
   );
}