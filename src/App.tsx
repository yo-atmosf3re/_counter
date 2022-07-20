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
  }

  const getFromLocalStorageHandler = () => {
    localStorage.getItem('counterValue')
  }

  return (
    <div className='counter'>
      <Counter setCounterValue={setCounterValue} counterValue={counterValue} maxValue={maxValue} />

      <div className='locastorageField'>
        <button className='LocalButton' onClick={setToLocalStorageHandler}>setToLocalStorage</button>
        <button className='LocalButton' onClick={getFromLocalStorageHandler}>getFromLocalStorage</button>
      </div>
    </div>
  )
}

export default App;
