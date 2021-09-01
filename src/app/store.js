import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import rootReducer from "./reducers"

const initialState = {}

const middleware = [thunk]

const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(...middleware)
)

export default store

