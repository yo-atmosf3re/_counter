import React from 'react';

type EntryFieldPropsType = {
   maxCounterValue: (event: any) => void;
   startCounterValue: () => void;
   entryFieldButton: () => void;
}

export function EntryField(props: EntryFieldPropsType) {

   return (
      <div className='entryfield'>
         Max value: <input type='number' className='entryfield-input' onChange={props.maxCounterValue} />
         <br />
         Start value:<input type='number' className='entryfield-input' onChange={props.startCounterValue} />
         <button className='entryfield-button' onClick={props.entryFieldButton}>Set</button>
      </div>
   );
}