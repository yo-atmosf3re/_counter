import { ActionsTypes } from "./redux-store";

const COUNTER_VALUE = 'COUNTER_VALUE';
const MAX_VALUE = 'MAX_VALUE';
const START_VALUE = 'START_VALUE';

export type CounterType = typeof initialState;

const initialState = {
   counterValue: 0,
   maxValue: 8,
   startValue: 0,
}

export const counterReducer = (state: CounterType, action: ActionsTypes): CounterType => {
   switch (action.type) {
      case COUNTER_VALUE: { return { ...state, counterValue: action.counterValue } }
      case MAX_VALUE: { return { ...state, maxValue: action.maxValue } }
      case START_VALUE: { return { ...state, startValue: action.startValue } }
      default: return state
   }
}

export const setCounterValueAC = (counterValue: number) => ({ type: COUNTER_VALUE, counterValue } as const)
export const setMaxCounterValueAC = (maxValue: number) => ({ type: MAX_VALUE, maxValue } as const)
export const setStartCounterValueAC = (startValue: number) => ({ type: START_VALUE, startValue } as const)