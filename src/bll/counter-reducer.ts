import { Dispatch } from "redux";
import { AppStoreType } from "./store";

const initialState = {
   value: 1000
}

type InitialStateType = typeof initialState;

export const counterReducer = (state: InitialStateType = initialState, action: ActionTypes): InitialStateType => {
   switch (action.type) {
      case 'INC-COUNTER-VALUE': {
         return { ...state, value: state.value + 1 }
      }
      case 'SET-VALUE-FROM-LOCAL-STORAGE': {
         return {
            ...state, value: action.value
         }
      }
      default:
         return state
   }
}

export const incCounterValueAC = () => ({ type: 'INC-COUNTER-VALUE' } as const)
export const setValueFromLocalStorageAC = (value: number) => ({ type: 'SET-VALUE-FROM-LOCAL-STORAGE', value } as const)
export type IncCounterValueActionType = ReturnType<typeof incCounterValueAC>
export type SetValueFromLocalStorageActionType = ReturnType<typeof setValueFromLocalStorageAC>

// THUNK

export const incCounterValueTC = () => (dispatch: Dispatch, getState: () => AppStoreType) => {
   // let currentValue = getState().counter.value;
   // localStorage.setItem('counterValue', JSON.stringify(currentValue + 1))
   dispatch(incCounterValueAC())
}

export const setValueFromLocalStorageTC = () => (dispatch: Dispatch) => {
   let valueAsString = localStorage.getItem('counterValue');
   if (valueAsString) {
      let newValue = JSON.parse(valueAsString)
      dispatch(setValueFromLocalStorageAC(newValue))
   }
}

export type ActionTypes = IncCounterValueActionType | SetValueFromLocalStorageActionType;