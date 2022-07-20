import React from 'react';
import { CounterPropsType } from '../App';
import { Display } from './Display';
import { Increment } from './Increment';
import { Reset } from './Reset';

export function Counter(props: CounterPropsType) {
   return (
      <div className='example'>
         <Display maxValue={props.maxValue} counterValue={props.counterValue} />
         <Display maxValue={props.maxValue} counterValue={props.counterValue} />
         <Increment maxValue={props.maxValue} setCounterValue={props.setCounterValue} counterValue={props.counterValue} />
         <Reset maxValue={props.maxValue} setCounterValue={props.setCounterValue} counterValue={props.counterValue} />
      </div>
   );
}