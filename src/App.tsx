import React, { useState } from 'react';
import './App.css';
import { Counter } from './components/Counter';
import { CounterType, Example } from './Example';


function App() {

  let value: CounterType = 0;

  let [counterValue, setCounterValue] = useState<CounterType>(value)

  return (
    <div className='counter'>
      {/* <Counter /> */}
      <Example incValue={setCounterValue} counterValue={counterValue} value={counterValue} />
    </div>
  )
}

export default App;
