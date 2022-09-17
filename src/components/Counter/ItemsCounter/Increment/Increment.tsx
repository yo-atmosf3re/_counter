import React, { ChangeEvent, Dispatch, MouseEventHandler, SetStateAction } from 'react';

type IncrementPropsType = {
   counterValue: number;
   maxValue: number;
   startValue: number
   setStartValueCounter: () => void
}

export function Increment(props: IncrementPropsType) {
   const disButton = { pointerEvents: 'none', cursor: 'default', opacity: '0.3', };
   const normButton = {};
   let styleDisplayCondition = props.counterValue === props.maxValue ? disButton : normButton;

   return (
      <button style={styleDisplayCondition} disabled={props.counterValue > props.maxValue} className='button' onClick={props.setStartValueCounter} > Increase</button >
   );
}