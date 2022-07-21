import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import './App.css';
import { Counter } from './components/Counter';

export type CounterType = 0 | 1 | 2 | 3 | 4 | 5;



export type DisplayType = {
  counterValue: number;
  maxValue: number;
}

function App() {
  let [counterValue, setCounterValue] = useState<number>(0)
  let maxValue: CounterType = 5;

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

  let maxCounterValue = () => {

  }
  let startCounterValue = () => {

  }

  return (
    <div className='counter'>
      <Counter
        setCounterValue={setCounterValue}
        counterValue={counterValue}
        maxValue={maxValue}
        maxCounterValue={maxCounterValue}
        startCounterValue={startCounterValue}
      />

      <div className='locastorageField'>
        <button className='LocalButton' onClick={clearLocalStorageHandler}>clearLocalStorage</button>
        <button className='LocalButton' onClick={removeLocalStorageHandler}>removeLocalStorage</button>
      </div>
    </div>
  )
}

export default App;
