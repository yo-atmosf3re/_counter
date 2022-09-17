import * as React from 'react';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import { setStartCounterValueAC } from '../../../../redux/counter-reducer';
import { ActionsTypes, AppStateType } from '../../../../redux/redux-store';
import { Increment } from './Increment';

export const IncrementContainer = React.memo(() => {
   const { counterValue, maxValue, startValue } = useSelector((state: AppStateType) => state.counter);
   const dispatch = useDispatch<Dispatch<ActionsTypes>>();

   const setStartValueCounter = useCallback(() => {
      dispatch(setStartCounterValueAC(startValue + 1))
   }, [setStartCounterValueAC, startValue])

   return (
      <div>
         <Increment startValue={startValue} counterValue={counterValue} maxValue={maxValue} setStartValueCounter={setStartValueCounter} />
      </div>
   )
})