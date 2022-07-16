import React, { Dispatch, SetStateAction } from 'react';

export type CounterType = 0 | 1 | 2 | 3 | 4 | 5;

export type CounterPropsType = {
   setCounterValue: Dispatch<SetStateAction<number>>;
   counterValue: number;
   value: number;
}

export function Example(props: CounterPropsType) {



   return (
      <div>
         <div>{props.counterValue}</div>
         <button onClick={() => { props.setCounterValue(props.value + 1) }}>Inc</button>
         <button onClick={() => { props.setCounterValue(0) }}>res</button>
      </div>
   );
}