import React, { ChangeEvent } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppStateType } from '../redux/store';
import { Display } from './itemsCounter/Display';
import { EntryField } from './itemsCounter/EntryField';
import { Increment } from './itemsCounter/Increment';


import { Reset } from './itemsCounter/Reset';

export type CounterPropsType = {
   counterValue: number
   setCounterValue: (value: number) => void
   startValue: number
   setStartValue: (value: number) => void
   maxValue: number
   setMaxValue: (value: number) => void
   counterMaxValueHandler: (event: ChangeEvent<HTMLInputElement>) => void
   counterStartValueHandler: (event: ChangeEvent<HTMLInputElement>) => void
   setStartValueCounterHandler: (startValue: number) => void
   resetStartValueHandler: () => void
   setAllValueHandler: () => void
}

export function Counter(props: CounterPropsType) {
   return (
      <div className='example'>
         <Display maxValue={props.maxValue} counterValue={props.counterValue} startValue={props.startValue} />
         <Increment maxValue={props.maxValue} counterValue={props.counterValue} setStartValueCounterHandler={props.setStartValueCounterHandler} />
         <Reset maxValue={props.maxValue} counterValue={props.counterValue} resetStartValueHandler={props.resetStartValueHandler} />
         <EntryField maxValue={props.maxValue} counterValue={props.counterValue} startValue={props.startValue} counterMaxValueHandler={props.counterMaxValueHandler} counterStartValueHandler={props.counterStartValueHandler} setAllValueHandler={props.setAllValueHandler} />
      </div >

   );
}


// export const Counter = React.memo(() => {
//    const { counterValue, maxValue, startValue } = useSelector((state: AppStateType) => state.counter)

//    return (
//       <div>
//          <Counter />
//       </div>
//    )
// })