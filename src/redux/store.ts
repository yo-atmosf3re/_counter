
import { combineReducers, createStore } from 'redux';
import * as React from 'react';
import { counterReducer } from './counter-reducer';

const rootReducer = combineReducers({
   counter: counterReducer,
})

export const store = createStore(rootReducer);

export type AppStateType = ReturnType<typeof rootReducer>
export type AppStoreType = typeof store;