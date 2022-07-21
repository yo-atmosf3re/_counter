import React, { Dispatch, SetStateAction } from 'react';

type ResetPropsType = {
   setCounterValue: Dispatch<SetStateAction<number>>
   counterValue: number;
   maxValue: number;
}

export function Reset(props: ResetPropsType) {
   const initialValue = {
      pointerEvents: 'none',
      cursor: 'default',
      opacity: '0.5',
   }
   const normButton = {}
   return (
      <button style={props.counterValue === 0 ? initialValue : normButton} className='button' onClick={() => { props.setCounterValue(0) }}>
         Res
      </button>
   );
}