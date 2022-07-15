import React from 'react';
import { Display } from './Display';
import { Increment } from './Increment';
import { Reset } from './Reset';

export function Counter() {
   return (
      <div>
         <Display />
         <Increment />
         <Reset />
      </div>
   );
}

