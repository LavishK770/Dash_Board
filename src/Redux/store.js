import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './Rreducer';
import thunk from 'redux-thunk';

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});

export default store;
