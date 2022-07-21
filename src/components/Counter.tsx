import React, { Dispatch, SetStateAction } from 'react';

import { Display } from './Display';
import { EntryField } from './EntryField';
import { Increment } from './Increment';
import { Reset } from './Reset';

export type CounterPropsType = {
   setCounterValue: Dispatch<SetStateAction<number>>
   counterValue: number;
   maxValue: number;
   maxCounterValue: () => void;
   startCounterValue: (event: any) => void;
   entryFieldButton: () => void;
}

export function Counter(props: CounterPropsType) {
   return (
      <div className='example'>
         <Display maxValue={props.maxValue} counterValue={props.counterValue} />
         <Increment maxValue={props.maxValue} setCounterValue={props.setCounterValue} counterValue={props.counterValue} />
         <Reset maxValue={props.maxValue} setCounterValue={props.setCounterValue} counterValue={props.counterValue} />
         <EntryField maxCounterValue={props.maxCounterValue} startCounterValue={props.startCounterValue} entryFieldButton={props.entryFieldButton} />
      </div>
   );
}