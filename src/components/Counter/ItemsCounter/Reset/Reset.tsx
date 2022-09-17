import React, { Dispatch, SetStateAction } from 'react';

type ResetPropsType = {
   counterValue: number;
   maxValue: number;
   resetStartValue: () => void
   startValue: number
}

const disButton = { pointerEvents: 'none', cursor: 'default', opacity: '0.3', };
const normButton = {};

export function Reset(props: ResetPropsType) {
   let styleDisplayCondition = props.counterValue === props.maxValue ? disButton : normButton;
   const resetStartValueHandler = () => {
      props.resetStartValue()
   }

   return (
      <button style={styleDisplayCondition} className='button' onClick={resetStartValueHandler}>
         Reset
      </button>
   );
}