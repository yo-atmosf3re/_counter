import * as React from 'react';
import { useSelector } from 'react-redux';
import { AppStateType } from '../../../../redux/redux-store';
import { Display } from './Display';

export const DisplayContainer = React.memo(() => {
   const { counterValue, maxValue, startValue } = useSelector((state: AppStateType) => state.counter)

   return (
      <Display counterValue={counterValue} maxValue={maxValue} startValue={startValue} />
   )
})