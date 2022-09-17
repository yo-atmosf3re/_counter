import React, { ChangeEvent } from 'react';

type EntryFieldPropsType = {
   counterMaxValueHandler: (event: ChangeEvent<HTMLInputElement>) => void
   counterStartValueHandler: (event: ChangeEvent<HTMLInputElement>) => void
   setAllValueHandler: () => void
   counterValue: number;
   maxValue: number;
   startValue: number;
}

export function EntryField(props: EntryFieldPropsType) {

   const errorButton = props.maxValue === props.startValue ? 'Error ' : 'Set'

   return (
      <div className='entryfield'>
         Max value: <input type='number' className='entryfield-input' onChange={props.counterMaxValueHandler} />
         <br />
         Start value:<input type='number' className='entryfield-input' onChange={props.counterStartValueHandler} />
         <button disabled={props.startValue === props.maxValue} className='entryfield-button' onClick={props.setAllValueHandler}>{errorButton}</button>
      </div>
   );
}