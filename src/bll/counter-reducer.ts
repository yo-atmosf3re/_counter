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
export type setValueFromLocalStorageActionType = ReturnType<typeof setValueFromLocalStorageAC>

// THUNK


type ActionTypes = IncCounterValueActionType | setValueFromLocalStorageActionType;