import React, { Dispatch, SetStateAction } from 'react';

export type CounterType = 0 | 1 | 2 | 3 | 4 | 5;

export type CounterPropsType = {
   incValue: Dispatch<SetStateAction<CounterType>>;
   counterValue: number;
   value: 0 | 1 | 2 | 3 | 4 | 5;
}

export function Example(props: CounterPropsType) {



   return (
      <div>
         <div>{props.counterValue}</div>
         <button onClick={() => { props.incValue(2), ++props.value }}>Inc</button>
         {/* <button onClick={props.resValue}>reset</button> */}
      </div>
   );
}