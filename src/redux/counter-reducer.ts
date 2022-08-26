import * as React from 'react';
import { ChangeEvent } from 'react';
import { AppStoreType } from './store';

const initialState = {
   counterValue: 0,
   maxValue: 0,
   startValue: 0,
}

type InitialStateType = {
   counterValue: number
   maxValue: number
   startValue: number
}

export const counterReducer = (state: InitialStateType = initialState, action: ActionTypes) => {
   switch (action.type) {
      case 'SET-COUNTER-MAX-VALUE': {
         let stateCopy = { ...state };
         const value = Number(action.event.currentTarget.value)
         stateCopy.maxValue = value;
         return stateCopy;
      }
      case 'SET-COUNTER-START-VALUE': {
         let stateCopy = { ...state };
         const value = Number(action.event.currentTarget.value)
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

const counterMaxValueAC = (event: ChangeEvent<HTMLInputElement>) => ({ type: 'SET-COUNTER-MAX-VALUE', event } as const)
const counterStartValueAC = (event: ChangeEvent<HTMLInputElement>) => ({ type: 'SET-COUNTER-START-VALUE', event } as const)
const increaseStartValueAC = () => ({ type: 'INCREASE-COUNTER-START-VALUE' } as const)
const resetStartValueAC = () => ({ type: 'RESET-COUNTER-START-VALUE' } as const)
const setAllValueAC = () => ({ type: 'SET-ALL-COUNTER-VALUE' } as const)

type CounterMaxValueActionType = ReturnType<typeof counterMaxValueAC>
type CounterStartValueActionType = ReturnType<typeof counterStartValueAC>
type IncreaseStartValueCounterActionType = ReturnType<typeof increaseStartValueAC>
type ResetStartValueActionType = ReturnType<typeof resetStartValueAC>
type SetAllValueActionType = ReturnType<typeof setAllValueAC>
export type ActionTypes = CounterMaxValueActionType | CounterStartValueActionType | IncreaseStartValueCounterActionType | ResetStartValueActionType | SetAllValueActionType;