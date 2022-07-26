import React, { Dispatch, LegacyRef, MutableRefObject, RefObject, SetStateAction, useRef } from 'react';

type EntryFieldPropsType = {

}

export function EntryField(props: EntryFieldPropsType) {

   return (
      <div className='entryfield'>
         Max value: <input type='number' className='entryfield-input' onChange={ } />
         <br />
         Start value:<input type='number' className='entryfield-input' onChange={ } />
         <button className='entryfield-button' onClick={ }>Set</button>
      </div>
   );
}