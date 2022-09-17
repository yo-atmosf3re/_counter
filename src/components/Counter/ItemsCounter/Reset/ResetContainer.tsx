import * as React from 'react';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import { setStartCounterValueAC } from '../../../../redux/counter-reducer';
import { ActionsTypes, AppStateType } from '../../../../redux/redux-store';
import { Reset } from './Reset';

export const ResetContainer = () => {
   const { counterValue, startValue, maxValue } = useSelector((state: AppStateType) => state.counter);
   const dispatch = useDispatch<Dispatch<ActionsTypes>>();

   const resetStartValue = useCallback(() => {
      dispatch(setStartCounterValueAC(0))
   }, [setStartCounterValueAC])

   return (
      <Reset counterValue={counterValue} maxValue={maxValue} resetStartValue={resetStartValue} startValue={startValue} />
   )
}