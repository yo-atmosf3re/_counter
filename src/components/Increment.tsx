import React, { Dispatch, SetStateAction } from 'react';

type IncrementPropsType = {
   setCounterValue: Dispatch<SetStateAction<number>>
   counterValue: number;
   maxValue: number;
}

export function Increment(props: IncrementPropsType) {
   let changeCounterValue = () => {
      props.setCounterValue(props.counterValue < props.maxValue ? props.counterValue + 1 : props.maxValue)
   }
   let styleDisplayCondition = () => {
      props.counterValue === props.maxValue ? disButton : normButton
   }
   const disButton = {
      pointerEvents: 'none',
      cursor: 'default',
      opacity: '0.3',
   }
   const normButton = {}

   return (
      <button style={styleDisplayCondition} className='button' onClick={changeCounterValue}></button>
   );
}