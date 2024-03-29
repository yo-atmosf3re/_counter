import React, { ChangeEvent, useCallback, useState } from 'react';
import './App.css';
import { Counter } from './components/Counter/Counter';
import { CounterContainer } from './components/Counter/CounterContainer';

function App() {
  // let [maxValue, setMaxValue] = useState<number>(0);
  // let [counterValue, setCounterValue] = useState<number>(0);
  // let [startValue, setStartValue] = useState<number>(0);

  // const counterMaxValueHandler = useCallback((event: ChangeEvent<HTMLInputElement>) => {
  //   const value = Number(event.currentTarget.value)
  //   setMaxValue(value)
  // }, [setMaxValue])
  // const counterStartValueHandler = useCallback((event: ChangeEvent<HTMLInputElement>) => {
  //   const value = Number(event.currentTarget.value)
  //   setStartValue(value)
  // }, [setCounterValue])

  // const setStartValueCounterHandler = useCallback(() => {
  //   setStartValue(startValue + 1)
  // }, [setStartValue, startValue])
  // const resetStartValueHandler = useCallback(() => {
  //   setStartValue(0)
  // }, [setStartValue])

  // const setAllValueHandler = useCallback(() => {
  //   setStartValue(counterValue)
  //   setCounterValue(0)
  // }, [setStartValue, counterValue, setCounterValue])

  return (
    <div className='counter'>
      <CounterContainer />
    </div >
  )
}
// counterValue={counterValue}
//         setCounterValue={setCounterValue}
//         startValue={startValue}
//         setStartValue={setStartValue}
//         maxValue={maxValue}
//         setMaxValue={setMaxValue}
//         counterMaxValueHandler={counterMaxValueHandler}
//         counterStartValueHandler={counterStartValueHandler}
//         setStartValueCounterHandler={setStartValueCounterHandler}
//         resetStartValueHandler={resetStartValueHandler}
//         setAllValueHandler={setAllValueHandler} 


// useEffect(
//   () => {
//     let valueAsString = localStorage.getItem('counterValue');
//     if (valueAsString) {
//       let newValue = JSON.parse(valueAsString)
//       setCounterValue(newValue);
//     }
//   },
//   [])
// useEffect(() => { localStorage.setItem('counterValue', JSON.stringify(counterValue)) }, [counterValue])
// const clearLocalStorageHandler = () => {
//   localStorage.clear()
//   setCounterValue(0);
// }
// const removeLocalStorageHandler = () => {
//   localStorage.removeItem('counterValue')
// }

export default App;


