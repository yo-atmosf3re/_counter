import React, { useEffect, useState } from 'react';
import './App.css';
import { Counter } from './components/Counter';

function App() {
  let startCounterValue = () => {
    setCounterValue(1)
  }
  let maxCounterValue = (event: { target: { value: React.SetStateAction<number>; }; }) => {
    setMaxValue(event.target.value)
  }
  let [counterValue, setCounterValue] = useState<number>(0)
  let [maxValue, setMaxValue] = useState<number>(0)

  let entryFieldButton = () => {
    setCounterValue(counterValue)
    setMaxValue(maxValue)
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
        maxCounterValue={(event) => maxCounterValue(event)}
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
