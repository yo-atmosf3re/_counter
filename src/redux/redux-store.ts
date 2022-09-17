import * as React from 'react';
import { combineReducers, createStore } from "redux";
import { counterReducer, setCounterValueAC, setMaxCounterValueAC, setStartCounterValueAC } from './counter-reducer';

export type ActionsTypes = ReturnType<typeof setCounterValueAC> | ReturnType<typeof setMaxCounterValueAC> | ReturnType<typeof setStartCounterValueAC>;

let rootReducers = combineReducers({
   counter: counterReducer,
})

export type AppRootStateType = ReturnType<typeof rootReducers>

export let store = createStore(rootReducers)