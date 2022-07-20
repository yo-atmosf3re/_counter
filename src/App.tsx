import React, { Dispatch, SetStateAction, useState } from 'react';
import './App.css';
import { Counter } from './components/Counter';

export type CounterType = 0 | 1 | 2 | 3 | 4 | 5;

export type CounterPropsType = {
  setCounterValue: Dispatch<SetStateAction<number>>
  counterValue: number;
  maxValue: number;
}

export type DisplayType = {
  counterValue: number;
  maxValue: number;
}

function App() {
  let [counterValue, setCounterValue] = useState<number>(0)
  let maxValue: CounterType = 5;

  const setToLocalStorageHandler = () => {
    localStorage.setItem('counterValue', JSON.stringify(counterValue))
    localStorage.setItem('counterValue + 1', JSON.stringify(counterValue + 1))
  }

  const getFromLocalStorageHandler = () => {
    let valueAsString = localStorage.getItem('counterValue');
    if (valueAsString) {
      let newValue = JSON.parse(valueAsString)
      setCounterValue(newValue);
    }
  }

  const clearLocalStorageHandler = () => {
    localStorage.clear()
    setCounterValue(0);
  }

  const removeLocalStorageHandler = () => {
    localStorage.removeItem('counterValue + 1')
  }

  return (
    <div className='counter'>
      <Counter setCounterValue={setCounterValue} counterValue={counterValue} maxValue={maxValue} />

      <div className='locastorageField'>
        <button className='LocalButton' onClick={setToLocalStorageHandler}>setToLocalStorage</button>
        <button className='LocalButton' onClick={getFromLocalStorageHandler}>getFromLocalStorage</button>
        <button className='LocalButton' onClick={clearLocalStorageHandler}>clearLocalStorage</button>
        <button className='LocalButton' onClick={removeLocalStorageHandler}>removeLocalStorage</button>
      </div>
    </div>
  )
}

export default App;
