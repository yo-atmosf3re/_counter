import React, { useEffect, useState } from 'react';
import './App.css';
import { Counter } from './components/Counter';

function App() {
  let startCounterValue = () => {

  }
  let maxCounterValue = () => {

  }
  let [counterValue, setCounterValue] = useState<number>(0)

  let maxValue = 5;

  let entryFieldButton = () => {

  }

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
        setCounterValue={setCounterValue}
        counterValue={counterValue}
        maxValue={maxValue}
        maxCounterValue={maxCounterValue}
        startCounterValue={startCounterValue}
        entryFieldButton={entryFieldButton}
      />

      <div className='locastorageField'>
        <button className='LocalButton' onClick={clearLocalStorageHandler}>clearLocalStorage</button>
        <button className='LocalButton' onClick={removeLocalStorageHandler}>removeLocalStorage</button>
      </div>
    </div>
  )
}

export default App;
