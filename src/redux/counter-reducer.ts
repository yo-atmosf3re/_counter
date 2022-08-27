import * as React from 'react';
import { ChangeEvent } from 'react';
import { AppStoreType } from './store';

const initialState = {
   counterValue: 0,
   maxValue: 0,
   startValue: 0,
}

export type InitialStateType = {
   counterValue: number
   maxValue: number
   startValue: number
}

export type CounterType = typeof initialState;

export const counterReducer = (state: InitialStateType = initialState, action: ActionTypes): InitialStateType => {
   switch (action.type) {
      case 'SET-COUNTER-MAX-VALUE': {
         let stateCopy = { ...state };
         const value = action.maxValue
         stateCopy.maxValue = value;
         return stateCopy;
      }
      case 'SET-COUNTER-START-VALUE': {
         let stateCopy = { ...state };
         const value = action.startValue
         stateCopy.startValue = value
         return stateCopy;
      }
      case 'INCREASE-COUNTER-START-VALUE': {
         let stateCopy = { ...state }
         let incValue = stateCopy.startValue + 1;
         stateCopy.startValue = incValue
         return stateCopy;
      }
      case 'RESET-COUNTER-START-VALUE': {
         let stateCopy = { ...state };
         stateCopy.startValue = 0;
         return stateCopy;
      }
      case 'SET-ALL-COUNTER-VALUE': {
         let stateCopy = { ...state };
         stateCopy.startValue = stateCopy.counterValue;
         stateCopy.counterValue = 0;
         return stateCopy;
      }
      default:
         return state;
   }
}

export const counterMaxValueAC = (maxValue: number) => ({ type: 'SET-COUNTER-MAX-VALUE', maxValue } as const)
export const counterStartValueAC = (startValue: number) => ({ type: 'SET-COUNTER-START-VALUE', startValue } as const)
export const increaseStartValueAC = (startValue: number) => ({ type: 'INCREASE-COUNTER-START-VALUE', startValue } as const)
export const resetStartValueAC = (startValue: number) => ({ type: 'RESET-COUNTER-START-VALUE', startValue } as const)
export const setAllValueAC = (counterValue: number) => ({ type: 'SET-ALL-COUNTER-VALUE', counterValue } as const)

type CounterMaxValueActionType = ReturnType<typeof counterMaxValueAC>
type CounterStartValueActionType = ReturnType<typeof counterStartValueAC>
type IncreaseStartValueCounterActionType = ReturnType<typeof increaseStartValueAC>
type ResetStartValueActionType = ReturnType<typeof resetStartValueAC>
type SetAllValueActionType = ReturnType<typeof setAllValueAC>
export type ActionTypes = CounterMaxValueActionType | CounterStartValueActionType | IncreaseStartValueCounterActionType | ResetStartValueActionType | SetAllValueActionType;

