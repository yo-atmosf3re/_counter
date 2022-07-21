import React from 'react';

type EntryFieldPropsType = {
   maxCounterValue: () => void;
   startCounterValue: () => void;
}

export function EntryField(props: EntryFieldPropsType) {
   return (
      <div className='entryfield'>
         Max value: <input type='number' className='entryfield-input' onChange={props.maxCounterValue} />
         <br />
         Start value:<input type='number' className='entryfield-input' onChange={props.startCounterValue} />
         <button className='entryfield-button' onClick={() => { }}>Set</button>
      </div>
   );
}