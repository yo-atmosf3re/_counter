import React from 'react';

type EntryFieldPropsType = {
   maxCounterValue: (event: any) => void;
   startCounterValue: (event: any) => void;
   entryFieldButton: () => void;
}

export function EntryField(props: EntryFieldPropsType) {

   let testFun = () => {
   }

   return (
      <div className='entryfield'>
         Max value: <input type='number' className='entryfield-input' onChange={props.maxCounterValue} />
         <br />
         Start value:<input type='number' className='entryfield-input' onChange={props.startCounterValue} />
         <button className='entryfield-button' onClick={testFun}>Set</button>
      </div>
   );
}