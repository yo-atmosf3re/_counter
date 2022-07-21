import React from 'react';

type EntryFieldPropsType = {
   maxCounterValue: () => void;
   startCounterValue: (event: any) => void;
   entryFieldButton: () => void;
}

export function EntryField(props: EntryFieldPropsType) {
   return (
      <div className='entryfield'>
         Max value: <input type='number' className='entryfield-input' />
         <br />
         Start value:<input type='number' className='entryfield-input' onChange={props.startCounterValue} />
         <button className='entryfield-button' onClick={props.entryFieldButton}>Set</button>
      </div>
   );
}