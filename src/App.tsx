import React, { ChangeEvent, useCallback, useEffect, useState } from 'react';
import './App.css';
import { Counter } from './components/Counter';

function App() {
  let [maxValue, setMaxValue] = useState<number>(0);
  let [counterValue, setCounterValue] = useState<number>(0);
  let [startValue, setStartValue] = useState<number>(0);

  const counterMaxValueHandler = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.currentTarget.value)
    setMaxValue(value)
  }, [setMaxValue])
  const counterStartValueHandler = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.currentTarget.value)
    setStartValue(value)
  }, [setCounterValue])

  const setStartValueCounterHandler = useCallback(() => {
    setStartValue(startValue + 1)
  }, [setStartValue, startValue])
  const resetStartValueHandler = useCallback(() => {
    setStartValue(0)
  }, [setStartValue])

  const setAllValueHandler = useCallback(() => {
    setStartValue(counterValue)
    setCounterValue(0)
  }, [setStartValue, counterValue, setCounterValue])

  useEffect(
    () => {
      let valueAsString = localStorage.getItem('counterValue');
      if (valueAsString) {
        let newValue = JSON.parse(valueAsString)
        setCounterValue(newValue);
      }
    },
    [])
  useEffect(() => { localStorage.setItem('counterValue', JSON.stringify(counterValue)) }, [counterValue])
  const clearLocalStorageHandler = () => {
    localStorage.clear()
    setCounterValue(0);
  }
  const removeLocalStorageHandler = () => {
    localStorage.removeItem('counterValue')
  }

  return (
    <div className='counter'>
      <Counter
        counterValue={counterValue}
        setCounterValue={setCounterValue}
        startValue={startValue}
        setStartValue={setStartValue}
        maxValue={maxValue}
        setMaxValue={setMaxValue}
        counterMaxValueHandler={counterMaxValueHandler}
        counterStartValueHandler={counterStartValueHandler}
        setStartValueCounterHandler={setStartValueCounterHandler}
        resetStartValueHandler={resetStartValueHandler}
        setAllValueHandler={setAllValueHandler} />

      <div className='locastorageField'>
        <button className='LocalButton' onClick={clearLocalStorageHandler}>clearLocalStorage</button>
        <button className='LocalButton' onClick={removeLocalStorageHandler}>removeLocalStorage</button>
      </div>
    </div >
  )
}


// const value = useSelector<AppStateType, number>(state => state.counter.value)
//   const dispatch: any = useDispatch()

export default App;


