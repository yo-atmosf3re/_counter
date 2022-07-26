import React, { Dispatch, SetStateAction } from 'react';

type IncrementPropsType = {
   setCounterValue: (value: number) => void
   counterValue: number;
   maxValue: number;
   setStartValueCounterHandler: () => void
}

export function Increment(props: IncrementPropsType) {

   const disButton = { pointerEvents: 'none', cursor: 'default', opacity: '0.3', };
   const normButton = {};
   let styleDisplayCondition = props.counterValue === props.maxValue ? disButton : normButton;

   return (
      <button style={styleDisplayCondition} className='button' onClick={props.setStartValueCounterHandler} />
   );
}