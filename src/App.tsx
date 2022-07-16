import React from 'react';
import './App.css';
import { Counter } from './components/Counter';


function App() {

  let state

  return (
    <div className='counter'>
      <Counter />
      <Counter />
    </div>
  )
}

export default App;
