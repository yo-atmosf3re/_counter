import React, { ChangeEvent } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Display } from './ItemsCounter/Display/Display';
import { DisplayContainer } from './ItemsCounter/Display/DisplayContainer';
import { EntryField } from './ItemsCounter/EntryField/EntryField';
import { EntryFieldContainer } from './ItemsCounter/EntryField/EntryFieldContainer';
import { Increment } from './ItemsCounter/Increment/Increment';
import { IncrementContainer } from './ItemsCounter/Increment/IncrementContainer';
import { Reset } from './ItemsCounter/Reset/Reset';
import { ResetContainer } from './ItemsCounter/Reset/ResetContainer';

// export type CounterPropsType = {
//    counterValue: number
//    setCounterValue: (value: number) => void
//    startValue: number
//    setStartValue: (value: number) => void
//    maxValue: number
//    setMaxValue: (value: number) => void
//    counterMaxValueHandler: (event: ChangeEvent<HTMLInputElement>) => void
//    counterStartValueHandler: (event: ChangeEvent<HTMLInputElement>) => void
//    setStartValueCounterHandler: () => void
//    resetStartValueHandler: () => void
//    setAllValueHandler: () => void
// }
// props: CounterPropsType

export const Counter = React.memo(() => {
   return (
      <div className='example'>
         <DisplayContainer />
         <IncrementContainer />
         <ResetContainer />
         <EntryFieldContainer />
      </div >

   );
})

{/* <div className='example'>
         <Display maxValue={props.maxValue} counterValue={props.counterValue} startValue={props.startValue} />
         <Increment maxValue={props.maxValue} counterValue={props.counterValue} setStartValueCounterHandler={props.setStartValueCounterHandler} />
         <Reset maxValue={props.maxValue} counterValue={props.counterValue} resetStartValueHandler={props.resetStartValueHandler} />
         <EntryField maxValue={props.maxValue} counterValue={props.counterValue} startValue={props.startValue} counterMaxValueHandler={props.counterMaxValueHandler} counterStartValueHandler={props.counterStartValueHandler} setAllValueHandler={props.setAllValueHandler} />
      </div > */}