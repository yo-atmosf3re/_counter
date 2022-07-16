import React, { useState } from 'react';
import './App.css';
import { Counter } from './components/Counter';
import { CounterType, Example } from './Example';


function App() {
  let [counterValue, setCounterValue] = useState<number>(0)

  return (
    <div className='counter'>
      {/* <Counter /> */}
      <Example setCounterValue={setCounterValue} counterValue={counterValue} value={counterValue} />
    </div>
  )
}

export default App;
