import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import {
   counterMaxValueAC, counterStartValueAC, CounterType, increaseStartValueAC, InitialStateType, resetStartValueAC, setAllValueAC
} from '../redux/counter-reducer';
import { AppStateType } from '../redux/store';
import { Counter } from './Counter';

type MapStateToPropsType = {
   counter: CounterType
}

type MapDispathToPropsType = {
   setCounterMaxValue: (maxValue: number) => void
   setCounterStartValue: (startValue: number) => void
   increaseCounterStartValue: (startValue: number) => void
   resetCounterStartValue: (startValue: number) => void
   setAllCounterValue: (counterValue: number) => void
}

export type CounterPropsType = MapDispathToPropsType & InitialStateType;

const mapStateToProps = (state: AppStateType): InitialStateType => state.counter


const mapDispathToProps = (dispatch: Dispatch): MapDispathToPropsType => {
   return {
      setCounterMaxValue: (maxValue: number) => {
         dispatch(counterMaxValueAC(maxValue))
      },
      setCounterStartValue: (startValue: number) => {
         dispatch(counterStartValueAC(startValue))
      },
      increaseCounterStartValue: (startValue: number) => {
         dispatch(increaseStartValueAC(startValue))
      },
      resetCounterStartValue: (startValue: number) => {
         dispatch(resetStartValueAC(startValue))
      },
      setAllCounterValue: (counterValue: number) => {
         dispatch(setAllValueAC(counterValue))
      }
   }
}

const CounterContainer = connect(mapStateToProps, mapDispathToProps)(Counter)

export default CounterContainer;