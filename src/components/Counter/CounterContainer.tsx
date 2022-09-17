import { connect } from "react-redux";
import { Dispatch } from "redux";
import { CounterType, setCounterValueAC, setMaxCounterValueAC, setStartCounterValueAC } from "../../redux/counter-reducer";
import { AppStateType } from "../../redux/redux-store";
import { Counter } from "./Counter";

type MapStateToPropsType = { counter: CounterType }

type MapDispatchToPropsType = {
   counterValue: (counterValue: number) => void
   maxValue: (maxValue: number) => void
   startValue: (startValue: number) => void
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => { return { counter: state.counter } }
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
   return {
      counterValue: (counterValue: number) => {
         dispatch(setCounterValueAC(counterValue))
      },
      maxValue: (maxValue: number) => {
         dispatch(setMaxCounterValueAC(maxValue))
      },
      startValue: (startValue: number) => {
         dispatch(setStartCounterValueAC(startValue))
      },
   }
}

export const CounterContainer = connect(mapStateToProps, mapDispatchToProps)(Counter)