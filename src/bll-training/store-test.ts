import * as React from 'react';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
// import { counterReducer } from './counter-reducer-test';

const rootReducer = combineReducers({
   // counter: counterReducer,
})

let preloadedState;
const persisredTodosString = localStorage.getItem('app-state')
if (persisredTodosString) {
   preloadedState = JSON.parse(persisredTodosString)
}

const store = createStore(rootReducer, preloadedState, applyMiddleware(thunk));

store.subscribe(() => {
   // localStorage.setItem('app-state', JSON.stringify(store.getState().counter.value))
})

type AppStateType = ReturnType<typeof rootReducer>
type AppStoreType = typeof store;