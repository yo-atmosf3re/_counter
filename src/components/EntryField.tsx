import React from 'react';

type EntryFieldPropsType = {
   maxCounterValue: () => void;
   startCounterValue: () => void;
   entryFieldButton: () => void;
}

export function EntryField(props: EntryFieldPropsType) {
   return (
      <div className='entryfield'>
         Max value: <input value={ } type='number' className='entryfield-input' />
         <br />
         Start value:<input type='number' className='entryfield-input' />
         <button className='entryfield-button' onClick={props.entryFieldButton}>Set</button>
      </div>
   );
}