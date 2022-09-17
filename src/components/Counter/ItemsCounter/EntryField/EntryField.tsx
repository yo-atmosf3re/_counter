import React, { ChangeEvent } from 'react';

type EntryFieldPropsType = {
   counterMaxValue: (event: ChangeEvent<HTMLInputElement>) => void
   counterStartValue: (event: ChangeEvent<HTMLInputElement>) => void
   setAllValue: () => void
   counterValue: number;
   maxValue: number;
   startValue: number;
}

export function EntryField(props: EntryFieldPropsType) {

   const errorButton = props.maxValue === props.startValue ? 'Error ' : 'Set'
   const setAllValueHandler = () => {
      props.setAllValue()
   }

   return (
      <div className='entryfield'>
         Max value:<input type='number' className='entryfield-input' onChange={props.counterMaxValue} />
         <br />
         Start value:<input type='number' className='entryfield-input' onChange={props.counterStartValue} />
         <button disabled={props.startValue === props.maxValue} className='entryfield-button' onClick={setAllValueHandler}>{errorButton}</button>
      </div>
   );
}