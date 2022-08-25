import * as React from 'react';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { counterReducer } from './counter-reducer';

const rootReducer = combineReducers({
   counter: counterReducer,
})

export type AppStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer, applyMiddleware(thunk));

type AppStoreType = typeof store;