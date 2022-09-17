import * as React from 'react';
import { ChangeEvent, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import { setCounterValueAC, setMaxCounterValueAC, setStartCounterValueAC } from '../../../../redux/counter-reducer';
import { ActionsTypes, AppStateType } from '../../../../redux/redux-store';
import { EntryField } from './EntryField';

export const EntryFieldContainer = () => {
   const { counterValue, maxValue, startValue } = useSelector((state: AppStateType) => state.counter);
   const dispatch = useDispatch<Dispatch<ActionsTypes>>();

   const counterMaxValue = useCallback((event: ChangeEvent<HTMLInputElement>) => {
      const value = Number(event.currentTarget.value)
      dispatch(setMaxCounterValueAC(value))
   }, [setMaxCounterValueAC])
   const counterStartValue = useCallback((event: ChangeEvent<HTMLInputElement>) => {
      const value = Number(event.currentTarget.value)
      dispatch(setStartCounterValueAC(value))
   }, [setMaxCounterValueAC])
   const setAllValue = useCallback(() => {
      dispatch(setStartCounterValueAC(counterValue))
      dispatch(setCounterValueAC(0))
   }, [setStartCounterValueAC, counterValue, setMaxCounterValueAC])


   return (
      <EntryField counterValue={counterValue} maxValue={maxValue} startValue={startValue} counterMaxValue={counterMaxValue} counterStartValue={counterStartValue} setAllValue={setAllValue} />
   )
}