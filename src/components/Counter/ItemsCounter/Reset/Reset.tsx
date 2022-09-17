import React, { Dispatch, SetStateAction } from 'react';

type ResetPropsType = {
   counterValue: number;
   maxValue: number;
   resetStartValueHandler: () => void
}

export function Reset(props: ResetPropsType) {
   const disButton = { pointerEvents: 'none', cursor: 'default', opacity: '0.3', };
   const normButton = {};
   let styleDisplayCondition = props.counterValue === props.maxValue ? disButton : normButton;

   return (
      <button style={styleDisplayCondition} className='button' onClick={props.resetStartValueHandler}>
         Reset
      </button>
   );
}