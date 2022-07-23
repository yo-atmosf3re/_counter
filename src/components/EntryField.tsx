import React, { Dispatch, LegacyRef, MutableRefObject, RefObject, SetStateAction, useRef } from 'react';

type EntryFieldPropsType = {
   setCounterValue: Dispatch<SetStateAction<number>>
   maxCounterValue: (event: any) => void;
   startCounterValue: () => void;
   entryFieldButton: () => void;
   setMaxValue: Dispatch<SetStateAction<number>>;
}

export function EntryField(props: EntryFieldPropsType) {

   let startValueRef: any = useRef(null);
   let maxCounterValueRef: any = useRef(null);

   let setStartValueHandler = () => {
      props.setCounterValue(startValueRef.current?.value)
      props.setMaxValue(maxCounterValueRef.current?.value)

   }

   return (
      <div className='entryfield'>
         Max value: <input ref={maxCounterValueRef} type='number' className='entryfield-input' />
         <br />
         Start value:<input ref={startValueRef} type='number' className='entryfield-input' />
         <button className='entryfield-button' onClick={setStartValueHandler}>Set</button>
      </div>
   );
}