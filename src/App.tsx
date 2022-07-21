import React, { useEffect, useState } from 'react';
import './App.css';
import { Counter } from './components/Counter';

function App() {
  let startCounterValue = (event: any) => {
    setCounterValue(event.target.value)
  }
  let maxCounterValue = () => {
    setCounterValue(maxValue)
  }
  let [counterValue, setCounterValue] = useState<number>(0)

  let maxValue = 100;

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
        startCounterValue={(event) => startCounterValue(event)}
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
